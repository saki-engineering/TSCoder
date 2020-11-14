const main = (input) => {
    const N = parseInt(input[0])
    const S = input.slice(1, N+1).map((n) => n.split("").sort().join(""))

    let ans = 0;
    let map = new Map();
    S.forEach(s => {
        if (map.has(s)) {
            ans += map.get(s);
            map.set(s, map.get(s)+1);
        } else {
            map.set(s, 1);
        }
    })
    console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').split("\n"))