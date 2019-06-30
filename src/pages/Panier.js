import React from "react";
import {
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ImageBackground,
    ScrollView,
} from "react-native";
import FontAwesome, {Icons} from 'react-native-fontawesome';


export default class Accueil extends React.Component {

    static navigationOptions = {
        header: null
    }


    render() {
        return(

            <SafeAreaView style={styles.container}>
                <TouchableOpacity style={styles.backBtn} onPress={() => this.props.navigation.pop()}>
                    <Text>
                        {/*Installer la police*/}
                        {/*<FontAwesome>{Icons.chevronLeft}</FontAwesome>*/}
                        Retour
                    </Text>
                </TouchableOpacity>
                <Text style={styles.blackTitle}>Panier</Text>
                <Text style={styles.greenTitle}>Panier de la semaine</Text>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.boutonReserv}>
                        <Text style={{color: 'white'}}>
                            Réserver
                        </Text>
                    </TouchableOpacity>
                </View>
                <ScrollView>
                    <Image style={styles.imageActu}
                           source={require('../../assets/peter-wendt-123928-unsplash.jpg')}
                    />
                    <Text style={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores cum distinctio ea eos facere facilis fuga, harum necessitatibus nihil non obcaecati omnis quasi quisquam ratione reprehenderit sint ullam vitae.
                        Autem, beatae consectetur consequuntur dicta distinctioue laborum mollitia quasi quia reiciendis repellendus, ullam unde ut voluptas voluptates? Aperiam, possimus.
                    </Text>
                    <Text style={styles.paragraph}>
                        Lorem ipsum dolor sit ametorum mollitia quasi quia reiciendis repellendus, ullam unde ut voluptas voluptates? Aperiam, possimus.
                    </Text>
                    <Text style={styles.greenTitle}>Contenu du panier</Text>
                    <Text style={styles.ingredients}>- Pommes de terres (5)</Text>
                    <Text style={styles.ingredients}>- Courge (1)</Text>
                    <Text style={styles.ingredients}>- Poireaux (2)</Text>
                    <Text style={styles.ingredients}>- Tomates (2)</Text>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
        marginTop: Platform.OS === 'android' ? 35 : 0,
    },
    blackTitle:{
        fontSize: 30,
        fontWeight: "bold",
    },
    greenTitle: {
        color: "green",
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10,
        marginTop: 20
    },
    imageActu:{
        width: "100%",
        height: 300,
        marginBottom: 25
    },
    paragraph: {
        marginBottom: 20,
        fontSize: 15
    },
    footer:{
        position: 'absolute',
        backgroundColor: 'white',
        bottom: 0,
        left: 0,
        right: 0,
        paddingHorizontal: 10,
        textAlign: 'center',
        paddingVertical: 20,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 99,
        elevation: 6
    },
    boutonReserv:{

        backgroundColor: '#89b56d',
        paddingHorizontal: 100,
        paddingVertical: 10,
        borderRadius: 25,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5
    }
});
