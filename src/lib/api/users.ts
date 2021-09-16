import client from "./client";

export const getUsers = () => {
  return client.get('/users')
}

export const createUsers = (params: object) => {
  client.post('/users', params)
}

export const getUser = () => {
  return client.get('/users/:userId')
}