import api from "./api-helper";



export const getAllUsers = async () => {
  const resp = await api.get('/users');
  console.log(resp.data)
  return resp.data;
}

export const getOneUser = async (id) => {
  const resp = await api.get(`/users/${id}`);
  return resp.data;
}

export const postUser = async (userData) => {
  const resp = await api.post('/users', { user: userData });
  return resp.data;
}

export const putUser = async (id, userData) => {
  const resp = await api.put(`/users/${id}`, { user: userData });
  return resp.data;
}

export const deleteUser = async (id) => {
  await api.delete(`/users/${id}`);
}