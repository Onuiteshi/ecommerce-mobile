import React from 'react';
import {Text, TextInput, Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import {SafeAreaView} from "react-native-safe-area-context";
import {Ionicons} from "@expo/vector-icons";
import {COLORS} from "../constants";

const SignupScreen = ({ navigation }) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name:"",
            email: "",
            phone:"",
            password: "",
            confirmPassword: "",
        },
    });

    const onSubmit = (data) => {
        // Simulate signup (replace with actual user registration logic)
        console.log(data);
    };

    return (
        <SafeAreaView style={{flex: 1,padding: 16,}}>
            <TouchableOpacity onPress={()=>navigation.goBack()}>
                <Ionicons name={'chevron-back-circle'} size={30}/>
            </TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.title}>Register</Text>
                <Controller
                    control={control}
                    render={({ field }) => (
                        <TextInput
                            placeholder="Name"
                            style={styles.input}
                            onChangeText={(text) => field.onChange(text)}
                            value={field.value}
                        />
                    )}
                    name="name"
                    rules={{ required: 'Name is required' }}
                />
                {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
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
                    rules={{ required: 'Email is required' }}
                />
                {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
                <Controller
                    control={control}
                    render={({ field }) => (
                        <TextInput
                            placeholder="Phone Number"
                            style={styles.input}
                            onChangeText={(text) => field.onChange(text)}
                            value={field.value}
                        />
                    )}
                    name="phone"
                    rules={{ required: 'Phone Number is required' }}
                />
                {errors.phone && <Text style={styles.errorText}>{errors.phone.message}</Text>}
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
                    rules={{ required: 'Password is required' }}
                />
                {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
                <Controller
                    control={control}
                    render={({ field }) => (
                        <TextInput
                            placeholder="Confirm Password"
                            secureTextEntry
                            style={styles.input}
                            onChangeText={(text) => field.onChange(text)}
                            value={field.value}
                        />
                    )}
                    name="confirmPassword"
                    rules={{
                        required: 'Confirm Password is required',
                        validate: (value) => value === control.fieldsRef.current.password.value || 'Passwords do not match',
                    }}
                />
                {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>}
                <TouchableOpacity style={styles.signupBtn} onPress={handleSubmit(onSubmit)}>
                    <Text style={{color: COLORS.lightwhite,fontFamily:"medium"}}>Sign Up</Text>
                </TouchableOpacity>
                <View style={{flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:12}}>
                    <Text style={{fontFamily:"regular",fontSize:12,color:COLORS.primary}}>Already have an account?</Text>
                    <TouchableOpacity style={{marginLeft:5}} onPress={() => navigation.navigate('Login')}><Text style={{fontFamily:"regular",fontSize:12,color:COLORS.tertiary}}>Log in</Text></TouchableOpacity>
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
    signupBtn: {
        backgroundColor: COLORS.primary,
        width: '100%',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorText: {
        color: 'red',
        marginBottom: 12,
    },
});

export default SignupScreen;
