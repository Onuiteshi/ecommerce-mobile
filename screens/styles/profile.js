import {StyleSheet} from "react-native";
import {COLORS} from "../../constants";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    coverContainer: {
        flex: 0.3,
    },
    coverPhoto: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
    },
    profileContainer: {
        alignItems: 'center',
        padding: 16,
    },
    profilePictureContainer: {
        position: 'absolute',
        bottom: -50,
        right: 80,
        overflow: 'hidden',
    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    email: {
        fontSize: 15,
        fontFamily:"medium",
        marginTop: 8,
    },
    menuContainer: {
        flex: 0.7,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        marginTop: 70,
    },
    menuItem: {
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuTxt:{
        fontFamily:"regular",
        marginLeft:10,
        fontSize: 12,
        marginTop:4
    },
    separator: {
        height: 1,
        backgroundColor: '#ccc',
    },
    loginBtn: {
        backgroundColor: COLORS.primary,
        width: '100%',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default styles