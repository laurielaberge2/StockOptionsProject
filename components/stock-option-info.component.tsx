
import React from "react";
import { Text, View } from "react-native";
import { makeStyles } from '@rneui/themed';

interface Props {
    stockOption: string
}

function StockOptionInfo({ stockOption }: Props) {
    const styles = useStockOptionInfoStyles();

    return (
        <View style={styles.parentView}>
            <Text style={styles.textSection}>
                Salut
            </Text >

        </View>

    );
}


const useStockOptionInfoStyles = makeStyles(() => ({
    parentView: {
        margin: 10,
        alignItems: 'center'
    },
    textSection: {
        fontSize: 20,
        color: '#1a191c',
    },
}));

export default StockOptionInfo;
