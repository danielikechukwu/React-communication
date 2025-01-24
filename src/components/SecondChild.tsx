interface Props {
    message: string
}

const SecondChild = (props: Props) => {

    const style = {
        border: '1px solid black',
        marginTop: '20px'
    }

    return (
        <div style={style}>

            <h4>Second Child component</h4>

            <h6>{props.message}</h6>


        </div>
    )
}

export default SecondChild