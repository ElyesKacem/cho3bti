import logo from './logo.svg';
import './App.css';
import FullWidthTabs from './components/tabs';
import Main from './components/main/main';
import { Box, Container } from '@mui/material';
import Formulaire from './components/formulaire/formulaire';
import Science from './components/formulaire/science';


function App() {
  return (
    <div className="App">
      <header className="App-header">
     <h1>Choisir votre bac</h1>
     <Box
      sx={{  bgcolor: 'background.paper', display: 'flex', borderRadius:5,color:'black',marginBottom:30,padding:8,width:"70%"}}
    >

    <Container>


    {/* <div style={{backgroundColor:'white',color:'black'}}> */}
    <Science/>
    </Container>
    {/* </div> */}
</Box>
     {/* <FullWidthTabs></FullWidthTabs> */}
      </header>
    </div>
  );
}

export default App;
