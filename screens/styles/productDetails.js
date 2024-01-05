import {StyleSheet} from "react-native";
import {COLORS, SIZES} from "../../constants";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:COLORS.lightwhite
    },
    upperRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginHorizontal:20,
        position:"absolute",
        top:SIZES.xxLarge,
        width:SIZES.width - 44,
        zIndex:999
    },
    image:{
        aspectRatio:1,
        resizeMode:"cover"
    },
    cartRow:{
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width - 44,
    },
    cartBtn:{
      width:SIZES.width * 0.7,
      backgroundColor:COLORS.black,
      padding:SIZES.small/2,
      borderRadius:SIZES.large,
      marginLeft:12
    },
    details:{
        marginTop:-SIZES.large,
        backgroundColor:COLORS.lightwhite,
        width:SIZES.width,
        borderTopLeftRadius:SIZES.medium,
        borderTopRightRadius:SIZES.medium
    },
    titleRow:{
        marginHorizontal:20,
        paddingBottom:SIZES.small,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:SIZES.width-44,
        top:20
    },
    ratingRow:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      width:SIZES.width-10,
      top:5,
      paddingBottom:SIZES.small
    },
    rating:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"flex-start",
        top:SIZES.large,
        marginHorizontal:SIZES.large
    },
    ratingText:{
        fontFamily:"medium",
        fontSize:SIZES.small,
        color:COLORS.gray
    },
    description:{
        fontFamily:"medium",
        fontSize:SIZES.large - 2,
    },
    descriptionWrapper:{
      marginTop:SIZES.large * 2,
      marginHorizontal:SIZES.large
    },
    descText:{
      fontFamily:"regular",
      fontSize:SIZES.small,
      textAlign:"justify",
      marginBottom:SIZES.small
    },
    location:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      marginHorizontal:12,
      padding:5,
      backgroundColor:COLORS.secondary,
      borderRadius:SIZES.large
    },
    cartTitle:{
      fontFamily:"bold",
      fontSize:SIZES.medium,
      color:COLORS.lightwhite,
      marginLeft:SIZES.small
    },

    title:{
        fontFamily:"bold",
        fontSize:SIZES.large
    },
    price:{
        fontFamily:"semibold",
        paddingHorizontal:10,
        fontSize:SIZES.large
    },
    priceWrapper:{
        backgroundColor:COLORS.secondary,
        borderRadius:SIZES.large
    },
    addCart:{
        width:37,
        height:37,
        borderRadius:50,
        margin:SIZES.small,
        backgroundColor:COLORS.black,
        alignItems:"center",
        justifyContent:"center"
    }
})

export default styles