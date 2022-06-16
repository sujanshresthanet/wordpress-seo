import { LOAD_ESTIMATED_READING_TIME, SET_ESTIMATED_READING_TIME, SET_FLESCH_READING_EASE, SET_PROMINENT_WORDS, SET_WORD_COUNT } from "./actions";

const INITIAL_STATE = {
	estimatedReadingTime: 0,
	fleschReadingEaseScore: 0,
	// Including `<a>` and `</a>`, so we can interpolate.
	fleschReadingEaseText: "",
	prominentWords: [],
	wordCount: 0,
};

/**
 * Reduces the insights data.
 *
 * @param {Object} state  The current state of the object.
 * @param {Object} action The current action received.
 * @param {string} action.type The action type.
 * @param {*} action.payload The action payload.
 *
 * @returns {Object} The state.
 */
const reducer = ( state = INITIAL_STATE, { type, payload } ) => {
	switch ( type ) {
		case LOAD_ESTIMATED_READING_TIME:
		// Fallthrough condition because format of LOAD_ and SET_ actions are the same.
		case SET_ESTIMATED_READING_TIME:
			return {
				...state,
				estimatedReadingTime: payload,
			};
		case SET_FLESCH_READING_EASE:
			return {
				...state,
				fleschReadingEaseScore: payload.score,
				fleschReadingEaseText: payload.text,
			};
		case SET_PROMINENT_WORDS:
			return {
				...state,
				prominentWords: payload,
			};
		case SET_WORD_COUNT:
			return {
				...state,
				wordCount: payload,
			};
		default:
			return state;
	}
};

export default reducer;
