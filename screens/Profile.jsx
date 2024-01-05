import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useAuth } from '../components/auth/AuthContext';
import {COLORS} from "../constants";
import {AntDesign, FontAwesome} from "@expo/vector-icons";
import {useNavigation} from "@react-navigation/native";
import styles from "./styles/profile";

const Profile = () => {
    const { user, signOut } = useAuth();
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <View style={styles.coverContainer}>
                <Image source={require('../assets/coverpic2.jpg')} style={styles.coverPhoto} />
            </View>
            <View style={styles.profileContainer}>
                <View style={styles.profilePictureContainer}>
                    <Image source={require('../assets/profilepic.jpg')} style={styles.profilePicture} />
                    {
                        user ? (
                            <>
                                <Text style={styles.email}>{user.email}</Text>
                            </>
                        ):<TouchableOpacity   onPress={() => navigation.navigate('Login')}>
                            <Text style={{color: COLORS.primary,fontFamily:"medium",textDecorationLine:"underline"}}>Sign in to view profile</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
            {
                user ? (
                    <>

                        <View style={styles.menuContainer}>
                            <TouchableOpacity style={styles.menuItem} onPress={() => console.log('View Order History')}>
                                <FontAwesome name={'history'} size={15} color={COLORS.primary}/>
                                <Text style={styles.menuTxt}>Order History</Text>
                            </TouchableOpacity>
                            <View style={styles.separator} />
                            <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Cart')}>
                                <AntDesign name={'shoppingcart'} size={15} color={COLORS.primary}/>
                                <Text style={styles.menuTxt}>Cart</Text>
                            </TouchableOpacity>
                            <View style={styles.separator} />
                            <TouchableOpacity style={styles.menuItem} onPress={() => signOut()}>
                                <AntDesign name={'logout'} size={15} color={COLORS.red}/>
                                <Text style={[styles.menuTxt, {color: COLORS.red}]}>Logout</Text>
                            </TouchableOpacity>
                        </View>
                    </>
                ): null
            }

        </View>
    );
};



export default Profile;
