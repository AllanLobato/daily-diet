import { Home } from "@screens/Home";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import theme from "./src/theme";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";

export default function App() {
  //fontsLoaded recebe um valor boolean
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <Home />
      <StatusBar barStyle="light-content" translucent />
    </ThemeProvider>
  );
}
