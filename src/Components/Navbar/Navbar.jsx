import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material"
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" color="secondary">
                    <Toolbar>
                        <Typography variant="h5" component={"div"} sx={{ flexGrow: 1 }}>
                            Shoop
                        </Typography>
                        <Button component={Link} to={"/"}  sx={{ color: "white" }}  >Home</Button>
                        <Button component={Link} to={"/contact"} sx={{ color: "white" }}  >Contact</Button>
                        <Button component={Link} to={"/login"} sx={{ color: "white" }}  >Login / Register</Button>
                    </Toolbar>
                </AppBar>
            </Box>

        </>
    )
}

export default Navbar