import React from 'react'
import Cover from './Cover'
const ComicInfo = hero => {
  return (
    <>
    <h1>{hero?.hero?.name}</h1>
    <h2>#{hero?.hero?.id}</h2>
    <h2>{hero?.hero?.description}</h2>
    <Cover cover={hero?.hero?.thumbnail} />
    </>
  )
}

export default ComicInfo