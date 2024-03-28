import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  Pressable,
  TextInput,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialCommunityIcons,
  MaterialIcons,
  AntDesign,
  EvilIcons,
} from "@expo/vector-icons";

const PhotoScreen = () => {
  const navigation = useNavigation("");
  const [imageUrls, setImageUrls] = useState(["", "", "", "", "", ""]);
  const [imageUrl, setImageUrl] = useState();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginTop: 90, marginHorizontal: 20 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              width: 44,
              height: 44,
              borderRadius: 22,
              borderWidth: 2,
              borderColor: "black",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MaterialIcons name="photo-camera-back" size={26} color="black" />
          </View>
          <Image
            style={{ width: 100, height: 40 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/10613/10613685.png",
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            fontFamily: "GeezaPro-Bold",
            marginTop: 15,
          }}
        >
          Pick your photos and videos
        </Text>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",

              gap: 20,
            }}
          >
            {imageUrls.slice(0, 3).map((url, index) => (
              <Pressable
                key={index}
                style={{
                  borderColor: "#581845",
                  borderWidth: url ? 0 : 2,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderStyle: "dashed",
                  borderRadius: 10,
                  height: 100,
                }}
              >
                {url ? (
                  <Image
                    source={{ uri: url }}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                      resizeMode: "cover",
                    }}
                  />
                ) : (
                  <EvilIcons name="image" size={22} color="black" />
                )}
              </Pressable>
            ))}
          </View>
        </View>
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",

              gap: 20,
            }}
          >
            {imageUrls.slice(0, 3).map((url, index) => (
              <Pressable
                key={index}
                style={{
                  borderColor: "#581845",
                  borderWidth: url ? 0 : 2,
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderStyle: "dashed",
                  borderRadius: 10,
                  height: 100,
                }}
              >
                {url ? (
                  <Image
                    source={{ uri: url }}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 10,
                      resizeMode: "cover",
                    }}
                  />
                ) : (
                  <EvilIcons name="image" size={22} color="black" />
                )}
              </Pressable>
            ))}
          </View>
        </View>
        <View style={{ marginVertical: 10 }}>
          <Text style={{ color: "gray", fontSize: 15 }}>Drag to reorder</Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: "500",
              color: "#581845",
              marginTop: 3,
            }}
          >
            Add 4 to 6 photos
          </Text>
        </View>
        <View>
          <Text>Add a picture of yourself</Text>
          <View>
            <EvilIcons style={{marginLeft: 8}} name="image" size={22} color="black" />
            <TextInput value={imageUrl} 
              onChangeText={text =>setImageUrl(text)}
              style= {{color:"gray",marginVertical:10,width:300}}
              placeholder="Enter your imae"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PhotoScreen;

const styles = StyleSheet.create({});
