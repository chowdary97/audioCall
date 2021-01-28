import React from 'react';
import {View,Text} from 'react-native';

const ProfileScreen =()=>
{
  return(
    <View>
      <Text>Hello Profile Screen</Text>
    </View>
  );
}


export default ProfileScreen;
// import React from 'react';
// import {View,Text,Button} from 'react-native';
// import auth from '@react-native-firebase/auth';
// import { GoogleSignin ,GoogleSigninButton } from '@react-native-community/google-signin'

// GoogleSignin.configure({
//   scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
//   webClientId: '663496106077-jbgttiu6k7mr3jqhc92ah5kt71if193d.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
//   offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
//   hostedDomain: '', // specifies a hosted domain restriction
//   loginHint: '', // [iOS] The user's ID, or email address, to be prefilled in the authentication UI if possible. [See docs here](https://developers.google.com/identity/sign-in/ios/api/interface_g_i_d_sign_in.html#a0a68c7504c31ab0b728432565f6e33fd)
//   forceCodeForRefreshToken: true, // [Android] related to `serverAuthCode`, read the docs link below *.
//   accountName: '', // [Android] specifies an account name on the device that should be used
//   iosClientId: '<FROM DEVELOPER CONSOLE>', // [iOS] optional, if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
// });

// const ProfileScreen=()=>{

  
//   async function onGoogleButtonPress() {
//     // Get the users ID token
//     const { idToken } = await GoogleSignin.signIn();
  
//     // Create a Google credential with the token
//     const googleCredential = auth.GoogleAuthProvider.credential(idToken);
  
//     // Sign-in the user with the credential
//     return auth().signInWithCredential(googleCredential);
//   }
//   return(
//   <GoogleSigninButton
//     style={{ width: 192, height: 48 }}
//     size={GoogleSigninButton.Size.Wide}
//     color={GoogleSigninButton.Color.Dark}
//     onPress={onGoogleButtonPress}
//      />
//   );
// }
// export default ProfileScreen;