import React from 'react';
import { PageBtns, Buttons} from './styles'

export default function Pagination({nxtPage, prvPage}) {
  return (
    <PageBtns>
        {prvPage && <Buttons onClick={prvPage}>Prev</Buttons>}
        {nxtPage && <Buttons onClick={nxtPage}>Next</Buttons>}
    </PageBtns>
  )
}
