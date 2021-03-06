import styled from 'styled-components'

const StyledGrid = styled.div`
  height: 80vh;
  padding: 20px;
  & > * {
    background-color: red;
    display: grid;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
  }

  display: grid;
  grid-gap: 20px;
  grid-template-rows: repeat(2, 150px);
  grid-template-columns: repeat(2, 1fr);

  grid-auto-flow: row;
  grid-auto-rows: 20px;

  /* 
  adjusts automatically added grid width
  grid-auto-flow: column;
  grid-auto-columns: 0.2fr; 
  */
`

const GridExplicit = () => {
  return (
    <StyledGrid>
      <div className='1'>1</div>
      <div className='2'>2</div>
      <div className='3'>3</div>
      <div className='4'>4</div>
      <div className='5'>5</div>
      <div className='6'>6</div>
      <div className='7'>7</div>
      <div className='8'>8</div>
    </StyledGrid>
  )
}

export default GridExplicit
