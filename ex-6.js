const carCollection = ["toyota", "fiat", "honda", "bmw"];
/*
function updateCarCollection(carBrand) {
  // Start coding here
  carCollection.push(carBrand)
  return `New car collection is: ${carCollection}`
}
*/
function updateCarCollection(carBrand){
let sortedArray = carCollection.indexOf(carBrand)
if(sortedArray === -1){
  carCollection.push(carBrand)
  return `New car collection is: ${carCollection}`
}else{
  return carCollection +" has already existed in the "+(sortedArray+1 ) + " position of car collection."
}
}

//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.

/*

if(updateCarCollection.includes(carBrand)){
  return `${carBrand} has already existed in the ${} position of car collection.`
}*/