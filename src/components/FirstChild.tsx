interface Props {
    message: string,
    setData: (data: string) => void
}

const FirstChild = (props: Props) => {

    const style = {
        border: '1px solid green'
    }

  return (
    <div style={style}>
        
        <h4>First Child component</h4>

        <h6>{props.message}</h6>

        <button onClick={() => props.setData("Hello from first child")}>Send data to parent and child</button>

    </div>
  )
}

export default FirstChild