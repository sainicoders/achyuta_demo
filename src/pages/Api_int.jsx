import React from 'react'
import { useState, useEffect } from 'react'


function api_int() {

    
        const [data, setData] = useState(null)
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState(null)
        
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await fetch('https://dummyjson.com/carts')
                    console.log("response",await
                    response.json())
                    console.log("result",await response.json())
                  
                    if (!response.ok) {
                        throw new Error('Network response was not ok')
                    }
                    const result = await response.json()
                    setData(result)
                } catch (err) {
                    setError(err.message)
                } finally {
                    setLoading(false)
                }
            }

            fetchData()
        }, [])
        
      
        
       
          
  return (
    <>
      <h1>deepak saini </h1>
    </>
  )
}

export default api_int
