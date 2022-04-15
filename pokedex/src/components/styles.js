import styled, {keyframes} from 'styled-components'

const BounceAnimation = keyframes`
  50% { margin-bottom: 1rem }
`

export const LoadingWrapper = styled.div`
  height:25vh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
`

export const ListWrapper = styled.ul`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  > * {
    padding: 2px;
  }
`

export const ListItem = styled.li`
  font-family: "Courier New";
  padding-left: 5px;
  color: #ef476f;
`

export const Header2 = styled.h2`
  padding-bottom: 5px;
  font-family: "Courier New";
  font-weight: bolder;
  color: #073b4c;
`
export const PageBtns = styled.div`
  display: flex;
  justify-content: center;
`

export const Buttons = styled.button`
  margin: 5px;
  background-color: #ffd166;
  font-family: "Courier New";
  font-weight: bolder;
  color: #073b4c;
  border-radius: 5px;
  border: 1px solid #073b4c;
`

export const PikaDot = styled.div`
  background-image: url('react/tutorials/pokedex/assets/pikadot.png');
  border-radius: 50%;
  width: 0.50rem;
  height: 0.50rem;
  margin: 0 0.25rem;
  /*Animation*/
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${(props) => props.delay};
`

