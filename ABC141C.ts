function Counter(array) {
    // this[val]の値を、(this[val] || 0) + 1にする
    //(もしthis[val]がなければこれはundefinedになるから(this[val] || 0)は0)
    array.forEach(val => this[val] = (this[val] || 0) + 1);
}

const main = (input) => {
    const [N, K, Q] = input[0].split(" ").map((n) => parseInt(n))
    const A = input.slice(1, Q+1).map((n) => parseInt(n)-1)

    const L = new Counter(A)
    const ans = Array(N).fill(K-Q).map((n, index) => (L[index] || 0)+n > 0 ? "Yes" : "No").join("\n")
    console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').split("\n"))

// https://stackoverflow.com/questions/26320253/is-there-a-javascript-function-similar-to-the-python-counter-function