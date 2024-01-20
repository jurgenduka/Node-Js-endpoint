// utils/validators.ts
export function isValidPositiveInteger(value: number): boolean {
    return Number.isInteger(value) && value > 0;
  }
  
  export function isValidArray(value: any): boolean {
    return Array.isArray(value) && value.length > 0;
  }

  export function hasCorrectFeature(value: any[]): boolean {
    return value.length <= 2 && value.length > 0 && (value.includes("palindrome") || value.includes("prime"));
  }

  export function isWithinAcceptedBounds(maxRange: number): boolean {
    return maxRange < 99999999;
  }
  