const { v4: uuidv4 } = require('uuid');

class Gift {   
    constructor(from, to, message, imageLink) {
        //this.id = uuidv4();
        this.from = from;
        this.to = to;
        this.message = message;
        this.imageLink = imageLink;
    }

    toJSON() {
        return {
            //id: this.id,
            from: this.from,
            to: this.to,
            message: this.message,
            imageLink: this.imageLink,   
        };
    }
}

module.exports = Gift;
