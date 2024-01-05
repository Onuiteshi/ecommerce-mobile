import {Text, TouchableOpacity, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import styles from "./header.style";
import {useNavigation} from "@react-navigation/native";

const Header = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Feature Items</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("ProductList")}>
                    <Ionicons name={'ios-grid'} size={24}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Header