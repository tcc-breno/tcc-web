import React  from 'react';
import Box from '@mui/material/Box';
import Header from "../components/header/index";
import SimulationList from "../components/simulation/list/index"

export const Home = () => {

    return (
        <Box>
            <Header/>
            <Box
                sx={{
                    "display":"flex",
                    "flexDirection":"column",
                    "alignItems":"center",
                    "justifyContent":"center",
                    "height":"92vh",
                    "backgroundColor":"#edf0f6"
                }}
            >
                <SimulationList />
            </Box>
        </Box>
    )
}