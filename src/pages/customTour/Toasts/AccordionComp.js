import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import  './ToastTrips.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function AccordionComp() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Departure details</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {/* pickup info */}
          we pick up travellers from their Hotels also for the bookings under the option starting from Meknes we can pick up the Customers from their Hotel in Meknes .
          Hotel pickup is offered. View the hotel list on our checkout page to see if yours is included among the pickup points.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Duration</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          12h
          </Typography>
        </AccordionDetails>
      </Accordion>
     
    <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon/>}
      aria-controls="panel2a-content"
      id="panel2a-header"
    >
      <Typography className={classes.heading}>Price information </Typography>
    </AccordionSummary>
    <AccordionDetails>
      <Typography>
    <div>  
      {/* price description */}
    The starting price is EUR 310 per person when 2 persons travel together on a private basis and transport in 4wd Landcruiser.
    For bigger groups, please contact us for price.
    <br />
    
    Included:
    <ul>
      {/* included details*/}
    <li> 2 night in Hôtel Parador </li>
    <li> Guide/driver</li>
    <li>2 dinners</li>
    <li>2 breakfasts</li>
    <li> Private transport in 4wd Landcruiser</li>
    </ul>
   
   
    Not included:
    <ul>
      {/* {/* not included details*/} 
    <li> Lunches</li>
    <li>Drink</li>
    <li>Tip</li>
    </ul>
   
    </div>
      </Typography>
    </AccordionDetails>
  </Accordion>
  <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon/>}
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <Typography className={classes.heading}>contact</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
        Call the number below and use the product code: 32300P20
        {/* contact phone number */}
        Call +1 855 275 5071
        </Typography>
      </AccordionDetails>
    </Accordion>
    </div>
  );
}