"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNumbers = void 0;
const validators_1 = require("../utils/validators");
const numberService_1 = require("../services/numberService");
const perf_hooks_1 = require("perf_hooks");
const helpers_1 = require("../utils/helpers");
function getNumbers(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { minNumber, maxNumber, feature } = req.body;
            // Input validation
            if (!(0, validators_1.isValidPositiveInteger)(minNumber) || !(0, validators_1.isValidPositiveInteger)(maxNumber) || !(0, validators_1.isValidArray)(feature)) {
                res.status(400).json({ error: 'Invalid input parameters.' });
                return;
            }
            if (!(0, validators_1.isWithinAcceptedBounds)(maxNumber - minNumber)) {
                res.status(400).json({ error: 'Please input numbers that are within a range of 99999999' });
                return;
            }
            if (!(0, validators_1.hasCorrectFeature)(feature)) {
                res.status(400).json({ error: 'feature parameter must be an array that contains any or both: "palindrome", "prime"' });
                return;
            }
            // Placeholder logic: Generate an array of numbers based on the input parameters
            var numbers = [];
            const startTime = perf_hooks_1.performance.now();
            if (feature.includes('prime')) {
                numbers = (0, numberService_1.findPrime)(minNumber, maxNumber);
            }
            if (feature.includes('palindrome')) {
                numbers = (numbers.length > 0) ? (0, helpers_1.findCommonElements)((0, numberService_1.findPalindrome)(minNumber, maxNumber), numbers) : (0, numberService_1.findPalindrome)(minNumber, maxNumber);
            }
            const endTime = perf_hooks_1.performance.now();
            const timeOfExecution = endTime - startTime;
            res.status(200).json({ data: numbers, timeOfExecution });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal server error.' });
        }
    });
}
exports.getNumbers = getNumbers;
