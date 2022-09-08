import { Alert, Box, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from 'react';
/* 

Yechim React Hook Form kutubxonasidagi reset() funksiyasidan foydalanishdir, agar siz funktsiyani hech qanday parametrsiz ( reset() ) bajarsangiz, forma standart qiymatlariga qaytariladi ,*/
const UserLogin = () => {
    const [error , setError] = useState({
        status:false,
        msg:"",
        type:""
    }) 
    const handleSubmit=  (e) =>{
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email:data.get("email"),
            password:data.get("password"),
        }
        if(actualData.email && actualData.password){
            console.log(actualData);
            document.getElementById("login-form").reset() // reset Funksiyasi submit hodisasidan keyin formni ichidagi inputlarni  maydonini tozalab yuboradi


        }else{
            console.log("All Fields are Required");
        }
    }
  return <>
        <Box component={"form"} noValidate id="login-form" sx={{mt:2}} onSubmit={handleSubmit}>
            <TextField  required  fullWidth margin="normal"  id="email" name="email"  label="Email Address"/>
            <TextField  required  fullWidth margin="normal"  id="password" name="password" type={'password'}  label="Password"/>
            <Box textAlign={"center"}>
                <Button type="submit" variant="contained" sx={{mt:3,mb:2,px:5}}>Login</Button>
            </Box>
            <Link to={'/'}>Forgot Password 🤔</Link>
            <Alert>All Fields are Required</Alert>
        </Box>
    </>;
  
};

export default UserLogin;