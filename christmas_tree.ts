let rows = 5;
for (let a = 1; a <= rows; a++) {
	console.log(" ".repeat(rows - a) + "*".repeat(a + (a - 1)) + "\n");
}
