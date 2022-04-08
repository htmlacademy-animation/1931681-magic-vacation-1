import {ShadowedLightPurpleColor, ShadowedAdditionalPurpleColor} from "../../../library/colors";
import {makeCarpet as makeCarpetGeneral} from "../../../library/objects/carpet/carpet";

function makeCarpet() {
  const carpet = makeCarpetGeneral(ShadowedLightPurpleColor, ShadowedAdditionalPurpleColor);

  return carpet;
}

export {makeCarpet};
