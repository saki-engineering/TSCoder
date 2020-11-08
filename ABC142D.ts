const gcd = (a,b: number): number => {
    return a%b != 0 ? gcd(b, a%b) : b
}

const main = (input) => {
    const [A, B] = input.map((n) => parseInt(n))
    let G = gcd(A,B)

    let ans = 1
    for(let p=2; p*p<=G; p++) {
        if(G%p == 0) {
            ans++
            while(G%p==0) {
                G /= p
            }
        }
    }
    if(G>1) { ans++ }

    console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').split(" "))