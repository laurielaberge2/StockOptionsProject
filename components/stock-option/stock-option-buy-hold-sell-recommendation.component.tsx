
import React from "react";
import { Text, View } from "react-native";
import { makeStyles } from '@rneui/themed';
import { BuyHoldSell } from "../../app/models/stock-option.models";
import { Colors } from "../../constants/colors.constants";
import { TestIds } from "../../constants/test-ids.constants";

interface Props {
    recommendation: BuyHoldSell
};

function BuyHoldSellRecommendation({ recommendation }: Props) {
    let backgroundColor = Colors.sell;

    if (recommendation === BuyHoldSell.BUY) {
        backgroundColor = Colors.buy
    } else if (recommendation === BuyHoldSell.HOLD) {
        backgroundColor = Colors.hold
    }

    const styles = useStockOptionRecommendationStyles(backgroundColor);

    return (
        <Text
            style={styles.recommendation}
            testID={TestIds.STOCK_OPTION_BUY_HOLD_SELL_RECOMMENDATION}
        >
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
