const mapModel = require("../models/mapModel");
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");

const getPointsList = async (req, res) => {
    try {
        const points = await mapModel.find({}, ["-_id", "-timestamps", "-__v"], { "sort": "pointName" });
        return res.status(200).json(points);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message
        });
    }
};

const postMapAPoint = async (req, res) => {
    try {
        const authHeader = req.get("authorization");
        const token = authHeader?.split(" ")[1] ?? ("Not authorized");

        if (!token) {
            return res.status(401).json({
                message: "Header error: token is not provided"
            });
        }

        const error = jwt.verify(token, SECRET, (error) => {
            if (error) return error;
        });

        if (error) return res.status(401).json({
            message: "Not authorized"
        });

        const {
            pointName,
            cep,
            number,
            street,
            district,
            city,
            state,
        } = req.body;

        if (req.body.pointName != null && req.body.pointName == "") {
            return res.status(400).json({
                message: "PointName must required"
            });
        } else {
            const newPoint = new mapModel({
                pointName,
                cep,
                number,
                street,
                district,
                city,
                state,
            });

            const savePoint = await newPoint.save();
            return res.status(201).json({
                message: "New point was saved",
                savePoint
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message
        });
    }
};

const updatePointById = async (req, res) => {
    try {
        const authHeader = req.get("authorization");
        const token = authHeader?.split(" ")[1] ?? ("Not authorized");

        if (!token) {
            return res.status(401).json({
                message: "Header error"
            });
        }

        const error = jwt.verify(token, SECRET, (error) => {
            if (error) return error;
        })

        if (error) return res.status(401).json({
            message: "Not authorized"
        });

        const {
            cep,
            number,
            street,
            district,
            city,
            state,
        } = req.body;

        const updatePoint = await mapModel.findByIdAndUpdate(
            req.params.id,
            {
                cep,
                number,
                street,
                district,
                city,
                state,
            },
            { new: true }
        );
        return res.status(200).json({
            message: "Point updated successfully",
            updatePoint
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    };
};

const deleteById = async (req, res) => {
    try {
        const authHeader = req.get("authorization");
        const token = authHeader?.split(" ")[1] ?? ("Not authorized");

        if (!token) {
            return res.status(401).json({
                message: "Header error"
            });
        }

        const error = jwt.verify(token, SECRET, (error) => {
            if (error) return error;
        })

        if (error) return res.status(401).json({
            message: "Not authorized"
        });

        const findPoint = await mapModel.findById(req.params.id)

        await findPoint.delete()

        return res.status(200).json({
            message: `Point ID ${findPoint.id} was deleted`,
            findPoint
        })

    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    };
};

module.exports = {
    getPointsList,
    postMapAPoint,
    updatePointById,
    deleteById,
}