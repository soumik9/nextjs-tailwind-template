import { createSlice } from '@reduxjs/toolkit'
import Cookies from 'js-cookie';

// Define a type for the slice state
interface authType {
    accessToken: string | undefined;
    user: any | undefined;
    isAuthenticated: boolean | undefined;
    _id: string | undefined;

    // settingList: boolean | undefined;
}

const initialState: authType = {
    accessToken: undefined,
    user: undefined,
    isAuthenticated: undefined,
    _id: undefined,

    // settingList: undefined,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        profileLog: (state, action) => {
            state.user = action.payload;
        },
        userLoggedIn: (state, action) => {
            state.accessToken = action.payload.accessToken;
            state.isAuthenticated = true;
            state._id = action.payload._id;
            state.user = action.payload.user;

            // state.settingList = action.payload.settingList;
        },
        userLoggedOut: (state) => {
            state.accessToken = undefined;
            state.user = undefined;
            state.isAuthenticated = undefined;
            state._id = undefined;

            // state.settingList = undefined;

            Cookies.remove('accessToken');
            Cookies.remove('_id');
        }
    }
})

export const { userLoggedIn, userLoggedOut, profileLog } = authSlice.actions;
export default authSlice.reducer;