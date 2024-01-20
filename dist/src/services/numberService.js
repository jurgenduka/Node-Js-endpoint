"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPrime = exports.findPalindrome = void 0;
// services/numberService.ts
function findPalindrome(start, end) {
    const result = [];
    for (let i = start; i <= end; i++) {
        var numStr = i.toString();
        var reversed = numStr.split('').reverse().join('');
        if (numStr === reversed)
            result.push(i);
    }
    return result;
}
exports.findPalindrome = findPalindrome;
function findPrime(start, end) {
    const primes = Array.from({ length: end + 1 }, (_, i) => true);
    for (let p = 2; p * p <= end; p++) {
        if (primes[p]) {
            for (let i = p * p; i <= end; i += p) {
                primes[i] = false;
            }
        }
    }
    const result = [];
    for (let i = Math.max(2, start); i <= end; i++) {
        if (primes[i]) {
            result.push(i);
        }
    }
    return result;
}
exports.findPrime = findPrime;
