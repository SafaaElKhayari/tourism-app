import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import outa from '../../../assets/outa.jpg'
import Typography from '@material-ui/core/Typography';
import medina from '../../../assets/Chefchaouen medina.jpg'
import RasElMa from '../../../assets/Chefchaouen ras el ma.jpg'
import  './ToastTrips.css';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },step: {
    "& $completed": {
      color: "#28857d"
    },
    "& $active": {
      color: "black"
    },
    "& $disabled": {
      color: "red"
    }}, 
    alternativeLabel: {},
    active: {}, //needed so that the &$active tag works
    completed: {},
    disabled: {},
    labelContainer: {
      "& $alternativeLabel": {
        marginTop: 0
      }
    },
}));

function getSteps() {
  return ['Station 1', 'Station 2', 'Station 3'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <div>
      <h2 className="title-stepper">Medina</h2> 
      <img className="img-stepper" src={medina} alt="" />
      <h5 className="desc-stepper card-text">Beautiful blue city with a rich history - a feast for the eyes with amazing views and unique hand made crafts. You will find very interesting street art too.</h5>
      </div>;
    case 1:
      return <div>
      <h2 className="title-stepper">Ras el-Maa</h2> 
      <img  className="img-stepper" src={RasElMa} alt="" />
      <h5 className="desc-stepper card-text"> The waterfall of Ras el-Maa is just beyond the far Northeastern gate of Chefchaouen Medina. It’s here, where the water comes gushing out of the mountain, that local women come to do their washing. The sound of the water and the verdant hills provide a sudden, strong dose of nature.</h5>
      </div>;
    case 2:
      return <div>
      <h2 className="title-stepper">Place Outa el Hammam</h2> 
      <img className="img-stepper"  src={outa} alt="" />
      <h5 className="desc-stepper card-text">The Kasbah dominates the area. It is a fortress built in the late fifteenth century by Sultan Ali ben Rachid to protect the town and offer shelter from plundering Rifian tribes. There is also an interesting mosque to visit </h5>
      </div>;
      
    default:
      return 'Unknown step';
  }
}

export default function StepperToastTrips() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(3);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}> 
    {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>click discover to see stations of the tour</Typography>
          <Button onClick={handleReset} className="discover-places-btn" >
            discover
          </Button>
        </Paper>
      )}
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label} classes={{
            root: classes.step,
            completed: classes.completed,
            active: classes.active
          }}>
            <StepLabel classes={{
                alternativeLabel: classes.alternativeLabel,
                labelContainer: classes.labelContainer
              }}
              StepIconProps={{
                classes: {
                  root: classes.step,
                  completed: classes.completed,
                  active: classes.active,
                  disabled: classes.disabled
                }
              }}>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    className={classes.button}
                    style={{ backgroundColor: "#009688" }}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
     
     
    </div>
  );
}
