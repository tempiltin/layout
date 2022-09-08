import { Box, TextField, Button, Alert, Grid } from '@mui/material';
import { useState } from 'react';
import {  useNavigate } from 'react-router-dom';

const SendPasswordResetEmail = () => {
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
        }
        if (actualData.email) {
            console.log(actualData);
            document.getElementById("password-reset-email-form").reset() // reset Funksiyasi submit hodisasidan keyin formni ichidagi inputlarni  maydonini tozalab yuboradi
            setError({ status: true, msg: "Sizning Elektron pochtangizga Parol yuborildi ", type: "success" })
            navigate(window.location)

        } else {
            setError({ status: true, msg: "Iltimos Elektron pochta manzilini kiriting", type: "error" })
        }
    }
    return <>
        <Grid container justifyContent={"center"}>
            <Grid item sm={6} xs={12}>
                <Box component={"form"} noValidate id="password-reset-email-form" sx={{ mt: 2 }} onSubmit={handleSubmit}>
                    {
                        error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""
                    }
                    <TextField required fullWidth margin="normal" id="email" name="email" label="Email Address" />
                    <Box textAlign={"center"}>
                        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}>Send</Button>
                    </Box>

                </Box>
            </Grid>
        </Grid>
    </>;

}

export default SendPasswordResetEmail