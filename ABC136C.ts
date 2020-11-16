const main = (input) => {
    const N = parseInt(input[0])
    const H = input[1].split(" ").map((n) => [parseInt(n), true])

    const ans = H.reduce((p,c) => [((c[0]-p[0])>0 ? c[0]-1 : c[0]), ((c[0]-p[0])<0 ? false : true)&&p[1]])
    console.log(ans[1] ? "Yes" : "No")
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').split("\n"))