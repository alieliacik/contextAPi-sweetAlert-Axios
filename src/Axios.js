import { useState, useEffect } from 'react'
import axios from 'axios'
import swal from 'sweetalert'

const Axios = () => {
  const [textValue, setTextValue] = useState()
  const [serverValues, setServerValues] = useState([])
  const [isLoading, setIsLoading] = useState()
  const sendDataHandler = () => {
    setIsLoading(true)
    axios
      .post('https://axios-6708b-default-rtdb.firebaseio.com/.json', {
        data: textValue,
      })
      .then(() => swal('Succes'))
      .catch((err) => swal(err.message))
  }

  const textChangeHandler = (e) => {
    setTextValue(e.target.value)
  }

  const deleteValueHandler = (id) => {
    setIsLoading(true)
    axios.delete(`https://axios-6708b-default-rtdb.firebaseio.com/${id}.json`)
  }

  useEffect(() => {
    axios
      .get('https://axios-6708b-default-rtdb.firebaseio.com/.json')
      .then((res) => {
        let modifiedServerData = []
        for (let key in res.data) {
          modifiedServerData.push({
            id: key,
            data: res.data[key].data,
          })
        }
        setServerValues(modifiedServerData)
        setIsLoading(false)
      })
      .catch((err) => swal(err.message))
  }, [isLoading])

  console.log('infinite loop tracker')
  return (
    <div className='App-header'>
      Axios
      <div>
        <input onChange={(e) => textChangeHandler(e)} type='text' />
        <div>
          <button onClick={() => sendDataHandler()}>Send</button>
        </div>
        {serverValues.length > 0 &&
          serverValues.map((e) =>
            isLoading ? (
              <p>loading...</p>
            ) : (
              <p onClick={() => deleteValueHandler(e.id)} key={e.id}>
                {e.data}
              </p>
            )
          )}
      </div>
    </div>
  )
}
export default Axios
