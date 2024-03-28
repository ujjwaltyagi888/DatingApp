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
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
const GenderScreen = () => {
  const [gender, setGender] = useState();
  const navigation = useNavigation();
  const handleNext = () => {
    navigation.navigate("Type");
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
          Which gender describes you the best ?
        </Text>
        <Text style={{ marginTop: 20, fontSize: 15, color: "gray" }}>
          Hinge users are matched based on these three gender groups. You can
          add more about gender after
        </Text>
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
              Men
            </Text>
            <Pressable onPress={() => setGender("Men")}>
              <FontAwesome
                name="circle"
                size={26}
                color={gender == "Men" ? "#581845" : "#F0F0F0"}
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
              Women
            </Text>
            <Pressable onPress={() => setGender("Women")}>
              <FontAwesome
                name="circle"
                size={26}
                color={gender == "Women" ? "#581845" : "#F0F0F0"}
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
              Non Binary
            </Text>
            <Pressable onPress={() => setGender("Non Binary")}>
              <FontAwesome
                name="circle"
                size={26}
                color={gender == "Non Binary" ? "#581845" : "#F0F0F0"}
              />
            </Pressable>
          </View>
        </View>
        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            alignItems: "center",
            gap: 8,
          }}
        >
          <AntDesign name="checksquare" size={26} color={gender == "#581845"} />
          <Text style={{ fontSize: 15 }}>Visible on Profile</Text>
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

export default GenderScreen;
