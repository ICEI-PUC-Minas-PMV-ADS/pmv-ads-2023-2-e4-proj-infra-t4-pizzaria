import { Text, View, StyleSheet, ScrollView } from "react-native";
import HeaderOrder from "../components/HeaderOrder";
import Order from "../components/Order";
import FormDelivery from "../components/FormDelivery";

export default function Pedidos() {
  return (
    <View style={styles.container}>
      <HeaderOrder />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />
        <Order />

        <FormDelivery />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    paddingHorizontal: 20,
  },

});
