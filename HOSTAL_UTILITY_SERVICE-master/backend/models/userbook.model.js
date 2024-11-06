import mongoose from "mongoose";

// This schema stores the books added by the user
const UserBookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    publishedDate: {
        type: Date,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product', // Reference to the Product model
        required: true
    },
}, {
    timestamps: true
});

const UserBook = mongoose.model('UserBook', UserBookSchema);

export default UserBook;
