import React, { useState } from "react"
import { Typography, Grid, GridList, GridListTile } from "@material-ui/core"
import CustomRadio from "components/CustomRadio"
import AccordionPanel from "components/Accordion/AccordionPanel"
import { makeFieldName } from "utils/formatters"

const SymptomTemplate = props => {
  const { data, makeSummary, ...rest } = props
  const { id, is, ...fields } = data
  return (
    <AccordionPanel
      name={id}
      title={is.label}
      makeSummary={makeSummary}
      {...rest}
    >
      <Grid container spacing={2}>
        {Object.entries(fields).map(([k, v]) => {
          const fieldName = makeFieldName(id, k)
          return (
            <Grid item sm={4} md={3} key={fieldName}>
              <CustomRadio fieldName={fieldName} {...v} />
            </Grid>
          )
        })}
      </Grid>
    </AccordionPanel>
  )
}

export default SymptomTemplate
