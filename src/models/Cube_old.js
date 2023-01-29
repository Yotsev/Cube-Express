//This can be used if you want to work with JSON file. Can be deleted for the project it is not used anymore
const db = require('../db.json');
const fs = require('fs');
const path = require('path');

class Cube_old {
    constructor(name, description, imageUrl, difficultyLevel) {
        this.name = name,
        this.description = description,
        this.imageUrl = imageUrl,
        this.difficultyLevel = difficultyLevel;
    }

    save() {
        cube.id = db.cubes[db.cubes.length - 1].id + 1;
        db.cubes.push(cube);
        const jsonData = JSON.stringify(db, null, 2);
        fs.writeFileSync(path.resolve(__dirname, '../db.json'), jsonData)//Never use the Sync (just for the demo)
    }
};

module.exports = Cube_old;