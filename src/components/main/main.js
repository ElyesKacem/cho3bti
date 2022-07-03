import { Grid } from '@mui/material';
import React from 'react'
import Nav from '../nav/nav';
import CalculateIcon from '@mui/icons-material/Calculate';
import ScienceIcon from '@mui/icons-material/Science';
import SettingsIcon from '@mui/icons-material/Settings';
import ComputerIcon from '@mui/icons-material/Computer';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PaidIcon from '@mui/icons-material/Paid';


const Main = (props) => {
    let sb = props.sb
    let ssb = props.ssb
    console.log("+++-"+props.sss)
    return ( <Grid container justifyContent="space-around" spacing={2}>

        <Grid item xs={3} onClick={()=>{ssb(1);console.log(sb)}}>
            <Nav color={sb === 1 ? "" : "black"} title="Bac math" icon={<CalculateIcon sx={{ fontSize: 100 }}/> } />
        </Grid>
        <Grid item xs={3} onClick={()=>{ssb(2);console.log(sb)}}>
            <Nav color={sb === 2 ? "red" : "black"} title="Bac science"  icon={<ScienceIcon sx={{ fontSize: 100 }}/> } />
        </Grid>
        <Grid item xs={3} onClick={()=>{ssb(3);console.log(sb)}}>
            <Nav color={sb === 3 ? "#5ebc5e" : "black"} title="Bac technique" onClick={()=>ssb(2)} icon={<SettingsIcon sx={{ fontSize: 100 }}/> } />
        </Grid>
        <Grid item xs={3} onClick={()=>{ssb(4);console.log(sb)}}>
            <Nav color={sb === 4 ? "#585858" : "black"} title="Bac informatique 1 (TIC + BD)" onClick={()=>ssb(3)} icon={<ComputerIcon sx={{ fontSize: 100 }}/> } />
        </Grid>
        <Grid item xs={3} onClick={()=>{ssb(5);console.log(sb)}}>
            <Nav color={sb === 5 ? "#c89b16" : "black"} title="Bac informatique 2 (STI)" onClick={()=>ssb(4)} icon={<ComputerIcon sx={{ fontSize: 100 }}/> } />
        </Grid>
        <Grid item xs={3} onClick={()=>{ssb(6);console.log(sb)}}>
            <Nav color={sb === 6 ? "#c016c8" : "black"} title="Bac lettre" onClick={()=>ssb(5)} icon={<MenuBookIcon sx={{ fontSize: 100 }}/> } />
        </Grid>
        <Grid item xs={3} onClick={()=>{ssb(7);console.log(sb)}}>
            <Nav color={sb === 7 ? "#c3d219" : "black"} title="Bac Eco" onClick={()=>ssb(6)} icon={<PaidIcon sx={{ fontSize: 100 }}/> } />
        </Grid>
        {/* <Nav title="bac math" />
        <Nav title="bac phy" />
        <Nav title="bac sc" /> */}
    </Grid> );
}
 
export default Main;