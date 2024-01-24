"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Post {
    constructor(id, date, title, description, body, img, category, postedBy) {
        this.id = id;
        this.date = date;
        this.title = title;
        this.description = description;
        this.body = body;
        this.img = img;
        this.category = category;
        this.postedBy = postedBy; // user ID
    }
}
exports.default = Post;
