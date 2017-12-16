import { AsyncStorage } from 'react-native';
import { FLASHCARDS_STORAGE_KEY, formatDeckResults } from './decks';

export function getDecks() {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        .then((results) => {
            return formatDeckResults(results);
        })
}

export function getDeck() {

}

export function addDeck(title) {
    return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
        [title]: {
            title: title,
            questions: []
        }
    }));
}

export function addCardToDeck(title, card) {
    return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
        .then((results) => {
            const card = JSON.parse(results)[title];
            const questions = card.questions.push(card);

            return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
                [title]: {
                    title: title,
                    questions: questions
                }
            }));
        });
}
