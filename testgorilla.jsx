const fetchData = () => new Promise(r => setTimeout(() => r(Date.now()), 100));

const MyComponent = () => {
  const [result, setResult] = React.useState();
  const data = fetchData().then(value => setResult(value));

  return (
    <div>
      {result === data.toString() ? (<div>hello</div>) : (<div>good bye</div>)}
    </div>
  )
}


// pericius (1)
function extractUniqueValues(arrOfObjects, key) {
  const UniqueValues = []
  // Your code here
  for(let i = 0; i < arrOfObjects.length; i++) {
    let currentValue = arrOfObjects[i][key];
    let newArr = arrOfObjects.map((arr) => arr[key])
    let valueOf = (newArr.filter((arr) => arr === currentValue))
    if(valueOf.length === 1) {
      UniqueValues.push(...valueOf) 
    }
  }
  return UniqueValues
}


const data = [
  { id: 1, name: 'John', age: 25 },
  { id: 2, name: 'Jane', age: 30 },
  { id: 3, name: 'Bob', age: 25 },
  { id: 4, name: 'Alice', age: 22 },
  { id: 5, name: 'John', age: 25 }
];

const uniqueAges = extractUniqueValues(data, 'age');
console.log(uniqueAges);
// Should log: [25, 30, 22]

const uniqueNames = extractUniqueValues(data, 'name');
console.log(uniqueNames);
// Should log: ['John', 'Jane', 'Bob', 'Alice']

console.log(5++5)

// pericius (2)
const urls = [
  'https://jsonplaceholder.typicode.com/posts/1',
  'https://jsonplaceholder.typicode.com/posts/2',
  'https://jsonplaceholder.typicode.com/posts/3'
];

const fetchPromises = urls.map(url => fetch(url));

Promise.all(fetchPromises)
  .then(responses => {
    // responses is an array of the resolved fetch responses
    return Promise.all(responses.map(response => response.json()));
  })
  .then(dataArray => {
    // dataArray is an array of the parsed JSON data from each response
    console.log(dataArray);
  })
  .catch(error => {
    console.error('Error:', error);
  });
