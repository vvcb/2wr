import React from "react"
import "antd/dist/antd.css"

import { Switch, Collapse } from "antd"

export default {
  title: "Symptoms",
}

const { Panel } = Collapse

const data = {
  "rectal-bleeding": {
    header: "Rectal Bleeding",
    content: "Details of rectal bleeding",
  },
  "altered-bowels": {
    header: "Altered Bowels",
    content: "Details of altered bowels",
  },
}

class Symptoms extends React.Component {
  constructor(props) {
    super(props)
    const data = props.data
    this.state = {}
    Object.keys(data).map(
      (v, k) => (this.state[v] = { disabled: true, header: data[v].header })
    )
    this.handleSwitchChange = this.handleSwitchChange.bind(this)
  }

  handleSwitchChange = (checked, event) => {
    const panelKey = event.target.id.replace("-switch", "")
    this.setState({
      [panelKey]: {
        ...this.state[panelKey],
        disabled: !checked,
      },
    })
  }
  render() {
    console.log(this.state)

    return (
      <Collapse accordion>
        {Object.entries(data).map(e => {
          return (
            <Panel
              header={e[1].header}
              key={e[0]}
              id={e[0] + "-panel"}
              disabled={this.state[e[0]].disabled}
              extra={
                <Switch
                  id={e[0] + "-switch"}
                  onClick={(checked, event) => {
                    event.stopPropagation()
                  }}
                  onChange={this.handleSwitchChange}
                />
              }
            >
              {e[1].content}
            </Panel>
          )
        })}
      </Collapse>
    )
  }
}
export const SimpleChecked = () => <Symptoms data={data} />
export const SimpleUnchecked = () => <Switch />
