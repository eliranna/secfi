import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import CurrencyExchangePanel from './CurrencyExchangePanel';
import CurrencyExchangeRate from './CurrencyExchangeRate';
import Headline from './Headline';
import ExchangeRateChart from './ExchangeRateChart';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Made for '}
      <Link color="inherit" href="https://www.secfi.com/">
        Secfi
      </Link>
      {' by '}
      <Link color="inherit" href="https://enatan.dev">
        Eliran Natan
      </Link>
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.background.default
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'rgb(78 88 125 / 10%) 0px 1px 54px, rgb(48 66 138 / 7%) 20px 21px 73px'
  },
  fixedHeight: {
    height: 440,
  },
}));

type CurrencyExchangePanelInput = {
  fromCurrency: string,
  targetCurrency: string,
  amount: string
}

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [fromCurrency, setFromCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amount, setAmount] = useState("");

  const handleCurrencyExchangePanelInput = ({fromCurrency, targetCurrency, amount}: CurrencyExchangePanelInput) => {
    if (!fromCurrency || !targetCurrency || !amount) {
      return 
    }
    setFromCurrency(fromCurrency);
    setTargetCurrency(targetCurrency);
    setAmount(amount);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          
          <Grid container spacing={3}>
            {/* Headline */}
            <Grid item xs={12}>
              <Headline>
                Dicover foreign exchange rates.
              </Headline>
            </Grid>                
            {/* Exchange Rate Panel */}
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                <CurrencyExchangePanel onInput={handleCurrencyExchangePanelInput}/>
              </Paper>
            </Grid>              
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper className={fixedHeightPaper}>
                <ExchangeRateChart fromCurrency={fromCurrency} targetCurrency={targetCurrency}/>
              </Paper>
            </Grid>
            {/* Exchange Rate */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper className={fixedHeightPaper}>
                {fromCurrency && targetCurrency && amount && 
                    <CurrencyExchangeRate fromCurrency={fromCurrency} targetCurrency={targetCurrency} amount={amount}/>
                }
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </main>
    </div>
  );
}