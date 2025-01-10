import {useEffect, useState} from "react";
import {login, register} from "src/lib/customAxios";

export const useAuth = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        number: undefined,
    });
    const [checkEmail, setCheckEmail] = useState(false);
    const [checkPassword, setCheckPassword] = useState(false);
    const [checkNumber, setCheckNumber] = useState(false);
    useEffect(() => {
        setCheckEmail(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,4}$/.test(user.email))
        setCheckPassword(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*\s).{4,15}$/.test(user.password))
        setCheckNumber(/^[1-3][1-4](?!00)[0-1][0-9]$/.test(user.number));
    }, [user])

    const changeInput = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }
    const signIn = () => {
        if (checkEmail && checkPassword) {
            console.log(user)
            return login().then(res => {
            })
        }
    }
    const signUp = () => {
        if (checkEmail && checkPassword && checkNumber) {
            return register().then(res => {
            })
        }
    }

    return {
        user,
        changeInput,
        checkEmail,
        checkPassword,
        checkNumber,
        signIn,
        signUp,
    }
}