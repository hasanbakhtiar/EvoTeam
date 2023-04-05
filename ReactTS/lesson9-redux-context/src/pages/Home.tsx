import React, { useEffect, useId } from 'react'

const Home:React.FC = () => {
  const passwordHintId = useId();
  console.log(passwordHintId+crypto.randomUUID());
  console.log(crypto.randomUUID());
  
  
  return (
    <div>
      <input aria-describedby={passwordHintId+crypto.randomUUID} type="password" />
    </div>
  )
}

export default Home