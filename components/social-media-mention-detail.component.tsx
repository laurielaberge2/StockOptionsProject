
import React from "react";
import { Text } from "react-native";
import { makeStyles } from '@rneui/themed';
import { SocialMediaMentions } from "@/screens/home-page.screen";

interface Props {
    mention: SocialMediaMentions
}

function SocialMediaMentionDetail({ mention }: Props) {
    const styles = useSocialMediaMentionDetailsStyles();

    return (
        <Text style={styles.parentText}>
            <Text style={styles.name}>{mention.name}: </Text>
            <Text>{mention.nbMentions}</Text>
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
    }

}));

export default SocialMediaMentionDetail;
