import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  const parameter = "Гаджиева Камила";

  return (
    <View style={styles.container}>
      <Button
        title="btn1"
        onPress={() => navigation.navigate("Activity2", { parameter })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
