import mongoose from "mongoose";
const Schema = mongoose.Schema;

const ReviewSchema = new Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: [true, "Review must belong t a user"],
        },
        product:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: [true, "Review must belong t a product"],
        },
        message: {
            type: String,
            required: [true, "Please add a message"],
        },
        rating: {
            type: String,
            required: [true, "Please add a message"],
            min: 1,
            max: 5,
        },
    },{
        timestamps: true,
    }
);

const Review = mongoose.model("Review", ReviewSchema);

export default Review;