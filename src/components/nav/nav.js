import React from 'react';
import CalculateIcon from '@mui/icons-material/Calculate';
import { Button } from '@mui/material';


const Nav = (props) => {
    return ( 
    
    
    



<Button variant="text" style={{flexDirection:'column',color:props.color}}> {props.icon} {props.title}</Button>




    
    
    // <div style={{padding:20}}>


        
    //     <CalculateIcon sx={{ fontSize: 100 }}/> <br />
    //     {props.title}
    // </div> 
    
    
    
    
    
    
    
    );
}
 
export default Nav;