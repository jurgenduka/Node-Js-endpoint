// tests/apiController.spec.ts
import { getNumbers } from '../src/controllers/apiController';
import { Request, Response } from 'express';
import { isValidPositiveInteger, isValidArray, hasCorrectFeature, isWithinAcceptedBounds } from '../src/utils/validators';
import { findPalindrome, findPrime } from '../src/services/numberService';

describe('Palindrome Test', () => {
  it('Should find all palindromes in range', async () => {
    expect(findPalindrome(1, 100)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99]);
  });
});

describe('Prime Test', () => {
  it('Should find all primes in range', async () => {
    expect(findPrime(1, 100)).toEqual([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29,
      31, 37, 41, 43, 47, 53, 59, 61, 67, 71,
      73, 79, 83, 89, 97
    ]);
  });
});

describe('Validator Test', () => {
  it('Should return true for positive numbers using isValidPositiveInteger', async () => {
    expect(isValidPositiveInteger(1)).toEqual(true);
  });

  it('Should return false for 0 using isValidPositiveInteger', async () => {
    expect(isValidPositiveInteger(0)).toEqual(false);
  });

  it('Should return false for negative numbers using isValidPositiveInteger', async () => {
    expect(isValidPositiveInteger(-1)).toEqual(false);
  });

  it('Should return true for valid arrays using isValidArray', async () => {
    expect(isValidArray([1])).toEqual(true);
  });

  it('Should return false for 0 using isValidArray', async () => {
    expect(isValidArray(1)).toEqual(false);
  });

  it('Should return true for containing "palindrome" or "prime" using hasCorrectFeature', async () => {
    expect(hasCorrectFeature(["palindrome"])).toEqual(true);
    expect(hasCorrectFeature(["prime"])).toEqual(true);
  });

  it('Should return false for having more than 2 elements, less than 1 elements and not containing any of "palindrome" or "prime" using hasCorrectFeature', async () => {
    expect(hasCorrectFeature([1, 2, 3])).toEqual(false);// Reason: more than 2 elements
    expect(hasCorrectFeature([1, 2])).toEqual(false);// Reason: No "Palindrome" or "prime"
    expect(hasCorrectFeature([])).toEqual(false);// Reason: Empty
  });

  it('Should return true for a number below 99999999 using isWithinAcceptedBounds', async () => {
    expect(isWithinAcceptedBounds(99999999-1)).toEqual(true);
  });

  it('Should return false for being bigger than 99999999 using isWithinAcceptedBounds', async () => {
    expect(isWithinAcceptedBounds(999999990-1)).toEqual(false);
  });
});

describe('API Controller', () => {
  it('should handle valid input and return results', async () => {
    let req: Request = { body: { minNumber: 1, maxNumber: 10, feature: ['palindrome', 'prime'] } } as any;
    let res: Response = { status: jest.fn().mockReturnThis(), json: jest.fn() } as any;

    await getNumbers(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      data: [2, 3, 5, 7],
      timeOfExecution: expect.any(Number), // Ignore the executionTime value
    });
  });

  it('should handle invalid input and return an error', async () => {
    let req: Request = { body: { minNumber: -1, maxNumber: 10, feature: ['palindrome', 'prime'] } } as any;
    let res: Response = { status: jest.fn().mockReturnThis(), json: jest.fn() } as any;

    await getNumbers(req, res);

    expect(res.status).toHaveBeenCalledWith(400);
    expect(res.json).toHaveBeenCalledWith({ error: 'Invalid input parameters.' });
  });
});