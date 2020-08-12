// import React from "react";
// import { View, SafeAreaView, Text, TouchableOpacity } from "react-native";

// const IndexPage = ({ navigation }) => {
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View style={{ flex: 1 }}>
//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate("Lista");
//           }}
//         >
//           <Text style={{ marginLeft: 80, fontSize: 16 }}>Bienvenido</Text>
//         </TouchableOpacity>
//       </View>
//       <View style={{ flex: 5 }}></View>
//     </SafeAreaView>
//   );
// };

// IndexPage.navigationOptions = {
//   headerShown: false,
// };

// export default IndexPage;

import React from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

const IndexPage = ({ navigation }) => (
  <View style={styles.container}>
    <ImageBackground
      source={require("../assets/img/bg.png")}
      style={styles.image}
    >
      <Text style={styles.text}> "GUAU GUAU" App </Text>
      <View style={{ flex: 1 }}>
        <TouchableOpacity>
          <View style={styles.button}>
            <Text
              onPress={() => {
                navigation.navigate("Lista");
              }}
              style={styles.mensaje}
            >
              Ver Lista
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  </View>
);

IndexPage.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold",
    marginLeft: 60,
    marginTop: 90,
  },
  mensaje: {
    color: "white",
    fontSize: 20,
    marginLeft: 70,
    marginTop: 10,
  },
  button: {
    height: 52,
    width: 220,
    backgroundColor: "#841584",
    borderRadius: 24,
    marginTop: 635,
    marginLeft: 100,
  },
});

export default IndexPage;
