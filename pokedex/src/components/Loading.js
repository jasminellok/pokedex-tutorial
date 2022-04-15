import React from 'react';
import { PikaDot, LoadingWrapper, Header2} from './styles'
import pikaball from '../assets/pikadot.png';

export default function Loading() {
  return (
    <LoadingWrapper>
        <Header2>Loading</Header2>
        <PikaDot src={pikaball} delay="0s" />
        <PikaDot src={pikaball} delay="0.1s" />
        <PikaDot src={pikaball} delay="0.2s"/>
  </LoadingWrapper>
  )
}
