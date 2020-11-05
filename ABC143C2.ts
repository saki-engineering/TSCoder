const main = (input) => {
    const [N, S] = [parseInt(input[0]), input[1].split("").map((s) => [s,1])]

    const ans = S.reduce((n,m) => [m[0], n[0]!=m[0]? n[1]+1: n[1]])[1]
    console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').split("\n"))