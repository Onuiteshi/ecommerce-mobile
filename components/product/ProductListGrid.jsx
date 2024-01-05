import {gql, useQuery} from "@apollo/client";
import {ActivityIndicator, FlatList, View} from "react-native";
import {COLORS, SIZES} from "../../constants";
import ProductCard from "./ProductCard";

const GET_PRODUCTS = gql`
      query {
        products {
          id
          name
          description
          price
        }
      }
`;
const ProductListGrid = () => {
    const { loading, error, data } = useQuery(GET_PRODUCTS);

    if(loading){
        return (
            <View style={{flex:1,justifyContent:"center",alignItems:"center",alignContent:"center"}}>
                <ActivityIndicator size={SIZES.xxLarge} color={COLORS.primary}/>
            </View>
        )
    }

    return (
        <View style={{alignItems:"center",paddingTop:SIZES.xxLarge,paddingLeft:SIZES.small/2}}>
            <FlatList
                data={data?.products}
                numColumns={2}
                renderItem={({item})=><ProductCard product={item}/>}
                contentContainerStyle={{alignItems:"center",paddingTop:SIZES.xxLarge,paddingLeft:SIZES.small/2}}
                ItemSeparatorComponent={()=><View style={{height:16}}/>}
            />
        </View>
    )
}

export default ProductListGrid