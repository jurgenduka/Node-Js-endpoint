// controllers/apiController.ts
import { Request, Response } from 'express';
import { isValidPositiveInteger, isValidArray, hasCorrectFeature, isWithinAcceptedBounds } from '../utils/validators';
import { findPalindrome, findPrime } from '../services/numberService';
import { performance } from 'perf_hooks';
import { findCommonElements } from '../utils/helpers';

export async function getNumbers(req: Request, res: Response): Promise<void> {
  try {
    const { minNumber, maxNumber, feature } = req.body;

    // Input validation
    if (!isValidPositiveInteger(minNumber) || !isValidPositiveInteger(maxNumber) || !isValidArray(feature)) {
      res.status(400).json({ error: 'Invalid input parameters.' });
      return;
    }
    if(!isWithinAcceptedBounds(maxNumber-minNumber)){
      res.status(400).json({ error: 'Please input numbers that are within a range of 99999999' });
      return;
    }
    if(!hasCorrectFeature(feature)){
      res.status(400).json({ error: 'feature parameter must be an array that contains any or both: "palindrome", "prime"' });
      return;
    }

    // Placeholder logic: Generate an array of numbers based on the input parameters
    var numbers: number[] = [];
    const startTime = performance.now();
    if(feature.includes('prime')){
      numbers = findPrime(minNumber, maxNumber);
    }
    if(feature.includes('palindrome')){
      numbers = (numbers.length > 0)? findCommonElements(findPalindrome(minNumber, maxNumber), numbers):findPalindrome(minNumber, maxNumber);
    }

    const endTime = performance.now();
    const timeOfExecution = endTime - startTime;

    res.status(200).json({ data: numbers, timeOfExecution });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error.' });
  }
}
