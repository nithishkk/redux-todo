import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import {AddProduct} from '../Redux/Action';
import { RemoveProduct } from '../Redux/Action';
//import { AddProduct } from "../Redux/Action"
import '../App.css'
const Card = () => {
    const dispatch =useDispatch();
    const products= useSelector(state=>state)

    //console.log("nithishhhhhh",products)
    const [item,setItem] = useState("");
    const submitHandler = async e =>{
        e.preventDefault();
        if(item !== ""){
            await dispatch(AddProduct({name:item}));
            setItem("");
        }
        setItem("");
    }

    // const remove=()=>{
    //     dispatch(RemoveProduct(product.name))
    // }
    return (
        <center>
            <div class="card" style={{"width": "18rem"}}>
                <div class="card-body">
                    <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Add Products" value={item} onChange={e => setItem(e.target.value)}/> <br />
                        <button type="submit" class="btn btn-success">
                        Add Product 
                        </button> 
                    </form>
                    <br />
                    {  products?.map(product => {
                        return(
                            <div className="item"  >{product.name} 
                            <span onClick={()=> dispatch(RemoveProduct(product.name))} class="badge square-pill bg-danger" style={{"float": "right","padding":"6px 10px 6px 10px"}}>
                            X</span></div>
                        )
                    })}
                </div>
            </div>
        </center>
    )
}

// const mapStateToProps = (state) =>({
//     products: state
// })

// export default connect(mapStateToProps,{AddProduct,RemoveProduct})(Card);
export default Card;