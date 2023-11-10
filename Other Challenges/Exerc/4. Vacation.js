function vacation(groupCount, typeOfGroup, dayOfWeek) {
  let totalPrice = 0;
  if (dayOfWeek === "Friday") {
    if (typeOfGroup === "Students") {
      totalPrice += groupCount * 8.45;
      if (groupCount >= 30) {
        totalPrice = totalPrice - totalPrice * 0.15;
      }
      console.log(`Total price: ${totalPrice.toFixed(2)}`);
    } else if (typeOfGroup === "Business") {
      totalPrice += groupCount * 10.9;
      if (groupCount >= 100) {
        totalPrice = (groupCount - 10) * 10.9;
      }
      console.log(`Total price: ${totalPrice.toFixed(2)}`);
    } else if (typeOfGroup === "Regular") {
      totalPrice += groupCount * 15;
      if (groupCount >= 10 && groupCount <= 20) {
        totalPrice = totalPrice - totalPrice * 0.05;
      }
      console.log(`Total price: ${totalPrice.toFixed(2)}`);
    }
  } else if (dayOfWeek === "Saturday") {
    if (typeOfGroup === "Students") {
      totalPrice += groupCount * 9.80;
      if (groupCount >= 30) {
        totalPrice = totalPrice - totalPrice * 0.15;
      }
      console.log(`Total price: ${totalPrice.toFixed(2)}`);
    } else if (typeOfGroup === "Business") {
      totalPrice += groupCount * 15.60;
      if (groupCount >= 100) {
        totalPrice = (groupCount - 10) * 15.60;
      }
      console.log(`Total price: ${totalPrice.toFixed(2)}`);
    } else if (typeOfGroup === "Regular") {
      totalPrice += groupCount * 20;
      if (groupCount >= 10 && groupCount <= 20) {
        totalPrice = totalPrice - totalPrice * 0.05;
      }
      console.log(`Total price: ${totalPrice.toFixed(2)}`);
    }
  } else if (dayOfWeek === "Sunday") {
    if (typeOfGroup === "Students") {
      totalPrice += groupCount * 10.46;
      if (groupCount >= 30) {
        totalPrice = totalPrice - totalPrice * 0.15;
      }
      console.log(`Total price: ${totalPrice.toFixed(2)}`);
    } else if (typeOfGroup === "Business") {
      totalPrice += groupCount * 16;
      if (groupCount >= 100) {
        totalPrice = (groupCount - 10) * 16;
      }
      console.log(`Total price: ${totalPrice.toFixed(2)}`);
    } else if (typeOfGroup === "Regular") {
      totalPrice += groupCount * 22.5;
      if (groupCount >= 10 && groupCount <= 20) {
        totalPrice = totalPrice - totalPrice * 0.05;
      }
      console.log(`Total price: ${totalPrice.toFixed(2)}`);
    }
  }
}

vacation(30, "Students", "Sunday");
