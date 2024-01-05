import {Dimensions} from "react-native";

const {width, height} = Dimensions.get("window");

const COLORS = {
    primary:"#2a4d50",
    secondary:"#ddf0ff",
    tertiary:"#ff7754",
    gray:"#83829a",
    gray2:"#c1c0c8",
    offwhite:"#f3f4f8",
    white:"#fff",
    black:"#000",
    red:"#e81e4d",
    green:"#00c135",
    lightwhite:"#fafafc",
};

const SIZES = {
    xSmall:10,
    small:12,
    medium:16,
    large:20,
    xLarge:24,
    xxLarge:44,
    height,
    width
};

const SHADOWS = {
    small: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 2
    },
    medium: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 5.84,
        elevation: 5
    }
};

export {COLORS, SIZES, SHADOWS};