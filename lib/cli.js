const SVG = require('./svg');
const { Circle, Square, Triangle, Octagon } = require('./shapes');
const { writeFile } = require('fs').promises;

class CLI {
    async run() {

        const inquirer = await import('inquirer');

        return inquirer.default
            .prompt([
                {
                    type: 'input',
                    name: 'message',
                    message: 'Enter a message (3 characters or less):'
                },
                {
                    type: 'input',
                    name: 'color',
                    message: 'Enter a text color:'
                },
                {
                    type: 'list',
                    name: 'shape',
                    message: 'Choose a shape:',
                    choices: ['Circle', 'Square', 'Triangle', 'Octagon']
                },
                {
                    type: 'input',
                    name: 'shapeColor',
                    message: 'Enter a shape color:'
                },
            ])
            .then(({ message, color, shape, shapeColor }) => {
                const svg = new SVG();
                svg.setText(message, color);
                let shapeInstance;
                switch (shape) {
                    case 'Circle':
                        shapeInstance = new Circle();
                        break;
                    case 'Square':
                        shapeInstance = new Square();
                        break;
                    case 'Triangle':
                        shapeInstance = new Triangle();
                        break;
                    case 'Octagon':
                        shapeInstance = new Octagon();
                        break;
                }

                shapeInstance.setColor(shapeColor);
                svg.setShape(shapeInstance);

                return writeFile("logo.svg", svg.render())
            })

            .then(() => console.log('Logo created!'))
            .catch((error) => {
                console.log(error)
                console.log("Error creating logo. Please try again.");
            });

    }

}

module.exports = CLI;