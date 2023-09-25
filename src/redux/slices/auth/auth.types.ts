export interface LoginProps {
  email: string;
  password: string;
}

export interface LoginResponse {
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  email: string;
  _id: string;
  token: string;
}

export interface RegisterProps {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface RegisterErrors {
  field?: string;
  msg?: string;
}
