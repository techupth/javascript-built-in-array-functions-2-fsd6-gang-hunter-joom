let crimeRecordNames = ["Theodora Milenko", "Tinashe Benigno", "Mahalia Priyanka", "Maisy Sudhir"];
/*
let namechecked ;
function searchCrimeRecord(name,namechecked) {
  // Start coding here
  console.log(name)
  console.log(namechecked)
  if(name == namechecked){
    return `${namechecked} has crime record !!!`
  }else{
    return `${namechecked} has no crime record`
  }
}
*/
function searchCrimeRecord(name){
  if(crimeRecordNames.includes(name)){
    return `${name} has crime record !!!`
  }else{
    return `${name} has no crime record`
  }
}
console.log(searchCrimeRecord("Theodora Milenko"))
console.log(searchCrimeRecord("Hunter"))
/*
let searchCrimeRecord = crimeRecordNames.filter((name)=>{
  return name !== name
})

console.log(searchCrimeRecord)
*/





//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ไม่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Dilan Sandra")); //"Dilan Sandra has no crime record"

//ในกรณีที่เคยมีประวัติเกี่ยวกับอาชญากรรม
console.log(searchCrimeRecord("Tinashe Benigno")); //"Tinashe Benigno has crime record !!!"