import * as React from "react"
import { StyleSheet, Text, TouchableOpacity } from "react-native"
import Svg, { Ellipse } from "react-native-svg";

function Number(props) {
    return (
        <View style={styles.container}>
            <View style={styles.ellipseStack}>
                <Svg viewBox="0 0 64.00 64.00" style={styles.ellipse}>
                    <Ellipse
                        strokeWidth={4}
                        fill="rgba(175,164,164,1)"
                        stroke="rgba(230, 230, 230,1)"
                        cx={32}
                        cy={32}
                        rx={30}
                        ry={30}
                    ></Ellipse>
                </Svg>
                <TextInput placeholder="12" style={styles.textInput}></TextInput>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: 64,
        height: 64
    },
    ellipse: {
        top: 0,
        left: 0,
        width: 64,
        height: 64,
        position: "absolute"
    },
    textInput: {
        top: 17,
        left: 15,
        width: 33,
        height: 29,
        color: "#121212",
        position: "absolute",
        fontSize: 30,
        lineHeight: 0,
        textAlign: "center"
    },
    ellipseStack: {
        width: 64,
        height: 64
    }
});

export default Number;