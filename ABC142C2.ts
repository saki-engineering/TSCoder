const main = (input) => {
    const N = parseInt(input[0])
    const A = input[1].split(" ").map((n) => parseInt(n))

    //関数型っぽく書いた
    const ans = A.map((a, index) => [a, index+1]).sort((a,b) => a[0]-b[0]).map((l) => l[1]).join(" ")
    console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').split("\n"))