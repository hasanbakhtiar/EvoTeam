import React from 'react'
import { Container } from 'react-bootstrap'
import AppUseImperativeHandle from './components/AppUseImperativeHandle'
import AppUseLayoutEffect from './components/AppUseLayoutEffect'

const App = () => {
  return (
    
    <Container className='mt-5'>
    <AppUseLayoutEffect />
    </Container>
    
  )
}

export default App