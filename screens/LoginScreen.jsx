import React from 'react';
import {Text, TextInput, Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import {SafeAreaView} from "react-native-safe-area-context";
import {useAuth} from "../components/auth/AuthContext";
import {COLORS} from "../constants";
import {Ionicons} from "@expo/vector-icons";

const LoginScreen = ({ navigation }) => {
    const { signIn } = useAuth();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data) => {
        signIn(data);
        navigation.goBack()
    };

    return (
        <SafeAreaView style={{flex: 1,padding: 16,}} >
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name={'chevron-back-circle'} size={30}/>
            </TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.title}>Welcome</Text>
                <Controller
                    control={control}
                    render={({ field }) => (
                        <TextInput
                            placeholder="Email"
                            style={styles.input}
                            onChangeText={(text) => field.onChange(text)}
                            value={field.value}
                        />
                    )}
                    name="email"
                    rules={{ required: true, pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "Invalid email address.",
                        }, }}
                />
                {errors.email && (
                    <Text style={{ color: "red", fontFamily:"regular",fontSize:10,marginBottom: 12, }}>
                        Email is required.
                    </Text>
                )}
                <Controller
                    control={control}
                    render={({ field }) => (
                        <TextInput
                            placeholder="Password"
                            secureTextEntry
                            style={styles.input}
                            onChangeText={(text) => field.onChange(text)}
                            value={field.value}
                        />
                    )}
                    name="password"
                    rules={{ required: true, minLength: 8 }}
                />
                {errors.password && (
                    <Text style={{ color: "red", fontFamily:"regular",fontSize:10,marginBottom: 12, }}>
                        Password is required.
                    </Text>
                )}
                <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit(onSubmit)}>
                    <Text style={{color: COLORS.lightwhite,fontFamily:"medium"}}>Login</Text>
                </TouchableOpacity>
                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:12}}>
                    <Text style={{fontFamily:"regular",fontSize:12,color:COLORS.primary}}>Don't have an account?</Text>
                    <TouchableOpacity style={styles.signupBtn} onPress={() => navigation.navigate('Signup')}><Text style={{fontFamily:"regular",fontSize:12,color:COLORS.tertiary}}>Register</Text></TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
        backgroundColor: COLORS.lightwhite,
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily:"bold",
        marginBottom: 16,
    },
    input: {
        height: 40,
        borderColor: COLORS.primary,
        borderWidth: 0.5,
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    loginBtn: {
        backgroundColor: COLORS.primary,
        width: '100%',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    signupBtn:{
        marginLeft:5
    }
});

export default LoginScreen;
