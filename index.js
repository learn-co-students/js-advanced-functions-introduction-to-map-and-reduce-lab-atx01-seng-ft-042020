function mapToNegativize(sourceArray){
    const negArray = [];
    for(let i = 0; i < sourceArray.length; i++){
        negArray.push(-sourceArray[i]);
    };
    return negArray;
};

function mapToNoChange(sourceArray){
    const unchangedArray = [];
    for(let i = 0; i < sourceArray.length; i++){
        unchangedArray.push(sourceArray[i]);
    };
    return unchangedArray;
};

function mapToDouble(sourceArray){
    const doubledArray = [];
    for(let i = 0; i < sourceArray.length; i++){
        doubledArray.push(sourceArray[i] * 2);
    };
    return doubledArray;
};

function mapToSquare(sourceArray){
    const squaredArray = [];
    for(let i = 0; i < sourceArray.length; i++){
        squaredArray.push(sourceArray[i]*sourceArray[i]);
    }
    return squaredArray;
};

function reduceToTotal(sourceArray, total = 0){
    for(let i = 0; i < sourceArray.length; i++){
        total += sourceArray[i];
    }
    return total;
};

function reduceToAllTrue(sourceArray){
    let trueVals = true;
    for(let i = 0; i < sourceArray.length; i++){
        if (sourceArray[i]){
            trueVals = true;
        } else {
            trueVals = false;
        };
    };

    return trueVals;
};

function reduceToAnyTrue(sourceArray){
    let trueVals = true;
    for(let i=0; i<sourceArray.length; i++){
        if (sourceArray[i]){
            return trueVals;
        };
    };
    return false;
}