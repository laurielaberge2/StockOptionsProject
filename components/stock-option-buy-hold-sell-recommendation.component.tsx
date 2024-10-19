
import React from "react";
import { Text, View } from "react-native";
import { makeStyles } from '@rneui/themed';
import { BuyHoldSell } from "@/app/models/stock-option.models";

interface Props {
    recommendation: BuyHoldSell
};

function BuyHoldSellRecommendation({ recommendation }: Props) {
    const backgroundColor = recommendation === BuyHoldSell.BUY
        ? '#87db74'
        : recommendation === BuyHoldSell.HOLD
            ? '#ebf55d' : '#bd2d2d'

    const styles = useStockOptionRecommendationStyles(backgroundColor);

    return (
        <Text style={styles.recommendation}>
            <Text style={styles.recommendationLabel}>
                Recommendation:
            </Text>
            <Text>
                {` ${recommendation}`}
            </Text>
        </Text>
    );
};


const useStockOptionRecommendationStyles = makeStyles((_, backgroundColor: string) => ({
    recommendation: {
        marginTop: 20,
        marginBottom: 10,
        padding: 10,
        fontSize: 18,
        color: '#000000',
        width: '100%',
        backgroundColor
    },
    recommendationLabel: {
        fontWeight: 'bold'
    },
}));

export default BuyHoldSellRecommendation;
