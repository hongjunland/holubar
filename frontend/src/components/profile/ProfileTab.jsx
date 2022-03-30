import {css} from "@emotion/react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PhotoFilterIcon from '@mui/icons-material/PhotoFilter';
import ImagesearchRollerIcon from '@mui/icons-material/ImagesearchRoller';
import HistoryIcon from '@mui/icons-material/History';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';

const useTabStyles = makeStyles({
    root: {
      justifyContent: "center"
    },
    scroller: {
      flexGrow: "0"
    }
  });


const ProfileTab = ({
    className, 
    children,
})=>{
    const classes = useTabStyles();
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue)=>{setValue(newValue)}
    return(
        <div
            css={css`
            justify-content: center;
            `}
        >
            <Tabs
                classes={{ root: classes.root, scroller: classes.scroller }}
                value={value}
                onChange={handleChange}
                centered
                css={css`
                    padding: 0px 8px;
                    border-bottom: 1px solid rgb(229, 232, 235);
                    overflow: auto;
                    margin-top: 30px;
                    justify-content: center;
                `}
            >
                <Tab icon={<PhotoFilterIcon/>} label="Collected"/>
                <Tab icon={<ImagesearchRollerIcon/>} label="Created"/>
                <Tab icon={<HistoryIcon/>} label="Activity"/>
            </Tabs>
        </div>
    );
}


export default ProfileTab;
