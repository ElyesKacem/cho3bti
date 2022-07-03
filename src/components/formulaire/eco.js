import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';

const Eco = () => {

  const [msg, setMsg] = useState('')
  const [mg, setMg] = useState(0);
  const [Ec, setEc] = useState(0);
  const [Ge, setGe] = useState(0);
  const [m, setM] = useState(0);
  const [hg, setHg] = useState(0);
  const [f, setF] = useState(0);
  const [ang, setAng] = useState(0);




  const handleSubmit = (e) =>{
    e.preventDefault();
    var fg=4*mg+1.5*Ec+1.5*Ge+m*0.5+0.5*hg+f*1+ang*1;
    setMsg('Votre score est : '+fg)
    
  }


  return (<div>
    <h2>Bac économie gestion</h2> <br />


    <Grid justifyContent="center" alignItems="center" container spacing={2}>

      <Grid item >
        <TextField
          type="number"

          required
          id="mg"
          label="Moyenne globale"
          defaultValue="0"
          onChange={(e)=>setMg(e.target.value)}
        />

      </Grid>

      <Grid item >
        <TextField
          type="number"
          required
          id="e"
          label="Economie"
          defaultValue="0"
          onChange={(e)=>setEc(e.target.value)}
        />

      </Grid>
        <Grid item >
          <TextField
            type="number"
            required
            id="Ge"
            label="Gestion"
            defaultValue="0"
            onChange={(e)=>setGe(e.target.value)}
          />
  </Grid>
      <Grid item >
        <TextField
          type="number"
          required
          id="M"
          label="Mathématique"
          defaultValue="0"
          onChange={(e)=>setM(e.target.value)}
        />

      </Grid>

      <Grid item >
        <TextField
          type="number"
          required
          id="hg"
          label="Histoire géo"
          defaultValue="0"
          onChange={(e)=>setHg(e.target.value)}
        />

      </Grid>

     

      

    

      <Grid item >
        <TextField
          type="number"
          required
          id="f"
          label="Français"
          defaultValue="0"
          onChange={(e)=>setF(e.target.value)}
        />

      </Grid>

      <Grid item >
        <TextField
          type="number"
          required
          id="ang"
          label="Anglais"
          defaultValue="0"
          onChange={(e)=>setAng(e.target.value)}
        />

      </Grid>



    </Grid>
    <br />
    <Button variant="contained" color="success" onClick={handleSubmit}>Calculer</Button>
    <br />
    <br />
    {msg}

  </div>);
}

export default Eco;