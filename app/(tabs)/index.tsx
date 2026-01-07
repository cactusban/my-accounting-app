import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          
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
});