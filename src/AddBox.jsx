import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css'
import './AddBox.css'

function AddBox(props) {
    const height = props.height;
    const backgroundColor = props.backgroundColor;
    const color = props.color;
    const conditionalRendring = (props) => {
        if (!props.content) {
            return null;
        }
        else {
            return (<>
                <p style={{ color: 'gray' }}>{props.content}</p>
            </>)
        }
    }
    const conditionalRendring2 = (props) => {
        if (!props.email) {
            return null;
        }
        else {
            const height="40px";
            const display=props.email;
            return (<>
                <div class="input-group mb-3">
                    <input type="text" class="form-control" placeholder="Email" aria-label="Recipient's username" aria-describedby="button-addon2" style={{height,display}} />
                    <button class="btn btn-outline-secondary" type="button" id="button-addon2">{props.button}</button>
                </div>
            </>)
        }

    }
    const border=props.border;
    const width=props.width;
    return (
        <>
            
            <div class="card" style={{ height,border,width }}>
                <img src={props.src} class="card-img-top" alt="..." />

                <div class="card-body" style={{border}}>
                    <a className='cardBtn' style={{ backgroundColor, color }}>{props.type}</a>
                    <h4 class="card-text">{props.name}</h4>
                    {conditionalRendring(props)}
                    {conditionalRendring2(props)}
                </div>

            </div>
        </>
    )
}
export default AddBox