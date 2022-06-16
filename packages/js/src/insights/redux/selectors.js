import { get } from "lodash";

/**
 * Gets the Estimated Reading Time from the store.
 *
 * @param {Object} state The state.
 *
 * @returns {number} The estimated reading time.
 */
export const getEstimatedReadingTime = state => {
	return get( state, "insights.estimatedReadingTime", 0 ) ?? 0;
};

/**
 * @param {Object} state The state.
 *
 * @returns {number} The flesch reading ease score.
 */
export const getFleschReadingEaseScore = state => {
	const result = get( state, "analysis.readability.results.0", {} );
	if ( result?._identifier !== "fleschReadingEase" ) {
		// Replace the rest of the code with the line below when the assessment is moved out of the analysis worker.
		return get( state, "insights.fleschReadingEaseScore", 0 ) ?? 0;
	}
	return result.score;
};

/**
 * @param {Object} state The state.
 *
 * @returns {string} The flesch reading ease text.
 */
export const getFleschReadingEaseText = state => {
	const result = get( state, "analysis.readability.results.0", {} );
	if ( result?._identifier !== "fleschReadingEase" ) {
		// Replace the rest of the code with the line below when the assessment is moved out of the analysis worker.
		return get( state, "insights.fleschReadingEaseText", "" ) ?? "";
	}
	return result.text.replace( /^<a href='https:\/\/yoa.st\/34r[^>]*>Flesch Reading Ease<\/a>: /i, "" ).replace( /<a[^>]+>/gi, "<a>" );
};

/**
 * @param {Object} state The state.
 *
 * @returns {Object[]} The prominent words.
 */
export const getProminentWords = state => {
	return get( state, "insights.prominentWords", [] ) ?? [];
};

/**
 * @param {Object} state The state.
 *
 * @returns {string} The word count.
 */
export const getWordCount = state => {
	return get( state, "insights.wordCount", "" ) ?? "";
};
