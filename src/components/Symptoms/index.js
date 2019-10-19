import { _Component as _RectalBleeding } from "./RectalBleeding/RectalBleeding"
import { _Component as _AlteredBowels } from "./AlteredBowels/AlteredBowels"
import { _Component as _WeightLoss } from "./WeightLoss/WeightLoss"
import data from "data/historyOptions.yaml"

function getInitialValues() {
  const initialValues = {}
  Object.entries(data).forEach(([k, v]) => {
    const { id, ...rest } = v
    initialValues[id] = {}
    Object.entries(rest).forEach(
      ([k1, v1]) => (initialValues[id][k1] = v1.initialValue)
    )
  })
  return initialValues
}
export const initialValues = getInitialValues()

export const RectalBleeding = _RectalBleeding
export const AlteredBowels = _AlteredBowels
export const WeightLoss = _WeightLoss
