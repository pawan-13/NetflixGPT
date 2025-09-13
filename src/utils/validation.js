export const validationForm = (name, email, password, isSignedIn) => {

    const Username = /([a-zA-Z0-9_\s]+)/.test(name);
    const Useremail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const Userpassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isSignedIn) {
        if (!Username) {
            return "Name is not valid";
        }
    }

    if (!Useremail) {
        return "Email is not valid";
    }

    if (!Userpassword) {
        return "Password is not valid";
    }

    return null;
}