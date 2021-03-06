import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  height: 80vh;
  border: 1px solid black;

  & > * {
    background-color: red;
  }
`

const Grid = () => {
  return (
    <StyledGrid>
      <div className='header'></div>
      <div className='box1'></div>
      <div className='box2'></div>
      <div className='box3'></div>
      <div className='sidebar'></div>
      <div className='main'></div>
      <div className='footer'></div>
    </StyledGrid>
  )
}

export default Grid
