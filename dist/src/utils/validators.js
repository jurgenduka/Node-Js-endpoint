"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isWithinAcceptedBounds = exports.hasCorrectFeature = exports.isValidArray = exports.isValidPositiveInteger = void 0;
// utils/validators.ts
function isValidPositiveInteger(value) {
    return Number.isInteger(value) && value > 0;
}
exports.isValidPositiveInteger = isValidPositiveInteger;
function isValidArray(value) {
    return Array.isArray(value) && value.length > 0;
}
exports.isValidArray = isValidArray;
function hasCorrectFeature(value) {
    return value.length <= 2 && value.length > 0 && (value.includes("palindrome") || value.includes("prime"));
}
exports.hasCorrectFeature = hasCorrectFeature;
function isWithinAcceptedBounds(maxRange) {
    return maxRange < 99999999;
}
exports.isWithinAcceptedBounds = isWithinAcceptedBounds;
