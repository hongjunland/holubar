// const [profileBackgroundImage,setProfileBackgroundImage] = useState("https://as1.ftcdn.net/v2/jpg/02/70/64/54/1000_F_270645457_FR4CBhmmKSNqn4hk0X21PPzu4FuXLGxR.jpg");
// const [profileImage,setProfileImage] = useState("assets/default_profile.jpg");
// const [nickname,setNickname] = useState("nickname");
// const [walletAddress,setWalletAddress] = useState("0xc2d8FcB473A1b400FED7B2b1d4c1453CB14ABdwq");
// const [bio,setBio] = useState("Hello!");

import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value:{
            userId: 0,
            email: "",
            walletAddress: "",
            nickname: "",
            profileImageUrl: "",
            bio: ""
        }
    },
    reducers: {
        
        changeTabIndex: (state, action)=>{
            state.value = action.payload;
        },
    }
});

export const {changeTabIndex} = userSlice.actions;

export default userSlice.reducer;