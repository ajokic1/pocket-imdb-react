import React from 'react';
import Spinner from 'react-loader-spinner'

function Loader({ size=100 }) {
  return (
    <Spinner type="Puff" color="#00BFFF" height={size} width={size} />
  )
}

export default Loader
