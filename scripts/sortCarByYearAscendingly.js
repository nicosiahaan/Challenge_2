function sortCarByYearAscendingly(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);
  let result = [...cars];
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < cars.length - 1; i++) {
      if ([cars[i].year] > [cars[i + 1].year]) {
        // Swap cars[i] and cars[i + 1]
        let temp = cars[i];
        cars[i] = cars[i + 1];
        cars[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  result = cars;
  return result;
}
