import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import {UserType} from "../../../types/UserType";

type UserTypeReducer = {
    data: UserType[];
    filters: { [key in keyof Partial<UserType>]: string };
    currentData: UserType[]
}


const initialState: UserTypeReducer = {
    data: [],
    filters: {name: '', username: '', email: '', phone: ''},
    currentData: []
}

export const fetchUsersData = createAsyncThunk('users/fetchUsersData', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    return await response.json();
});

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        applyFilter(state, action: PayloadAction<{ field: string, query: string }>) {
            state.filters = {...state.filters, [action.payload.field]: action.payload.query}
            state.currentData = state.data.filter((user: UserType) => {
                return (
                    user.name.toLowerCase().includes(state.filters.name!.toLowerCase()) &&
                    user.username.toLowerCase().includes(state.filters.username!.toLowerCase()) &&
                    user.email.toLowerCase().includes(state.filters.email!.toLowerCase()) &&
                    user.phone.includes(state.filters.phone!))
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsersData.fulfilled, (state, action) => {
                state.data = action.payload;
                state.currentData = action.payload
            })
    },
});

export const {applyFilter} = usersSlice.actions

export default usersSlice.reducer;