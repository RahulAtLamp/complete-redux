import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './cakeSlice';
export const CakeView = () => {
    const [value, setValue] = React.useState(1);
    const numOfCakes = useSelector((state) => state.cake.noOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Cakes - {numOfCakes} </h2>
            <button onClick={() => { dispatch(ordered()) }}>Order Cake</button> &nbsp; &nbsp;
            <input type="number" defaultValue={value} onChange={(e) => { setValue(parseInt(e.target.value)) }} /> &nbsp; &nbsp;
            <button onClick={() => { dispatch(restocked(value)) }}>Restock Cakes</button>
        </div>
    )
}
