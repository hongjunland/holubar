import { ProfileBanner } from "components/profile/ProfileBanner";
import { ProfileContainer } from "components/profile/ProfileContainer";
import {css} from "@emotion/react";
import Stack from "components/Stack";

export function ProfilePage(){
    return (
        <div>
            <h1>ProfilePage</h1>
            <Stack
                className="ProfileBlock"
            >
                <ProfileBanner/>
                <ProfileContainer/>
            </Stack>
        </div>
    );
}