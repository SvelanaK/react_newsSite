import instance from './instance';

export async function getUserPageApi(id) {
  try {
    const { data } = await instance.get(`api/users/${id}`);
    return { data };
  } catch (error) {
    return { error };
  }
}
export async function addNewsApi(body) {
  try {
    const { data } = await instance.post('api/users/addNews', body);
    return { data };
  } catch (error) {
    return { error };
  }
}
