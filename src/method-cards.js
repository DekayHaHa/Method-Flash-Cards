const methodCards = [
	{
		"snippet": ["let arr = [1, 2, 3, 4, 5]","let results = arr.", "(val => val > 0)", "console.log(results) // logs true"],
		"category": "Array Prototype Method",
		"solution": "every",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every",
		"uid": "card-1"
	},
	{
		"snippet": ["let arr = [1, 2, 3, 4, 5]", "let results = arr.", "(5)", "console.log(results) // logs 4"],
		"category": "Array Prototype Method",
		"solution": "indexOf",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf",
		"uid": "card-2"
	},
	{
		"snippet": ["let arr = [1, 2, 3, 4, 5]", "let results = arr.", "(val => val > 3)", "console.log(results) // logs [ 4, 5 ]"],
		"category": "Array Prototype Method",
		"solution": "filter",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
		"uid": "card-3"
	},
	{
		"snippet": ["let arr = [1, 2, 3, 4, 5]", "let results = arr.", "(val => val > 2)", "console.log(results) // logs 3"],
		"category": "Array Prototype Method",
		"solution": "find",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find",
		"uid": "card-4"
	},
	{
		"snippet": ["let arr = [1, 2, 3, 4, 5], results = 0", "arr.", "(val => results += val)", "console.log(results) // logs 15"],
		"category": "Array Prototype Method",
		"solution": "forEach",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach",
		"uid": "card-5"
	},
	{
		"snippet": ["let arr = [1, 2, 3, 4, 5]", "let results = arr.", "(3)", "console.log(results) // logs true"],
		"category": "Array Prototype Method",
		"solution": "includes",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes",
		"uid": "card-6"
	},
	{
		"snippet": ["let arr = [1, 2, 3, 4, 5]", "let results = arr.", "(val => val > 2)", "console.log(results) // logs [ false, false, true, true, true ]"],
		"category": "Array Prototype Method",
		"solution": "map",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map",
		"uid": "card-7"
	},
	{
		"snippet": ["let arr = [1, 2, 3, 4, 5]", "let results = arr.", "(val => val > 2)", "console.log(results) // logs true"],
		"category": "Array Prototype Method",
		"solution": "some",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some",
		"uid": "card-8"
	},
	{
		"snippet": ["let arr = [1, 2, 3, 4, 5]", "let results = arr.", "()", "console.log(results) // logs [ 5, 4, 3, 2, 1 ]"],
		"category": "Array Prototype Method",
		"solution": "reverse",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter",
		"uid": "card-9"
	},
	{
		"snippet": ["let arr = [1, 2, 3, 4, 5]", "let results = arr.", "((acc, val) => acc += val)", "console.log(results) // logs 15"],
		"category": "Array Prototype Method",
		"solution": "reduce",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce",
		"uid": "card-10"
	},
	{
		"snippet": ["let str = 'Burritos are the best!'", "let results = str.", "('best!')", "console.log(results) // logs true"],
		"category": "String Prototype Method",
		"solution": "endsWith",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith",
		"uid": "card-11"
	},
	{
		"snippet": ["let str = 'Burritos are the best times 10!'", "let results = str.", "(10)", "console.log(results) // logs [ '10', index: 28, input: 'Burritos are the best times 10!' ]"],
		"category": "String Prototype Method",
		"solution": "match",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match",
		"uid": "card-12"
	},
	{
		"snippet": ["let str = 'Burritos are the BEST!'", "let results = str.", "()", "console.log(results) // logs 'burritos are the best!'"],
		"category": "String Prototype Method",
		"solution": "toLowerCase",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/tolowercase",
		"uid": "card-13"
	},
	{
		"snippet": ["let str = 'Burritos are the best!'", "let results = str.", "(7)", "console.log(results) // logs 's'"],
		"category": "String Prototype Method",
		"solution": "charAt",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt",
		"uid": "card-14"
	},
	{
		"snippet": ["let str = 'Yup'", "let results = str.", "(3)", "console.log(results) // logs 'YupYupYup'"],
		"category": "String Prototype Method",
		"solution": "repeat",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat",
		"uid": "card-15"
	},
	{
		"snippet": ["let str = 'Burritos are the best!'", "let results = str.", "(' ')", "console.log(results) // logs [ 'Burritos', 'are', 'the', 'best!' ]"],
		"category": "String Prototype Method",
		"solution": "split",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split",
		"uid": "card-16"
	},
	{
		"snippet": ["let str = 'Burritos are the best!'", "let results = str.", "('Burritos', 'Pizzas')", "console.log(results) // logs 'Pizzas are the best!'"],
		"category": "String Prototype Method",
		"solution": "replace",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace",
		"uid": "card-17"
	},
	{
		"snippet": ["let str = '   Burritos!   '", "let results = str.", "()", "console.log(results) // logs 'Burritos!'"],
		"category": "String Prototype Method",
		"solution": "trim",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim",
		"uid": "card-18"
	},
	{
		"snippet": ["let obj = {a: 1, b: 2, c: 3}", "let results = Object.", "(obj)", "console.log(results) // logs [ 'a', 'b', 'c' ]"],
		"category": "Object Prototype Method",
		"solution": "keys",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys",
		"uid": "card-19"
	},
	{
		"snippet": ["let obj = {a: 1, b: 2, c: 3}", "let results = Object.", "(obj)", "console.log(results) // logs [ 1, 2, 3 ]"],
		"category": "Object Prototype Method",
		"solution": "values",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values",
		"uid": "card-19"
	},
	{
		"snippet": ["let obj = {a: 1}, obj2 = {a: 1}", "let results = Object.", "(obj, obj2)", "console.log(results) // logs false"],
		"category": "Object Prototype Method",
		"solution": "is",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is",
		"uid": "card-20"
	},
	{
		"snippet": ["let obj = {a: 1, b: 2, c: 3}", "let results = Object.", "(obj)", "console.log(results) // logs [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]"],
		"category": "Object Prototype Method",
		"solution": "entries",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries",
		"uid": "card-21"
	},
	{
		"snippet": ["let arr = [['a', 1],['b', 2]]", "let results = Object.", "(arr)", "console.log(results) // logs {a: 1, b: 2}"],
		"category": "Object Prototype Method",
		"solution": "fromEntries",
		"mdn": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries",
		"uid": "card-22"
	}
]

export default methodCards;