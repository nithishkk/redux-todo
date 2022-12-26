import React from 'react'
import { useSelector} from 'react-redux';
import '../App.css'
const Badge = () => {
    const products=useSelector(state=>state)
    return (
        <div style={{"margin":"80px 0px 10px 0px"}}>
            <center>
            <button type="button" class="btn btn-primary position-relative">
            Total Products
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {   products?.length}
            </span>
            </button>
            </center>
        </div>
    )
}
// const mapStateToProps = state => ({
//     products : state
// })
// export default connect(mapStateToProps)(Badge);
export default Badge