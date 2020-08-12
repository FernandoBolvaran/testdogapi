import React, { useState, useEffect } from "react";
import { Text, View, FlatList, Image, Animated } from "react-native";
import axios from "axios";

const MascotaPage = ({ navigation }) => {
  const [imagen, mostrarImagen] = useState([]);
  const raza = navigation.getParam("raza");

  useEffect(() => {
    //consulta a la API, cuando se cargue la página
    axios
      .get(`https://dog.ceo/api/breed/${raza}/images`)
      .then(({ data }) => mostrarImagen(data.message));
  }, []);

  return (
    <View>
      <Text
        style={{
          marginLeft: 6,
          marginTop: 10,
          marginBottom: 10,
          fontFamily: "Roboto",
          fontSize: 20,
        }}
      >
        Galeria de {raza}:
      </Text>
      <FlatList
        keyExtractor={(item, index) => {
          return "imagen" + index;
        }}
        horizontal={true}
        data={imagen}
        renderItem={({ item }) => {
          return (
            <View>
              <Image
                source={{ uri: item }}
                style={{
                  width: 380,
                  height: 600,
                  margin: 4,
                  borderRadius: 15,
                }}
              ></Image>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MascotaPage;
