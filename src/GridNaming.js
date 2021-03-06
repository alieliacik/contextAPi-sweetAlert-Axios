import styled from 'styled-components'

const StyledGrid = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-rows: [header-start] 100px [header-end box-start] 200px [box-end main-start] 400px [main-end footer-start] 100px [footer-end];
  grid-template-columns: repeat(3, [col-start] 1fr [col-end]) 200px [grid-end];

  height: 80vh;
  padding: 15px;

  & > * {
    background-color: red;
    display: grid;
    justify-content: center;
    align-items: center;
    color: white;
    font-weight: bold;
  }

  .header {
    grid-column: col-start 1 / grid-end;
  }
  .sidebar {
    grid-column: col-end 3 / grid-end;
    grid-row: box-start / main-end;
  }
  .main {
    grid-column: col-start 1 / col-end 3;
  }
  .footer {
    grid-column: col-start 1 / grid-end;
  }
`

const Grid = () => {
  return (
    <StyledGrid>
      <div className='header'>Header</div>
      <div className='box1'>Box</div>
      <div className='box2'>Box</div>
      <div className='box3'>Box</div>
      <div className='sidebar'>Sidebar</div>
      <div className='main'>Main</div>
      <div className='footer'>Footer</div>
    </StyledGrid>
  )
}

export default Grid
