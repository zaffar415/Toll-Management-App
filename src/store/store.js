import RootReducers  from './reducer';
import { createStore } from 'redux';


const saveToLocalStorage = (state) => {
    try {
        localStorage.setItem('toll-storage', JSON.stringify(state));
    } catch (e) {
        console.error(e);
    }
};

const loadFromLocalStorage = () => {
    try {
        const stateStr = localStorage.getItem('toll-storage');
        return stateStr ? JSON.parse(stateStr) : undefined;
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

const persistedStore = loadFromLocalStorage();

const store = createStore(RootReducers, persistedStore)

store.subscribe(() => {
    saveToLocalStorage(store.getState());
});

export default store;
