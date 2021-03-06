import styled from 'styled-components'

const StyledMinMax = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 80vh;
  padding: 20px;
  & > * {
    background-color: red;
    display: grid;
    color: white;
    font-weight: bold;
    border: 1px solid white;
    font-size: 30px;
  }
  display: grid;
  /* max-content doesn't break the lines, min-content does 
  minmax specifies min and max width */
  /* grid-template-rows: repeat(2, minmax(150px, min-content));
  grid-template-columns: repeat(3, minmax(100px, 30%)) 200px; */
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`

const MinMax = () => {
  return (
    <StyledMinMax>
      <div className='1'>1</div>
      <div className='2'>2</div>
      <div className='3'>3</div>
      <div className='4'>4</div>
      <div className='3'>3</div>
      <div className='4'>4</div>
    </StyledMinMax>
  )
}

export default MinMax
