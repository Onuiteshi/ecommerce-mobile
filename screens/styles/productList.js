import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    wrapper:{
        flex:1,
        backgroundColor:COLORS.lightwhite
    },
    upperRow:{
        width:SIZES.width - 50,
        marginHorizontal:SIZES.large,
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        position:"absolute",
        backgroundColor:COLORS.primary,
        top:SIZES.large,
        borderRadius:SIZES.large,
        zIndex:999
    },
    heading:{
        fontFamily:"bold",
        fontSize:SIZES.medium,
        color:COLORS.lightwhite,
        marginLeft:5
    }
})

export default styles