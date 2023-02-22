import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from './components/Carousel'
import Mode from './components/Mode'
import MultiLang from './components/MultiLang'

const App = () => {
  return (
    <Container>
      <Mode />
      <Carousel />
      <MultiLang />
    </Container>
  )
}

export default App