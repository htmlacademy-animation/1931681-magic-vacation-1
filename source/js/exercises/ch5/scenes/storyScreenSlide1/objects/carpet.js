import {LightPurpleColor, AdditionalPurpleColor} from "../../../library/colors";
import {makeCarpet as makeCarpetGeneral} from "../../../library/objects/carpet/carpet";

function makeCarpet() {
  const carpet = makeCarpetGeneral(LightPurpleColor, AdditionalPurpleColor);

  return carpet;
}

export {makeCarpet};
