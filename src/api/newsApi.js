import instance from './instance';

async function getNewsApi() {
  const response = await instance.get('api/news');
  return response.data;
}

export default getNewsApi;
