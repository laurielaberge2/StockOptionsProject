
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, makeStyles } from '@rneui/themed';
import EmptyState from "./empty-state.component";
import StockOptionInfoDetails from "./stock-option-info.component-details";
import { useStockOptionInfo } from "@/hooks/use-stock-option-info";
import { SocialMediaEnum } from "@/app/models/social-media.models";
import { Colors } from "@/constants/Colors";

interface Props {
    stockOption: string
    selectedSocialMedia: SocialMediaEnum[]
};

function StockOptionResult({ stockOption, selectedSocialMedia }: Props) {
    const styles = useStockOptionResultStyles();

    const [infoIsShown, setInfoIsShown] = useState<boolean>(false);
    const info = useStockOptionInfo(stockOption, selectedSocialMedia)

    if (!stockOption) {
        return <EmptyState />
    }

    return (
        <View style={styles.parentView}>
            <Text style={styles.textSection}>
                <Text>Stock name: </Text>
                <Text style={styles.stockOption}>
                    {stockOption || "..."}
                </Text>
            </Text >

            <Button
                title={infoIsShown ? "Hide information" : "Show information"}
                buttonStyle={styles.button}
                titleStyle={styles.buttonTitle}
                containerStyle={styles.buttonContainer}
                onPress={() => setInfoIsShown(!infoIsShown)}
            />

            {infoIsShown && <StockOptionInfoDetails
                info={info}
            />}
        </View>

    );
};


const useStockOptionResultStyles = makeStyles(() => ({
    parentView: {
        marginVertical: 10,
        alignItems: 'center',
    },
    textSection: {
        fontSize: 20,
        color: Colors.darkText,
    },
    stockOption: {
        fontWeight: 'bold'
    },
    button: {
        backgroundColor: Colors.button,
        borderRadius: 30,
        marginTop: 10
    },
    buttonTitle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    buttonContainer: {
        width: 160,
    }
}));

export default StockOptionResult;
