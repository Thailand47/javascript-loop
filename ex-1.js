// Exercise #1: Decrease the Student Scores
let scores = [89, 70, 60, 50, 100, 71];

// Start coding here

let total = [];

for (let i = 0; i < scores.length; i++) {
    let score = scores[i] - 10;
    total.push(score);
}
console.log(total);