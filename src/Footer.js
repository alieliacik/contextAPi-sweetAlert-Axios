import { useContext } from 'react'
import { LoadingContext } from './LoadingContext'
const Footer = () => {
  const [isLoading, setIsLoading] = useContext(LoadingContext)
  return (
    <div onClick={() => setIsLoading((prevState) => !prevState)}>
      Footer {isLoading ? 'A' : 'B'}
    </div>
  )
}

export default Footer
