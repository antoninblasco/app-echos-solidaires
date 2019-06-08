import React from "react";
import {
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image, TouchableOpacity
} from "react-native";
import Swiper from 'react-native-web-swiper';

export default class Accueil extends React.Component {

    static navigationOptions = {
        header: null
    }


    render() {
        return(

                <SafeAreaView style={styles.container}>
                    <Text style={styles.blackTitle}>Accueil</Text>
                    <Text style={styles.greenTitle}>Panier de la semaine</Text>
                    <View style={styles.pdls}>
                        <Image style={styles.imagepanier}
                               source={require('../../assets/peter-wendt-123928-unsplash.jpg')}
                        />
                        <View style={styles.rightCtn}>
                            <Text style={styles.paragraph}>
                                Le panier de la semaine vous transportera au soleil avec ses tomates fraiches ainsi que ses arômates
                            </Text>
                            <TouchableOpacity
                                style={[styles.bouton, styles.firstButton]}
                                onPress={() =>  this.props.navigation.navigate('Inscription')}
                            >
                                <Text style={styles.boutontitle}>Voir le panier</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.sliderActu}>
                        <Text style={styles.greenTitle}>Actualités</Text>
                        <Swiper prevButtonText={""} nextButtonText={""}>
                            <View style={[styles.slidesActu,styles.slide1]}>
                                <Text>Slide 1</Text>
                            </View>
                            <View style={[styles.slidesActu,styles.slide2]}>
                                <Text>Slide 2</Text>
                            </View>
                            <View style={[styles.slidesActu,styles.slide3]}>
                                <Text>Slides3</Text>
                            </View>
                        </Swiper>
                    </View>
                </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingVertical: 20,
        paddingHorizontal: 20,
        justifyContent: "flex-start",
        marginTop: Platform.OS === 'android' ? 35 : 0,
    },
    blackTitle:{
        fontSize: 30,
        fontWeight: "bold",
    },
    greenTitle: {
        color: "green",
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        marginBottom: 10,
        marginTop: 20
    },
    pdls:{
        flex: 1,
        height: 200,
        flexDirection: "row",
        marginBottom: 0
    },
    bouton: {
        padding: 5,
        backgroundColor: '#89b56d',
        alignItems: 'center',
        borderRadius: 20
    },
    boutontitle:{
        color: "white"
    },
    imagepanier:{
        flex: 1,
        height: 200,
        marginRight: 8
    },
    rightCtn:{
        flex: 1,
        height: 200,
        justifyContent: "space-between"
    },
    sliderActu:{
        flex: 2
    },
    slidesActu: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    slide1: {
        backgroundColor: "rgba(20,20,200,0.3)"
    },
    slide2: {
        backgroundColor: "rgba(20,200,20,0.3)"
    },
    slide3: {
        backgroundColor: "rgba(200,20,20,0.3)"
    },
});
