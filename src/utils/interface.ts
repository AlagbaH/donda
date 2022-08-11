import { Request } from "express";

export interface IUser {
  _id?: string
  email: string
  password: string
  firstName?: string
  lastName?: string
  phone?: string
  photo?: string
  role?: string
  verified: boolean
  createdAt?: Date
  updatedAt?: Date
}
export interface CustomRequest {
  user: IUser
  file: any
  params: any
  query: any
  path: any
}
export interface IUserRequest extends Request {
  user: any
}

export interface IOtp {
  _id?: string
  email: string
  token: number
  expired: boolean
  createdAt?: Date
  updatedAt?: Date
}

export interface IComment {
  _id?: string
  owner: string
  comment: string
  createdAt?: Date
  updatedAt?: Date
}

export interface ILogin {
  email: string
  password: string
}

export interface ICredit {
  amount: number
  receiver: string
  sender: string
  status: string
  reference: string
}

export interface IDebit {
  amount: number
  receiver: string
  sender: string
  status: string
  reference: string
}

export interface IPost {
  _id: string;
  owner: string;
  post: string;
  likes: number;
  comment: number;
  location: string;
  createdAt?: Date
  updatedAt?: Date
}

export interface Search {
  $search: string;
}

export interface IPostQuery {
  _id: string;
  owner: string;
  post: string;
  likes: number;
  comment: number;
  location: string;
  $text: Search;
}
