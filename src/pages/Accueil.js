import React from "react";
import {
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
    Image, TouchableOpacity,
    ImageBackground
} from "react-native";
import { LinearGradient } from 'expo';
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
                        <Swiper activeDotStyle={styles.activeDot} prevButtonText={""} nextButtonText={""}>
                            <TouchableOpacity style={[styles.slidesActu]} onPress={() => this.props.navigation.navigate('Actualite')}>
                                <ImageBackground source={require('../../assets/dan-gold-298710-unsplash.jpg')} style={styles.card}>
                                    <LinearGradient
                                        colors={['transparent', 'rgba(0,0,0,0.8)']}
                                        style={styles.gradient}>
                                            <Text style={styles.actuTitle}>Recette quinoa</Text>
                                            <Text style={styles.actuDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ducimus eum eveniet nam nisi odio quae saepe! </Text>
                                    </LinearGradient>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.slidesActu]} onPress={() => this.props.navigation.navigate('Actualite')}>
                                <ImageBackground source={require('../../assets/peter-wendt-123928-unsplash.jpg')} style={styles.card}>
                                    <LinearGradient
                                        colors={['transparent', 'rgba(0,0,0,0.8)']}
                                        style={styles.gradient}>
                                        <Text style={styles.actuTitle}>C'est la rentrée</Text>
                                        <Text style={styles.actuDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ducimus eum eveniet nam nisi odio quae saepe! </Text>
                                    </LinearGradient>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.slidesActu]} onPress={() => this.props.navigation.navigate('Actualite')}>
                                <ImageBackground source={require('../../assets/heather-barnes-1464276-unsplash.jpg')} style={styles.card}>
                                    <LinearGradient
                                        colors={['transparent', 'rgba(0,0,0,0.8)']}
                                        style={styles.gradient}>
                                        <Text style={styles.actuTitle}>Cuisiner la rhubarbe</Text>
                                        <Text style={styles.actuDesc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloremque ducimus eum eveniet nam nisi odio quae saepe! </Text>
                                    </LinearGradient>
                                </ImageBackground>
                            </TouchableOpacity>
                        </Swiper>
                        <TouchableOpacity
                            style={[styles.bouton, styles.firstButton]}
                            onPress={() =>  this.props.navigation.navigate('Inscription')}
                        >
                            <Text style={styles.boutontitle}>Voir les actualités</Text>
                        </TouchableOpacity>
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
        flex: 1
    },
    slidesActu: {
        flex: 1,
        alignItems: "center",
        paddingBottom: 40,
        paddingHorizontal: 20
    },
    card:{
        borderRadius: 20,
        overflow: "hidden",
    },
    actuTitle:{
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    actuDesc:{
        color: "white"
    },
    activeDot:{
        backgroundColor: "#89b56d"
    },
    gradient:{
        flex: 1,
        justifyContent: "flex-end",
        width: "100%",
        paddingHorizontal: 20,
        paddingBottom: 20
    }
});
