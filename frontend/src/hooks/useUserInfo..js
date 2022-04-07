import { useSelector } from "react-redux";

const useUserInfo = ()=>{
    const userInfo = useSelector((state)=>state.user.info);
    return userInfo;
}

export default useUserInfo;