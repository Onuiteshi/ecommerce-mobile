import {TouchableOpacity, View} from "react-native";
import {Image, Text} from "react-native";
import styles from "./product.style"
import {Ionicons} from "@expo/vector-icons";
import {COLORS} from "../../constants";
import {useNavigation} from "@react-navigation/native";
import {addToCart} from "../../reducers/cartReducer";
import {useDispatch} from "react-redux";

const ProductCard = ({product}) => {
    const navigation = useNavigation();
    const dispatch = useDispatch()
    const handleAddToCart = () => {
        dispatch(addToCart(product));
        alert("Product added to cart");
    };
    return (
        <TouchableOpacity onPress={()=>navigation.navigate("ProductDetails",{product})}>
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={{uri:"https://d326fntlu7tb1e.cloudfront.net/uploads/5d445b91-c01a-4564-8ff8-c27c2b88ea5b-fn7.png"}}
                        style={styles.image}
                    />
                </View>
                <View style={styles.details}>
                    <Text style={styles.title} numberOfLines={1}>{product.name}</Text>
                    <Text style={styles.supplier} numberOfLines={1}>Product</Text>
                    <Text style={styles.price}>${product.price}</Text>
                </View>
                <TouchableOpacity onPress={handleAddToCart} style={styles.addBtn}>
                    <Ionicons name={'add-circle'} size={35} color={COLORS.primary}/>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

export default ProductCard