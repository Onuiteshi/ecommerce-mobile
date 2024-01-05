import React from 'react';
import {Text, TextInput, Button, StyleSheet, TouchableOpacity, View} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import {SafeAreaView} from "react-native-safe-area-context";
import {useAuth} from "../components/auth/AuthContext";
import {COLORS} from "../constants";
import {Ionicons} from "@expo/vector-icons";

const CheckoutScreen = ({ navigation }) => {
    const { user } = useAuth();
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
            address: "",
            paymentMethod: "",
        },
    });

    const onSubmit = (data) => {
        // Simulate checkout process (replace with actual checkout logic)
        console.log('Checkout Data:', data);
    };

    return (
        <SafeAreaView style={{flex: 1,padding: 16,}}>

            {user ? (
                <View style={styles.container}>
                    <View style={{flexDirection:"row"}}>
                        <TouchableOpacity onPress={()=>navigation.goBack()}>
                            <Ionicons name={'chevron-back-circle'} size={30}/>
                        </TouchableOpacity>
                        <Text style={styles.title}>Checkout</Text>
                    </View>

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
                                placeholder="Address"
                                style={styles.input}
                                onChangeText={(text) => field.onChange(text)}
                                value={field.value}
                            />
                        )}
                        name="address"
                        rules={{ required: 'Address is required' }}
                    />
                    {errors.address && <Text style={styles.errorText}>{errors.address.message}</Text>}
                    <Controller
                        control={control}
                        render={({ field }) => (
                            <TextInput
                                placeholder="Payment Method"
                                style={styles.input}
                                onChangeText={(text) => field.onChange(text)}
                                value={field.value}
                            />
                        )}
                        name="paymentMethod"
                        rules={{ required: 'Payment Method is required' }}
                    />
                    {errors.paymentMethod && <Text style={styles.errorText}>{errors.paymentMethod.message}</Text>}
                    <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit(onSubmit)}>
                        <Text style={{color: COLORS.lightwhite,fontFamily:"medium"}}>Confirm Order</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Login')}>
                    <Text style={{color: COLORS.lightwhite,fontFamily:"medium"}}>Login to Continue</Text>
                </TouchableOpacity>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
        textAlign: 'center',
        marginLeft:50,
        fontFamily:"bold",
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
    errorText: {
        color: 'red',
        marginBottom: 12,
    },
    loginBtn: {
        backgroundColor: COLORS.primary,
        width: '100%',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default CheckoutScreen;
