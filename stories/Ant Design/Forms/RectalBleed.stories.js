import React from "react"
import "antd/dist/antd.css"

import { Switch, Radio, Form } from "antd"

export default {
  title: "Ant Design|Components/Rectal bleeding",
}

const optionsCharacter = [
  { value: "fresh", label: "Fresh" },
  { value: "dark", label: "Dark" },
  { value: "mixed", label: "Mixed" },
]
export const RectalBleed = props => {
  return (
    <>
      <Form.Item label="Character" labelAlign="left">
        <Radio.Group
          buttonStyle="solid"
          id="rectal-bleeding-character"
          name="rectalbleeding.character"
          onChange={e => console.log(e.target.value)}
        >
          {Object.entries(optionsCharacter).map((v, k) => (
            <Radio.Button value={v[1].value}> {v[1].label}</Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Character">
        <Radio.Group
          buttonStyle="solid"
          id="rectal-bleeding-character"
          name="rectalbleeding.character"
          onChange={e => console.log(e.target.value)}
        >
          {Object.entries(optionsCharacter).map((v, k) => (
            <Radio.Button value={v[1].value}> {v[1].label}</Radio.Button>
          ))}
        </Radio.Group>
      </Form.Item>
    </>
  )
}

export const RB = () => <RectalBleed />
