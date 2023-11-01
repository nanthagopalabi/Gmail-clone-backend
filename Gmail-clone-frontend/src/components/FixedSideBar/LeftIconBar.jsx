import React from 'react'
import CreateIcon from "@mui/icons-material/Create";
import InboxIcon from "@mui/icons-material/Inbox";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SendIcon from "@mui/icons-material/Send";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import LabelImportantIcon from "@mui/icons-material/LabelImportant";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ScheduleSendIcon from "@mui/icons-material/ScheduleSend";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import SettingsIcon from "@mui/icons-material/Settings";
import { Box, IconButton, styled } from '@mui/material';






function LeftIconBar() {
  return (
    <div>
    <Wrapper>
      <IconButton>
        <CreateIcon />
      </IconButton>
      <IconButton>
        <InboxIcon />
      </IconButton>
      <IconButton>
        <StarBorderIcon />
      </IconButton>
      <IconButton>
      <  SendIcon />
      </IconButton>
      <IconButton>
        <InsertDriveFileIcon />
      </IconButton>
      <IconButton>
        <LabelImportantIcon />
      </IconButton>
      <IconButton>
        <DeleteOutlineIcon />
      </IconButton>
      <IconButton>
        <AccessTimeIcon />
      </IconButton>
      <IconButton>
        <ChatBubbleOutlineIcon />
      </IconButton>
      <IconButton>
        <ScheduleSendIcon />
      </IconButton>
      <IconButton>
        <MailOutlineIcon />
      </IconButton>
      <IconButton>
        <ReportGmailerrorredIcon />
      </IconButton>
      <IconButton>
        <SettingsIcon />
      </IconButton>
    </Wrapper>
  </div>
  )
};

export default LeftIconBar


const Wrapper=styled(Box)({
     display:'flex',
     flexDirection:'column',
     padding:"5px",
     paddingTop:"23px",
     marginLeft:'2px',
     alignItems:'flex-start',
     
     
     "& >*":{
      color:'black',
     },

     "& >:first-child":{
        width:56,
        heigth:56,
        paddingBottom:15,
        border: 'none',
     }
});