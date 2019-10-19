import React from "react"
import { connect, getIn } from "formik"
import withStyles from "@material-ui/core/styles/withStyles"

const Accordion = props => {
  const formikState = getIn(props.formik, props.name)
  const [expanded, setExpanded] = React.useState(false)
  const handleChange = panel => {
    return function(event, isExpanded) {
      setExpanded(isExpanded ? panel : false)
    }
  }
  const { children } = props

  return (
    <>
      {/* {React.Children.map(children, (Child, i) =>
        <Child
          expanded={expanded}
          onChange={handleChange}
        />)
      } */}
    </>
  )
}

export default connect(Accordion)
