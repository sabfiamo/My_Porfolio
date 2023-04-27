import DownLoadFile from "./DownLoadFile";
function ExportCsvFile(listaDatos) {
  const header = "#LATITUD; A ; h ; Delta \n";
  let csvFile = "";
  if (listaDatos.length) {
    for (let row of listaDatos) {
      for (let item in row) {
        csvFile += row[item];
        csvFile += ";";
      }

      csvFile = csvFile.slice(0, csvFile.length - 1) + "\n";
    }
    csvFile = header + csvFile;
  }
 
  DownLoadFile({
    data: csvFile,
    fileName: "users.csv",
    fileType: "text/csv",
  });
}
export default ExportCsvFile;
