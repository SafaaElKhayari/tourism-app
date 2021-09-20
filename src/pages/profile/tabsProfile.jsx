import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


const useStyles = makeStyles({
        root: {
          flexGrow: 1,
        },indicator: {
            backgroundColor: '#28857D',
          },
          text:{
              color :'yellow',
          },
        
      });
      

function TabsProfile({indexSetter}) {
    
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    indexSetter(newValue);
  };
  const tabStyle = {
    default_tab:{
        color: '#B6B5C3',
        backgroundColor: '#FFFFFF',
        fontSize: 15
    },
    active_tab:{
        color: "#28857D",
        fontSize: 16
        
    }
};
  const getStyle= (isActive)=> {
    return isActive ? tabStyle.active_tab : tabStyle.default_tab
}
    return (
 <div class="container-md main-tabs-container">
 <Paper className={`tabsContainer ${classes.root}`} >
            <Tabs
               inkBarStyle={{background: 'blue'}}
                value={value}
                onChange={handleChange}
                classes={{
                    indicator: classes.indicator,
                  }}
                textColor="primary"
                
                centered
            >
                <Tab style={ getStyle(value === 0) } label="Places visited" />
                <Tab style={ getStyle(value === 1) }   label="Tours followed" />
                <Tab  style={ getStyle(value === 2) }  label="Restaurants" />
                <Tab  style={ getStyle(value === 3) }  label="Hotels" />
            </Tabs>
     </Paper>
   
 </div>
        
  );
}
  



export default TabsProfile
