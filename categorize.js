// This is the link to this JavaScript Challenge
// https://www.codewars.com/kata/5502c9e7b3216ec63c0001aa/train/javascript

function openOrSenior(data){
    output = []
    for(i=0; i<=data.length-1; i++){
      if(data[i][0] >=55 && data[i][1] >= 8){
        console.log(`${data[i]}: Senior`)
        output.push('Senior')
      } else {
        console.log(`${data[i]}: Open`)
        output.push('Open')
      }
  }
  console.log(output)
}
openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])
// output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]