import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { 
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Button
} from '@material-ui/core';
import TextMenu from './textMenu';
import StyleMenu from './styleMenu';
import ActionMenu from './actionMenu';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const { handleUpdateComponents, deleteItem, component, views } = props;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const renderButton = (deleteItem) => {
    return ( <Button style={{ marginTop: 10 }}variant="contained" onClick={deleteItem}>Delete Item</Button>);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Text" {...a11yProps(0)} />
          <Tab label="Style" {...a11yProps(1)} />
          <Tab label="Actions" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <TextMenu
          handleUpdateComponents={handleUpdateComponents}
          component={component}
        />
        {renderButton(deleteItem)}
        
      </TabPanel>
      <TabPanel value={value} index={1}>
        <StyleMenu
          handleUpdateComponents={handleUpdateComponents}
          component={component}
        />
        {renderButton(deleteItem)}
      </TabPanel>
      <TabPanel value={value} index={2}>
        <ActionMenu
          handleUpdateComponents={handleUpdateComponents}
          component={component}
          views={views}
        />
        {renderButton(deleteItem)}
      </TabPanel>
    </div>
  );
}