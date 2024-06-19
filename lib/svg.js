class SVG {
    constructor() {
        this.textElements = "";
        this.shapeElements = "";
    }

    render() {
        return `<svg version="1.1" width="400" height="300" xmlns="http://www.w3.org/2000/svg">${this.shapeElements}${this.textElements}</svg>`;
    }

    setText(message, color) {
        if (message.length > 3) {
            throw new Error("Message is too long");
        }

        this.textElements += `
            <text x="50%" y="50%" font-size="50" fill="${color}" text-anchor="middle" dominant-baseline="middle">
                ${message}
            </text>
        `;
}

    setShape(shape) {
        this.shapeElements = shape.render();
    }
}

module.exports = SVG;