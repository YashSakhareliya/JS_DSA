# 🎯 Pragmatic Problems JS

A curated collection of programming problems to level up your JavaScript skills! 🚀

## 🛠️ Setup Instructions

1. Make sure you have Node.js installed on your computer. 💻

2. Clone this repository:
```bash
git clone https://github.com/smaranjitghose/pragmatic-problems-js.git
cd pragmatic-problems-js
```

3. Install the dependencies:
```bash
npm install
```

## ✍️ Writing Your Solutions

1. All your solution files should be placed in the `solutions/` directory 📁
2. Name your solution files exactly as mentioned (e.g., q1.js, q2.js, etc.)
3. Each solution file should export its function using `export default`
4. Make sure to use the exact function name as mentioned in the corresponding test file

Example:
If test file `tests/q1.test.js` has:
```javascript
import myFunction from '../solutions/q1.js'
```
Then your `solutions/q1.js` should look like:
```javascript
const myFunction = (param1, param2) => {
    // Your solution here
}

export default myFunction
```

## 🧪 Running Tests

To test your solutions, use one of these commands:

- Run tests once:
```bash
npm test
```

- Run test for a given question
```bash
npm test q2
```

## 📚 Problem List

Problems are structured to gradually build your problem-solving skills. Each problem comes with automated tests to verify your solutions.

Check out our complete list of problems here: [Basic_Problems.md](Basic_Problems.md) 🔍

## 💡 Tips

1. Read the test file for each problem to understand:
   - The expected function name
   - The parameters it should accept
   - The expected return value
   - Different test cases it should pass

2. Make sure your function:
   - Has the correct name
   - Accepts the correct parameters
   - Returns the expected data type
   - Handles all edge cases

3. Use watch mode (`npm run test:watch`) while developing to see instant feedback ⚡
