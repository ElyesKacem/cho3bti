import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import { Grid } from '@mui/material';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Science from './formulaire/science';
import Math from './formulaire/math';
import Eco from './formulaire/eco';
import Info1 from './formulaire/info1';
import Info2 from './formulaire/info2';
import Lettre from './formulaire/lettre';
import Technique from './formulaire/technique';


import Main from './main/main';


const steps = ['Choisir section', 'Entrer votre notes'];

export default function StepperScore() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});
  const [sectionBac, setSectionBac] = React.useState(0);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
        // find the first step that has been completed
        steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
      <Grid container direction={"column"} >
        <Grid item>
          <Stepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
              <Step key={label} completed={completed[index]}>
                <StepButton color="inherit" onClick={handleStep(index)}>
                  {label}
                </StepButton>
              </Step>
            ))}
          </Stepper>
        </Grid>
        
            {activeStep === 0 ?
            
              <Main sx={{ mt: 2, mb: 1 }} ssb={setSectionBac} sb={sectionBac}></Main>
              : sectionBac === 1 ? <Math sx={{ mt: 2, mb: 1 }}></Math>
              : sectionBac === 2 ? <Science sx={{ mt: 2, mb: 1 }}></Science>
              : sectionBac === 3 ? <Technique sx={{ mt: 2, mb: 1 }}></Technique>
              : sectionBac === 4 ? <Info1 sx={{ mt: 2, mb: 1 }}></Info1>
              : sectionBac === 5 ? <Info2 sx={{ mt: 2, mb: 1 }}></Info2>
              : sectionBac === 6 ? <Lettre sx={{ mt: 2, mb: 1 }}></Lettre>
              : sectionBac === 6 ? <Eco sx={{ mt: 2, mb: 1 }}></Eco>
              : <div>Veuillez choisir une section</div>
            }



            <Grid item sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Grid>
      </Grid>
  );
}
