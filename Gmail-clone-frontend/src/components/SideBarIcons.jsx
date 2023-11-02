import React, { useState } from 'react'
import CreateIcon from '@mui/icons-material/Create';
import { Box, Button, Container, ListItem } from '@mui/material';
import {styled} from '@mui/material'
import { Sidebar_icons } from './configDrawer/drawerSidebar.js';
import CustomizedDialogs from './ComposeDialog.jsx';

function SideBarIcons() {
  const [open, setOpen] = useState(false);
  
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    
    setOpen(false);
  };

    


  return (
    <SideIconWrapper>
       <ComposeWrapper>
       <Button  size='large' onClick={ handleClickOpen}  >
        <Compose>
        <CreateIcon/>
          Compose
          <CustomizedDialogs open={open} handleClose={handleClose}  />
        </Compose>
        </Button>
        
       </ComposeWrapper>
       <FeaturesWrapper>
        {Sidebar_icons.map((element)=>(
            <ListItem key={element.name} >
            <element.icon sx={{paddingRight:3}}>
            </element.icon>
            {element.title}
            </ListItem>
        ))}

       </FeaturesWrapper>

    </SideIconWrapper>
  )
}

export default SideBarIcons

const SideIconWrapper=styled(Container)({
    display:'flex',
    flexDirection:'column',
    paddingLeft:'0 !important',

});
const ComposeWrapper=styled(Box)({
    display:'flex',
    justifyContent:'flex-start', 
    
    '& > Button':{
        background:'#c2e7ff',
        padding:'15px',
        marginLeft:'10px',
        borderRadius:20,
        border: 'none',
         outline: 'none'
        
       },

    '& > *:hover':{
        background:'#c2e7ff',
        boxShadow:'0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)',
        border: 'none',
        outline: 'none'
       },
       '&>*:focus':{
        background:'#c2e7ff',
        boxShadow:'0 1px 2px 0 rgba(60,64,67,0.302), 0 1px 3px 1px rgba(60,64,67,0.149)',
        border: 'none',
   outline: 'none'
       }
   
});

const Compose=styled(Box)({
    display:'flex',
    justifyContent:'center',
    placeItems:'center',
    gap:10,
    
})

const FeaturesWrapper=styled(Box)({
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    marginTop:10,
     
    '& > *:hover':{
         background:'#bfd6fb',
         borderRadius:'0px 40px 40px 0px',

        },
        '& > *:active':{
            background:'#bfd6fb',
            borderRadius:'0px 40px 40px 0px',
   
           }           
       

    },


);