import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const Accordion = props => {
  const [expanded, setExpanded] = React.useState(false)
  const handleChange = panel => {
    return function(event, isExpanded) {
      setExpanded(isExpanded ? panel : false)
    }
  }
  const { children } = props
  return (
    <>
      {children.map((Child, i) => (
        <Child
          expanded={expanded === `panel${i}`}
          onChange={handleChange(`panel${i}`)}
        />
      ))}
    </>
  )
}

export default Accordion
