import instance from './instance';

async function getUserPageApi(id) {
  const { data } = await instance.get(`api/users/${id}`);
  return data;
}

export default getUserPageApi;
