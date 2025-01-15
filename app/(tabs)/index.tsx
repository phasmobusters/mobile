import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Phasmophobia is a 4-player, online co-op, psychological horror game,
        made by Kinetic Games, where you and your team of paranormal
        investigators will enter haunted locations filled with paranormal
        activity and try to gather as much evidence as you can. You will use
        your ghost-hunting equipment to find and record evidence to sell on to a
        ghost removal team.
      </Text>
      <Link href="/ghost" style={styles.button}>
        Go to Ghost screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});
