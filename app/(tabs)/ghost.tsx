import { Text, View, StyleSheet } from "react-native";

export default function GhostScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Ghosts are the main focus of Phasmophobia. Each ghost will have a set of
        unique characteristics, including personal identifiers, abilities, and
        evidences. Players must investigate some of these aspects to correctly
        identify the ghost. The ghost can interact with its environment or cause
        ghost events, and even attempt to kill the player by initiating hunts.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
});
