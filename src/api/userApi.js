import instance from './instance';

async function getUserPageApi(id) {
  try {
    const { data } = await instance.get(`api/users/${id}`);
    return data;
  } catch (error) {
    return error;
  }
}

export default getUserPageApi;
