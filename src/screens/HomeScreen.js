import React from 'react';
import {View,Text,Button} from 'react-native';


const HomeScreen =({navigation})=>
{

  

    return(
        <View>
            <Text>This is Home Screen</Text>
            <Button title="go to Profile Screen" onPress={()=>{navigation.navigate('Profile')}} />
        </View>
    );
}

export default HomeScreen;