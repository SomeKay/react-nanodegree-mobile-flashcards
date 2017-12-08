import React from 'react';
import { StatusBar, View } from 'react-native';
import { Constants } from 'expo';

export default function FlashCardsStatusBar() {
    return(
        <View style={{ backgroundColor: '#F7CA18', height: Constants.statusBarHeight}}>
            <StatusBar translucent backgroundColor="#F7CA18" />
        </View>
    )
}