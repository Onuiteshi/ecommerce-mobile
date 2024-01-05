import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../constants";

const styles = StyleSheet.create({
    appBaWrapper:{
        marginHorizontal:22,
        marginTop:SIZES.small
    },
    appBar:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    location:{
        fontFamily:"semibold",
        fontSize:SIZES.medium,
        color:COLORS.gray
    },
    cartCount:{
        position:"absolute",
        bottom:16,
        width:16,
        height:16,
        borderRadius:8,
        backgroundColor:COLORS.green,
        alignItems:"center",
        justifyContent:"center",
        zIndex:999
    },
    cartNumber:{
        fontFamily:"regular",
        fontWeight:"600",
        fontSize:10,
        color:COLORS.lightwhite
    }
});

export default styles