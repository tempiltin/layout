import { Grid, Card, Tabs,  Tab, Box } from "@mui/material"
import { useState } from "react";
// import Pic1 from "../../images/undraw_empty_cart_co35.svg"
import Registration from "./Registration";
import UserLogin from "./UserLogin";


//=============================================================================

const TabPanel = (props) => {
    const { children, value, index } = props;
    return (
        <div role={"tabpanel"} hidden={value !== index}>
            {
                value === index && (
                    <Box>{children}</Box>
                )
            }
        </div>
    )
}

//=============================================================================


const LoginReg = () => {

    const [value, setValue] = useState(0)

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }
    return <>
        <Grid container sx={{ height: "100%",mt:5 } } justifyContent={"center"}>

            <Grid item lg={5} sm={7}>
                <Card sx={{ width: "100%", height: "100%" }}>
                    <Box>
                        <Box sx={{ borderBottom: 1, borderColor: "divider", height: "100%" }}>
                            <Tabs value={value} textColor="secondary" indicatorColor="secondary" onChange={handleChange}>
                                <Tab label={"Login"}></Tab>
                                <Tab label={"Register"}></Tab>
                            </Tabs>
                            <TabPanel value={value} index={0}>
                                <UserLogin />
                            </TabPanel>
                            <TabPanel value={value} index={1}>
                                <Registration />
                            </TabPanel>
                        </Box>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    </>;

}

export default LoginReg