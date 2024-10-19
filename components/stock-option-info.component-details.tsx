
import React from "react";
import { Text, View } from "react-native";
import { makeStyles } from '@rneui/themed';
import SocialMediaMentionDetail from "./social-media-mention-detail.component";
import { SocialMediaMentions } from "@/screens/home-page.screen";

interface Props {
    price: number,
    mentions: SocialMediaMentions[],
}

function StockOptionInfoDetails({ price, mentions }: Props) {
    const styles = useStockOptionInfoStyles();


    return (
        <View style={styles.parentView}>
            <Text style={styles.price}>
                {price}$
            </Text >

            <View>
                {mentions.map((socialMediaMention: SocialMediaMentions) => {
                    return <SocialMediaMentionDetail
                        mention={socialMediaMention}
                        key={socialMediaMention.name}
                    />
                })}
            </View >
        </View>

    );
}


const useStockOptionInfoStyles = makeStyles(() => ({
    parentView: {
        margin: 10,
        alignItems: 'center'
    },
    price: {
        fontSize: 20,
    },
}));

export default StockOptionInfoDetails;
