import { apiInstance } from "api";

const api = apiInstance();
const MAPPING_URL = "/user"
//로그인
const login = async(walletAddress, success, fail)=>{
    await api.post(MAPPING_URL+"/login", walletAddress).then(success).catch(fail);
}
// 로그인한 사용자 정보조회
const getMyInfo = async(accessToken, success, fail)=>{
    api.defaults.headers.common["accessToken"] = accessToken;
    await api.get(MAPPING_URL+"/profile").then(success).catch(fail);
}

// 사용자 정보 수정
const editUser = async(user, success, fail)=>{
    api.defaults.headers.common["accessToken"] =  localStorage.getItem('accessToken');
    await api.put(MAPPING_URL+"/profile/edit",JSON.stringify(user)).then(success).catch(fail);
}

//이미지 업로드
async function uploadImage(formData, success, fail) {
    await imgapi.post("/s3/upload", formData).then(success).catch(fail);
}


export {login, getMyInfo,editUser,uploadImage};
