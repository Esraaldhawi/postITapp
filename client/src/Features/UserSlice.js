import { createSlice } from "@reduxjs/toolkit";
import { UserData } from "../ExampleData";

const initialState = {
    value: UserData,
};

export const userSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.value.push(action.payload);
        },
        deleteUser: (state, action) => {
            state.value=state.value.filter((user) => user.email !==action.payload);
        },
        updateUser: (state, action) => {
            state.value.map((user) => {
            if (user.email === action.payload.email) {
                user.name = action.payload.name;
                user.password = action.payload.password; 
            }
          });
        }
    },
});
export const {addUser, deleteUser, updateUser} = userSlice.actions;
export default userSlice.reducer;
