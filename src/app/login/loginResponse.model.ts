export interface LoginResponse {
    accessToken: string;
    email: string;
    id: number;
    roles: string[];
    tokenType: string;
    userName: string;
}