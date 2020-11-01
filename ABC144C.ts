const main = (input) => {
    const n = Number(input)

    let ans = n-1
    for (let i = 1; i*i <= n; i++) {
        if (n%i === 0) {
        　  let tmp = i + n/i - 2
            ans = ans < tmp ? ans : tmp
        }
    }
    console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))