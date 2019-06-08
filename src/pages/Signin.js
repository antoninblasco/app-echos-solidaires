import React from 'react'
import {
    SafeAreaView,
    View,
    StyleSheet,
    Platform,
    Text,
    Image,
    ImageBackground,
    TextInput,
    TouchableOpacity, KeyboardAvoidingView
} from 'react-native'


export default class Login extends React.Component {

    static navigationOptions = {
        header: null
    }


    render() {
        return(
            <ImageBackground  source={require('../../assets/background.png')} style={{width: '100%', height: '100%'}}>
                <SafeAreaView style={styles.container}>
                    <KeyboardAvoidingView style={styles.centeredDiv} behavior="padding" enabled keyboardVerticalOffset={100}>
                        <Text style={styles.title}>
                            Inscription
                        </Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder={"Prénom"}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder={"Nom"}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder={"Adresse e-mail"}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder={"Téléphone"}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder={"Mot de passe"}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder={"Répéter le mot de passe"}
                        />
                        <View style={styles.btnContainer}>
                            <TouchableOpacity
                                style={[styles.bouton, styles.secondButton]}
                                onPress={() => this.props.navigation.navigate('Login')}
                            >
                                <Text style={styles.boutontitle}>Inscription</Text>
                            </TouchableOpacity>
                        </View>
                    </KeyboardAvoidingView>
                </SafeAreaView>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform.OS === 'android' ? 30 : 0,
    },
    centeredDiv: {
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 260,
        height: 90,
        marginBottom: 20
    },
    textInput: {
        height: 50,
        borderWidth: 0,
        backgroundColor: "white",
        borderRadius: 20,
        width: '100%',
        padding: 8,
        marginBottom: 10,
        textAlign: 'center'
    },
    btnContainer: {
        flexDirection: 'row'
    },
    bouton: {
        width: '100%',
        padding: 15,
        color: 'white',
        backgroundColor: '#89b56d',
        alignItems: 'center',
        borderRadius: 30
    },
    boutontitle: {
        color: "#fff",
        textTransform: "uppercase"
    },
    title:{
        width: "100%",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        marginTop: 50,
        color: "#383838"
    }
});