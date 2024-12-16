import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, TextInput, Image, Text } from "react-native";
import { Link } from "expo-router";
import Button from "../components/Button";
import Input from "../components/Input";

function Login() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/walledLogo.png")}
        style={styles.logo}
        resizeMethod="stretch"
      />

      <TextInput
        style={styles.input}
        placeholder="Fullname"
        placeholderTextColor="#aaa"
        keyboardType="default"
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaa"
        keyboardType="email-address"
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#aaa"
        secureTextEntry={true}
      />

      <TextInput
        style={styles.input}
        placeholder="Avatar Url"
        placeholderTextColor="#aaa"
        keyboardType="url"
      />

      {/* <Input text="Notes" /> */}

      {/* <Link href="/home">Home</Link> */}

      <Button bgColor="#000000" text="Register" target="\" />
      <StatusBar style="auto" hidden />
      <Text style={{ paddingStart: 5, marginTop: 10, alignSelf: "flex-start" }}>
        Don't have account?{" "}
        <Link href="/" style={styles.linkRegist}>
          Login Here
        </Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  linkRegist: {
    // textAlign: "left",
    color: "#19918F",
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    // width: 100,
    // height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 50,
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 15,
    paddingHorizontal: 10,
    marginBottom: 15,
    backgroundColor: "#f9f9f9",
    fontSize: 16,
  },
});

export default Login;
