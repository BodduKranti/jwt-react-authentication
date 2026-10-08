import { useMutation } from "@tanstack/react-query";
import { AxiosInstance } from "./AxiosInstance";

interface registerpayload {
    username: string,
    email: string,
    password: string,
    role: string
}

type LoginPayload = Pick<registerpayload, "username" | "password">;


export interface Avatar {
    url: string;
    localPath: string;
    _id: string;
}

export type UserRole = "USER" | "ADMIN";

export type LoginType = "EMAIL_PASSWORD" | "GOOGLE" | "GITHUB";

export interface User {
    _id: string;
    avatar: Avatar;
    username: string;
    email: string;
    role: UserRole;
    loginType: LoginType;
    isEmailVerified: boolean;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
    __v: number;
}

export interface LoginData {
    user: User;
    accessToken: string;
    refreshToken: string;
}

export interface LoginResponse {
    statusCode: number;
    data: LoginData;
    message: string;
    success: boolean;
}


export interface refreshToken {
    refreshToken: string
}

export const useRegister = () => {
    return useMutation<registerpayload, Error, registerpayload>({
        mutationFn: async (payload) => {
            const response = await AxiosInstance.post(`/users/register`, payload);
            return response?.data
        }
    })
}

export const useLogin = () => {
    return useMutation<LoginResponse, Error, LoginPayload>({
        mutationFn: async (payload: LoginPayload) => {
            const response = await AxiosInstance.post(`/users/login`, payload);
            return response?.data
        }
    })
}


export const useAuthRefresh = () => {
    return useMutation<refreshToken, Error, refreshToken>({
        mutationFn: async (refreshToken: refreshToken) => {
            const response = await AxiosInstance.post(`/users/refresh-token`, refreshToken);
            return response?.data
        }
    })
}