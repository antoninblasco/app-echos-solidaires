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
    TouchableOpacity,
    KeyboardAvoidingView,
    Modal,
} from 'react-native'


export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mail: '',
            mdp: '',
            error: '',
            popup: false
        };
    }

    static navigationOptions = {
        header: null
    }

    setModalVisible(visible) {
        this.setState({popup: visible});
    }

    checkUserandPwd(mail, password){
        if(mail === "contact@echossolidaires.fr"){
            if (password === "motdepasse") {
                this.props.navigation.navigate('Accueil');
            }
            else{
                this.setState({error: "Erreur, mot de passe erroné"})
            }
        } else {
            this.setState({error: "Erreur, cet email ne correspond à aucun compte"})
        }
    }

    render() {

        return(
            <ImageBackground  source={require('../../assets/background.png')} style={{width: '100%', height: '100%'}}>
                <SafeAreaView style={styles.container}>
                    <KeyboardAvoidingView style={styles.centeredDiv} behavior="padding" enabled>
                        <Image
                            source={require('../../assets/logo.png')}
                            style={styles.logo}
                        />
                        <Text style={styles.title}>
                            Connexion
                        </Text>
                        <TextInput
                            style={styles.textInput}
                            placeholder={"Adresse e-mail"}
                            onChangeText={(text) => this.setState({mail: text})}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder={"Mot de passe"}
                            secureTextEntry = {true}
                            onChangeText={(text) => this.setState({mdp: text})}
                        />
                        <View style={styles.btnContainer}>
                            <TouchableOpacity
                                style={[styles.bouton, styles.firstButton]}
                                onPress={() =>  this.props.navigation.navigate('Inscription')}
                            >
                                <Text style={styles.boutontitle}> Pas de compte ?</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.bouton, styles.secondButton]}
                                onPress={() => this.checkUserandPwd(this.state.mail, this.state.mdp)}
                            >
                                <Text style={styles.boutontitle}>Connexion</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.error}>{this.state.error}</Text>
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
        width: '50%',
        padding: 15,
        backgroundColor: '#89b56d',
        alignItems: 'center'
    },
    boutontitle:{
        color: "white"
    },
    firstButton: {
        borderTopLeftRadius: 30,
        borderBottomLeftRadius: 30
    },
    secondButton:{
        borderTopRightRadius: 30,
        borderBottomRightRadius: 30,
    },
    title:{
        width: "100%",
        fontSize: 20,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
        marginTop: 50,
        color: "#383838"
    },
    error:{
        color: "red",
        marginTop: 10
    }
});