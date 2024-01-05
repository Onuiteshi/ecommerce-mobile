import {Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Ionicons} from "@expo/vector-icons";
import {COLORS} from "../constants";
import styles from "./styles/productList"
import ProductListGrid from "../components/product/ProductListGrid";

const ProductList = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={styles.upperRow}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name={'chevron-back-circle'} size={30} color={COLORS.lightwhite}/>
                    </TouchableOpacity>
                    <Text style={styles.heading}>Products</Text>
                </View>
                <ProductListGrid/>
            </View>
        </SafeAreaView>
    )
}

export default ProductList