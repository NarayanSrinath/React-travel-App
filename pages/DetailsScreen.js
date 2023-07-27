import React from "react";
import { View, StyleSheet, Image } from "react-native";
import { sizes, spacing, colors } from "../constants/theme";
import Icon from '../components/icons';

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { SharedElement } from 'react-navigation-shared-element';
import TripDetailCard from "../components/TripDetailsCard";
import * as Animatable from 'react-native-animatable';
const DetailsScreen = ({navigation, route}) => {
    const { trip } = route.params;
    const insets= useSafeAreaInsets();
    return (
        <View style={styles.container}>
             <Animatable.View style={[styles.backbutton, {marginTop: insets.top}]}animation='fadeIn'delay={500} duration={400} easing='ease-in-out'>
                <Icon
                    style={styles.backicon}
                    icons="ArrowLeft" 
                    size={35}
                    onPress={navigation.goBack}/>
            </Animatable.View>
            <SharedElement id={`trip.${trip.id}.image`} style={StyleSheet.absoluteFillObject}>
            <View style={[StyleSheet.absoluteFillObject, styles.imageBox]} >
                <Image
                    style={[StyleSheet.absoluteFillObject, styles.image]}
                    source={trip.image} />
            </View> 
            </SharedElement>
            <TripDetailCard trip={trip}/>
        </View>
    );
};

DetailsScreen.sharedElements = route => {
    const {trip} = route.params;
    return [
      {
        id: `trip.${trip.id}.image`,
      },
    ];
  };
  

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBox: {
        overflow: 'hidden',
        borderRadius: sizes.radius
    },
    image: {
        height: sizes.height,
        width: sizes.width,
        resizeMode: 'cover'
    },
    backbutton: {
        position: 'absolute',
        left: spacing.l,
        zIndex: 1,
    },
    backicon: {
        tintColor: colors.white
    }


});

export default DetailsScreen;