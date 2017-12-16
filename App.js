import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import FlashCardsStatusBar from './components/FlashCardsStatusBar';
import { Ionicons } from '@expo/vector-icons';
import { colors } from './helpers/colors';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

export default class App extends React.Component {
    render() {
        const Tabs = TabNavigator({
            DeckList: {
                screen: DeckList,
                navigationOptions: {
                    tabBarLabel: 'Deck list',
                    tabBarIcon: <Ionicons size={25} name="ios-albums-outline" />
                }
            },
            NewDeck: {
                screen: NewDeck,
                navigationOptions: {
                    tabBarLabel: 'New deck',
                    tabBarIcon: <Ionicons size={25} name="ios-add-circle-outline" />
                }
            }
        }, { tabBarOptions: {
                labelStyle: {
                    fontSize: 14
                },
                style: {
                    height: 56,
                    backgroundColor: colors.WHITE,
                    shadowColor: 'rgba(0, 0, 0, 0.24)',
                    shadowOffset: {
                        width: 0,
                        height: 3
                    },
                    shadowRadius: 6,
                    shadowOpacity: 1
                }
            }
        });
        return (
            <Provider store={createStore(reducer)}>
                <View style={{flex: 1}}>
                    <FlashCardsStatusBar/>
                    <Tabs/>
                </View>
            </Provider>
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
