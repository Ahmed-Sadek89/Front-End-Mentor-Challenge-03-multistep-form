import React from 'react'

type propTypes = {h1: string, p: string}
const PageHAndP = ({h1, p}: propTypes) => {
  return (
    <div className='pageHAndP'>
        <h1>{h1}</h1>
        <p>{p}</p>
    </div>
  )
}

export default PageHAndP