function convertLength() {
  var input = document.getElementById("input").value;
  var fromUnit = document.getElementById("fromUnit").value;
  var toUnit = document.getElementById("toUnit").value;
  var output = document.getElementById("output");

  var meters;

  switch (fromUnit) {
    case "cm":
      meters = input / 100;
      break;
    case "m":
      meters = input;
      break;
    case "km":
      meters = input * 1000;
      break;
    case "inch":
      meters = input * 0.0254;
      break;
    case "foot":
      meters = input * 0.3048;
      break;
    case "yard":
      meters = input * 0.9144;
      break;
    case "mile":
      meters = input * 1609.34;
      break;
    default:
      meters = 0;
  }

  var result;

  switch (toUnit) {
    case "cm":
      result = meters * 100;
      break;
    case "m":
      result = meters;
      break;
    case "km":
      result = meters / 1000;
      break;
    case "inch":
      result = meters / 0.0254;
      break;
    case "foot":
      result = meters / 0.3048;
      break;
    case "yard":
      result = meters / 0.9144;
      break;
    case "mile":
      result = meters / 1609.34;
      break;
    default:
      result = 0;
  }

  output.value = result.toFixed(2);
}
