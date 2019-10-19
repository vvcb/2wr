import React from "react"
import PropTypes from "prop-types"
import withStyles from "@material-ui/core/styles/withStyles"
import { withTheme } from "@material-ui/core/styles"
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles"
import CustomTheme from "./theme1.json"
import Container from "@material-ui/core/Container"

import AppBar from "@material-ui/core/AppBar"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import Paper from "@material-ui/core/Paper"
import Grid from "@material-ui/core/Grid"
import Typography from "@material-ui/core/Typography"
import Helmet from "react-helmet"

// const theme = createMuiTheme({
//   palette: {
//     primary: {
//       light: '#4f5b62',
//       main: '#263238',
//       dark: '#000a12',
//       contrastText: '#fff',
//     },
//     secondary: {
//       light: '#ff6434',
//       main: '#dd2c00',
//       dark: '#a30000',
//       contrastText: '#fff',
//     },
//   },
// });

const theme = createMuiTheme(CustomTheme)

const DefaultLayout = props => {
  const { classes, children } = props
  return (
    <MuiThemeProvider theme={theme}>
      <Helmet>
        <style type="text/css">{`
          html, 
          body,
          #___gatsby,
          #gatsby-focus-wrapper { height:100%;}
    `}</style>
      </Helmet>
      <AppBar className={classes.appBar} position="static" elevation={5}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Clinical Decision Support Tool
          </Typography>
          <Button href={"https://splyntor.ai"} color="inherit">
            Splyntor.AI
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="xl" className={classes.container}>
        {children}
      </Container>
    </MuiThemeProvider>
  )
}

DefaultLayout.propTypes = {
  // topLeft: PropTypes.node,
  // topRight: PropTypes.node,
  // bottomLeft: PropTypes.node,
  // bottomRight: PropTypes.node,
}

const styles = {
  root: {
    flexGrow: 1,
  },
  appBar: {
    paddingLeft: "10px",
    paddingRight: "10px",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    height: "100%",
  },
  paperContent: {
    padding: "5px",
    margin: "5px",
  },
}

export default withStyles(styles)(DefaultLayout)
