const {
    Comment
} = require('../models');
const commentData = [{
        comment_text: "Blah, Blah, Blah, Blah, Blah, Blah",
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: "Meh",
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;