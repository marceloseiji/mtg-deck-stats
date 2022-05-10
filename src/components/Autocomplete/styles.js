import styled from 'styled-components'
import React, { useEffect, useState, Fragment } from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import CircularProgress from '@mui/material/CircularProgress'

function Asynchronous({
  label = 'any',
  data = [],
  setData = () => {},
  loading = false,
  setInputTypedValue = () => {},
  noOptionsText = 'No options'
}) {
  const [open, setOpen] = useState(false)
  const [options, setOptions] = useState([])

  useEffect(() => {
    setOptions([...data])
  }, [data])

  useEffect(() => {
    if (!open) {
      clear()
    }
  }, [open])

  const clear = () => {
    setOptions([])
    setData([])
    setInputTypedValue('')
  }

  return (
    <Autocomplete
      id="autocompleteAsync"
      sx={{ width: 300 }}
      open={open}
      onOpen={() => {
        setOpen(true)
      }}
      onClose={() => {
        setOpen(false)
        clear()
      }}
      onInputChange={(event) => setInputTypedValue(event.target.value)}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      noOptionsText={noOptionsText}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <Fragment>
                {loading ? (
                  <CircularProgress color="inherit" size={20} />
                ) : null}
                {params.InputProps.endAdornment}
              </Fragment>
            )
          }}
        />
      )}
    />
  )
}

const MtgAutocomplete = styled(Asynchronous)``
export default MtgAutocomplete
