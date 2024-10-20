
import React from "react";
import { Text, View } from "react-native";
import { makeStyles } from '@rneui/themed';
import { BuyHoldSell } from "../../app/models/stock-option.models";
import { Colors } from "../../constants/colors.constants";

interface Props {
    recommendation: BuyHoldSell
};

function BuyHoldSellRecommendation({ recommendation }: Props) {
    const backgroundColor = recommendation === BuyHoldSell.BUY
        ? Colors.buy
        : recommendation === BuyHoldSell.HOLD
            ? Colors.hold : Colors.sell

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
        color: Colors.darkText,
        width: '100%',
        backgroundColor
    },
    recommendationLabel: {
        fontWeight: 'bold'
    },
}));

export default BuyHoldSellRecommendation;
