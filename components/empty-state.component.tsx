
import React from "react";
import { Text } from "react-native";
import { makeStyles } from '@rneui/themed';

function EmptyState() {
    const styles = useStockOptionResultStyles();

    return (
        <Text style={styles.parentView}>
            <Text>Search a stock option for more information</Text>
        </Text >
    );
}


const useStockOptionResultStyles = makeStyles(() => ({
    parentView: {
        margin: 10,
        fontSize: 20,
        color: '#1a191c',
        textAlign: 'center'
    },
}));

export default EmptyState;
