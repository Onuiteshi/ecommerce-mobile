import { SIZES} from "../../constants";
import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        marginTop:SIZES.medium,
        marginHorizontal:SIZES.small
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerTitle: {
        fontFamily:"bold",
        fontSize: SIZES.xLarge - 2
    }
})

export default styles