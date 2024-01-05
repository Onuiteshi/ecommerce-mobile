import {ScrollView, Text, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Fontisto} from "@expo/vector-icons";
import styles from "./styles/home";
import {Welcome} from "../components";
import Carousel from "../components/home/Carousel";
import Header from "../components/home/Header";
import ProductRow from "../components/product/ProductRow";
import {  gql, useQuery } from "@apollo/client";
import {useNavigation} from "@react-navigation/native";
import {useSelector} from "react-redux";

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

const Home = () => {
    const navigation = useNavigation();
    const cart = useSelector((state) => state.cart);
    const { loading, error, data } = useQuery(GET_PRODUCTS);
    if (loading) return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text>Loading...</Text></View>;
    if (error) return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text>Error</Text></View>;

    return (
        <SafeAreaView>
            <View style={styles.appBaWrapper}>
                <View style={styles.appBar}>
                    <View />
                    <Text style={styles.location}></Text>
                    <View style={{alignItems:"flex-end"}}>
                        <View style={styles.cartCount}>
                            <Text style={styles.cartNumber}>{cart.items.length}</Text>
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                            <Fontisto name={'shopping-bag'} size={24}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <ScrollView>
                <Welcome/>
                <Carousel/>
                <Header />
                <ProductRow loading={loading} error={error} products={data.products}/>
                <View style={{height:100}}/>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home