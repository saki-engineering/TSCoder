const main = (input) => {
    const [N, S] = [parseInt(input[0]), input[1]]

    let ans = 1;
    for(let i=1; i<N; i++) {
        if(S[i] != S[i-1]) {
            ans++
        } 
    }

    console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').split("\n"))