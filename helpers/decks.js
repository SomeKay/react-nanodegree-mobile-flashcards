import { AsyncStorage } from 'react-native';

export const FLASHCARDS_STORAGE_KEY = 'bunny-glass-water-lord-sponge';

export function formatDeckResults(results) {
    return results === null
        ? setInitData()
        : JSON.parse(results);
}

function setInitData() {
    const initData = {
        ['Dragon Ball']: {
            title: 'Dragon Ball',
            questions: []
        },
        ['Lord of the rings']: {
            title: 'Lord of the rings',
            questions: []
        }
    };

    AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(initData));

    return initData;
}