precision mediump float;

uniform sampler2D map;

uniform mat4 hueMatrix;

uniform mat3 bubblePosition;
uniform vec3 bubbleRadius;

varying vec2 vUv;

bool isInBubble(vec2 bubblePosition, float bubbleRadius) {
    return pow(gl_FragCoord.x - bubblePosition.x, 2.0) + pow(gl_FragCoord.y - bubblePosition.y, 2.0) <= pow(bubbleRadius, 2.0);
}

bool isInBubbleSector(vec2 bubblePosition, float bubbleRadius) {
    if (!isInBubble(bubblePosition, bubbleRadius)) {
        return false;
    }

    float xBorder = bubblePosition.x - bubbleRadius * 0.28;

    float lowerYBorder = bubblePosition.y + bubbleRadius * 0.35;
    float upperYBorder = bubblePosition.y + bubbleRadius * 0.95;

    return (gl_FragCoord.x < xBorder) && (gl_FragCoord.y >= lowerYBorder) && (gl_FragCoord.y <= upperYBorder);
}

vec4 refraction(vec2 bubblePosition, float bubbleRadius) {
    float coef = -0.035;

    vec2 direction = gl_FragCoord.xy - bubblePosition;
    float directionLength = sqrt(pow(direction.x, 2.0) + pow(direction.y, 2.0)) / bubbleRadius;

    float refractionAmount = min(directionLength, 1.0 - directionLength);
    vec2 refractionShift = coef * normalize(direction) * refractionAmount;

    vec2 newCoords = vUv + refractionShift;
    return texture2D(map, newCoords);
}

vec4 checkBubble(vec4 prevTexel, vec2 bubblePosition, float bubbleRadius) {
    vec4 borderColor = vec4(0.12, 0.12, 0.12, 1.0);
    float bubbleBorder = 3.0;

    float bubbleRadiusBorderless = bubbleRadius - bubbleBorder;

    float innerBubbleRadius = bubbleRadius * 0.75;
    float innerBubbleRadiusBorderless = innerBubbleRadius - bubbleBorder;

    vec4 texel = prevTexel;
    
    if (isInBubble(bubblePosition, bubbleRadius)) {
        texel = refraction(bubblePosition, bubbleRadius);

        bool addOuterBorder = !isInBubble(bubblePosition, bubbleRadiusBorderless);
        bool addInnerBorder = isInBubbleSector(bubblePosition, innerBubbleRadius) && !isInBubbleSector(bubblePosition, innerBubbleRadiusBorderless);

        if (addOuterBorder || addInnerBorder) {
            texel = texel + borderColor;
        }
    }

    return texel;    
}

void main() {
    vec2 firstBubblePosition = vec2(bubblePosition[0][0], bubblePosition[0][1]);
    float firstBubbleRadius = bubbleRadius[0];

    vec2 secondBubblePosition = vec2(bubblePosition[1][0], bubblePosition[1][1]);
    float secondtBubbleRadius = bubbleRadius[1];

    vec2 thirdBubblePosition = vec2(bubblePosition[2][0], bubblePosition[2][1]);
    float thirdBubbleRadius = bubbleRadius[2];

    vec4 defaultTexel = texture2D(map, vUv);
    vec4 firstBubble = checkBubble(defaultTexel, firstBubblePosition, firstBubbleRadius);
    vec4 secondBubble = checkBubble(firstBubble, secondBubblePosition, secondtBubbleRadius);
    vec4 finalTexel = checkBubble(secondBubble, thirdBubblePosition, thirdBubbleRadius);

    gl_FragColor = finalTexel * hueMatrix;
}