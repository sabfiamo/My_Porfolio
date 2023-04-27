function GetDelta(data) {
  const dataDelta = [];
  const header = "Delta";
  // dataDelta.push(header);
  for (let eachobj in data) {
    dataDelta.push(data[eachobj].reactCol4);
  }

  return dataDelta;
}
export default GetDelta;
