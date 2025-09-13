import { useRef, useState } from "react"
import Header from "./Header"
import { validationForm } from "../utils/validation";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { successMessage, errorMessage } from "../utils/messageNotification";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { USER_AVATAR } from "../utils/constants";
import { NETFLIX_LOGO } from "../utils/constants";
import Loader from "./Loader";
const Login = () => {
    const dispatch = useDispatch();
    const [isSignedIn, setIsSignedIn] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);


    const handleSignUp = () => {
        setIsSignedIn(!isSignedIn);
    }

    const handleSubmitForm = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const trimmedName = name?.current?.value ? name.current.value.trim() : '';
        const trimmedEmail = email?.current?.value ? email.current.value.trim() : '';
        const trimmedPassword = password?.current?.value ? password.current.value.trim() : '';
        const message = validationForm(trimmedName, trimmedEmail, trimmedPassword, isSignedIn);
        setError(message);

        if (message) {
            setIsLoading(false);
            return;
        }

        // Sign up logic

        if (!isSignedIn) {
            createUserWithEmailAndPassword(auth, trimmedEmail, trimmedPassword)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, { displayName: trimmedName, photoURL: USER_AVATAR })
                        .then(async () => {
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(addUser({ uid, email, displayName, photoURL }));
                            setIsLoading(false);
                        })
                        .catch((error) => {
                            console.log('Profile update error:', error);
                            setError(error.message);
                            errorMessage('Profile update failed');
                            setIsLoading(false);
                        });
                    console.log(user);
                    successMessage('SignUp Successfully');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessageData = error.message;
                    setError(errorCode + '-' + errorMessage);
                    setIsLoading(false);
                    errorMessage(errorMessageData)
                });
        } else {
            signInWithEmailAndPassword(auth, trimmedEmail, trimmedPassword)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user);
                    setIsLoading(false);
                    successMessage('Login Successfully');
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessageData = error.message;
                    setError(errorCode + '-' + errorMessage);
                    setIsLoading(false);
                    errorMessage(errorMessageData)
                });
        }
    }

    return (
        <div>
            <Header />
            <div className="abosolute">
                <img src={NETFLIX_LOGO}
                    className="w-screen h-screen bg-black font-bold backdrop-opacity-80" alt="bg-logo" />
            </div>
            <div>
                <form onSubmit={handleSubmitForm}>
                    <div className="absolute bg-black top-1/2 left-1/2 w-2/6 transform -translate-x-1/2 -translate-y-1/2 opacity-80 p-16 rounded-lg">
                        <h1 className="text-white text-3xl font-semibold mb-5">{isSignedIn ? "Sign In" : "Sign Up"}</h1>
                        {!isSignedIn && <input type="text" ref={name} name="username" id="username" placeholder="Enter Name" className="w-full text-black font-semibold bg-gray-400 p-3 text-base my-2 rounded-md" />}
                        <input ref={email} type="email" name="email" id="email" placeholder="Enter Email" className="w-full bg-gray-400 p-3 text-black font-semibold text-base my-2 rounded-md" />
                        <input ref={password} type="password" name="password" id="password" placeholder="Enter Password" className="w-full text-black font-semibold bg-gray-400 text-base p-3 my-2 rounded-md" />
                        <p className="text-red-600 font-semibold text-base py-1">{error}</p>
                        <button className="w-full bg-red-600 text-white p-2 my-3 rounded-md">{isLoading ? <div className="flex items-center gap-2"><Loader /></div> : isSignedIn ? "Sign In" : "Sign Up"}</button>
                        <p onClick={handleSignUp} className="text-white font-semibold py-3 cursor-pointer">{isSignedIn ? "New to Netflix? Sign up now" : "Already have an account? Sign in"}</p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login