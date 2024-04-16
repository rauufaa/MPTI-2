import React, { useEffect } from 'react'

function Home({title}) {
  useEffect(()=>{
    document.title = title
  }, [])
  return (
    <div>Home</div>
  )
}

export default Home