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
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NameScreen = () => {
  const [firstName, setFirstName] = useState("");
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate("Email");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <Text style={{ marginTop: 50, textAlign: "center", color: "gray" }}>
        NO BACKGROUND CHECKS ARE CONDUCTED
      </Text>
      <View style={{ marginTop: 30, marginHorizontal: 20 }}>
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
            <MaterialCommunityIcons
              name="newspaper-variant-outline"
              size={26}
              color="black"
            />
          </View>
          <Image
            style={{ width: 100, height: 40 }}
            source={{
              uri: "https://cdn-icons-png.flaticon.com/128/10613/10613685.png",
            }}
          />
        </View>
        <View style={{ marginTop: 30 }}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
              fontFamily: "GeezaPro-Bold",
            }}
          >
            What's your name?
          </Text>
          <TextInput
            autoFocus={true}
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            placeholder="First name(required)"
            placeholderTextColor={"#BEBEBE"}
            style={{
              width: 340,
              marginVertical: 10,
              marginTop: 25,
              borderBottomColor: "black",
              borderBottomWidth: 1,
              paddingBottom: 10,
              fontFamily: "GeezaPro-Bold",
              fontSize: firstName ? 22 : 22,
            }}
          />
          <TextInput
            autoFocus={true}
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            placeholder="Last name"
            placeholderTextColor={"#BEBEBE"}
            style={{
              width: 340,
              marginVertical: 10,
              marginTop: 20,
              borderBottomColor: "black",
              borderBottomWidth: 1,
              paddingBottom: 10,
              fontFamily: "GeezaPro-Bold",
              fontSize: firstName ? 22 : 22,
            }}
          />
          <Text style={{ fontSize: 15, color: "gray", fontWeight: "500" }}>
            Last name is optional
          </Text>
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
      </View>
    </SafeAreaView>
  );
};

export default NameScreen;

const styles = StyleSheet.create({});
