import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface userinfo {
    username: string,
    email: string
}

interface details extends userinfo {
    accessToken: string | null,
    refreshToken: string | null
}

const initialState: details = {
    username: '',
    email: '',
    accessToken: null,
    refreshToken: null
};

const UserSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<Partial<details>>) => ({
            ...state, ...action.payload
        }),
        logout: () => initialState
    }
})

export const { setUser, logout } = UserSlice.actions;
export default UserSlice.reducer

