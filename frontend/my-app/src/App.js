import React, { useEffect } from 'react';
import FacebookLogin from '@greatsumini/react-facebook-login';

const App = () => {

  const appId = "768224388551051"
  useEffect(() => {
    window.fbAsyncInit = function() {
      window.FB.init({
        appId            : appId,
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v10.0'
      });
    };
 
    (function(d, s, id) {
      let js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <div>
    <FacebookLogin
      appId={appId}
      onSuccess={(response) => {
        console.log('Login Success!', response);
      }}
      onFail={(error) => {
        console.log('Login Failed!', error);
      }}
      onProfileSuccess={(response) => {
        console.log('Get Profile Success!', response);
      }}
    />
  </div>
  );
};

export default App;