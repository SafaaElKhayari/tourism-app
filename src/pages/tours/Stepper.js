import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';



function getSteps() {
  return['Medina', 'Kasbah Museum', 'Restaurant'];
}

export default function StepperPage() {
  
  const steps = getSteps();
  return (
    <div>
      <Stepper activeStep={2}>
        {steps.map((label) => {
          return (
            <Step  key={label} >
              <StepLabel size="10pt">{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
       
      </div>
    </div>
  );
}
