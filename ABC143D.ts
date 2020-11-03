const leftBinary = (array:number[], key:number): number => {
    let left, right, mid : number
    left = 0
    right = array.length

    while(left < right) {
        mid = Math.floor((right-left)/2+left)
        if(key<=array[mid]){
            right = mid
        } else {
            left = mid+1
        }
    }
    return left
}

const main = (input) => {
    let N:number = parseInt(input[0])
    let L:number[] = input[1].split(" ").map((n) => parseInt(n)).sort((a,b) => a < b ? -1: 1)

    let ans = 0
    for(let i=0; i < N; i++) {
        for(let j=i+1; j < N; j++) {
            let index = leftBinary(L, L[i]+L[j])
            ans += (index-j-1)
        }
    }
    console.log(ans)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').split("\n"))