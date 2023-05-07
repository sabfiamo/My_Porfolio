const cocteles = require("../image/cocteles.png");
const harry = require("../image/harry.png");
const conectaConmigo = require("../image/conectaConmigo.png");
const awesome = require("../image/awesome.png");
const proyectosMolones = require("../image/proyectosMolones.png");
const guessNumber = require("../image/guess.png");

function getSrc(nameImage) {
  switch (nameImage) {
    case "cocteles": {
      return cocteles;
    }
    case "harry":
      return harry;

    case "conectaConmigo":
      return conectaConmigo;

    case "awesome":
      return awesome;

    case "proyectosMolones":
      return proyectosMolones;
    case "guess":
      return guessNumber;

    default:
      break;
  }
}
export default getSrc;
