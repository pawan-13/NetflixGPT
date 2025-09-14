import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { successMessage } from "../utils/messageNotification";
import { useEffect } from "react";
import { addUser, removeUser } from "../redux/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { langpreference } from "../redux/configSlice";
const Header = ({ setIsShowGptSearch, isShowGptSearch }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user);
    const handleSignOut = () => {
        signOut(auth).then(() => {
            successMessage('Sign Out Successfully');
        }).catch((error) => {
            console.error("Sign out error:", error);
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }));
                navigate('/home', { replace: true });
            } else {
                dispatch(removeUser());
                navigate('/', { replace: true });
            }
        });

        return () => unsubscribe();
    }, []);

    const handleGptSearchClick = () => {
        setIsShowGptSearch(prev => !prev);
    }

    const handleLanguageChange = (e) => {
        dispatch(langpreference(e.target.value));
    }
    return (
        <div className="w-full flex items-center justify-between px-8">
            <div className="bg-gradient-to-b from-black">
                <img src={LOGO}
                    className="absolute top-0 w-52 bg-center z-50 opacity-100 font-extrabold h-auto p-3 mx-0" alt="logo" />
            </div>
            {
                users.user && (
                    <div className="mx-8 mt-4 flex items-center justify-center gap-2">
                        {
                            isShowGptSearch && (
                                <select onClick={handleLanguageChange} name="language" id="lang" className="bg-white text-blue py-2 px-4 m-1 rounded-md font-semibold text-sm focus:outline-none">
                                    {
                                        SUPPORTED_LANGUAGES.map((lang) => (
                                            <option key={lang.code} value={lang.code}>{lang.label}</option>
                                        ))
                                    }
                                </select>
                            )
                        }

                        <button className="bg-blue-600 py-2 px-4 m-1 text-white rounded-md font-semibold text-sm" onClick={handleGptSearchClick}>{isShowGptSearch ? "HomePage" : "GPT Search"}</button>
                        <img src={users?.user?.photoURL} alt="profilelogo" className="w-12 h-12 rounded-full my-2" />
                        <button onClick={handleSignOut} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-semibold text-sm">Sign Out</button>
                    </div>
                )
            }

        </div>
    )
}

export default Header