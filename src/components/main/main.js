import { Grid } from '@mui/material';
import React from 'react'
import Nav from '../nav/nav';
import CalculateIcon from '@mui/icons-material/Calculate';
import ScienceIcon from '@mui/icons-material/Science';
import SettingsIcon from '@mui/icons-material/Settings';
import ComputerIcon from '@mui/icons-material/Computer';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PaidIcon from '@mui/icons-material/Paid';


const Main = () => {
    return ( <Grid container justifyContent="space-around" spacing={2}>

        <Grid item xs={3}>
            <Nav color="" title="Bac math" icon={<CalculateIcon sx={{ fontSize: 100 }}/> } />
        </Grid>
        <Grid item xs={3}>
            <Nav color="red" title="Bac science" icon={<ScienceIcon sx={{ fontSize: 100 }}/> } />
        </Grid>
        <Grid item xs={3}>
            <Nav color="#5ebc5e" title="Bac technique" icon={<SettingsIcon sx={{ fontSize: 100 }}/> } />
        </Grid>
        <Grid item xs={3}>
            <Nav color="#585858" title="Bac informatique 1 (TIC + BD)" icon={<ComputerIcon sx={{ fontSize: 100 }}/> } />
        </Grid>
        <Grid item xs={3}>
            <Nav color="#c89b16" title="Bac informatique 2 (STI)" icon={<ComputerIcon sx={{ fontSize: 100 }}/> } />
        </Grid>
        <Grid item xs={3}>
            <Nav color="#c016c8" title="Bac lettre" icon={<MenuBookIcon sx={{ fontSize: 100 }}/> } />
        </Grid>
        <Grid item xs={3}>
            <Nav color="#c3d219" title="Bac Eco" icon={<PaidIcon sx={{ fontSize: 100 }}/> } />
        </Grid>
        {/* <Nav title="bac math" />
        <Nav title="bac phy" />
        <Nav title="bac sc" /> */}
    </Grid> );
}
 
export default Main;