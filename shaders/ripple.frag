#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 texcoord_alt = 2.0 * texcoord - 1.0;

    float radius = length(texcoord_alt);

    vec2 texcoord_offset  = texcoord_alt * (sin(radius * 30.0 - time * 5.0) + 0.5) / 60.0;

    vec2 final_texcoord = texcoord + texcoord_offset;

    FragColor = texture(image, final_texcoord);
}
