import instance from './instance';

export async function registrationApi(body) {
  const { data } = await instance.post('api/auth/registration', body);
  return data;
}

export async function loginApi(body) {
  const { data } = await instance.post('api/auth/login', body);
  return data;
}

export async function logoutApi() {
  const { data } = await instance.post('api/auth/logout');
  return data;
}

export async function refreshApi() {
  const { data } = await instance.post('api/auth/refresh');
  return data;
}

export async function whoAmIApi() {
  const { data } = await instance.post('api/auth/whoAmI');
  return data;
}
