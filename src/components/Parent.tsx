import { useState } from "react";
import FirstChild from "./FirstChild";
import SecondChild from "./SecondChild";


const Parent = () => {

    const [firstChildMessage, setFirstChildMessage] = useState("");

    const handleData = (data: string) => {

        setFirstChildMessage(data);

    }

    const style = {
        border: '1px solid blue'
    }

    const message: string = "Hello from parent component";

  return (
    <div style={style}>
        
        <h4>Parent</h4>

        <h6>{firstChildMessage}</h6>

        <FirstChild message={message} setData={handleData} />

        <SecondChild message={firstChildMessage} />

    </div>
  )
}

export default Parent