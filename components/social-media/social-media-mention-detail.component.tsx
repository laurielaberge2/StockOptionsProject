
import React from "react";
import { Text } from "react-native";
import { makeStyles } from '@rneui/themed';
import { SocialMediaMention } from "../../app/models/social-media.models";

interface Props {
    mention: SocialMediaMention
};

function SocialMediaMentionDetail({ mention }: Props) {
    const styles = useSocialMediaMentionDetailsStyles();

    const { name, nbMentions } = mention;

    return (
        <Text style={styles.parentText}>
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
