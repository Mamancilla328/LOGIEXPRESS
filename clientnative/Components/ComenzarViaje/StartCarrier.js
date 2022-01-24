import React, { useState, useEffect } from "react";

import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  YellowBox,
  Modal
} from "react-native";
import StarRating from "react-native-star-rating";
import SimpleModalCarrier from './SimpleModalCarrier';
import { useNavigation } from "@react-navigation/core";
import io from 'socket.io-client'
import { useSelector } from "react-redux";






const StartCarrier = (props) => {


// ACEPTAR VIAJE 




 
  /// --> ESTADO PARA EL MODAL <-- ///
  const [isModalVisible, setisModalVisible] = useState(false);
  const [chooseData, setchooseData] = useState();

  const changeModalVisible = (bool) => {
    setisModalVisible(bool);
  };

  const setData = (data) => {
    setchooseData(data);
  };


  const handleSubmit = () => {
    const respMessage = () =>{
      const aceparTravel={
        carrierId: response?.idRole,
        userId: data?.travel.userId
      }
      console.log("ESTO ENVIANDO ESTOOOOO", aceparTravel)
      socket.emit('response',aceparTravel);
    }
    respMessage()
    changeModalVisible(true)
  }



  // socket
  const socket = useSelector((store) => store.socket)
  const response = useSelector((store) => store.responseLog)

  const navigation = useNavigation();
  const data = props.route.params
  const orig = data.travel.orig.split("/")
  const dest = data.travel.destination.split("/")

  console.log("Esto es lo que llega: ", data)
  console.log("ESTE ES EL SOCKET", socket.id)
  return (
    //Container Start

    <ScrollView
      style={{ backgroundColor: "#f3f3f3" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ flex: 1, marginBottom: 400 }}>
        {/* Brand View */}
        <View style={{ backgroundColor: "#7952B3", marginTop: 50, height: 60 }}>
          <Text
            style={{
              color: "white",
              display: "flex",
              alignSelf: "center",
              fontSize: 30,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            Comenzar Viaje
          </Text>
        </View>
        <ImageBackground
          source={require("./camion2.gif")}
          style={{
            height: "55%",
            width: "75%",
            display: "flex",
            alignSelf: "center",
            // marginLeft: 40,
            marginTop: 10,
          }}
        ></ImageBackground>
        <View >
          <Text
            style={{
              textAlign: 'center',
              marginTop: -100,
              marginBottom: 5,
              fontSize: 20,
              fontWeight: "200",
            }}
          >
            Información sobre el Cliente
          </Text>
          {/* RATING ESTRELLAS */}
          <View style={{ width: 240, alignSelf: "center" }}>
            <StarRating
              disabled={false}
              emptyStar={"ios-star-outline"}
              fullStar={"ios-star"}
              halfStar={"ios-star-half"}
              iconSet={"Ionicons"}
              maxStars={5}
              rating={4}
              fullStarColor={"#7952B3"}
            ></StarRating>
            <Text
              style={{ alignSelf: "center", fontSize: 18, fontWeight: "500" }}
            >
              Rating: 4/5
            </Text>
          </View>

          {/* NOMBRE */}
          <View
            style={{
              height: 35,
              backgroundColor: "white",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 20,
              paddingRight: 20,
              alignItems: "center",
              marginTop: 5,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "500" }}>Nombre: </Text>
            <Text style={{ fontSize: 17, fontWeight: "300" }}>
              {data?.userReg.name}
            </Text>
          </View>
          {/* TELEFONO */}
          <View
            style={{
              height: 35,
              marginTop: 3,
              backgroundColor: "white",
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 20,
              paddingRight: 20,
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "500" }}>Teléfono: </Text>
            <Text style={{ fontSize: 17, fontWeight: "300" }}>{data?.userReg.phone}</Text>
          </View>
          <View>
            <View>
              <Text
                style={{
                  marginLeft: 20,
                  marginTop: 10,
                  marginBottom: 10,
                  fontSize: 20,
                  fontWeight: "200",
                }}
              >
                Detalle del Envío
              </Text>
            </View>
            {/* ORIGEN */}
            <View
              style={{
                height: 35,
                backgroundColor: "white",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 20,
                paddingRight: 20,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "500" }}>Desde: </Text>
              <Text style={{ fontSize: 17, fontWeight: "300" }}>
                {orig[2]}
              </Text>
            </View>
            {/* DESTINO */}
            <View
              style={{
                height: 35,
                marginTop: 3,
                backgroundColor: "white",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 20,
                paddingRight: 20,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "500" }}>Hasta: </Text>
              <Text style={{ fontSize: 17, fontWeight: "300" }}>{dest[2]}</Text>
            </View>
            {/* PESO */}
            <View
              style={{
                height: 35,
                marginTop: 3,
                backgroundColor: "white",
                flexDirection: "row",
                justifyContent: "space-between",
                paddingLeft: 20,
                paddingRight: 20,
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "500" }}>
                Peso de la Carga:{" "}
              </Text>
              <Text style={{ fontSize: 17, fontWeight: "300" }}>{data?.travel.weight} Toneladas</Text>
            </View>
          </View>
        </View>
        <View>
          <View
            style={{
              height: 40,
              marginTop: 5,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingLeft: 20,
              paddingRight: 20,
              backgroundColor: "white",
            }}
          >
            <Text
              style={{ fontSize: 20, fontWeight: "700", alignSelf: "center" }}
            >
              Monto Total:{" "}
            </Text>
            <Text
              style={{ fontSize: 20, fontWeight: "300", alignSelf: "center" }}
            >
              $ {data?.travel.price}
            </Text>
          </View>

          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
              <Text style={styles.aceptar}>Aceptar</Text>
              {/* MODAL */}
              <Modal
                transparent={true}
                animationType="fade"
                visible={isModalVisible}
                nRequestClose={() => changeModalVisible(false)}
              >
                <SimpleModalCarrier
                  changeModalVisible={changeModalVisible}
                  setData={setData}
                />
              </Modal>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('ProfileScreenCarrier')}>
              <Text style={styles.rechazar}>Rechazar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default StartCarrier;

const styles = StyleSheet.create({
  botones: {
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  aceptar: {
    alignSelf: "center",
    color: "white",
    fontSize: 22,
    fontWeight: "700",
  },
  rechazar: {
    alignSelf: "center",
    color: "white",
    fontSize: 22,
    fontWeight: "700",
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    height: "120%",
    width: "40%",
    backgroundColor: "orange",
    borderRadius: 10,
  }
});
