import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import Header from "../components/Header";
import Icon from "react-native-vector-icons/FontAwesome";
import { addProduct } from "../redux/cartRedux";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `https://server-pizzaria-eixo4.onrender.com/api/products`
        );

        //console.log(res)

        setProducts(res.data);
      } catch (error) {}
    };
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.ScrollView}>
        <Header />
        <View
          style={{ display: "flex", flexDirection: "row", alignSelf: "center" }}
        >
          <Icon name="location-arrow" size={15} color="#F55529" />
          <Text style={{ color: "#4B5563" }}>Onde estamos</Text>
        </View>
        <Text style={{ alignSelf: "center", marginBottom: 15 }}>
          Rua sei lá, Belo Horizonte.
        </Text>

        <View style={{ borderRadius: 10, overflow: "hidden" }}>
          <Image
            style={{
              alignSelf: "center",
              height: 156,
              borderRadius: 10,
              resizeMode: "contain",
            }}
            source={require("../image/pizzaBanner.jpg")}
          />
        </View>

        <Text style={{ alignSelf: "center", marginTop: 10, fontSize: 19 }}>
          Arte em cada mordida
        </Text>

        <Text style={{ alignSelf: "center", fontSize: 19 }}>
          Nossas <Text style={{ color: "#F55529" }}> Pizzas artesanais </Text>
        </Text>

        <Text
          style={{
            alignSelf: "center",
            fontSize: 24,
            marginTop: 10,
            fontWeight: "bold",
          }}
        >
          PRODUTOS
        </Text>

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            backgroundColor: "#EFE8E8",
            borderRadius: 10,
          }}
        >
          <Image
            style={{ height: 190, width: 150, borderRadius: 20 }}
            source={{
              uri: "https://github.com/walbergomes/imgs-eixo4/blob/main/pizza1.png?raw=true",
            }}
          />

          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text style={{ fontSize: 24, marginTop: 5, fontWeight: "bold" }}>
              Queijos
            </Text>

            <Text style={{ width: 200, marginLeft: 8 }}>
              Uma mistura de queijos, como mozzarella, parmesão e provolone,
              resultando em uma explosão de sabor que derrete na boca.
            </Text>

            <Text style={{ fontSize: 14, margin: 10 }}> 1 UN. | R$ 38,00</Text>

            <TouchableOpacity
              style={{
                backgroundColor: "#131A2B",
                height: 30,
                width: 100,
                display: "flex",
                flexDirection: "row",
                padding: 5,
                marginLeft: 10,
              }}
            >
              <Icon name="shopping-bag" size={15} color="#FEBA26" />
              <Text
                style={{
                  color: "#FEBA26",
                  fontWeight: "bold",
                  fontSize: 15,
                  marginLeft: 9,
                }}
              >
                Pedir
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            backgroundColor: "#EFE8E8",
            borderRadius: 10,
          }}
        >
          <Image
            style={{ height: 190, width: 150, borderRadius: 20 }}
            source={{
              uri: "https://github.com/walbergomes/imgs-eixo4/blob/main/pizza3.png?raw=true",
            }}
          />

          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text style={{ fontSize: 24, marginTop: 5, fontWeight: "bold" }}>
              Pepperoni
            </Text>

            <Text style={{ width: 200, marginLeft: 8 }}>
              Coberta com molho de tomate, queijo mozzarella e fatias finas de
              pepperoni, um salame picante, criando um contraste de sabores e
              uma explosão de sabor.
            </Text>

            <Text style={{ fontSize: 14, margin: 10 }}> 1 UN. | R$ 40,00</Text>

            <TouchableOpacity
              style={{
                backgroundColor: "#131A2B",
                height: 30,
                width: 100,
                display: "flex",
                flexDirection: "row",
                padding: 5,
                marginLeft: 10,
              }}
            >
              <Icon name="shopping-bag" size={15} color="#FEBA26" />
              <Text
                style={{
                  color: "#FEBA26",
                  fontWeight: "bold",
                  fontSize: 15,
                  marginLeft: 9,
                }}
              >
                Pedir
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 10,
            backgroundColor: "#EFE8E8",
            borderRadius: 10,
          }}
        >
          <Image
            style={{ height: 190, width: 150, borderRadius: 20 }}
            source={{
              uri: "https://github.com/walbergomes/imgs-eixo4/blob/main/pizza3.png?raw=true",
            }}
          />

          <View style={{ display: "flex", flexDirection: "column" }}>
            <Text style={{ fontSize: 24, marginTop: 5, fontWeight: "bold" }}>
              Margherita
            </Text>

            <Text style={{ width: 200, marginLeft: 8 }}>
              Base de massa coberta com molho de tomate, queijo mozzarella
              fresco e folhas de manjericão, criando uma combinação simples e
              deliciosa de ingredientes.
            </Text>

            <Text style={{ fontSize: 14, margin: 10 }}> 1 UN. | R$ 42,00</Text>

            <TouchableOpacity
              style={{
                backgroundColor: "#131A2B",
                height: 30,
                width: 100,
                display: "flex",
                flexDirection: "row",
                padding: 5,
                marginLeft: 10,
              }}
            >
              <Icon name="shopping-bag" size={15} color="#FEBA26" />
              <Text
                style={{
                  color: "#FEBA26",
                  fontWeight: "bold",
                  fontSize: 15,
                  marginLeft: 9,
                }}
              >
                Pedir
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  ScrollView: {
    marginHorizontal: 20,
  },

  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
});

export default Home;
