import React from 'react'
import Child from './Child'

const Parent = () => {

    const style = {
        border: '1px solid blue'
    }

    const message: string = "Hello from parent component";

  return (
    <div style={style}>
        
        <h4>Parent</h4>

        <Child message={message} />

    </div>
  )
}

export default Parent