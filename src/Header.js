import { useContext } from 'react'
import swal from 'sweetalert'
import { LoadingContext } from './LoadingContext'

const Header = () => {
  const [isLoading, setIsLoading] = useContext(LoadingContext)
  return (
    <div
      onClick={() => setIsLoading((prevState) => !prevState)}
      className='App-header'
    >
      Header
      {isLoading ? ' isLoading' : ' isNotLoading'}
      <p
        onClick={() =>
          swal('Hello World', {
            buttons: ['Yes', 'No'],
            icon: 'success',
            //   timer: 1500,
          })
        }
      >
        SweatAlert
      </p>
    </div>
  )
}

export default Header
