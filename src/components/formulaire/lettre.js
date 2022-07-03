import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Grid } from '@mui/material';

const Lettre = () => {

  const [msg, setMsg] = useState('')
  const [mg, setMg] = useState(0);
  const [a, setA] = useState(0);
  const [ph, setPh] = useState(0);
  const [hg, setHg] = useState(0);
  const [f, setF] = useState(0);
  const [ang, setAng] = useState(0);




  const handleSubmit = (e) =>{
    e.preventDefault();
    var fg=4*mg+1.5*a+1.5*ph+1*hg+f*1+ang*1;
    setMsg('Votre score est : '+fg)
    
  }


  return (<div>
    <h2>Bac Lettre</h2> <br />


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
          id="a"
          label="Arabe"
          defaultValue="0"
          onChange={(e)=>setA(e.target.value)}
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

      <Grid item >
        <TextField
          type="number"
          required
          id="Hg"
          label="Histoire Géographie"
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

export default Lettre;