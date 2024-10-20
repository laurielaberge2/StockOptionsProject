
import React from "react";
import { Text } from "react-native";
import { makeStyles } from '@rneui/themed';
import { Colors } from "@/constants/Colors";

function StockOptionResultEmptyState() {
    const styles = useStockOptionResultEmptyStateStyles();

    return (
        <Text style={styles.text}>Search a stock option for more information</Text>
    );
}

const useStockOptionResultEmptyStateStyles = makeStyles(() => ({
    text: {
        margin: 10,
        fontSize: 20,
        color: Colors.darkText,
        textAlign: 'center'
    },
}));

export default StockOptionResultEmptyState;
