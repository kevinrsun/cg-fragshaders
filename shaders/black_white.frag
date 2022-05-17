#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 temp = texture(image, texcoord);

    float luminance = (temp.r * 0.299) + (temp.g * 0.587) + (temp.b * 0.114);

    FragColor = vec4(luminance, luminance, luminance, 1.0);
}
