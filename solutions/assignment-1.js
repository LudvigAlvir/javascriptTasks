export function sum(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		throw new Error("Invalid input");
	}
	return a + b;
}

export function sumStricktly(a, b) {
	if (typeof a !== "number" || typeof b !== "number") {
		throw new Error("Invalid input");
	}
	return a + b;
}

export function sumLoosely(a, b) {
	if (Number(a) != a || Number(b) != b) {
		throw new Error("Invalid input");
	}
	return a + b;
}
