// 8kyu
// Did you get that heart to beat at the end ?


function roundIt(n){
    //coding here...
    newNumStr = n.toString()
    newNum = newNumStr.split(".")
    if(newNum[0].length === newNum[1].length){
        return Math.round(n)
    }else if (newNum[0].length < newNum[1].length){
        return Math.ceil(n)
    }else{
        return Math.floor(n)
    }
    
  }