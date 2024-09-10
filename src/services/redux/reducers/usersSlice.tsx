import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {CardType} from "../../../types/Cards";

type CardTypeReducer = {
    data: CardType[];
    loading: boolean
}

const initialState: CardTypeReducer = {data: [], loading: false}

export const fetchCardsData = createAsyncThunk('cards/fetchCardsData', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    return await response.json();
});

const cardsSlice = createSlice({
    name: 'cards',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCardsData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCardsData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
            })
    },
});
export default cardsSlice.reducer;