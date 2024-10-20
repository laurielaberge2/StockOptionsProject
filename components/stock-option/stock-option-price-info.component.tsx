
import React from "react";
import { Text, View } from "react-native";
import { makeStyles } from '@rneui/themed';
import { StockOptionInfo } from "../../app/models/stock-option.models";

interface Props {
    info: StockOptionInfo,
};

function StockOptionPriceInfo({ info }: Props) {
    const styles = useStockOptionPriceInfoStyles();

    const {
        price,
        purchasePrice,
        priceInLastMonth,
    } = info;

    return (
        <View style={styles.priceView}>
            <Text style={styles.price}>
                <Text style={styles.priceLabel}>Current price:</Text>
                <Text>{` ${price}$`}</Text>
            </Text >
            <Text style={styles.price}>
                <Text style={styles.priceLabel}>Purchase price:</Text>
                <Text>{` ${purchasePrice}$`}</Text>
            </Text >
            <Text style={styles.price}>
                <Text style={styles.priceLabel}>Price in last month:</Text>
                <Text>{` ${priceInLastMonth}$`}</Text>
            </Text >
        </View >
    );
};


const useStockOptionPriceInfoStyles = makeStyles(() => ({
    price: {
        fontSize: 20,
    },
    priceLabel: {
        fontWeight: 'bold'
    },
    priceView: {
        paddingLeft: 10
    }
}));

export default StockOptionPriceInfo;
