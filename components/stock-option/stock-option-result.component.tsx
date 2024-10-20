
import React, { useState } from "react";
import { Text, View } from "react-native";
import { Button, makeStyles } from '@rneui/themed';
import StockOptionResultEmptyState from "./stock-option-result-empty-state.component";
import { useStockOptionInfo } from "../../hooks/use-stock-option-info";
import { SocialMediaEnum } from "../../app/models/social-media.models";
import { Colors } from "../../constants/colors.constants";
import StockOptionInfoDetails from "./stock-option-info.component-details.component";
import SearchDatePicker from "../../components/search-date-picker.component";

interface Props {
    stockOption: string
    selectedSocialMedia: SocialMediaEnum[],
};

function StockOptionResult({ stockOption, selectedSocialMedia }: Props) {
    const styles = useStockOptionResultStyles();

    const [selectedDate, setSelectedDate] = useState(new Date());
    const [infoIsShown, setInfoIsShown] = useState<boolean>(false);

    const info = useStockOptionInfo(stockOption, selectedSocialMedia, selectedDate)

    const month = selectedDate.getUTCMonth() + 1; // months from 1-12
    const day = selectedDate.getUTCDate();
    const year = selectedDate.getUTCFullYear();
    const formattedDate = month + "/" + day + "/" + year;

    if (!stockOption) {
        return <StockOptionResultEmptyState />
    }

    return (
        <View style={styles.parentView}>
            <SearchDatePicker selectedDate={selectedDate} setSelectedDate={setSelectedDate} />

            <Text style={styles.textSection}>
                <Text>Stock name: </Text>
                <Text style={styles.stockOption}>
                    {stockOption}
                </Text>
            </Text >

            <Text style={styles.textSection}>
                <Text>Date: From</Text>
                <Text style={styles.stockOption}>
                    {` ${formattedDate} `}
                </Text>
                <Text>
                    to ten days before
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
        fontSize: 16,
        color: Colors.darkText,
    },
    buttonContainer: {
        width: 160,
    }
}));

export default StockOptionResult;
