interface Props {
    message: string
}

const Child = (props: Props) => {

    const style = {
        border: '1px solid green'
    }

  return (
    <div style={style}>
        
        <h4>Child component</h4>

        <h6>{props.message}</h6>

    </div>
  )
}

export default Child