import { StatusBar } from "expo-status-bar";
import React, { Component, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DataTable } from 'react-native-paper';
import {
    StyleSheet,
    Text,
    Button,
    TouchableOpacity,
    Image,
    View,
    SafeAreaView
} from "react-native";
import { calculateLabelTopPosition } from "react-native-paper/src/components/TextInput/helpers";

class Accueil extends Component {
    constructor(props) {
        super(props);
        this.state = { cards: {}, listCards: [], cardInfo: {} };
        this.listC = null;
    }

    componentDidMount() {
        this.request();
    }

    request() {
        fetch("https://db.ygoprodeck.com/api/v7/cardinfo.php?id=1861630")
            .then((response) => {
                console.log(response)
                return response.json();
            })
            .then((data) => {
                console.log(data)
                console.log(data.data[0].name)
                this.setState({ cards: data.data[0] }, this.listCard())

            })
            .catch((err) => {
            });

    }

    listCard() {
        console.log(this.state.cards)




    }

    render() {

        const { navigation } = this.props;
        if (this.state.cards == []) {
            return (
                <View style={styles.container}>
                    <View style={styles.menuTop}>
                        <Text >
                            En cours de chargement
                        </Text>
                    </View>
                </View>
            )
        }
        else {
            return (
                <View>
                    <Text >
                        Nom de la carte : {this.state.cards.name}
                        </Text>
                        <Text >
                        Type de la carte : {this.state.cards.type} {this.state.cards.race}
                        </Text>
                        <Text>
                            Description de la carte: {this.state.cards.desc}
                        </Text>
                        <Text >
                            En cours de chargement: {this.state.cards.set_rarity}
                        </Text>

                </View>


            );
        }
    }
}


export default Accueil;

const styles = StyleSheet.create({

    container: {
        padding: 15,
    },
    tableHeader: {
        backgroundColor: '#DCDCDC',
    },
    button: {
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 5,
        backgroundColor: "#5D7DFC",
        width: 250,
        alignItems: "center",
        borderRadius: 10
    },
    textButton: {
        fontSize: 16,
        color: "white",
        textAlign: "center"
    }
});
