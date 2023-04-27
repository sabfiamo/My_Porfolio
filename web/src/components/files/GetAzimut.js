function GetAzimut(data) {
  const dataAzimut = [];
  const header = "A";
  // dataAzimut.push(header);
  for (let eachobj in data) {
    dataAzimut.push(data[eachobj].reactCol2);
  }

  return dataAzimut;
}
export default GetAzimut;
