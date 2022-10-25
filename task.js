"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let root1 = null;
  let root2 = null;
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant > 0) {
    root1 = (-b + Math.sqrt(discriminant) )/(2*a);
    root2 = (-b - Math.sqrt(discriminant) )/(2*a);
    arr.push(root1);
    arr.push(root2);
  }

  if (discriminant === 0) {
    let root1 = -b/(2*a);
    arr.push(root1);
  }

  if (discriminant < 0) {

  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let percentA = parseInt(percent);
  let contributionA = parseInt(contribution);
  let amountA = parseInt(amount);

  if (Number.isNaN(parseInt(percentA)) || Number.isNaN(parseInt(contributionA)) || Number.isNaN(parseInt(amountA))) {
    return totalAmount = "Введите число!"; 
  }

  let credit = amountA - contributionA;
  let nowDate = new Date();
  let dateCredit = new Date(date);
  let term =Math.floor((Math.ceil((dateCredit.getTime() - nowDate.getTime()) / (1000 * 3600 * 24)))/30);
  let p = percentA/12/100;
  let payment = credit * (p + (p / (((1 + p) ** term) - 1)));
  totalAmount = Number((payment * term).toFixed(2));

  return totalAmount;
}
