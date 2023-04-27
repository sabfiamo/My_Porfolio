function SpiceFile(csvFile) {
  const listaDatos = [];
  if (csvFile.length) {
    const lineas = csvFile.replace(/[/\t ]/g, "").split("\n");

    for (let i = 1; i < lineas.length; i++) {
      const linea = lineas[i];
      const datos = linea.split(";");

      //calcular el azimut
      //sin (delta) = sin (phi) * sin (h) + cos (phi)*cos(h)*cos(A)
      //donde delta es la declinación astronómica, phi la latitud, A el azimut y h la altura del horizonte.
      const sin__delta =
        Math.sin(parseFloat(datos[0]) * (Math.PI / 180)) *
          Math.sin(parseFloat(datos[2]) * (Math.PI / 180)) +
        Math.cos(parseFloat(datos[0]) * (Math.PI / 180)) *
          Math.cos(parseFloat(datos[1]) * (Math.PI / 180)) *
          Math.cos(parseFloat(datos[2]) * (Math.PI / 180));

      //declinación astronómica en grados
      const delta = Math.asin(sin__delta) * (180 / Math.PI);

      const obj = {
        reactCol1: datos[0],
        reactCol2: datos[1],
        reactCol3: datos[2],
        reactCol4: delta,
      };
      listaDatos.push(obj);
    }
  }

  return listaDatos;
}
export default SpiceFile;
