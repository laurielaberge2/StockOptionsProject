
import React from "react";
import { Text } from "react-native";
import { makeStyles } from '@rneui/themed';
import { Colors } from "@/constants/Colors";

function EmptyState() {
    const styles = useStockOptionResultStyles();

    return (
        <Text style={styles.text}>Search a stock option for more information</Text>
    );
}

const useStockOptionResultStyles = makeStyles(() => ({
    text: {
        margin: 10,
        fontSize: 20,
        color: Colors.darkText,
        textAlign: 'center'
    },
}));

export default EmptyState;
