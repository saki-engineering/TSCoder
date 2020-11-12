const main = (input) => {
    const N = parseInt(input[0])
    const ans = input[1].split(" ").map((n) => [parseInt(n), [0]])
                    .reduce((p,c) => {
                        const lastElement = p[1][p[1].length-1]
                        p[1].push(p[0]>=c[0] ? lastElement+1 : 0)
                        return [c[0], p[1]]
                    })[1]
                    .reduce((p,c) => p > c ? p : c)
    console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').split("\n"))