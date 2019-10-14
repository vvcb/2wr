// React
// ===========================================================================
import React from "react"
import PropTypes from "prop-types"

// material-ui
// ===========================================================================
import AppBar from "@material-ui/core/AppBar"
import Typography from "@material-ui/core/Typography"
import Toolbar from "@material-ui/core/Toolbar"
import Button from "@material-ui/core/Button"
import IconButton from "@material-ui/core/IconButton"
import MenuIcon from "@material-ui/icons/Menu"
import withStyles from "@material-ui/styles/withStyles"
// custom components
// ===========================================================================

// gatsby
// ===========================================================================
import { Link } from "gatsby"

// icons
// ===========================================================================

// images
// ===========================================================================

// styles
// ===========================================================================
const styles = {
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: "10px",
  },
  title: {
    flexGrow: 1,
  },
}

const Header = props => {
  const { classes, siteTitle } = props

  return (
    <div className={classes.root}>
      <AppBar position="static">
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
            {siteTitle}
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default withStyles(styles)(Header)
