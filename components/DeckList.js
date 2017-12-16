import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../helpers/storage';
import { receiveDecks } from '../actions';
import { styles } from '../helpers/styles';

class DeckList extends Component {
    componentDidMount() {
        const {dispatch} = this.props;

        getDecks().then((decks) => dispatch(receiveDecks(decks)));
    };

    renderItem = ({item}) => {
        return (
            <TouchableOpacity
                style={style.deck}
                onPress={() => this.props.navigation.navigate(
                    'Deck',
                    {deckId: item.title}
                )}>
                <Text style={style.deckTitle}>{item.title}</Text>
                <Text>{item.questions.length} cards</Text>
            </TouchableOpacity>
        );
    };

    render() {
        const {decks} = this.props;
        const deckList = Object.entries(decks).map(
            deck => {
                return {title: deck[1].title, key: deck[1].title, questions: deck[1].questions}
            }
        );

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Deck list</Text>
                <FlatList data={deckList}
                          renderItem={this.renderItem}/>
            </View>
        );
    }
}

const style = StyleSheet.create({
    deck: {
        borderTopColor: '#cccccc',
        borderTopWidth: 1,
        paddingBottom: 18,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 18
    },
    deckTitle: {
        fontSize: 20,
        paddingBottom: 3
    }
});

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(mapStateToProps)(DeckList);