
import React, { useState } from "react";
import { Text, View } from "react-native";
import { makeStyles } from '@rneui/themed';
import EmptyState from "./empty-state.component";

interface Props {
    stockOption: string
}

function StockOptionResult({ stockOption }: Props) {
    const styles = useStockOptionResultStyles();

    if (!stockOption) {
        return <EmptyState />
    }

    return (
        <View style={styles.parentView}>
            <Text style={styles.textSection}>
                <Text>Stock name: </Text>
                <Text style={styles.stockOption}>
                    {stockOption || "..."}
                </Text>
            </Text >
        </View>

    );
}


const useStockOptionResultStyles = makeStyles(() => ({
    parentView: {
        margin: 10,
        alignItems: 'center'
    },
    textSection: {
        fontSize: 20,
        color: '#1a191c',
    },
    stockOption: {
        fontWeight: 'bold'
    },
}));

export default StockOptionResult;
