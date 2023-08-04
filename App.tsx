import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { Routes } from "./src/routes";
import { Loading } from "@components/Loading";


export default function App() {
  //fontsLoaded recebe um valor boolean
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" translucent backgroundColor={"#fff"} />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
