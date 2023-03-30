import { Button } from '@mui/material'
import React from 'react'
import { useHistory } from 'react-router-dom'

function Home() {
  const go = useHistory()
  return (
    <div>Home

      <Button variant='contained' onClick={() => window.location.href = "/login"}>
        GO to login
      </Button>
    </div>
  )
}

export default Home