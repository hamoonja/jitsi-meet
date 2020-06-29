import React from "react";
import { withTranslation } from "react-i18next";

const rtlLangs = ["ar", "he", "fa"];

/**
 * Wraps a specific React Component in order to enable translations in it.
 *
 * @param {Component} component - The React Component to wrap.
 * @returns {Component} The React Component which wraps {@link component} and
 * enables translations in it.
 */
export function translate(component) {
    // Use the default list of namespaces.
    return withTranslation(["main", "languages", "countries"])(component);
}

/**
 * Translates a specific key to text containing HTML via a specific translate
 * function.
 *
 * @param {Function} t - The translate function.
 * @param {string} key - The key to translate.
 * @param {Array<*>} options - The options, if any, to pass to {@link t}.
 * @returns {ReactElement} A ReactElement which depicts the translated HTML
 * text.
 */
export function translateToHTML(t, key, options = {}) {
    // eslint-disable-next-line react/no-danger
    return <span dangerouslySetInnerHTML={{ __html: t(key, options) }} />;
}

/**
 * Returns the direction for a given langauge code.
 *
 * @param {string} language - The language code e.g. 'en'.
 * @returns {string} The direction. Either 'rtl' or 'ltr'
 * text.
 */
export function findDirection(language) {
    // return rtlLangs.includes(language) ? "rtl" : "ltr";
    return rtlLangs.indexOf(language) > -1 ? "rtl" : "ltr";
}
