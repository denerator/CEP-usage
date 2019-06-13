// @flow
import * as React from "react";
import { inCEPEnvironment, evalExtendscript } from "cep-interface";
import { List } from "@material-ui/core";
import { LayerItem } from "./components/LayerItem";

type LayersListState = {
  layers: string[]
};

export const LayersList = () => {
  const [layers, setLayers] = React.useState([]);

  React.useEffect(() => {
    getLayers();
  }, []);

  const getLayers = async () => {
    if (inCEPEnvironment()) {
      try {
        const layers = await evalExtendscript("getLayers()");
        const arrayLayers = layers.split(",");
        const mappedLayers = arrayLayers.map(layer => {
          const layerWords = layer.split(" ");
          layerWords[layerWords.length - 1] = layerWords[
            layerWords.length - 1
          ].replace("]", "");
          layerWords.shift();
          return layerWords.join(" ");
        });
        setLayers(mappedLayers);
      } catch (err) {
        alert(err);
      }
    }
  };

  return (
    <List>
      {layers.map((layer, key) => (
        <LayerItem
          layer={layer}
          key={key}
        />
      ))}
    </List>
  );
};
