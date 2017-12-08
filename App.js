import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import DeckList from './DeckList';
import NewDeck from './NewDeck';
import FlashCardsStatusBar from './FlashCardsStatusBar';

export default class App extends React.Component {
    render() {
        const Tabs = TabNavigator({
            DeckList: {
                screen: DeckList
            },
            NewDeck: {
                screen: NewDeck
            }
        });
        return (
            <View style={{flex: 1}}>
                <FlashCardsStatusBar/>
                <Tabs/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
