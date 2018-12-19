const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//deciding the fields required for our documents
//category - name
const categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 64
    }
});
//model names - should be singular and should be in pascal case
const Category = mongoose.model('category', categorySchema);

module.exports = {
    Category
}
//let c1 = new Category({name: 'Sports'})
//c1.save