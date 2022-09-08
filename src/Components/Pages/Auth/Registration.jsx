import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Alert } from '@mui/material';
import { CheckBox } from '@mui/icons-material';
const Registration = () => {
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
            name: data.get("email"),
            password: data.get("password"),
            password_confirmation: data.get("password_confirmation"),
            tc: data.get("tc"),
        }
        if (actualData.name && actualData.email && actualData.password && actualData.tc !== null) {
            if (actualData.password === actualData.password_confirmation) {
                console.log(actualData);
                document.getElementById("registration-form").reset() // reset Funksiyasi submit hodisasidan keyin formni ichidagi inputlarni  maydonini tozalab yuboradi
                setError({ status: true, msg: "Ro'yhatdan o'tish Mufofaqiyatli amalga oshirildi", type: "success" })
                setTimeout(()=>{
                    navigate("/login")
                },3300)
            }else{
                setError({ status: true, msg: "Parol bir biriga mos emas", type: "error" })
            }

        } else {
            setError({ status: true, msg: "Barcha maydonlarni kiritish majburiy !", type: "error" })
        }
    }
    return <>
        <Box component={"form"} noValidate id="registration-form" sx={{ mt: 2 }} onSubmit={handleSubmit}>
            <TextField required fullWidth margin="normal" id="name" name="text" label="Your Name" />
            <TextField required fullWidth margin="normal" id="email" name="email" label="Email Address" />
            <TextField required fullWidth margin="normal" id="password" name="password" type={'password'} label=" Password" />
            <TextField required fullWidth margin="normal" id="password_confirmation" name="password_confirmation" type={'password'} label="Confirmation Password" />
            <FormControlLabel control={<Checkbox value={"agree"} color={"primary"} name={"tc"} id="tc" />} label={"Men barcha shartlarga roziman."} />
            <Box textAlign={"center"}>
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}>Join</Button>
            </Box>
            {
                error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""
            }
        </Box>
    </>;
};

export default Registration;