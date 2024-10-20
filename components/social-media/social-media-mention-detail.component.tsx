
import React from "react";
import { Text } from "react-native";
import { makeStyles } from '@rneui/themed';
import { SocialMediaMention } from "../../app/models/social-media.models";
import { TestIds } from "../../constants/test-ids.constants";

interface Props {
    mention: SocialMediaMention
};

function SocialMediaMentionDetail({ mention }: Props) {
    const styles = useSocialMediaMentionDetailsStyles();

    const { name, nbMentions } = mention;

    return (
        <Text style={styles.parentText} testID={TestIds.SOCIAL_MEDIA_MENTION_DETAIL_VIEW}>
            <Text style={styles.name}>{name}: </Text>
            <Text>{nbMentions} {nbMentions > 1 ? "mentions" : "mention"}</Text>
        </Text>
    );
}


const useSocialMediaMentionDetailsStyles = makeStyles(() => ({
    parentText: {
        margin: 10,
        fontSize: 18
    },
    name: {
        fontWeight: 'bold'
    },
}));

export default SocialMediaMentionDetail;
