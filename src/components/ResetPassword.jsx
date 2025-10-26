import { useRef, useState } from "react"
import { ResetEmail } from "../utils/validation";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../utils/firebase";
import { errorMessage, successMessage } from "../utils/messageNotification";
import Loader from "./Loader";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const emailReset = useRef(null);
    const navigate = useNavigate();
    const [loading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    
    const handleSubmitEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);
        const emailResetValue = emailReset?.current?.value ? emailReset.current.value.trim() : '';
        const message = ResetEmail(emailResetValue);
        setError(message);

        if (message) {
            setIsLoading(false);
            return;
        }

        // Add logic to handle password reset email sending here
        sendPasswordResetEmail(auth, emailResetValue)
            .then(() => {
                successMessage('Password reset email sent successfully');
                setIsLoading(false);
                navigate('/')
            })
            .catch((error) => {
                setError(error.message);
                errorMessage('Failed to send a reset email');
                setIsLoading(false);
            });

    }
    return (
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black opacity-80 p-5 w-2/6 rounded-md">
            <h2 className="text-xl text-white my-3 font-semibold">Reset Password</h2>
            <form className="rounded-md">
                <input ref={emailReset} type="text" name="emailReset" id="emailReset" placeholder="Enter your email" className="w-full bg-gray-400 p-3 text-black font-semibold text-base my-1 rounded-md" />
                <p className="text-red-600 font-semibold text-base py-1">{error}</p>
                <button type="submit" className="w-full bg-red-600 text-white p-2 my-3 rounded-md" onClick={handleSubmitEmail}>{loading ? <div className="flex items-center gap-2"><Loader /></div> : "Submit"}</button>
            </form>
        </div>
    )
}

export default ResetPassword