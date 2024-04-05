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
} else {
	output([
		{
			task: "task 1",
			test: 1,
			status: "fail",
			function: "sum",
			error: "sum is not defined",
		},
	]);
}
function task2() {
	let results = [];
	const cyan = "\x1b[36m";
	console.log(cyan, "Task 2: sumLoosely function");
	try {
		let num1 = Math.floor(Math.random() * 100);
		let num2 = Math.floor(Math.random() * 100);
		let res = solution.sumLoosely(num1, num2);
		if (res === num1 + num2) {
			results.push({
				task: "task 2",
				test: 1,
				status: "pass",
				function: "sum",
				expected: num1 + num2,
				received: res,
			});
		} else {
			results.push({
				task: "task 2",
				test: 1,
				status: "fail",
				function: "sum",
				expected: num1 + num2,
				received: res,
			});
		}
	} catch (e) {
		results.push({
			task: "task 2",
			test: 1,
			status: "fail",
			function: "sum",
			error: "An error occured",
		});
	}

	try {
		let num1 = 2;
		let num2 = "hello";
		let res = solution.sumLoosely(num1, num2);
		if (res == num1 + num2) {
			results.push({
				task: "task 2",
				test: 2,
				status: "fail",
				function: "sum",
				expected: "Error",
				received: res,
			});
		} else {
			results.push({
				task: "task 2",
				test: 2,
				status: "fail",
				function: "sum",
				expected: "Error",
				received: res,
			});
		}
	} catch (e) {
		results.push({
			task: "task 2",
			test: 2,
			status: "pass",
			function: "sum",
			expected: "Error",
			received: "Error",
		});
	}

	try {
		let num1 = 2;
		let num2 = "23hello";
		let res = solution.sumLoosely(num1, num2);
		if (res == num1 + num2) {
			results.push({
				task: "task 2",
				test: 3,
				status: "fail",
				function: "sum",
				expected: "Error",
				received: res,
			});
		} else {
			results.push({
				task: "task 2",
				test: 3,
				status: "fail",
				function: "sum",
				expected: "Error",
				received: res,
			});
		}
	} catch (e) {
		results.push({
			task: "task 2",
			test: 3,
			status: "pass",
			function: "sum",
			expected: "Error",
			received: "Error",
		});
	}

	try {
		let num1 = 2;
		let num2 = "23";
		let res = solution.sumLoosely(num1, num2);
		if (res == num1 + num2) {
			results.push({
				task: "task 2",
				test: 4,
				status: "pass",
				function: "sum",
				expected: num1 + num2,
				received: res,
			});
		} else {
			results.push({
				task: "task 2",
				test: 4,
				status: "fail",
				function: "sum",
				expected: "Error",
				received: res,
			});
		}
	} catch (e) {
		results.push({
			task: "task 2",
			test: 4,
			status: "fail",
			function: "sum",
			expected: num1 + num2,
			received: "Error",
		});
	}

	return results;
}
function task3() {
	let results = [];
	const cyan = "\x1b[36m";
	console.log(cyan, "Task 3: sumStricktlyfunction");
	try {
		let num1 = Math.floor(Math.random() * 100);
		let num2 = Math.floor(Math.random() * 100);
		let res = solution.sumStricktly(num1, num2);
		if (res === num1 + num2) {
			results.push({
				task: "task 3",
				test: 1,
				status: "pass",
				function: "sum",
				expected: num1 + num2,
				received: res,
			});
		} else {
			results.push({
				task: "task 3",
				test: 1,
				status: "fail",
				function: "sum",
				expected: num1 + num2,
				received: res,
			});
		}
	} catch (e) {
		results.push({
			task: "task 3",
			test: 1,
			status: "fail",
			function: "sum",
			error: "An error occured",
		});
	}

	try {
		let num1 = 2;
		let num2 = "hello";
		let res = solution.sumStricktly(num1, num2);
		if (res == num1 + num2) {
			results.push({
				task: "task 3",
				test: 2,
				status: "fail",
				function: "sum",
				expected: "Error",
				received: res,
			});
		} else {
			results.push({
				task: "task 3",
				test: 2,
				status: "fail",
				function: "sum",
				expected: "Error",
				received: res,
			});
		}
	} catch (e) {
		results.push({
			task: "task 3",
			test: 2,
			status: "pass",
			function: "sum",
			expected: "Error",
			received: "Error",
		});
	}

	try {
		let num1 = 2;
		let num2 = "23hello";
		let res = solution.sumStricktly(num1, num2);
		if (res == num1 + num2) {
			results.push({
				task: "task 3",
				test: 3,
				status: "fail",
				function: "sum",
				expected: "Error",
				received: res,
			});
		} else {
			results.push({
				task: "task 3",
				test: 3,
				status: "fail",
				function: "sum",
				expected: "Error",
				received: res,
			});
		}
	} catch (e) {
		results.push({
			task: "task 3",
			test: 3,
			status: "pass",
			function: "sum",
			expected: "Error",
			received: "Error",
		});
	}

	return results;
}

if (solution.sumLoosely) {
	output(task2());
} else {
	output([
		{
			task: "task 2",
			test: 1,
			status: "fail",
			function: "sumLoosely",
			error: "sumLoosely is not defined",
		},
	]);
}
if (solution.sumStricktly) {
	output(task3());
} else {
	output([
		{
			task: "task 3",
			test: 1,
			status: "fail",
			function: "sumStricktly",
			error: "sumStricktly is not defined",
		},
	]);
}
