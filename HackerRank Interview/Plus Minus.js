const arr=[1,1,0,-1,-1]
function plusMinus(arr) {
    let negative=zero=positive=0
   
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            positive++
        }else if(arr[i]<0){
            negative++
        }else{
            zero++
        }
    }
    console.log((positive/arr.length).toFixed(6))
    console.log((negative/arr.length).toFixed(6))
    console.log((zero/arr.length).toFixed(6))
}
plusMinus(arr)