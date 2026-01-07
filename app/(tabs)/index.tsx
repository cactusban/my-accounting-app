import { Link } from "expo-router";
import { Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <Text style={styles.text}>Hello World</Text>
          <Link href="/account" style={styles.button}>gogogo</Link>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    // 这里不需要背景色，让它透明，继承外层的 blue
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: 'black',
  },
  button:{
    backgroundColor:"skyblue",
    width:50,
    height:50,
    justifyContent:"center",
    alignItems:"center",
  }
});