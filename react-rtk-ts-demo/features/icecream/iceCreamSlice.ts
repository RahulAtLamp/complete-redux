import { ordered as cakeOrdered } from "../cake/cakeSlice";

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
    noOfIceCreams: number
}
const initialState: InitialState = {
    noOfIceCreams: 20
}

const iceCreamSlice = createSlice({
    name: "icecream",
    initialState,
    reducers: {
        ordered: (state) => {
            state.noOfIceCreams--;
        },
        restocked: (state, action: PayloadAction<number>) => {
            state.noOfIceCreams += action.payload;
        }
    },
    // extraReducers: {
    //     ['cake/ordered']: (state) => {
    //         state.noOfIceCreams--;
    //     }
    // }
    extraReducers: (builder) => {
        builder.addCase(cakeOrdered, state => {
            state.noOfIceCreams--;
        })
    }
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;