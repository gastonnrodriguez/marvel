import React from 'react'

const Cover = cover => {
    const imageUrl = `${cover?.cover?.path}.${cover?.cover?.extension}`
  return (
    <div>
        <img src={imageUrl} />
    </div>
  )
}

export default Cover