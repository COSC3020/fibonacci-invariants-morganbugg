function fib(n) {
    var arr = [0]
    n = fib_inner(arr, n)
    return n;
}

function fib_inner(arr, n) {
    if (arr.length - 1 == n) return arr
    else if (arr.length == 1) arr.push(1)
    else arr.push(arr[arr.length - 1] + arr[arr.length - 2])
    return fib_inner(arr,n)
}