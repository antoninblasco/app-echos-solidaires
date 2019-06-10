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
                <TouchableOpacity style={styles.backBtn}>
                    <Text>
                        {/*Installer la police*/}
                        {/*<FontAwesome>{Icons.chevronLeft}</FontAwesome>*/}
                        Retour
                    </Text>
                </TouchableOpacity>
                <Text style={styles.blackTitle}>Actualités</Text>
                <Text style={styles.greenTitle}>Recette Quinoa</Text>
                <ScrollView>
                    <Image style={styles.imageActu}
                           source={require('../../assets/peter-wendt-123928-unsplash.jpg')}
                    />
                    <Text style={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores cum distinctio ea eos facere facilis fuga, harum necessitatibus nihil non obcaecati omnis quasi quisquam ratione reprehenderit sint ullam vitae.
                        Autem, beatae consectetur consequuntur dicta distinctioue laborum mollitia quasi quia reiciendis repellendus, ullam unde ut voluptas voluptates? Aperiam, possimus.
                    </Text>
                    <Text style={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores cum distinctio ea eos facere facilis fuga, harum necessitatibus nihil non obcaecati omnis quasi quisquam ratione reprehenderit sint ullam vitae.
                        Autem, beatae consectetur consequuntur dicta distinctio dolore, earum facilis harum ipsam iusto laborum maiores optio perferendis quam quia, quibusdam reiciendis rerum sed?
                        Animi doloribus molestiae nobis placeat, provident repellendus sequi vitae. Animi delectus dolore libero nesciunt provident quo, quod quos reiciendis sint voluptates! Dolorum?
                        Assumenda blanditiis dolore dolorem ex fugiat incidunt iure laboriosam laudantium nemo officia, qui quia quibusdam, quis quos recusandae, rem sed veritatis vitae!
                        Amet animi aperiam assumenda autem eum facilis, hic itaque laborum mollitia quasi quia reiciendis repellendus, ullam unde ut voluptas voluptates? Aperiam, possimus.
                    </Text>
                    <Text style={styles.paragraph}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab asperiores cum distinctio ea eos facere facilis fuga, harum necessitatibus nihil non obcaecati omnis quasi quisquam ratione reprehenderit sint ullam vitae.
                        Autem, beatae consectetur consequuntur dicta distinctioue laborum mollitia quasi quia reiciendis repellendus, ullam unde ut voluptas voluptates? Aperiam, possimus.
                    </Text>
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
    }

});
