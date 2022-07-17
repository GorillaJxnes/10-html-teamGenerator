const fs = require('fs');
const style = require('./style')

class teamList {
    constructor() {
        this.engineerArray = [];
        this.internArray = [];
        this.managerArray = [];
    };

    async genPage() {
        let html = `
        <!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>HTML Team Gen</title>
        <link rel="stylesheet" href="./stylesheet.css">
    </head>
    <body>
        <header>
            <h1>Team Generator!</h1>
        </header>
        <main>
            
        </main>
        <footer>

        </footer>
    </body>
</html>
        `
    }
}