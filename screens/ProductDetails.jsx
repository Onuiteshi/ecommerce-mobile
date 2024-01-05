import {Image, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {Fontisto, Ionicons, MaterialCommunityIcons, SimpleLineIcons} from "@expo/vector-icons";
import {COLORS, SIZES} from "../constants";
import styles from "./styles/productDetails"
import {useState} from "react";
import {useRoute} from "@react-navigation/native";
import {useDispatch} from "react-redux";
import {addToCart} from "../reducers/cartReducer";

const ProductDetails = ({navigation}) => {
    const route = useRoute();
    const dispatch = useDispatch()
    const {product} = route.params
    const [count, setCount] = useState(1);

    const increment = ()=>{
        setCount(count+1)
    }

    const decrement = ()=>{
        if(count > 1){
            setCount(count-1)
        }
    }

    const handleAddToCart = () => {
        dispatch(addToCart(product));
        alert("Product added to cart");
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.upperRow}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Ionicons name={'chevron-back-circle'} size={30}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Ionicons name={'heart'} size={30} color={COLORS.primary}/>
                </TouchableOpacity>
            </View>
            <Image
                source={{uri:"https://d326fntlu7tb1e.cloudfront.net/uploads/5d445b91-c01a-4564-8ff8-c27c2b88ea5b-fn7.png"}}
                style={styles.image}
            />
            <View style={styles.details}>
                <View style={styles.titleRow}>
                    <Text style={styles.title}>{product.name}</Text>
                    <View style={styles.priceWrapper}>
                        <Text style={styles.price}>${product.price}</Text>
                    </View>
                </View>
                <View style={styles.ratingRow}>
                    <View style={styles.rating}>
                        {
                            [1,2,3,4,5].map((item)=>(
                                <Ionicons
                                    key={item}
                                    name={'star'}
                                    size={24}
                                    color={'gold'}
                                />
                            ))
                        }
                        <Text style={styles.ratingText}>(4.9)</Text>
                    </View>
                    <View style={styles.rating}>
                        <TouchableOpacity onPress={()=>decrement()}>
                            <SimpleLineIcons name={'minus'} size={20}/>
                        </TouchableOpacity>
                        <Text style={styles.ratingText}>   {count}   </Text>
                        <TouchableOpacity onPress={()=>increment()}>
                            <SimpleLineIcons name={'plus'} size={20}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.descriptionWrapper}>
                    <Text style={styles.description}>
                        Description
                    </Text>
                    <Text style={styles.descText}>
                        {product.description}
                    </Text>
                </View>
                <View style={{marginBottom:SIZES.small}}>
                    <View style={styles.location}>
                        <View style={{flexDirection:"row"}}>
                            <Ionicons name={'location-outline'} size={20}/>
                            <Text>   Lagos, Nigeria</Text>
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <MaterialCommunityIcons name={'truck-delivery-outline'} size={20}/>
                            <Text>   Free Delivery   </Text>
                        </View>
                    </View>
                </View>
                
                <View style={styles.cartRow}>
                    <TouchableOpacity onPress={() => navigation.navigate('Checkout')} style={styles.cartBtn}>
                        <Text style={styles.cartTitle}>BUY NOW</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleAddToCart} style={styles.addCart}>
                        <Fontisto name={'shopping-bag'} size={22} color={COLORS.lightwhite}/>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default ProductDetails