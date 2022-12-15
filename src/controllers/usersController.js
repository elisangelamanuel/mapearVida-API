const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const SECRET = process.env.SECRET;
const jwt = require("jsonwebtoken");
const outputPattern = ["-_id", "-email", "-password", "-bio", "-timestamps", "-__v"];

function sort() {
    const sortName = {
        "sort": "name"
    }
    return sortName;
}

const getByName = async (req, res) => {
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

        const { name } = req.params;
        const findName = await userModel.find({ name: name }, outputPattern)

        if (findName == null) {
            return res.status(404).json({
                message: `Name ${name} not found`
            });
        }
        return res.status(200).json(findName);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message
        })
    };
};


const getAmbassadorsList = async (req, res) => {
    try {
        const ambassadors = await userModel.find(userModel.ambassador, outputPattern, sort());
        return res.status(200).json(ambassadors);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message
        });
    }
};


const getAnimalsAmbassadors = async (req, res) => {
    try {
        const animals = await userModel.find({ "ambassador.animals": "true" }, outputPattern, sort());
        return res.status(200).json(animals);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message
        });
    }
};


const getEnvironmentAmbassadors = async (req, res) => {
    try {
        const environment = await userModel.find({ "ambassador.environment": "true" }, outputPattern, sort());
        return res.status(200).json(environment);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message
        });
    }
};


const getHumanAmbassadors = async (req, res) => {
    try {
        const human = await userModel.find({ "ambassador.human": "true" }, outputPattern, sort());
        return res.status(200).json(human);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message
        });
    }
};


const getPlantsAmbassadors = async (req, res) => {
    try {
        const plants = await userModel.find({ "ambassador.plants": "true" }, outputPattern, sort());
        return res.status(200).json(plants);
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message
        });
    }
};


const postRegisterUser = async (req, res) => {
    try {
        const passwordHash = bcrypt.hashSync(req.body.password, 10);

        const {
            email,
            name,
            ambassador: [{
                animals,
                environment,
                human,
                plants
            }],
            bio,
        } = req.body;

        if (req.body.email != null && req.body.email == "") {
            return res.status(400).json({
                message: "Email must required"
            });
        } else {
            req.body.password = passwordHash;

            const newUser = new userModel({
                email,
                name,
                ambassador: [{
                    animals,
                    environment,
                    human,
                    plants
                }],
                bio,
                password: passwordHash,
            });

            const saveUser = await newUser.save();
            return res.status(201).json({
                message: "New user was created successfully",
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: error.message
        });
    }
};


const login = (req, res) => {
    userModel.findOne({ email: req.body.email }, function (error, user) {
        if (error) {
            return res.status(500).send({
                message: "Header not found"
            });
        }
        if (!user) {
            return res.status(404).send({
                message: `Email ${email} not found`
            });
        }
        const validPassword = bcrypt.compareSync(req.body.password, user.password);
        if (!validPassword) {
            return res.status(403).send({
                message: "Password invalid"
            });
        }

        const token = jwt.sign({ email: req.body.email }, SECRET);
        return res.status(200).send(token);
    });
};


const updateProfileById = async (req, res) => {
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
            name,
            ambassador: {
                animals,
                environment,
                human,
                plants,
            },
            bio,
        } = req.body;

        const updateProfile = await userModel.findByIdAndUpdate(
            req.params.id,
            {
                name,
                ambassador: {
                    animals,
                    environment,
                    human,
                    plants,
                },
                bio,
            },
            { new: true }
        );
        return res.status(200).json({
            message: "Profile updated successfully",
            updateProfile
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

        const findUser = await userModel.findById(req.params.id)

        await findUser.delete()

        return res.status(200).json({
            message: `User ID ${findUser.id} was deleted`,
            findUser
        })

    } catch (err) {
        return res.status(404).json({
            message: err.message
        });
    };
};

module.exports = {
    getByName,
    getAmbassadorsList,
    getAnimalsAmbassadors,
    getEnvironmentAmbassadors,
    getHumanAmbassadors,
    getPlantsAmbassadors,
    postRegisterUser,
    login,
    updateProfileById,
    deleteById,
}