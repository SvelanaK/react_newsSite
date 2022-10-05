import instance from './instance';

export async function getUserPageApi(id) {
  try {
    const { data } = await instance.get(`api/users/${id}`);
    return data;
  } catch (error) {
    return error;
  }
}

export async function editUserPageApi(body) {
  try {
    const { data } = await instance.patch('api/users/editProfile', body);
    return data;
  } catch {
    throw new Error();
  }
}
