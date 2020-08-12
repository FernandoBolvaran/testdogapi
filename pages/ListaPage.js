import React, { useState } from "react";
import {
  FlatList,
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";
import axios from "axios";

const ListaPage = ({ navigation }) => {
  //Consulta a la API
  axios.get("https://dog.ceo/api/breeds/list/all").then(({ data }) => {
    const objetoRazas = data.message;
    const keyRazas = Object.keys(objetoRazas);
    const conjuntoObjetosRaza = {};
    keyRazas.map((key) => {
      if (objetoRazas[key].legth > 0) {
        objetoRazas[key].forEach((laRaza) => {
          conjuntoObjetosRaza[key + "/" + laRaza] = key + "/" + laRaza;
        });
      } else {
        conjuntoObjetosRaza[key] = key;
      }
    });
    //si pasa la validación mando a llamar a todas las rzas de los perros
    guardarRazas(conjuntoObjetosRaza);
  });

  //Hooks
  const [razas, guardarRazas] = useState({});

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Text
          style={{
            flex: 4,
            marginLeft: 80,
            marginTop: 30,
            fontSize: 20,
          }}
        >
          Lista Razas de Perros
        </Text>
      </View>
      <View
        style={{
          flex: 5,
          marginTop: -50,
        }}
      >
        <FlatList
          keyExtractor={(item, index) => {
            return "lista" + index;
          }}
          style={{
            borderRadius: 30,
          }}
          data={Object.keys(razas)}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Raza", { raza: razas[item] });
                }}
              >
                <View style={styles.items}>
                  <Icon
                    name="arrow-right"
                    style={{
                      flex: 1,
                      marginLeft: 260,
                      marginBottom: 70,
                      fontSize: 30,
                      color: "#841584",
                    }}
                  />
                  <Text
                    style={{
                      flex: 4,
                      marginLeft: 50,
                      marginTop: -100,
                      fontSize: 20,
                    }}
                  >
                    {razas[item]}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

ListaPage.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  items: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 24,
    borderRadius: 12,
    padding: 30,
    backgroundColor: "#eee5df",
    fontSize: 24,
  },
});

export default ListaPage;
