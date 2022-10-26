import jwtDecode from 'jwt-decode';

import { googleAuthRequested } from '../redux/actions/authActions';

export default function createGoogleButton(dispatch) {
  function handleCallbackResponse(response) {
    const userObject = jwtDecode(response.credential);
    const payload = {
      firstName: userObject.given_name,
      lastName: userObject.family_name,
      email: userObject.email,
      login: userObject.name,
      picture: userObject.picture,
      password: userObject.sub,
    };
    if (userObject) {
      dispatch(googleAuthRequested(payload));
    }
  }

  /* global google */
  google.accounts.id.initialize({
    client_id: process.env.REACT_APP_CLIENT_ID,
    callback: handleCallbackResponse,
  });
  google.accounts.id.renderButton(
    document.getElementById('googleButtonLogin'),
    { theme: 'outline', size: 'large' },
  );
}
