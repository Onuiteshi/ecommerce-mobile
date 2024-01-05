import {FlatList, Text, TextInput, TouchableOpacity, View} from "react-native";
import {SafeAreaView} from "react-native-safe-area-context";
import styles from "./styles/search";
import {Feather, Ionicons} from "@expo/vector-icons";
import {COLORS, SIZES} from "../constants";
import {useEffect, useState} from "react";
import {gql, useQuery} from "@apollo/client";
import ProductCard from "../components/product/ProductCard";

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
const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const { loading, error, data } = useQuery(GET_PRODUCTS);

    if (loading) return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text>Loading...</Text></View>;
    if (error) return <View style={{flex:1,justifyContent:"center",alignItems:"center"}}><Text>Error</Text></View>;

    useEffect(() => {
        const filteredResults = data?.products.filter((product) =>
            product?.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setSearchResults(filteredResults);
    }, [searchQuery, data?.products]);

    return (
        <SafeAreaView>
            <View style={styles.searchContainer}>
                <TouchableOpacity>
                    <Ionicons name={'camera-outline'} size={24} style={styles.searchIcon}/>
                </TouchableOpacity>
                <View style={styles.searchWrapper}>
                    <TextInput
                        style={styles.searchInput}
                        placeholder={"What are you looking for"}
                        value={searchQuery}
                        onChangeText={(text) => setSearchQuery(text)}
                    />
                </View>
                <View>
                    <TouchableOpacity style={styles.searchBtn}>
                        <Feather
                            name={'search'}
                            size={SIZES.xLarge}
                            color={COLORS.offwhite}
                        />
                    </TouchableOpacity>
                </View>

            </View>
            {searchResults.length === 0 ? (
                <Text style={styles.noResultsText}>No results found</Text>
            ) : (
                <FlatList
                    data={searchResults}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    renderItem={({ item }) => (
                        <ProductCard product={item}/>
                    )}
                />
            )}
        </SafeAreaView>
    )
}

export default Search




