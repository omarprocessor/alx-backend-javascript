// Define the MajorCredits interface with a brand property and credits
interface MajorCredits {
  brand: string;
  credits: number;
}

// Define the MinorCredits interface with a brand property and credits
interface MinorCredits {
  brand: string;
  credits: number;
}

// Function to sum MajorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    brand: `${subject1.brand} + ${subject2.brand}`,
    credits: subject1.credits + subject2.credits,
  };
}

// Function to sum MinorCredits
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    brand: `${subject1.brand} + ${subject2.brand}`,
    credits: subject1.credits + subject2.credits,
  };
}

// Example usage of the sum functions
const majorSubject1: MajorCredits = { brand: "Mathematics", credits: 6 };
const majorSubject2: MajorCredits = { brand: "Physics", credits: 4 };

const minorSubject1: MinorCredits = { brand: "Philosophy", credits: 3 };
const minorSubject2: MinorCredits = { brand: "Sociology", credits: 2 };

// Summing credits
const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);

// Logging results
console.log(`Total Major Credits: ${totalMajorCredits.credits} - Brand: ${totalMajorCredits.brand}`);
console.log(`Total Minor Credits: ${totalMinorCredits.credits} - Brand: ${totalMinorCredits.brand}`);
