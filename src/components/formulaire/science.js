import React from 'react';
import TextField from '@mui/material/TextField';
import { Container, Grid } from '@mui/material';
const Science = () => {
    return ( <div>
        <h2>Veuillez saisir vos notes</h2> <br />
        <Container>

        <Grid container spacing={2} style={{paddingLeft:50}}>
        
<Grid item >
<TextField
type="number"

          required
          id="mg"
          label="Moyenne globale"
          defaultValue="0"
        />

</Grid>

<Grid item >
<TextField
            type="number"
          required
          id="m"
          label="Mathématique"
          defaultValue="0"
        />

</Grid>

<Grid item >
<TextField
            type="number"
          required
          id="sp"
          label="Science physique"
          defaultValue="0"
        />

</Grid>
<Grid item >
<TextField
            type="number"
          required
          id="svt"
          label="SVT"
          defaultValue="0"
        />

</Grid>

<Grid item >
<TextField
            type="number"
          required
          id="f"
          label="Français"
          defaultValue="0"
        />

</Grid>

<Grid item >
<TextField
            type="number"
          required
          id="ang"
          label="Anglais"
          defaultValue="0"
        />

</Grid>



    </Grid>
        </Container>
    </div> );
}
 
export default Science;