import Form from "../models/form.models.js";


// Controller to create a new account
export const Filldetails= async (req, res) => {
    const data = req.body;
    if (!data.name || !data.email || !data.pno||!data.date||!data.book) {
        return res.status(400).json({ success: false, message: "Please provide all fields" });
    }

    const newdata = new Form(data);
    try {
        await newdata.save();
        res.status(201).json({ success: true, data: newdata });
    } catch (err) {
        console.error("Error creating account:", err);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};
export const fetch_form = async (req, res) => {
    try {
        const form = await Form.find();
        res.status(200).json({ success: true, data: form });
    } catch (error) {
        res.status(500).json({ success: false, message: "Server Error" });
    }
};