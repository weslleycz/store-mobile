import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Store } from "./src/screens/Store";
import { Login } from "./src/screens/Login";
import { Signup } from "./src/screens/Signup";

const Stack = createNativeStackNavigator();

export const Routes = () => {
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                    }}
                >
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Loja" component={Store} />
                    <Stack.Screen name="Cadastro" component={Signup} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};
