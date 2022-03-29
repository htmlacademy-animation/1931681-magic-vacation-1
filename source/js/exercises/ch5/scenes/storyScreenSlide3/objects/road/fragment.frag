uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;

uniform float padStart;
uniform float stripeWidth;
uniform float stripeSize;
uniform float spaceSize;
uniform vec3 firstColor;
uniform vec3 secondColor;

varying vec3 vLightFront;
varying vec3 vIndirectFront;

#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif


#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

vec4 generateTexture() {
	vec4 firstColorVec = vec4(firstColor, 1.0);
	vec4 secondColorVec = vec4(secondColor, 1.0);

	float stripeStart = 0.5 * (1.0 - stripeWidth);
	float stripeEnd = 0.5 * (1.0 + stripeWidth);

	float xCoord = 1.0 - vUv.x - padStart;
	float yCoord = vUv.y;

	float stripeWithSpaceSize = stripeSize + spaceSize;

	// if (xCoord <= 0.1) {
	// 	return vec4(1.0, 0.0, 0.0, 1.0);
	// }

	if (yCoord > stripeStart && yCoord < stripeEnd) {
		if (xCoord >= 0.0 && xCoord + stripeWithSpaceSize <= 1.0 && mod(xCoord, stripeWithSpaceSize) <= stripeSize) {
			return secondColorVec;
		}
	}

	return firstColorVec;
}

void main() {

	#include <clipping_planes_fragment>

	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;

	#include <logdepthbuf_fragment>

	diffuseColor *= generateTexture();

	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>

	// accumulation
	reflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );

	#ifdef DOUBLE_SIDED

		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;

	#else

		reflectedLight.indirectDiffuse += vIndirectFront;

	#endif

	#include <lightmap_fragment>

	reflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );

	#ifdef DOUBLE_SIDED

		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;

	#else

		reflectedLight.directDiffuse = vLightFront;

	#endif

	reflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();

	// modulation
	#include <aomap_fragment>

	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;

	#include <envmap_fragment>

	gl_FragColor = vec4( outgoingLight, diffuseColor.a );

	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}