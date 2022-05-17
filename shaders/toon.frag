#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 temp = texture(image, texcoord);

    float red = round(temp.r * 4.0) / 4.0;
    float green = round(temp.g * 4.0) / 4.0;
    float blue = round(temp.b * 4.0) / 4.0;

    FragColor = vec4(red, green, blue, 1.0);
}
