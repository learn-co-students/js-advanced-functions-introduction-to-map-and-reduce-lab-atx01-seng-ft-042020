// Your code here
function mapToNegativize(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] *= -1
    }
    return arr
}

function mapToNoChange(arr) {
    return arr
}

function mapToDouble(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] *= 2
    }
    return arr
}

function mapToSquare(arr) {
    for(let i = 0; i < arr.length; i++) {
        arr[i] = arr[i]**2
    }
    return arr
}

function reduceToTotal(arr, start=0) {
    for(let i = 0; i < arr.length; i++) {
        start += arr[i]
    }
    return start
}

function reduceToAllTrue(arr) {
    let result = true
    for(let i = 0; i < arr.length; i++) {
        result = result && Boolean(arr[i])
    }
    return result
}

function reduceToAnyTrue(arr) {
    let result = false
    for(let i = 0; i < arr.length; i++) {
        result = result || Boolean(arr[i])
    }
    return result
}