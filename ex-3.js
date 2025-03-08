// Exercise #3: Find a Minimum Score
let scores = [100, 20, 3, 1000];
let minScore = scores[0];
// Start coding here

for (let i = 0; i < scores.length; i++) {
    let x = scores[i];

    if ( x < minScore) {
        minScore = x;
    }
}

console.log(minScore);
