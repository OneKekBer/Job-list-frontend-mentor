import { createStore } from "redux";
import { combineReducers } from "redux";
import data from "../assets/data.json";

const initialState = {
    works: data,
    filters: [],
};

export const works = (state = initialState.works, action) => {
    switch (action.type) {
        case "GET_STORE": {
            return state;
        }

        default:
            return state;
    }
};

export const filters = (state = initialState.filters, action) => {
    switch (action.type) {
        case "ALL": {
            return state;
        }

        case "ADD_FILTER": {
            const existingFilter = state.find(
                (item) => item.filterName === action.filter
            );
            if (existingFilter) {
                return state;
            } else {
                return [
                    ...state,
                    { filterName: action.filter, id: Date.now() },
                ];
            }
        }
        case "REMOVE_FILTER": {
            return state.filter((filter) => filter.id !== action.filterId);
        }
        case "REMOVE_ALL_FILTERS": {
            return (state = []);
        }

        default:
            return state;
    }
};

export const rootReducer = combineReducers({
    works,
    filters,
});

export const store = createStore(
    rootReducer,

    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// export const getAllWorksAC = (state) => {
//     return { type: "GET_STORE" };
// };

export const addFilter = (filter) => {
    return {
        type: "ADD_FILTER",
        filter,
    };
};

export const removeFilter = (filterId) => ({
    type: "REMOVE_FILTER",
    filterId,
});

export const removeAllFilters = () => ({
    type: "REMOVE_ALL_FILTERS",
});
