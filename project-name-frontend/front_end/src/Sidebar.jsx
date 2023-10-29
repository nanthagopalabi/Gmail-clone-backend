// import React from 'react';
// import Button from '@mui/material/Button';
// import CreateIcon from '@mui/icons-material/Create';
// import SidebarOptions from './SidebarOptions';
// import InboxIcon from '@mui/icons-material/Inbox';
// import StarBorderIcon from '@mui/icons-material/StarBorder';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import LabelImportantIcon from '@mui/icons-material/LabelImportant';
// import SendIcon from '@mui/icons-material/Send';
// import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
// import LabelIcon from '@mui/icons-material/Label';
// import DeleteIcon from '@mui/icons-material/Delete';
// import "./index.css";


// function Sidebar() {
//   return (
//     <div className='sidebar'>
//         <Button startIcon={<CreateIcon/>} className="compose_btn">Compose</Button>

//         <SidebarOptions Icon={InboxIcon} title="Inbox" number="224" isactive={true}/>
//         <SidebarOptions Icon={StarBorderIcon} title="Starred" number="224"/>
//         <SidebarOptions Icon={AccessTimeIcon} title="Snoozed" number="224"/>
//         <SidebarOptions Icon={LabelImportantIcon} title="Important" number="224"/>
//         <SidebarOptions Icon={SendIcon} title="Sent" number="224"/>
//         <SidebarOptions Icon={InsertDriveFileIcon} title="Drafts" number="224"/>
//         <SidebarOptions Icon={LabelIcon} title="Lable" number="224"/>
//         <SidebarOptions Icon={DeleteIcon} title="Delete" number="224"/>

//     </div>
//   )
// }

// export default Sidebar


import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/Inbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';

export default function NestedList() {
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
        </ListSubheader>
      }
    >
      <ListItemButton>
        <ListItemIcon>
        <InboxIcon/>
        </ListItemIcon>
        <ListItemText primary="Inbox" />
      </ListItemButton>

      <ListItemButton>
        <ListItemIcon>
        <StarBorder/>
        </ListItemIcon>
        <ListItemText primary="Starred" />
      </ListItemButton>
      <ListItemButton>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItemButton>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              
            </ListItemIcon>
            <ListItemText primary />
          </ListItemButton>
        </List>
      </Collapse>
    </List>
  );
}