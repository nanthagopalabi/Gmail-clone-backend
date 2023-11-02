import React, { useRef, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button, ButtonGroup, DialogContent, FormLabel, IconButton, InputBase, Paper, styled } from '@mui/material';
import { Field, Form } from 'formik';
import axios from "axios";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AttachFileIcon from "@mui/icons-material/AttachFile";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';








function MailForm(props) {
   
    const [file,setFile]=useState(null);

    
    const [mail,setMail ]=useState({
      to:'',
      subject:'',
      content:'',
      attachment:'',
    });
    

    
    
    const uploadFile=async(e)=>{
    
      e.stopPropagation();
      e.preventDefault();
   
    
      let data = new FormData();
      data.set("sample_file", file);

     const url='https://gmail-clone-yppd.onrender.com';
     try {
     console.log("try from upload")
      const res = await axios.post(`${url}/mail/upload`, data,{
        headers:{
          'x-auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2U4MWY5ODFhNmJiMzk3N2Y0YTkzNyIsImlhdCI6MTY5ODgxOTk5MX0.LIMA2p254tEsMTrspiqLodAW9LpJ8HzbtVeZNOXuV0s'
        }
      });
    console.log(res);
    
    console.log(res.data.secure_url);
    document.getElementById('file-name').setAttribute('href',res.data.secure_url);
    setMail({...mail,attachment:`${res.data.secure_url}`});
    console.log({...mail});
    } catch (error) {
      console.log(error);
    }
          
    }
    
    const handleSelectFile = (e) =>{
      setFile(e.target.files[0]);

    }

    const handleChange=(e)=>{
       setMail({...mail,[e.target.name]:e.target.value});
       console.log(mail)
    }

    const handleSend=async(e)=>{
      e.stopPropagation();
      e.preventDefault();
      props.handlex();
      try {
        const url='https://gmail-clone-yppd.onrender.com';
        const res = await axios.post(`${url}/mail/send`, mail,{
          headers:{
            'x-auth-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2U4MWY5ODFhNmJiMzk3N2Y0YTkzNyIsImlhdCI6MTY5ODgxOTk5MX0.LIMA2p254tEsMTrspiqLodAW9LpJ8HzbtVeZNOXuV0s'
          }
        });
        console.log(res);
        console.log("from send")
      } catch (error) {
        
        console.log(error);
      }
    }

    
    
  return (
     

    <Box
      component="form"
      sx={{
        width:"500px",
        '& > :not(style)': { m: 0, width: '100%' },
      }}
      noValidate
      autoComplete="off"
      encType="multipart/form-data"
      method='post'

    >
        <FormField>
      <ToField >
      <FormLabel htmlFor='to'>To  </FormLabel>
        <InputBase
    placeholder="Recipient"
    name="to"
    id='to'
    onChange={handleChange}

    />
      </ToField>
      
      <ToField >
      
      <InputBase
    placeholder="Subject"
    name="subject"
    id='subject'
    onChange={handleChange}
    />

      </ToField>
      <ToField >
      
      <InputBase fullWidth id="to" placeholder=''
       multiline
       rows={10}
      variant="standard" 
      name='content'
      onChange={handleChange}
      />
      </ToField>
       {file&&<p id='file-name'>
        <a id='file-name'
        target='new'
        >{file.name}</a>

      <IconButton onClick={()=>setFile(null)}>x</IconButton>
      </p>} 
      
      <input type='file' id='file' name='file'
       onChange={handleSelectFile}
       multiple={false}
      />
      <Upload onClick={uploadFile}>
        upload
      </Upload>

      </FormField>
          
      <ButtonWrap>
            <ButtonGroup>
          <Button autoFocus   variant="contained" color="primary"
          onClick={handleSend}
          >
            Send  
          </Button>
          <Button size='small'>
            <ExpandMoreIcon/>
          </Button>
          </ButtonGroup>
          
          {/* <Button component="label" startIcon={<AttachFileIcon />}>
        <VisuallyHiddenInput type="file" />
      </Button> */}
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        aria-haspopup="true"
        
      >
        <MoreVertIcon />
      </IconButton>
         
      <Button>
            <DeleteForeverIcon/>
          </Button>
          </ButtonWrap>
          
          

    </Box>
  )
}

export default MailForm


const ToField=styled(Box)({
   display:"flex",
   justifyContent:'flex-start',
   alignItems:'center',
   gap:10,
    borderBottom:"1px solid rgba(0, 0, 0, 0.12)",
    borderRadius:0,
    marginBottom:10

});

const FormField=styled(Box)({
    display:'flex',
    flexDirection:'column',
    justifyContent:'stretch',
  "&>:last-child":{
    borderBottom:'none'
  }  
    
    
});

const ButtonWrap=styled(Box)({
  display:'flex',
  flexDirection:'row',
});

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  overflow: "hidden",
  width: 1
});

const Upload=styled(Button)({
     width:'min-content',
     padding:'2px',
     margin:'4px',
     background:'grey',
     color:'white' ,
    "&:hover":{
      background:'grey',

    },
    "&:focus":{
      border:'none',
      outline:'none'
      
    }

})