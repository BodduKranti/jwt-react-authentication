import { create } from 'zustand'
export const useAuthstore = create((set: any) => ({

    accessToken: localStorage.getItem('accessToken') || null,
    refreshToken: localStorage.getItem('refreshToken') || null,
    userinfo: localStorage.getItem("userinfo") || null,

    setTokens: ({ accessToken, refreshToken, userinfo }: any) => {
        if (accessToken) localStorage.setItem('accessToken', accessToken)
        if (refreshToken) localStorage.setItem('refreshToken', refreshToken)
        if (userinfo) localStorage.setItem('userinfo', JSON.stringify(userinfo))

        set({ accessToken, refreshToken, userinfo })
    },

    clearTokens: () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("userinfo");
        set({ accessToken: null, refreshToken: null, userinfo: null });
    },
}))