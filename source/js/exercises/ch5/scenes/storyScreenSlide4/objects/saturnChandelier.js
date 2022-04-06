import {
  Theme as SaturnChandelierTheme,
  makeSaturnChandelier as makeSaturnChandelierGeneral,
} from "../../../library/objects/saturnChandelier";

function makeSaturnChandelier() {
  const saturnChandelier = makeSaturnChandelierGeneral(SaturnChandelierTheme.Dark);

  return saturnChandelier;
}

export {makeSaturnChandelier};
