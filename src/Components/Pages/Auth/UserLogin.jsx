import { Alert, Box, Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
/* 

Yechim React Hook Form kutubxonasidagi reset() funksiyasidan foydalanishdir, agar siz funktsiyani hech qanday parametrsiz ( reset() ) bajarsangiz, forma standart qiymatlariga qaytariladi ,*/
const UserLogin = () => {
    const [error, setError] = useState({
        status: false,
        msg: "",
        type: ""
    })
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const actualData = {
            email: data.get("email"),
            password: data.get("password"),
        }
        if (actualData.email && actualData.password) {
            console.log(actualData);
            document.getElementById("login-form").reset() // reset Funksiyasi submit hodisasidan keyin formni ichidagi inputlarni  maydonini tozalab yuboradi
            setError({ status: true, msg: "Kirish Mufofaqiyatli amalga oshirildi", type: "success" })
            navigate("/dashboard")

        } else {
            setError({ status: true, msg: "Barcha maydonlarni kiritish majburiy !", type: "error" })
        }
    }
    return <>
        <Box component={"form"} noValidate id="login-form" sx={{ mt: 2 }} onSubmit={handleSubmit}>
            {
                error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""
            }
            <TextField required fullWidth margin="normal" id="email" name="email" label="Email Address" />
            <TextField required fullWidth margin="normal" id="password" name="password" type={'password'} label="Password" />
            <Box textAlign={"center"}>
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}>Login</Button>
            </Box>
            <Link to={'/send-password-reset-email'}>Forgot Password 🤔</Link>

        </Box>
    </>;

};

export default UserLogin;