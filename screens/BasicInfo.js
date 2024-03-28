import { StyleSheet, Text, View,SafeAreaView, Pressable } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { useNavigation } from '@react-navigation/native'

const BasicInfo = () => {
    const navigation = useNavigation();
  return (
    <SafeAreaView style ={{flex:1,backgroundColor:"white"}}>
    <View style = {{marginTop:80}}>
        <Text style ={{
            fontSize: 32,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft:20
        }}>You're one of a kind</Text>
        <Text style ={{
            fontSize: 32,
            fontWeight: 'bold',
            fontFamily: 'GeezaPro-Bold',
            marginLeft:20,
            marginTop: 10,
        }}>You're profile should be too.</Text>

    </View>
    <View>
        <LottieView style={{height:260,
            width:300,
            alignSelf:"center",
            marginTop:40}} 
            source={require("../assets/love.json")}
            autoPlay
            loop={true}
            speed={0.7}
            />
    </View>
    <Pressable 
    onPress ={()=>navigation.navigate("Name")}
    style ={{backgroundColor:"#900C3F",
    padding: 15,
    marginTop:'auto'

}}>
        <Text style={{
        textAlign:"center",
        color:"white",
        fontWeight:'600',
        fontSize:15,}}>
            Enter basic Info
        </Text>
    </Pressable>
    </SafeAreaView>
  )
}

export default BasicInfo

const styles = StyleSheet.create({})