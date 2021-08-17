import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  flex : {
      display : "flex",
      justifyContent : "space-between",
    
      margin : "auto",
      flex : 1,
  },
  tabPanel : {
      height : "200px",
      overflow : "scroll"
  },
  tabColor : { 
    '&:focus':{
      backgroundColor : "green",
      color : "white",
    },
  }
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          className = {classes.flex}
        >
          <Tab label="Our Mission"  className = {classes.tabColor} />
          <Tab label="Our Goal" className = {classes.tabColor}/>
          <Tab label="Our Values" className = {classes.tabColor}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0} className = {classes.tabPanel}>
      <Typography paragraph  justify>
      overflow: scroll
                 The component maps the variant prop to a range of different HTML element types.
                 For instance, subtitle1 to If you wish to change that mapping, you can provide your own. 
                 Alternatively, you can use the component prop.
                 overflow: scroll    The component maps the variant prop to a range of different HTML element types.
                 For instance, subtitle1 to If you wish to change that mapping, you can provide your own. 
                 Alternatively, you can use the component prop.    The component maps the variant prop to a range of different HTML element types.
                 For instance, subtitle1 to If you wish to change that mapping, you can provide your own. 
                 Alternatively, you can use the component prop.    The component maps the variant prop to a range of different HTML element types.
                 For instance, subtitle1 to If you wish to change that mapping, you can provide your own. 
                 Alternatively, you can use the component prop.
                </Typography>
      </TabPanel>
      <TabPanel value={value} index={1} className = {classes.tabPanel}>
      <Typography paragraph  justify>
      Before you move on with other things, make sure that you go to Settings » Permalinks page in WordPress admin area and click the save button without making any changes. This will generate a new .htaccess file for you with proper rewrite rules to ensure that your post pages do not return a 404 error.
      The component maps the variant prop to a range of different HTML element types.
                 For instance, subtitle1 to If you wish to change that mapping, you can provide your own. 
                 Alternatively, you can use the component prop.
                 overflow: scroll    The component maps the variant prop to a range of different HTML element types.
                 For instance, subtitle1 to If you wish to change that mapping, you can provide your own. 
                 Alternatively, you can use the component prop.    The component maps the variant prop to a range of different HTML element types.
                 For instance, subtitle1 to If you wish to change that mapping, you can provide your own. 
                 Alternatively, you can use the component prop.    The component maps the variant prop to a range of different HTML element types.
                 For instance, subtitle1 to If you wish to change that mapping, you can provide your own. 
                 Alternatively, you can use the component prop.
If checking for the corrupt .htaccess file solution did not work for you, then you need to continue reading this article.
                </Typography>
      </TabPanel>
      <TabPanel value={value} index={2} className = {classes.tabPanel}>
      <Typography paragraph  justify>
                The component maps the variant prop to a range of different HTML element types.
                 For instance, subtitle1 to If you wish to change that mapping, you can provide your own. 
                 Alternatively, you can use the component prop.
                 The component maps the variant prop to a range of different HTML element types.
                 For instance, subtitle1 to If you wish to change that mapping, you can provide your own. 
                 Alternatively, you can use the component prop.
                </Typography>
      </TabPanel>
    </div>
  );
}
