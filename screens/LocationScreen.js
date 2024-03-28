import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Fontisto,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import MapView, { Marker } from "react-native-maps";
// import Geolocation from "@react-native-community/geolocation";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

const API = "AIzaSyCMJ12vqU0HzvQouM6aTTGkcZ0_w_NZ_jU";
const LocationScreen = () => {
  const [location, setLocation] = useState("");
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  const [coordinates] = useState([
    {
      latitude: 12.9716,
      longitude: 77.5946,
    },
    {
      latitude: 13.0451,
      longitude: 77.6269,
    },
  ]);
  // useEffect(() => {
  //   Geolocation.getCurrentPosition((position) => {
  //     const { latitude, longitude } = position.coords;
  //     setRegion({ ...region, latitude, longitude });

  //     fetch(
  //       `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=AIzaSyCMJ12vqU0HzvQouM6aTTGkcZ0_w_NZ_jU`
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log("data", data);
  //         if (data.results.length > 0) {
  //           setLocation(data.results[0].formatted_address);
  //         }
  //       })
  //       .catch((error) => console.log("Error fetching the location"));
  //   });
  // },[]);
  useEffect(() => {
    (async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          console.error("Location permission not granted");
          return;
        }

        let location = await Location.getCurrentPositionAsync({});
        if (location && location.coords) {
          const { latitude, longitude } = location.coords;
          setRegion({ ...region, latitude, longitude });

          let geocode = await Location.reverseGeocodeAsync({
            latitude,
            longitude,
          });
          if (geocode.length > 0) {
            let formattedAddress = `${geocode[0].name}, ${geocode[0].city}, ${geocode[0].region}, ${geocode[0].country}`;
            setLocation(formattedAddress);
          }
        } else {
          console.error("Location data is not available");
        }
      } catch (error) {
        console.error("Error fetching location:", error);
      }
    })();
  }, []);
  console.log("location", location);

  const handleMarkerDragEnd = async (coordinate) => {
    try {
      const { latitude, longitude } = coordinate;

      const geocode = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      });
      console.log("Geocode:", geocode);

      if (!geocode || geocode.length === 0) {
        throw new Error("Reverse geocoding failed or returned empty result");
      }

      const { name, district, city } = geocode[0];
      let formattedAddress = `${name}, ${district}, ${city}`;

      setLocation(formattedAddress);
    } catch (error) {
      console.error("Error fetching location:", error);
    }
  };

  const handleNext = () => {
    navigation.navigate("Gender");
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
              name="location-exit"
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
          Where do you live?
        </Text>
        <MapView
          style={{ width: "100%", height: 500, marginTop: 20, borderRadius: 5 }}
          initialRegion={{
            latitude: 13.0451,
            longitude: 77.6269,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            onDragEnd={(e) => handleMarkerDragEnd(e.nativeEvent.coordinate)}
            draggable
            coordinate={coordinates[1]}
          >
            <View
              style={{
                backgroundColor: "black",
                padding: 12,
                borderRadius: 20,
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 14,
                  fontWeight: "500",
                  color: "white",
                }}
              >
                {location}
              </Text>
            </View>
          </Marker>
        </MapView>
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

export default LocationScreen;

const styles = StyleSheet.create({});
