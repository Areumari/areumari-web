import {useEffect, useState} from "react";
import {login, register} from "src/lib/customAxios";

export const useAuth = () => {
    const [user, setUser] = useState({
        id: "",
        email: "",
        password: "",
        checkPassword: "",
        number: "",
    });
    const [isEmail, setCheckEmail] = useState(false);
    const [isPassword, setIsPassword] = useState(false);
    const [checkPassword, setCheckPassword] = useState(false);
    const [isNumber, setIsNumber] = useState(false);
    const [pass, setPass] = useState(true);

    useEffect(() => {
        setCheckEmail(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{1,4}$/.test(user.email))
        setIsPassword(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?!.*\s).{4,15}$/.test(user.password))
        setCheckPassword(user.password === user.checkPassword);
        setIsNumber(/^[1-3][1-9](?!00)[0-2][0-9]$/.test(user.number));
    }, [user])

    const changeInput = (e) => {
        const {name, value} = e.target;
        setUser({...user, [name]: value});
    }
    const verifyCode = () => {
        console.log('... 인증 실패.')
        return null
    }
    const signIn = () => {
        if (pass) {
            console.log(user)
            return login().then(res => {
                console.log(res)
            }).catch(err => {
                console.log(err)
                setPass(false)
            });
        }
    }
    const signUp = () => {
        if (isEmail && isPassword && isNumber) {
            return register().then(res => {
                console.log(res)
            })
        }
    }
    const changePW = () => {
        console.error('미구현된 함수')
    }

    return {
        user,
        isEmail,
        isPassword,
        checkPassword,
        isNumber,
        pass,
        changeInput,
        verifyCode,
        signIn,
        signUp,
        changePW,
    }
}