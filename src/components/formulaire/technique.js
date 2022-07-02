import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';

const Technique = () => {

  const [msg, setMsg] = useState('')
  const [mg, setMg] = useState(0);
  const [m, setM] = useState(0);
  const [sp, setSp] = useState(0);
  const [te, setTe] = useState(0);
  const [f, setF] = useState(0);
  const [ang, setAng] = useState(0);




  const handleSubmit = (e) =>{
    e.preventDefault();
    var fg=4*mg+1.5*te+1.5*m+1*sp+f*1+ang*1;
    setMsg('Votre score est : '+fg)
    
  }


  return (<div>
    <h2>Bac Technique</h2> <br />


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
            id="svt"
            label="Technique"
            defaultValue="0"
            onChange={(e)=>setTe(e.target.value)}
          />

      <Grid item >
        <TextField
          type="number"
          required
          id="m"
          label="Mathématique"
          defaultValue="0"
          onChange={(e)=>setM(e.target.value)}
        />

      </Grid>

      <Grid item >
        <TextField
          type="number"
          required
          id="sp"
          label="Science physique"
          defaultValue="0"
          onChange={(e)=>setSp(e.target.value)}
        />

      </Grid>

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

export default Technique;