#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec4 temp = texture(image, texcoord);
    vec4 color;

    // Looks for specific colors for the leaves 
    if((temp.r <= 0.9804 && temp.r >= 0.7843) && (temp.g <= 0.9216 && temp.g >= 0.5882) && (temp.b <= 0.9608 && temp.b >= 0.6667)) {
        // Sets these colors to match the blue water
        color = vec4(0.3922, 0.6314, 0.7294, 1);
    } else {
        color = vec4(temp.r, temp.g, temp.b, 1);;
    }

    FragColor = color;
}
