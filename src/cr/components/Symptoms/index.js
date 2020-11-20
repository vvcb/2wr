import { _Component as _RectalBleeding } from './RectalBleeding/RectalBleeding'
import { _Component as _AlteredBowels } from './AlteredBowels/AlteredBowels'
import { _Component as _WeightLoss } from './WeightLoss/WeightLoss'
import { _Component as _AdbdoPain } from './AbdoPain/AbdoPain'
import { _Component as _Anaemia } from './Anaemia/Anaemia'
import data from 'cr/data/symptoms.yaml'
import dataAbdoPain from 'cr/components/Symptoms/AbdoPain/dataAbdoPain.yaml'
import dataEndocrine from 'cr/components/PastHistory/Endocrine/dataEndocrine.yaml'


function getInitialValues()
{
  Object.assign(data, dataAbdoPain, dataEndocrine)
  const initialValues = {}
  Object.entries(data).forEach(([k, v]) => {
    const { id, ...rest } = v
    initialValues[id] = { duration: { value: '', units: 'weeks' } }
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
export const AbdoPain = _AdbdoPain
export const Anaemia = _Anaemia