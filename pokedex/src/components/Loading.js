import React from 'react';
import { PikaDot, LoadingWrapper, Header2} from './styles'

export default function Loading() {
  return (
    <LoadingWrapper>
        <Header2>Loading</Header2>
        <PikaDot delay="0s" />
        <PikaDot delay="0.1s" />
        <PikaDot delay="0.2s"/>
  </LoadingWrapper>
  )
}
