class appHelper{
    setToken(token){
        window.localStorage.setItem("token",token)
    }
    getToken(){
        window.localStorage.getItem("token",token)
    }
    setUserDetails(UserDetails){
        localStorage.setItem("UserDetails",JSON.stringify(UserDetails))
    }
    getUserDetails(){
        return JSON.parse(localStorage.getItem("UserDetails"))
    }
    setEmail(email){
        window.localStorage.setItem("email",email)
    }
    getEmail(){
        window.localStorage.getItem("email",email)
    }
    setOTP(OTP){
        localStorage.setItem("OTP",OTP)
    }
    getOTP(){
        return localStorage.getItem("OTP")
    }
    removeSessions=()=>{
        localStorage.clear();
        window.location.href="/login"
    }
}

export const {setToken,getToken,setEmail,getEmail,setUserDetails,getUserDetails,setOTP,getOTP,removeSessions} = new appHelper()

