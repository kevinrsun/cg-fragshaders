#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 texcoord_alt = 2.0 * texcoord - 1.0;

    float theta = atan(texcoord_alt.y, texcoord_alt.x);

    float radius = pow(length(texcoord_alt), 1.5);

    vec2 fisheye_texcoord = vec2(radius * cos(theta), radius * sin(theta));

    vec2 final_texcoord = 0.5 * (fisheye_texcoord + 1.0);

    FragColor = texture(image, final_texcoord);
}
