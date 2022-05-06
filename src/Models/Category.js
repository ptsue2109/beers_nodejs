import mongoose from "mongoose";
const mongoose_delete = require('mongoose-delete');
import slug from "mongoose-slug-generator";
const Schema = mongoose.Schema;

const Category = new Schema({
    catename: { type: String, required: true },
    slug: { type: String, slug: 'catename', unique: true },
    status: { type: String },
    description: { type: String },
    url: { type: String },
    image: { type: Object },
    isParent: {type: Boolean, default: 'false'},
}, { timestamps: true });

mongoose.plugin(slug);
Category.plugin(mongoose_delete, { deletedAt: true});
module.exports = mongoose.model('Category', Category)