precision mediump float;

uniform sampler2D map;
uniform float opacity;

varying vec2 vUv;

void main() {

	vec4 texel = texture2D( map, vUv ) * opacity;

	gl_FragColor = texel;

}