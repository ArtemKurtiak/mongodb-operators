const {User} = require("../database");

// $eq - equal to provided value
// $lt - less than provided value
// $gt - greater than provided value
// $in - all elements that equal to provided value in array
// $gte - greater or equal to provided value
// $lte - less or equal to provided value
// $ne - all elements that aren't equal to provided value
// $nin - all elements that aren't equal to provided value in array
// $or - all elements that equal at least to one expression in array
// $and - all elements that equal to all expressions in array
// $not and $not - all elements that don't equal to expression in array
// $exists - when true, elements where provided field exists
// $type - all elements which type equals to provided value

module.exports = {
    createUser: async (req, res, next) => {
        const { name, age, cars } = req.body;

        const user = await User.create({
            name,
            age,
            cars
        });

        res.status(200).json(user);
    },

    getUser: async (req, res, next) => {

        const user = await User.find();

        res.json(user);
    },

    getUserByParam: async (req, res, next) => {
        const { cars, age } = req.body;

        const user = await User.find({ age: { $type: 'string' } });

        res.json(user);
    }
}
