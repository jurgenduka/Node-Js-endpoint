// services/numberService.ts
export function findPalindrome(start: number, end: number): number[] {
    const result: number[] = [];
    for (let i = start; i <= end; i++) {
        var numStr: string = i.toString();
        var reversed: string = numStr.split('').reverse().join('');
        if(numStr === reversed) result.push(i);
    }
    
    return result;
  }
  
  export function findPrime(start: number, end: number): number[] {
    const primes: boolean[] = Array.from({ length: end + 1 }, (_, i) => true);

    for (let p = 2; p * p <= end; p++) {
        if (primes[p]) {
            for (let i = p * p; i <= end; i += p) {
                primes[i] = false;
            }
        }
    }

    const result: number[] = [];
    for (let i = Math.max(2, start); i <= end; i++) {
        if (primes[i]) {
            result.push(i);
        }
    }

    return result;
  }
  