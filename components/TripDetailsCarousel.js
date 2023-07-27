import React from "react";
import { View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
const TripDetailsCorousel = () => {
    return (<FlatList data={slides} renderItem={() => {
        return 
        <View style={styles.container}>

        </View>
    }} />
    );
};

const styles = StyleSheet.create({
    container: {

    }
});
export default TripDetailsCorousel;