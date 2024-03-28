import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
const HomeTownScreen = () => {
  const [hometown, setHomeTown] = useState("");
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate("Photos");
  };
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
            <AntDesign name="hearto" size={26} color="black" />
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
          Where is your home town
        </Text>
        <TextInput
          autoFocus={true}
          value={hometown}
          onChangeText={(text) => setHomeTown(text)}
          placeholder="HomeTown"
          placeholderTextColor={"#BEBEBE"}
          style={{
            width: 340,
            marginVertical: 10,
            marginTop: 20,
            borderBottomColor: "black",
            borderBottomWidth: 1,
            paddingBottom: 10,
            fontFamily: "GeezaPro-Bold",
            fontSize: hometown ? 22 : 22,
          }}
        ></TextInput>
        <TouchableOpacity
          onPress={handleNext}
          activeOpacity={0.8}
          style={{ marginTop: 30, marginLeft: "auto" }}
        >
          <MaterialCommunityIcons
            style={{ alignSelf: "center", marginTop: 20 }}
            name="arrow-right-circle"
            size={45}
            color="#581845"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeTownScreen;

const styles = StyleSheet.create({});
