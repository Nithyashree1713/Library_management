import express from 'express';
import mongoose from "mongoose";

import { create_account ,signin} from '../controllers/signup.controllers.js';
import { create_account_admin,signin_admin } from '../controllers/logadmin.controllers.js';
import { createProduct, delete_book, update_book } from '../controllers/addbook.controllers.js';
import { get_book } from '../controllers/addbook.controllers.js';
import { insert } from '../controllers/userbook.controllers.js';
import { fetch_form, Filldetails } from '../controllers/form.controllers.js';
const router=express.Router();
router.post("/signup", create_account);
router.post("/signin", signin);
router.post("/signupadmin",create_account_admin);
router.post("/signinadmin",signin_admin)
router.post("/create",createProduct);
router.get("/getbook", get_book);
router.delete("/delete/:id",delete_book);
router.put("/update/:id",update_book);
router.post("/insert/:id", insert);
router.post("/form", Filldetails);
router.get("/form_details", fetch_form);

export default router;