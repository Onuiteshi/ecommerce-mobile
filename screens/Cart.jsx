// components/Cart.js
import React from 'react';
import {View, Text, Button, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../reducers/cartReducer';
import {SafeAreaView} from "react-native-safe-area-context";
import {Ionicons} from "@expo/vector-icons";
import {COLORS} from "../constants";

const Cart = ({navigation}) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);


    const handleRemoveFromCart = (productId) => {
        dispatch(removeFromCart(productId));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={{flexDirection:"row"}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name={'chevron-back-circle'} size={30}/>
                </TouchableOpacity>
                <Text style={styles.title}>Shopping Cart</Text>
            </View>

            <FlatList
                data={cart.items}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                        <Text>Quantity: {item.quantity}</Text>
                        <Text>Total: ${item.price * item.quantity}</Text>
                        <TouchableOpacity onPress={() => handleRemoveFromCart(item.id)} style={styles.remove}>
                            <Ionicons name={'trash'} size={20} color={COLORS.lightwhite}/>
                            <Text style={{fontFamily:"regular",fontWeight:"600",fontSize:12,color:COLORS.white,marginLeft:5}}>REMOVE</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Checkout')} style={styles.checkoutBtn}>
                            <Text style={{fontFamily:"regular",fontWeight:"600",fontSize:12,color:COLORS.white,marginLeft:5}}>CHECKOUT</Text>
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor:COLORS.lightwhite
    },
    title: {
        fontSize: 24,
        marginBottom: 16,
        fontFamily:"bold",
        marginLeft:50
    },
    remove:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:5,
        justifyContent:"center",
        width: '100%',
        padding: 5,
        backgroundColor: COLORS.red,
        borderRadius: 5,
    },
    item: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 8,
    },
    checkoutBtn: {
        backgroundColor: COLORS.primary,
        width: '100%',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Cart;
