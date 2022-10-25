// eslint-disable-next-line camelcase
import jwt_decode from 'jwt-decode';

import { googleAuthRequested } from '../redux/actions/authActions';

export default function createGoogleButton(dispatch) {
  function handleCallbackResponse(response) {
    const userObject = jwt_decode(response.credential);
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
    client_id: '283460441111-g6a33jhdgb5sbc7n9mj1muc13a579kjj.apps.googleusercontent.com',
    callback: handleCallbackResponse,
  });
  google.accounts.id.renderButton(
    document.getElementById('googleButtonLogin'),
    { theme: 'outline', size: 'large' },
  );
}
