"use strict";

function solveEquation(a, b, c) {
	let arr = [];
	let d = (b ** 2) - (4 * a * c);

	if (d === 0) {
		arr.push(-b / (2 * a));
	} else if (d > 0) {
		arr.push((-b + Math.sqrt(d)) / (2 * a));
		arr.push((-b - Math.sqrt(d)) / (2 * a));
	}

	return arr;
}

"use strict";

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	percent = Number(percent);
	contribution = Number(contribution);
	amount = Number(amount);
	countMonths = Number(countMonths);

	// Проверка на валидные числовые значения
	if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
		return false;
	}

	const monthlyPercent = (percent / 100) / 12;
	const mortgageBody = amount - contribution;

	const monthlyPayment = mortgageBody *
		(monthlyPercent + (monthlyPercent / ((Math.pow(1 + monthlyPercent, countMonths) - 1))));

	const totalAmount = monthlyPayment * countMonths;

	return Number(totalAmount.toFixed(2));
}