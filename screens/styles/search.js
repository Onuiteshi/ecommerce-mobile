import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../constants";

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
    welcomeTxt:(color,top) => ({
        fontFamily:"bold",
        fontSize: SIZES.xxLarge - 6,
        marginTop:top,
        color: color,
        marginHorizontal:SIZES.small
    }),
    searchContainer:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:COLORS.secondary,
        marginHorizontal:SIZES.small,
        borderRadius:SIZES.medium,
        marginVertical:SIZES.medium,
        height:50
    },
    searchIcon:{
        color:COLORS.gray,
        marginHorizontal:10,
    },
    searchWrapper: {
        flex: 1,
        backgroundColor: COLORS.secondary,
        borderRadius: SIZES.small,
        marginRight: SIZES.small,
    },
    searchInput: {
        fontFamily: "regular",
        color: COLORS.gray,
        width: "100%",
        height: "100%",
        paddingHorizontal: SIZES.small,
    },
    searchBtn:{
        width: 50,
        height:"100%",
        backgroundColor:COLORS.primary,
        justifyContent:"center",
        alignItems:"center",
        borderRadius: SIZES.medium
    },
    noResultsText: {
        fontSize: 18,
        color: '#555',
    },
    resultItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingVertical: 8,
    },
});

export default styles;