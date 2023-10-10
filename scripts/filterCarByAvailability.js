function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  let result = [];
  // Tulis code-mu disini

  for (let i = 0; i < cars.length; i++) {
    if (cars[i].available !== true) {
      cars.splice(i, 1);
      i--;
    }
  }
  result = cars;

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
