export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  age: number;
  gender: string;
}

export interface UsersResponse {
  users: User[];
  total: number;
  skip: number;
  limit: number;
}
