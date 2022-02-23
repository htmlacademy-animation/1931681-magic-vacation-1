precision mediump float;

uniform sampler2D map;

uniform mat4 hueMatrix;
uniform float opacity;

uniform vec2 bubblePosition;
uniform float bubbleRadius;

varying vec2 vUv;

bool isInBubble() {
    return pow(gl_FragCoord.x - bubblePosition.x, 2.0) + pow(gl_FragCoord.y - bubblePosition.y, 2.0) <= pow(bubbleRadius, 2.0);
}

vec4 refraction() {
    float coef = -0.035;

    vec2 direction = gl_FragCoord.xy - bubblePosition;
    float directionLength = sqrt(pow(direction.x, 2.0) + pow(direction.y, 2.0)) / bubbleRadius;

    float refractionAmount = min(directionLength, 1.0 - directionLength);
    vec2 refractionShift = coef * normalize(direction) * refractionAmount;

    vec2 newCoords = vUv + refractionShift;
    return texture2D(map, newCoords);
}

void main() {
    vec4 texel;

    // disable hue for refraction bubble without border to make it visible
    // will remove it during next task
    if (isInBubble()) {
        texel = refraction();
        gl_FragColor = texel * opacity;
    } else {
        texel = texture2D( map, vUv );

        gl_FragColor = texel * hueMatrix * opacity;
    }

    // gl_FragColor = texel * hueMatrix * opacity;
}