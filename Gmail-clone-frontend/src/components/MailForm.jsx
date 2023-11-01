import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { DialogContent, FormLabel, InputBase, Paper, styled } from '@mui/material';
import { Field, Form } from 'formik';

function MailForm() {
  return (
    <Box
      component="form"
      sx={{
        width:"500px",
        '& > :not(style)': { m: 0, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
        <FormField>
      <ToField >
      <FormLabel htmlFor='to'>To  </FormLabel>
        <InputBase
    placeholder="Recipient"
    name="to"
    />
     

      </ToField>
      
      <ToField elevation={0}>
      
      <InputBase
    placeholder="Subject"
    name="to"
    />

      </ToField>
      <ToField >
      
      <InputBase fullWidth id="to" placeholder=''
       multiline
       rows={10}
      variant="standard"  />
      </ToField>
      </FormField>
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
    
    
})