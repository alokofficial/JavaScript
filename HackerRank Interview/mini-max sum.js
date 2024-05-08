//minimum and maximum sum of an array with lenth of 5 and have to find maximum and minimum using 4 elements
arr=[1,3,5,7,9]
function miniMaxSum(arr) {
    arr.sort((a,b)=>a-b);
    let minSum=0;
    let maxSum=0;
    for(let i=0;i<arr.length-1;i++){
        minSum+=arr[i]
    }
    for(let i=1;i<arr.length;i++){
        maxSum+=arr[i]
    }
    console.log(minSum,maxSum)

}
miniMaxSum(arr)