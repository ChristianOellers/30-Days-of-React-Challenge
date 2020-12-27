import { useState, useEffect } from 'react'

const useFetch = (url) => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const data = await response.json()

        console.log(data);
        setData(data)
      }
      catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [url])

  return data
}


export default useFetch
