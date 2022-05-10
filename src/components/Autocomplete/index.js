import React from 'react'
import MtgAutocomplete from './styles'

const Autocomplete = ({
  label,
  data,
  setInputTypedValue,
  setData,
  loading,
  noOptionsText
}) => {
  return (
    <MtgAutocomplete
      label={label}
      data={data}
      setData={setData}
      setInputTypedValue={setInputTypedValue}
      loading={loading}
      noOptionsText={noOptionsText}
    />
  )
}

export default Autocomplete
