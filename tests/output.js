export function output(res) {
	const red = "\x1b[31m";
	const green = "\x1b[32m";
	const yellow = "\x1b[33m";
	const reset = "\x1b[0m";
	const cyan = "\x1b[36m";
	let pass = 0;
	for (const test of res) {
		if (test.status === "pass") {
			console.log(green, "\n ---------------------- \n");
			console.log(green, "Task: ", test.task);
			console.log(green, "Test: ", test.test);
			console.log(green, "Status: ", test.status);
			console.log(green, "Function: ", test.function);
			console.log(green, "Expected: ", test.expected);
			console.log(green, "Received: ", test.received);
			pass++;
		} else {
			console.log(red, " \n ---------------------- \n");
			console.log(red, "Task: ", test.task);
			console.log(red, "Test: ", test.test);
			console.log(red, "Status: ", test.status);
			console.log(red, "Function: ", test.function);
			if (test.error) {
				console.log(red, "Error: ", test.error);
				continue;
			}
			console.log(red, "Expected: ", test.expected);
			console.log(red, "Received: ", test.received);
		}
	}
	console.log(cyan, "\n ====================== \n");
	if (pass === res.length) {
		console.log(green, pass + "/" + res.length + " tests passed.");
	} else if (pass >= 1) {
		console.log(yellow, pass + "/" + res.length + " tests passed.");
	} else {
		console.log(red, pass + "/" + res.length + " tests passed.");
	}
	console.log(reset);
}
