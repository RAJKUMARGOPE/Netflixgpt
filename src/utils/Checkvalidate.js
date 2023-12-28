export const checkvalidate =(email,password)=>{
    const  emailvalidate = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/.test(email)
    const  passwordvalidate = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!emailvalidate)return "Email not valid"
    if(!passwordvalidate)return "Password is not Valid"
    return null
    
};