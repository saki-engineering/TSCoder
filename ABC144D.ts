const main = (input) => {
    const [a, b, x] = input.map((n) => parseInt(n))

    const ans = x < (a*a*b)/2 ? Math.atan((b*b*a)/(x*2)) : Math.atan((2*(b-x/(a*a)))/a)
    console.log(ans*180/Math.PI)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').split(' '))