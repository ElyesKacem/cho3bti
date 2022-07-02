import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';

const Sport = () => {

  const [msg, setMsg] = useState('')
  const [mg, setMg] = useState(0);
  const [sb, setSb] = useState(0);
 const [spSport, setSpSport] = useState(0);
 const [ep, setEp] = useState(0);
 const [sp, setSp] = useState(0);
 const [ph, setPh] = useState(0);

  const [f, setF] = useState(0);
  const [ang, setAng] = useState(0);




  const handleSubmit = (e) =>{
    e.preventDefault();
    var fg=4*mg+1.5*sb+1*spSport+0.5*ep+0.5*sp+0.5*ph+f*1+ang*1;
    setMsg('Votre score est : '+fg)
    
  }


  return (<div>
    <h2>Bac sport</h2> <br />


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
          id="sb"
          label="Science béo"
          defaultValue="0"
          onChange={(e)=>setSb(e.target.value)}
        />

      </Grid>
        <Grid item >
          <TextField
            type="number"
            required
            id="spp"
            label="sp-sport"
            defaultValue="0"
            onChange={(e)=>setSpSport(e.target.value)}
          />

      <Grid item >
        <TextField
          type="number"
          required
          id="M"
          label="Ep"
          defaultValue="0"
          onChange={(e)=>setEp(e.target.value)}
        />

      </Grid>

      <Grid item >
        <TextField
          type="number"
          required
          id="sp"
          label="Science Physique"
          defaultValue="0"
          onChange={(e)=>setSp(e.target.value)}
        />

      </Grid>
      <Grid item >
        <TextField
          type="number"
          required
          id="ph"
          label="Phylosophie"
          defaultValue="0"
          onChange={(e)=>setPh(e.target.value)}
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

export default Sport;