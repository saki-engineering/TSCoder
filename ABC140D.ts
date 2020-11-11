const main = (input) => {
    const [N, K] = input[0].split(" ").map((n) => parseInt(n))
    const S = input[1].split("")

    const B = S.map((s) => [s, 1]).reduce((p, c) => [c[0], p[0] != c[0] ? p[1]+1 : p[1]])[1]
    const ans = B/2 > K ? N + K*2 - B : N-1
    console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').split("\n"))