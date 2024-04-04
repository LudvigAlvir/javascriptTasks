import * as solution from "../solutions/assignment-1.js";
import { output } from "./output.js";

function task1() {
	let results = [];
	const cyan = "\x1b[36m";
	console.log(cyan, "Task 1: sum function");
	try {
		let num1 = Math.floor(Math.random() * 100);
		let num2 = Math.floor(Math.random() * 100);
		let res = solution.sum(num1, num2);
		if (res === num1 + num2) {
			results.push({
				task: "task 1",
				test: 1,
				status: "pass",
				function: "sum",
				expected: num1 + num2,
				received: res,
			});
		} else {
			results.push({
				task: "task 1",
				test: 1,
				status: "fail",
				function: "sum",
				expected: num1 + num2,
				received: res,
			});
		}
	} catch (e) {
		results.push({
			task: "task 1",
			test: 1,
			status: "fail",
			function: "sum",
			error: "An error occured",
		});
	}
	try {
		let num1 = Math.floor(Math.random() * 1000);
		let num2 = Math.floor(Math.random() * 1000);
		let res = solution.sum(num1, num2);
		if (res === num1 + num2) {
			results.push({
				task: "task 1",
				test: 2,
				status: "pass",
				function: "sum",
				expected: num1 + num2,
				received: res,
			});
		} else {
			results.push({
				task: "task 1",
				test: 2,
				status: "fail",
				function: "sum",
				expected: num1 + num2,
				received: res,
			});
		}
	} catch (e) {
		results.push({
			task: "task 1",
			test: 2,
			status: "fail",
			function: "sum",
			error: "An error occured",
		});
	}
	try {
		let num1 = 2;
		let num2 = "hello";
		let res = solution.sum(num1, num2);
		if (res == num1 + num2) {
			results.push({
				task: "task 1",
				test: 3,
				status: "fail",
				function: "sum",
				expected: "Error",
				received: res,
			});
		} else {
			results.push({
				task: "task 1",
				test: 3,
				status: "fail",
				function: "sum",
				expected: "Error",
				received: res,
			});
		}
	} catch (e) {
		results.push({
			task: "task 1",
			test: 3,
			status: "pass",
			function: "sum",
			expected: "Error",
			received: "Error",
		});
	}

	return results;
}
if (solution.sum) {
	output(task1());
}

if (solution.sumLoosely) {
	console.log("hei");
}
