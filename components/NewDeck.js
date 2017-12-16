import React, { Component } from 'react';
import { Keyboard, Text, TextInput, TouchableOpacity, View } from 'react-native';
import * as actions from '../actions';
import * as storage from '../helpers/storage';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation'

export class NewDeck extends Component {
    state = {
        title: ''
    };

    submit = () => {
        if (this.state.title) {
            const {dispatch} = this.props;

            dispatch(actions.addDeck(this.state.title));
            storage.addDeck(this.state.title);

            this.setState({title: ''});
            Keyboard.dismiss();
            this.props.navigation.dispatch(NavigationActions.back({key: 'NewDeck'}));
        }
        else {
            alert('The title is empty!');
        }
    };

    render() {
        return (
            <View>
                <Text>New deck</Text>
                <TextInput
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    onChangeText={(title) => this.setState({ title })}
                    value={this.state.title}
                />
                <TouchableOpacity
                    onPress={this.submit}>
                    <Text>Add deck</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

export default connect()(NewDeck);