
import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import { Box, List } from '@mui/material';
import styled from '@emotion/styled';
import {Container} from '@mui/material';
import { ListItemButton } from '@mui/material';
import RigthSideIcon from './components/RigthSideIcon';
import LeftIconBar from './components/FixedSideBar/LeftIconBar.jsx';

function App() {
  const [openDrawer, setOpenDrawer] = useState(true);

  const toggleDrawer = () => {
    setOpenDrawer((prevState) => !prevState);
  };

  return (
    <>
       <Layout style={{position:'fixed', width:'100%'}}>
      <Header toggleDrawer={toggleDrawer} />
      
      <Sidebar openDrawer={openDrawer}/>
      <Main>
      <LeftIconBarWrapper>
        <LeftIconBar/>
      </LeftIconBarWrapper>
      <Box sx={{paddingLeft:0, height:'100vh',background:'white', overflowY:""}} >
        <Box>
         icon
        </Box>
      <Box sx={{ display: 'flex', flexDirection:'column', width:'100%',
    background:'grey',height:'50px'
    }}>
      <Box sx={{display:'grid', gridTemplateColumns:"10% 30% auto 5%"}}>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>
        <div>1</div>

      </Box>
        </Box>
          
      </Box>
      <RigthSideIconBar>
         <RigthSideIcon/>
      </RigthSideIconBar>
      </Main>
      
      </Layout>
      </>
  )
}

export default App


const Layout=styled(Box)({
 display:"flex",
 flexDirection:'column',

 

})

const Main=styled(Box)({
  display:"grid",
  // flexDirection:'row',
  gridTemplateColumns:"6% auto 5%",
  border:'2px solid red',
  height:'100vh',
 
 })
const RigthSideIconBar=styled(Box)({
   display:'flex',
   flexDirection:'column',
  
   height:'100vh',
   backgroundColor:"#f2f5fa"
 });

 const LeftIconBarWrapper=styled(Box)({
  display:'flex',
  flexDirection:'column',
  height:'100vh',
  // background:'yellow'
})

 