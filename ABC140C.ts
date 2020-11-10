const main = (input) => {
    const N = parseInt(input[0])
    const ans = input[1].split(" ").map((n) => [parseInt(n), parseInt(n)]).reduce((p, c) => [c[0], p[0] < c[0] ? p[1]+p[0] : p[1]+c[0]]).reduce((n,m) => n+m)
    console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').split("\n"))