import {COLORS, SIZES} from "../../constants";
import {ActivityIndicator, FlatList, View,Text} from "react-native";
import ProductCard from "./ProductCard";

const ProductRow = ({loading, error, products}) => {
    return (
        <View style={{marginTop:SIZES.medium}}>
            {
                loading ? (
                    <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}/>
                ):error ? (
                    <Text>Something went wrong</Text>
                ):(
                    <FlatList
                        data={products}
                        renderItem={({item})=><ProductCard product={item}/>}
                        keyExtractor={(item)=>item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{columnGap:3}}
                    />
                )
            }

        </View>
    )
};

export default ProductRow;