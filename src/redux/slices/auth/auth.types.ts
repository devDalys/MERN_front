export interface LoginProps {
    login: string
    password: string
}

export interface LoginResponse {
    createdAt: string,
    updatedAt: string,
    firstName: string,
    lastName: string,
    email: string,
    _id: string
    token: string
}
