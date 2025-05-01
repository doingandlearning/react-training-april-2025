import React from "react";

export default function Generator() {

	function* generatorFunction() {
		yield "🍑"; // pauses here
		yield "🍉";
		yield "🍋";
		yield "🥭";
	}

	const runner = generatorFunction()

	console.log(runner.next())
	console.log(runner.next())
	console.log(runner.next())
	console.log(runner.next())
	console.log(runner.next())

	function* fibon() {
		// 1, 1, 2, 3, 5, 8, 13, 21, 
		let first = 1;
		let second = 1;
		let sum: number;
		while (true) {
			sum = first + second;
			yield sum; // pauses
			first = second;
			second = sum;
		}
	}
	const sequence = fibon();
	console.log(sequence.next())
	console.log(sequence.next())
	console.log(sequence.next())
	console.log(sequence.next())
	console.log(sequence.next())
	console.log(sequence.next())


	return <>Generator</>
}