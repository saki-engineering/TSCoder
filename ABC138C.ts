const main = (input) => {
    const N = Number(input[0])
    const V = input[1].split(" ").map((n)=>parseInt(n)).sort((a,b)=>a-b)
    const ans = V.reduce((p,c) => (p+c)/2)
    console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').split("\n"))