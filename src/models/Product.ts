import { model, Schema } from 'mongoose';
import { Types } from "mongoose"

const productSchema = new Schema(
    {
        name: { type: String, required: [true, 'Name is required'] },
        description: { type: String, required: [true, 'Description is required'] },
        price: { type: Number, required: [true, 'Price is required'] },
        categoryId: { type: Types.ObjectId, required: [true, 'ID is required'] }
    }
)