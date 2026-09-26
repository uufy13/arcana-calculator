export type CalculationResult = {
  month: number;
  day: number;
  year: number;
  initialTotal: number;
  reductions: number[];
  steps: string[];
  /** 1–21 are direct Major Arcana numbers; 22 is the special Fool alias. */
  arcanaNumber: number;
  /** The static page number. Arcana 22 is represented by the Fool page, /arcana/0/. */
  cardNumber: number;
};

function isLeapYear(year: number): boolean {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

function daysInMonth(month: number, year: number): number {
  if (month === 2) return isLeapYear(year) ? 29 : 28;
  return [4, 6, 9, 11].includes(month) ? 30 : 31;
}

function isFutureDate(year: number, month: number, day: number): boolean {
  const today = new Date();
  const currentDate = [today.getFullYear(), today.getMonth() + 1, today.getDate()];
  const inputDate = [year, month, day];
  return inputDate[0] > currentDate[0]
    || (inputDate[0] === currentDate[0] && inputDate[1] > currentDate[1])
    || (inputDate[0] === currentDate[0] && inputDate[1] === currentDate[1] && inputDate[2] > currentDate[2]);
}

function sumDigits(value: number): number {
  return [...String(value)].reduce((total, digit) => total + Number(digit), 0);
}

export function calculateArcana(dateString: string): CalculationResult {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(dateString);
  if (!match) throw new Error('Please enter a valid date.');

  const year = Number(match[1]);
  const month = Number(match[2]);
  const day = Number(match[3]);
  if (year < 1 || month < 1 || month > 12 || day < 1 || day > daysInMonth(month, year)) {
    throw new Error('Please enter a real calendar date.');
  }
  if (isFutureDate(year, month, day)) throw new Error('Please enter a date that is not in the future.');

  const initialTotal = month + day + year;
  const reductions: number[] = [];
  const steps = [`${month} + ${day} + ${year} = ${initialTotal}`];
  let current = initialTotal;
  while (current > 22) {
    const previous = current;
    current = sumDigits(current);
    reductions.push(current);
    steps.push(`${String(previous).split('').join(' + ')} = ${current}`);
  }

  return {
    month,
    day,
    year,
    initialTotal,
    reductions,
    steps,
    arcanaNumber: current,
    cardNumber: current === 22 ? 0 : current,
  };
}
