interface Info {
    id: number;
    num: number;
}

const main = (input) => {
    const N = parseInt(input[0])
    const A = input[1].split(" ").map((n) => parseInt(n))

    let L :Info[] = []
    for(let i=0; i < N; i++){
        L.push({id: i+1, num: A[i]})
    }
    L.sort((a,b) => a.num-b.num)

    for(let i=0; i < N; i++){
        console.log(L[i].id)
    }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').split("\n"))

//関数型PGは以下が参考になる
//https://atcoder.jp/contests/abc142/submissions/14192287