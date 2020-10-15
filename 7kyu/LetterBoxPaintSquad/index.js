// 7kyu
// You and a group of friends are earning some extra money in the school holidays by re-painting the numbers on people's letterboxes for a small fee.

// Since there are 10 of you in the group each person just concentrates on painting one digit! For example, somebody will paint only the 1's, somebody else will paint only the 2's and so on...

// But at the end of the day you realise not everybody did the same amount of work.

// To avoid any fights you need to distribute the money fairly. That's where this Kata comes in.

// Kata Task
// Given the start and end letterbox numbers, write a method to return the frequency of all 10 digits painted.

// Example
// For start = 125, and end = 132

// The letterboxes are

// 125 = 1, 2, 5
// 126 = 1, 2, 6
// 127 = 1, 2, 7
// 128 = 1, 2, 8
// 129 = 1, 2, 9
// 130 = 1, 3, 0
// 131 = 1, 3, 1
// 132 = 1, 3, 2
// The digit frequencies are 1 x 0, 9 x 1, 6 x 2 etc...

// and so the method would return [1,9,6,3,0,1,1,1,1,1]

// Notes
// 0 < start <= end
// In C, the returned value will be free'd.


var paintLetterboxes = function(start, end) {
    // Your code here
    let zero = 0
    let one = 0
    let two = 0
    let three = 0
    let four = 0
    let five = 0
    let six = 0
    let seven = 0
    let eight = 0
    let nine = 0
  //  counter to go from start to end
  //  convert all of them to string and count the digits
      for ( let i = start ; i<= end ; i++){
        let temp = i.toString()
        for(let j = 0 ; j < temp.length ; j++){
          if ( temp[j] === "0"){
            zero ++
          }else if(temp[j] === "1"){
            one ++
          }else if(temp[j] === "2"){
            two ++
          }else if(temp[j] === "3"){
            three ++
          }else if(temp[j] === "4"){
            four ++
          }else if( temp[j] === "5"){
            five ++
          }else if( temp[j] === "6"){
            six ++
          }else if( temp[j] === "7"){
            seven ++
          }else if( temp[j] === "8"){
            eight ++
          }else{
            nine ++
          }
        }
      }
    
    
    return [zero,one,two,three,four,five,six,seven,eight,nine]
  }



console.log(paintLetterboxes(125, 132), [1,9,6,3,0,1,1,1,1,1]);


// other solutions

// const paintLetterboxes = (start, end) => {
//     let res = Array(10).fill(0);
//     for (let i = start; i <= end; i++) {
//       for (let n of (i + '')) {
//         res[n]++;
//       }
//     }
//     return res;
//   }


// function paintLetterboxes(start, end) {
//     const frequencies = new Array(10).fill(0);
//     for(let number=start; number<=end; number++) {
//       number.toString().split('').forEach(x => frequencies[x]++);
//     }
//     return frequencies;
//   }



// const paintLetterboxes = (start, end) => Array(10).fill(0).map((_,i)=> Array(end - start+1).fill(0).reduce((s,a,i)=> s + (start +i),'').split('').filter(e=> e==i).length);


// const paintLetterboxes = (start, end) =>
//   [...Array(end - start + 1)].reduce((pre, _, idx) => ([...`${start + idx}`].forEach(val => pre[val]++), pre), Array(10).fill(0))



// var paintLetterboxes = function(start, end) {
//     var r=[0,0,0,0,0,0,0,0,0,0]
//     for(var i=start;i<=end;i++) paint(i)
//     return r
    
//     function paint(n){ while(n) r[n%10]++,n=n/10|0 }
//   }



// paintLetterboxes=(a,b)=>(a=>[0,0,0,0,0,0,0,0,0,0].map((_,i)=>a.split(i).length-1))([...Array(b-a+1)].map((_,i)=>i+a).join``)
