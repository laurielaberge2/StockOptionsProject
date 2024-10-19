
import React from "react";
import { View } from "react-native";
import { CheckBox, makeStyles } from '@rneui/themed';
import { SocialMediaItem } from "@/app/models/social-media.models";

interface Props {
    socialMedia: SocialMediaItem,
    onToggleSelected: (socialMediaId: number) => void
}

function SocialMediaChoice({ socialMedia, onToggleSelected }: Props) {
    const styles = useSocialMediaChoiceStyles();

    return (
        <View
            style={styles.parentView}>
            <CheckBox
                center
                checked={socialMedia.selected}
                title={socialMedia.name}
                onPress={() => onToggleSelected(socialMedia.id)}
                checkedColor="#0F0"
                uncheckedColor="#F00"
                containerStyle={styles.checkBoxContainer}
                textStyle={styles.checkBoxText}
            />
        </View>
    );
}

const useSocialMediaChoiceStyles = makeStyles(() => ({
    parentView: {
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    checkBoxContainer: {
        backgroundColor: '#666665',
        marginBottom: 10
    },
    checkBoxText: {
        color: "#FFFFFF"
    }
}));

export default SocialMediaChoice;
