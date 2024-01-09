import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    console.log(response);
    // Lide com a resposta do login do Google aqui
  };

  return (
    <div>
      <GoogleLogin
        clientId="88486025151-4ktrvuvnaa8as7uq691bp4u0o2jsop3q.apps.googleusercontent.com"
        buttonText="Continuar com o Google"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  );
};

export default GoogleLoginButton;