import instance from './instance';

export async function getNewsApi() {
  try {
    const { data } = await instance.get('api/news');
    return data;
  } catch {
    throw new Error();
  }
}

export async function addNewsApi(body) {
  try {
    const { data } = await instance.post('api/news/addNews', body);
    return data;
  } catch {
    throw new Error();
  }
}
