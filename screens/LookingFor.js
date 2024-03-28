import { StyleSheet, Text, View, Image, Pressable,TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LookingFor = () => {
  const [lookingFor, setLookingFor] =  useState("");
  const navigation = useNavigation();
  const handleNext = () =>{
    navigation.navigate("Hometown")
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginHorizontal: 20, marginTop: 90 }}>
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
          What's your dating Intention
        </Text>
        <View style={{ marginTop: 30, flexDirection: "column", gap: 12 }}>
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
              Life Partner
            </Text>
            <Pressable onPress={() => setLookingFor("Life Partner")}>
              <FontAwesome
                name="circle"
                size={26}
                color={lookingFor == "Life Partner" ? "#581845" : "#F0F0F0"}
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
              Long-term relationship
            </Text>
            <Pressable onPress={() => setLookingFor("Long-term relationship")}>
              <FontAwesome
                name="circle"
                size={26}
                color={
                  lookingFor == "Long-term relationship" ? "#581845" : "#F0F0F0"
                }
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
              Long-term relationship open to short
            </Text>
            <Pressable
              onPress={() =>
                setLookingFor("Long-term relationship open to short")
              }
            >
              <FontAwesome
                name="circle"
                size={26}
                color={
                  lookingFor == "Long-term relationship open to short"
                    ? "#581845"
                    : "#F0F0F0"
                }
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
              Short-term relationship open to long
            </Text>
            <Pressable
              onPress={() =>
                setLookingFor("Short-term relationship open to long")
              }
            >
              <FontAwesome
                name="circle"
                size={26}
                color={
                  lookingFor == "Short-term relationship open to long"
                    ? "#581845"
                    : "#F0F0F0"
                }
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
              Short-term relationship
            </Text>
            <Pressable onPress={() => setLookingFor("Short-term relationship")}>
              <FontAwesome
                name="circle"
                size={26}
                color={
                  lookingFor == "Short-term relationship"
                    ? "#581845"
                    : "#F0F0F0"
                }
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
              Figuring out my dating goals
            </Text>
            <Pressable
              onPress={() => setLookingFor("Figuring out my dating goals")}
            >
              <FontAwesome
                name="circle"
                size={26}
                color={
                  lookingFor == "Figuring out my dating goals"
                    ? "#581845"
                    : "#F0F0F0"
                }
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
          <AntDesign name="checksquare" size={26} color={"#581845"} />
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

export default LookingFor;

const styles = StyleSheet.create({});
