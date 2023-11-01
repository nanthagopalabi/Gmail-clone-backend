import { Drawer } from "@mui/material";
import SideBarItem from './RigthSideIcon';
import SideBarIcons from "./SideBarIcons";

const Sidebar = ({openDrawer}) => {
  return (
    <Drawer
      anchor="left"
      open={openDrawer}
      hideBackdrop={true}
      ModalProps={{ keepMounted: true }}
      variant="persistent"
      sx={{
        '& .MuiDrawer-paper':{
            marginTop:'64px !important',
            // marginLeft:'80px',
            width:"240px",
            background: '#F5F5F5',
            borderRight:'none',
            height: 'calc(100vh-64px)',

          
          
        }
      }}
    >
      
      <SideBarIcons/>
    </Drawer>
  );
};

export default Sidebar;

