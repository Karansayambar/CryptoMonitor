import React, { useState } from 'react';
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabPanel from "@mui/lab/TabPanel";
import TabList from "@mui/lab/TabList";
import { createTheme, ThemeProvider } from "@mui/material";
import Grid from '../Grid';
import "./style.css";
import List from '../List';

const TabsComponent = ({coin}) => {
    const [value, setValue] = useState("grid");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const style = {
        color: "var(--white)",
        width: "50vw",
        fontSize: "1.2rem",
        fontWeight: 600,
        fontFamily: "Inter",
        textTransform: "capitalize"
    };

    const theme = createTheme({
        palette: {
            primary: {
                main: "#dc5f00" // corrected color value
            }
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <TabContext value={value}>
                <TabList onChange={handleChange} variant="fullWidth">
                    <Tab label="grid" value="grid" sx={style} />
                    <Tab label="list" value="list" sx={style} />
                </TabList>
                <TabPanel value="grid">
                    <div className='grid-flex'>
                    {coin.map((item, i) => (
                            <Grid key={i} coin={item} />
                    ))}
                    </div>
                </TabPanel>
                <TabPanel value="list">
                    <table>
                        {coin.map((item, i) => (
                          <List key={i} coin={item}/>
                        ))}
                    </table>
                </TabPanel>
            </TabContext>
        </ThemeProvider>
    );
}

export default TabsComponent;
