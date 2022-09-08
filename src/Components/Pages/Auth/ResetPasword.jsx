import { Alert, Box, Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPasword = () => {
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
            password: data.get("password"),
            password_confirmation: data.get("password_confirmation"),
        }
        if (actualData.password && actualData.password_confirmation) {
            if (actualData.password === actualData.password_confirmation) {
                console.log(actualData);
                document.getElementById("password-reset-form").reset() // reset Funksiyasi submit hodisasidan keyin formni ichidagi inputlarni  maydonini tozalab yuboradi
                setError({ status: true, msg: "Parol muvofaqiyatli o'zgartirildi ", type: "success" })
                setTimeout(()=>{
                    navigate("/login")
                },3000)
            } else {
                setError({ status: true, msg: "Parollar bir biriga mos emas", type: "error" })
            }

        } else {
            setError({ status: true, msg: "Iltimos Elektron pochta manzilini kiriting", type: "error" })
        }
    }
    return <>
        <Grid container justifyContent={"center"}>
            <Grid item sm={6} xs={12}>
                <h1>Parolni qayta o'rnatish</h1>
                <Box component={"form"} noValidate id="password-reset-form" sx={{ mt: 2 }} onSubmit={handleSubmit}>
                    {
                        error.status ? <Alert severity={error.type}>{error.msg}</Alert> : ""
                    }
                    <TextField required fullWidth margin="normal" id="password" name="password" type={'password'} label="New Password" />
                    <TextField required fullWidth margin="normal" id="password_confirmation" name="password_confirmation" type={'password'} label="New Confirmation Password" />
                    <Box textAlign={"center"}>
                        <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2, px: 5 }}>Send</Button>
                    </Box>

                </Box>
            </Grid>
        </Grid>
    </>;

}

export default ResetPasword;