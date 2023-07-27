import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { sizes, spacing, colors } from "../constants/theme";
import * as Animatable from 'react-native-animatable';
const TripDetailCard = ({ trip }) => {
    return (
        <View style={styles.container}>
            <Animatable.View style={styles.header} animation="fadeInUp" delay={500} duration={400} easing='ease-in-out'>
                <Text style={styles.title}>{trip.title}</Text>
                <Text style={styles.location}>{trip.location}</Text>
            </Animatable.View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '30%'
    },
    header: {
        paddingHorizontal: spacing.l,
        paddingVertical: spacing.l
    },
    title: {
        fontSize: sizes.title,
        fontWeight: 'bold',
        color: colors.white
    },
    location: {
        fontSize: sizes.title,
        color: colors.white
    }
});
export default TripDetailCard;