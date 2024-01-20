"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findCommonElements = void 0;
function findCommonElements(array1, array2) {
    return array1.filter(element => array2.includes(element));
}
exports.findCommonElements = findCommonElements;
