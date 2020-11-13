const main = (input) => {
    const N = parseInt(input[0])
    const ans = (BigInt(N) * BigInt((N - 1))) / BigInt(2)
    console.log(ans.toString())
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').split("\n"))