import mongoose from "mongoose";
import Product from "../models/addbook.models.js"; // Model for the product collection
import UserBook from "../models/userbook.model.js"; // Model for the user's book collection

// The insert function that adds a book to a user's book list
export const insert = async (req, res) => {
    const { id } = req.params; // Product (Book) ID
    const productDetails = req.body; // Additional details (if any) to be inserted into the user's book list

    // Check if the product ID is a valid MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ success: false, message: "Invalid book ID" });
    }

    try {
        // Find the product (book) using the provided 'id' in the Product collection
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ success: false, message: "Book not found" });
        }

        // Create a new UserBook entry using the product data
        const newUserBook = new UserBook({
            name: product.name, // Extract name from the product document
            author: product.author, // Extract author from the product document
            category: product.category, // Extract category from the product document
            publishedDate: product.publishedDate, // Extract publishedDate from the product document
            image: product.image, // Extract image from the product document
            productId: product._id, // Store the reference to the product ID
            ...productDetails // Spread any additional details passed in the request body
        });

        // Save the new entry into the UserBook collection
        await newUserBook.save();

        // Send back the response with the newly created user book entry
        return res.status(201).json({ success: true, data: newUserBook });

    } catch (error) {
        console.error("ERROR in inserting book:", error.message);
        return res.status(500).json({ success: false, message: "Server Error" });
    }
};
