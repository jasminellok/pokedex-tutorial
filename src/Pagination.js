import React from 'react'

export default function Pagination({nxtPage, prvPage}) {
  return (
    <div>
        {prvPage && <button onClick={prvPage}>Prev</button>}
        {nxtPage && <button onClick={nxtPage}>Next</button>}
    </div>
  )
}
