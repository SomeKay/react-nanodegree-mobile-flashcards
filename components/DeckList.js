import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { getDecks } from '../helpers/storage';
import { receiveDecks } from '../actions';

class DeckList extends Component {
    componentDidMount() {
        const {dispatch} = this.props;

        getDecks().then((decks) => dispatch(receiveDecks(decks)));
    };

    render() {
        const {decks} = this.props;
        const deckList = Object.entries(decks).map(
            deck => {
                return {title: deck[1].title, questions: deck[1].questions}
            }
        );

        return (
            <View>
                <Text>Deck list</Text>
                {deckList.map((deck) => (
                    <View key={deck.title}>
                        <Text>{deck.title}</Text>
                        <Text>Questions: {deck.questions.length}</Text>
                    </View>
                ))}
            </View>
        );
    }
}

function mapStateToProps(decks) {
    return {
        decks
    }
}

export default connect(
    mapStateToProps,
)(DeckList);