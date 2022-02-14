precision mediump float;

#define PI 3.1415926538

uniform sampler2D map;
uniform float opacity;
uniform float rotation;

varying vec2 vUv;

float radRotation = radians(rotation);
float cosR = cos(radRotation);
float sinR = sin(radRotation);

float w = 1.0 / 3.0;
float sqrW = sqrt(w);

float a00 = cosR + ((1.0 - cosR) * w);
float a01 = (w * (1.0 - cosR)) - (sqrW * sinR);
float a02 = (w * (1.0 - cosR)) + (sqrW * sinR);
float a10 = (w * (1.0 - cosR)) + (sqrW * sinR);
float a11 = cosR + (w * (1.0 - cosR));
float a12 = (w * (1.0 - cosR)) - (sqrW * sinR);
float a20 = (w * (1.0 - cosR)) - (sqrW * sinR);
float a21 = (w * (1.0 - cosR)) + (sqrW * sinR);
float a22 = cosR + (w * (1.0 - cosR));
mat4 hueMatrix = mat4(
    a00, a01, a02, 0.0,
    a10, a11, a12, 0.0,
    a20, a21, a22, 0.0,
    0.0, 0.0, 0.0, 1.0
);

void main() {
	vec4 texel = texture2D( map, vUv ) * hueMatrix * opacity;

	gl_FragColor = texel;
    // gl_FragColor = vec4(1,0,0,1) * opacity;

}