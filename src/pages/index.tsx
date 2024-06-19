import * as React from 'react';
import {Box} from '@mui/material';
import DashboardAppBar from "@/components/molecules/DashboardAppBar/DashboardAppBar";
import Login from "@/components/molecules/Login/Login";
import Sidebar from "@/components/organisms/Sidebar";

const Index = () => {
    return (
        <Box sx={{display:'flex'}}>
            <DashboardAppBar/>
            <Sidebar />
            <Login/>
        </Box>
    );
}

export default Index;
