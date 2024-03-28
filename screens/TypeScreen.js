import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
} from "react-native";

import React, { useState } from "react";
import {
  Fontisto,
  MaterialCommunityIcons,
  AntDesign,
  FontAwesome,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const TypeScreen = () => {
  const [type, setType] = useState("");
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate("Dating");
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
        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            fontFamily: "GeezaPro-Bold",
            marginTop: 15,
          }}
        >
          What's your sexuality?
        </Text>
        <Text style={{ marginTop: 20, fontSize: 15, color: "gray" }}>
          Hinge users are matched based on these three type groups. You can add
          more about type after
        </Text>
        <View style={{ marginTop: 30 }}></View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Straight
            </Text>
            <Pressable onPress={() => setType("Straight")}>
              <FontAwesome
                name="circle"
                size={26}
                color={type == "Straight" ? "#581845" : "#F0F0F0"}
              />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginVertical: 12,
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Gay
            </Text>
            <Pressable onPress={() => setType("Gay")}>
              <FontAwesome
                name="circle"
                size={26}
                color={type == "Gay" ? "#581845" : "#F0F0F0"}
              />
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "500",
              }}
            >
              Bisexual
            </Text>
            <Pressable onPress={() => setType("Bisexual")}>
              <FontAwesome
                name="circle"
                size={26}
                color={type == "Bisexual" ? "#581845" : "#F0F0F0"}
              />
            </Pressable>
          </View>
        </View>
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

export default TypeScreen;

// const styles = StyleSheet.create({});
