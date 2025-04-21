"use strict";
exports.__esModule = true;
exports.toUnixTimestamp = exports.toIsoDate = exports.yesterday = exports.daysLeft = exports.addHours = exports.endOfDay = exports.addDays = void 0;
/**
 * @param {Date object} date Date to add days to
 * @param {integer} days Number of days to be added
 * @return Date object
 */
var addDays = function (date, days) {
    return new Date(date.setDate(date.getDate() + days));
};
exports.addDays = addDays;
/**
 * @param {Date object} Date that we need to get end of the day
 * @return Date object one second before midnight
 */
var endOfDay = function (day) {
    return new Date(((0, exports.addDays)(day, 1)).getTime() - 1000);
};
exports.endOfDay = endOfDay;
/**
 *
 * @param {Date object} date It would be wrapped in new Date()
 * @param {number} hours Number of hours (integer of loat) to be added to date
 * @returns Date Object
 */
var addHours = function (date, hours) {
    return new Date((date.getTime() + (hours * 60 * 60 * 1000)));
};
exports.addHours = addHours;
var daysLeft = function (date) {
    return Math.floor((date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24));
};
exports.daysLeft = daysLeft;
/**
 * @returns Date object
 */
var yesterday = function () {
    return (0, exports.addDays)(new Date(), -1);
};
exports.yesterday = yesterday;
/**
 * @param {Date object} date Date to convert to ISO date
 * @returns ISO date string
 */
var toIsoDate = function (date) {
    return date.toISOString().substring(0, 10);
};
exports.toIsoDate = toIsoDate;
/**
 * @param {Date object} date It would be wrapped in new Date()
 * @return Unix Timestamp (Not Javascript Timestamp)
 */
var toUnixTimestamp = function (date) {
    return Math.round(date.getTime() / 1000);
};
exports.toUnixTimestamp = toUnixTimestamp;
