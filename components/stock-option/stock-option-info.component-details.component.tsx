
import React from "react";
import { Text, View } from "react-native";
import { makeStyles } from '@rneui/themed';
import BuyHoldSellRecommendation from "./stock-option-buy-hold-sell-recommendation.component";
import { StockOptionInfo } from "../../app/models/stock-option.models";
import { SocialMediaMention } from "../../app/models/social-media.models";
import StockOptionPriceInfo from "./stock-option-price-info.component";
import SocialMediaMentionDetail from "../social-media/social-media-mention-detail.component";
import { TestIds } from "../../constants/test-ids.constants";

interface Props {
    info: StockOptionInfo,
};

function StockOptionInfoDetails({ info }: Props) {
    const styles = useStockOptionInfoStyles();

    const {
        recommendation,
        mentions
    } = info;

    return (
        <View style={styles.parentView} testID={TestIds.STOCK_OPTION_INFO_VIEW}>
            <StockOptionPriceInfo info={info} />

            <BuyHoldSellRecommendation recommendation={recommendation} />

            {mentions.map((socialMediaMention: SocialMediaMention) => {
                return <SocialMediaMentionDetail
                    mention={socialMediaMention}
                    key={socialMediaMention.name}
                />
            })}
        </View>

    );
};


const useStockOptionInfoStyles = makeStyles(() => ({
    parentView: {
        marginTop: 10,
        width: '100%'
    },
}));

export default StockOptionInfoDetails;
