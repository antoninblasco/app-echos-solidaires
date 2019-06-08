import React from "react";
import {
    Platform,
    SafeAreaView,
    StyleSheet,
    Text
} from "react-native";

export default class Accueil extends React.Component {

    static navigationOptions = {
        header: null
    }


    render() {
        return(

                <SafeAreaView style={styles.container}>
                    <Text>Test</Text>
                </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform.OS === 'android' ? 30 : 0,
    }
});
