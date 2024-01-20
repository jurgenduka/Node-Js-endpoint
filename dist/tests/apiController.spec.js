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
// tests/apiController.spec.ts
const apiController_1 = require("../src/controllers/apiController");
describe('API Controller', () => {
    it('should handle valid input and return results', () => __awaiter(void 0, void 0, void 0, function* () {
        // Implement test logic for valid input
        const req = { body: { minNumber: 1, maxNumber: 10, feature: ['palindrome'] } };
        const res = { json: jest.fn() };
        yield (0, apiController_1.getNumbers)(req, res);
        expect(res.json).toHaveBeenCalledWith( /* Expected result based on the input */);
    }));
    it('should handle invalid input and return an error', () => __awaiter(void 0, void 0, void 0, function* () {
        // Implement test logic for invalid input
        const req = { body: { minNumber: -1, maxNumber: 10, feature: ['palindrome'] } };
        const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
        yield (0, apiController_1.getNumbers)(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({ error: 'Invalid input parameters.' });
    }));
});
