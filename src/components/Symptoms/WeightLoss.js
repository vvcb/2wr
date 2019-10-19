import React from "react"
import FormItem from "../docs/FormikForm/FormItem"
import Duration from "../docs/Inputs/Duration"
import CustomRadio from "../docs/Inputs/CustomRadio"

const data = {
  wtlossSeverity: {
    id: "wtlossSeverity",
    component: CustomRadio,
    componentProps: {
      data: {
        mild: "Mild",
        moderate: "Moderate",
        severe: (
          <span style={{ color: "red", fontWeight: "bold" }}>Severe</span>
        ),
      },
    },
    formItemOptions: {
      label: "Severity",
    },
  },
  wtlossCause: {
    id: "wtlossCause",
    component: CustomRadio,
    componentProps: {
      data: {
        none: "Unexplained",
        intentional: "Intentional",
        other: "Other Known Cause",
      },
    },
    formItemOptions: {
      label: "Possible Cause",
    },
  },
}

export default props => {
  const { getFieldDecorator } = props
  return (
    <>
      {/* <FormItem fieldData={data.wtloss}
        getFieldDecorator={getFieldDecorator} /> */}
      <Duration id="wtloss" getFieldDecorator={getFieldDecorator} />
      <FormItem
        fieldData={data.wtlossSeverity}
        getFieldDecorator={getFieldDecorator}
      />
      <FormItem
        fieldData={data.wtlossCause}
        getFieldDecorator={getFieldDecorator}
      />
    </>
  )
}
