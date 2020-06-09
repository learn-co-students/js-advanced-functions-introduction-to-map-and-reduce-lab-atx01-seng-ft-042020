// Your code here

function mapToNegativize(arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(-arr[i])
    }
    return newArr
}

function mapToNoChange(arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i])
    }
    return newArr
}

function mapToDouble(arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2)
    }
    return newArr
}

function mapToSquare(arr) {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] ** 2)
    }
    return newArr
}

function reduceToTotal(arr, accum = 0) {
    for (let i = 0; i < arr.length; i++) {
        accum += arr[i]
    }
    return accum
}

function reduceToAllTrue(arr) {
    let allTrue = true;
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) {
            allTrue = false
        }
    }
    return allTrue
}

function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            return true
        }
    }
    return false
}