import Partner from "./Partner.js";

export const getAllPartners = async (req, res) => {
    try {
        const partners = await Partner.find();
        return res.status(200).json(partners);
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};

export const addPartners = async (req, res, next) => {
    const { name, description, website } = req.body;
    const logo = req.file ? `/uploads/${req.file.filename}` : null; // Handle the image URL

    const newPartner = new Partner({
        name,
        description,
        logo,
        website
    });

    try {
        await newPartner.save();
        return res.status(201).json(newPartner);
    } catch (error) {
        return res.status(409).json({ message: error.message });
    }
};

export const updatePartners = async (req, res, next) => {
    const { id } = req.params;
    const { name, description, website} = req.body;
    const logo = req.file ? `/uploads/${req.file.filename}` : undefined; // Handle the image URL

    let updatedPartner;
    try {
        updatedPartner = await Partner.findByIdAndUpdate(
            id,
            {
                name,
                description,
                logo,
                website
            },
            { new: true } // Return the updated document
        );
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Could not update partner' });
    }

    if (!updatedBlog) {
        return res.status(404).json({ message: 'Partner not found' });
    }
    return res.status(200).json(updatedPartner);
};

export const deletePartners = async (req, res) => {
    const { id } = req.params;

    try {
        await Partner.findByIdAndRemove(id);
        return res.status(200).json({ message: 'Partner deleted successfully' });
    } catch (error) {
        return res.status(404).json({ message: error.message });
    }
};