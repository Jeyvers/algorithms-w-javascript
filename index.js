
let a="aaaaavvvvbbbbssssqzx";
let duplicatedElements = [];
let numberofDuplicates = [];
for (let i = 0; i < a.length; i++) {
  
  let arrayOfStrings = a.split('');
  const duplicates = arrayOfStrings.filter((dup) => dup === a[i]);
  const isExisting = duplicatedElements.findIndex((d) => d === a[i])

  if(duplicates.length > 1 && isExisting === -1 ) {
    duplicatedElements.push(a[i]);
    numberofDuplicates.push(duplicates.length)
  }
  
}

console.log(duplicatedElements, numberofDuplicates)