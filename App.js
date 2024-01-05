import {useCallback} from 'react';
import {useFonts} from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import BottomTabNavigation from "./navigation/BottomTabNavigation";
import {Cart, Checkout, LoginScreen, ProductDetails, ProductList, SignupScreen} from "./screens";
import {ApolloClient, InMemoryCache, ApolloProvider, gql} from "@apollo/client";
import {AuthProvider} from "./components/auth/AuthContext";
import store from "./store";
import {Provider} from "react-redux";

const Stack = createNativeStackNavigator();

const client = new ApolloClient({
    uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
});

export default function App() {
  const [fontsLoaded]=useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
    semiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    extraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    black: require("./assets/fonts/Poppins-Black.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if(!fontsLoaded){
    return null
  }

  return (
      <ApolloProvider client={client}>
          <Provider store={store}>
              <AuthProvider>
                  <NavigationContainer>
                      <Stack.Navigator>
                          <Stack.Screen
                              name="Tab"
                              component={BottomTabNavigation}
                              options={{
                                  headerShown: false
                              }}
                          />
                          <Stack.Screen
                              name="Cart"
                              component={Cart}
                              options={{
                                  headerShown: false
                              }}
                          />
                          <Stack.Screen
                              name="ProductDetails"
                              component={ProductDetails}
                              options={{
                                  headerShown: false
                              }}
                          />
                          <Stack.Screen
                              name="ProductList"
                              component={ProductList}
                              options={{
                                  headerShown: false
                              }}
                          />
                          <Stack.Screen
                              name="Checkout"
                              component={Checkout}
                              options={{
                                  headerShown: false
                              }}
                          />
                          <Stack.Screen
                              name="Login"
                              component={LoginScreen}
                              options={{
                                  headerShown: false
                              }}
                          />
                          <Stack.Screen
                              name="Signup"
                              component={SignupScreen}
                              options={{
                                  headerShown: false
                              }}
                          />
                      </Stack.Navigator>
                  </NavigationContainer>
              </AuthProvider>
          </Provider>
      </ApolloProvider>

  );
}

