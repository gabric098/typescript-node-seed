/* tslint:disable:no-console */
export function vowelShift(text:string, n:number):string {
  let vowelPositions:number[] = findVowels(text);
  newVowelPositions(vowelPositions, n, text.length);
  return '?';  
}

export function findVowels(text:string):number[] {
  let vowelsArray:number[] = [];
  for (var i=0; i<text.length; i++) {
    if (isVowel(text[i])) {
      vowelsArray.push(i);
    }    
  }
  return vowelsArray;
}

export function isVowel(char:string):boolean {
  let re = /[aeiou]/g;
  return (char.match(re) !== null);
}

export function newVowelPositions(inArray:number[], shift:number, maxLength:number):number[] {
  let outArray = [];
  for (var i=0; i<inArray.length; i++) {
    let inVal = inArray[i];
    let newPos = inVal + shift;
    while (newPos > maxLength || newPos < 0) {
      shift = shift - ((newPos < 0) ? -1 * maxLength : maxLength);
      newPos = inVal + shift;
    }    
    outArray.push(newPos);
  }
  return outArray;
}
