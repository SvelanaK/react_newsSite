import instance from './instance';

export async function getNewsApi() {
  try {
    const { data } = await instance.get('api/news');
    return data;
  } catch (error) {
    return error;
  }
}

export async function addNewsApi(body) {
  try {
    const { data } = await instance.post('api/news/addNews', body);
    return data;
  } catch (error) {
    return error;
  }
}
