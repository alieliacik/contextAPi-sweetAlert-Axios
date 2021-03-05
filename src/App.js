import './App.css'

import { LoadingProvider } from './LoadingContext'
import Header from './Header'
import Footer from './Footer'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  & .swal-overlay {
    background-color: rgba(43, 165, 137, 0.45);
  }

  & .swal-modal {
    background-color: yellow;
    border: 13px solid blue;
  }
`
function App() {
  return (
    <LoadingProvider>
      <div className='App'>
        <GlobalStyle />
        <Header />
        <Footer />
      </div>
    </LoadingProvider>
  )
}

export default App
