// Behaviors of numbers

// Max and Min Numbers
console.log(Number.MAX_SAFE_INTEGER); // 2 ^ 53 - 1
console.log(Number.MIN_SAFE_INTEGER); // -2 ^ 53  - 1

// Floating Point Imprecision
console.log(0.2 + 0.4); // yields a result different than the decimal notation result.

// BigInt Type
console.log(10n);
console.log(parseInt(10n) - 6);

// Infinity
console.log(1 / 0); // Infinity
console.log(Number.isFinite(10)); // true
console.log(Number.isFinite(-Infinity)); // false
