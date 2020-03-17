export const styles = {
  body: {
    background: '#111',
    color: '#fff',
    fontFamily: 'Courier New, monospace',
    fontSize: 15,
    minHeight: '100vh',
  },

  center: {
    display: 'flex',
    minHeight: '100vh',
  },

  radioGroup: {
    margin: 'auto',
    display: 'flex',
    '@media (maxWidth: 48em)': {
      flexDirection: 'column',
      alignItems: 'flex-start',
      textAlign: 'left',
    },
  },

  radioGroupLabel: {
    display: 'block',
    width: '100%',
    margin: '10px 0',
  },

  radioLabel: {
    position: 'relative',
    display: 'inline-block',
    margin: 10,

    '@media (maxWidth: 48em)': {
      display: 'block',
      margin: '10px 0',
    },

    input: {
      opacity: 0,
      position: 'absolute',
    },

    innerLabel: {
      position: 'relative',
      display: 'inline-blocke',
      paddingLeft: 40,

      '&:before': {
        content: "'",
        position: 'absolute',
        left: 0,
        bottom: 0,
        borderBottom: '1px solid red',
        width: 30,
        transition: 'border-bottom 0.5s ease',
      },
    },

    '& $input:focus ~ $innerLabel': {
      '&:before': {
        borderBottom: '1px solid rgba(255, 255, 255, 0.75)',
      },
    },

    '& $input:checked ~ $innerLabel': {
      '&:after': {
        content: '\u2713',
        color: '#fff',
        position: 'absolute',
        fontSize: 12,
        left: 12,
        top: 1,
      },
    },
  },
}
