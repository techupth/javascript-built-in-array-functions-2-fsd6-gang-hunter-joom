const carCollection = ["toyota", "fiat", "honda", "bmw"];

function updateCarCollection(carBrand) {
  // Start coding here
  const carPosition = carCollection.indexOf(carBrand);

  if (carPosition !== -1) {
    return `${carBrand} already exists in position ${carPosition} of the car collection`
    }else {
    carCollection.push(carBrand);
    return `New car collection is: Toyota, Fiat, Honda, BMW, ${carBrand} `
    }
  }


//ผลลัพธ์ที่ควรได้จาก Example case
//ในกรณีที่ยังไม่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("audi")); //new car collection is : toyota,fiat,honda,bmw,audi.

//ในกรณีที่มียี่ห้อรถใน carCollection
console.log(updateCarCollection("toyota")); //toyota has already existed in the 1 position of car collection.