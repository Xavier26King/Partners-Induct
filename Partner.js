import mongoose from "mongoose";

const partnerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: false
    }
});

export default mongoose.model("Partner", partnerSchema);
