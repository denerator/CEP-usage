var docRef = app.activeDocument;
var layersLength = docRef.layers.length;

function getLayers() {
  var layers = [];
  for (var i = 0; i < layersLength; i++) {
    layers.push(docRef.layers[i]);
  }
  return layers;
}

function removeLayer(index) {
  docRef.layers[index].remove();
}