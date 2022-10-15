import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
import { useAppSelector, useAppDispatch } from '../../app/hook';
import { ordered, restocked } from './iceCreamSlice';
export const IcecreamView = () => {
    const [value, setValue] = React.useState(1);
    const numOfIcecreams = useAppSelector((state) => state.icecream.noOfIceCreams);
    const dispatch = useAppDispatch();
    return (
        <div>
            <h2>Number of Icecreams - {numOfIcecreams} </h2>
            <button onClick={() => { dispatch(ordered()) }}>Order Icecream</button> &nbsp; &nbsp;
            <input type="number" defaultValue={value} onChange={(e) => { setValue(parseInt(e.target.value)) }} /> &nbsp; &nbsp;
            <button onClick={() => { dispatch(restocked(value)) }}>Restock Icecreams</button>
        </div>
    )
}
