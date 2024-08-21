import React from 'react';
import {useRouteError} from 'react-router-dom'

const Error = () => {
    const error = useRouteError()
  return (
    <div>Oops Something went wrong {error.status}</div>
  )
}

export default Error