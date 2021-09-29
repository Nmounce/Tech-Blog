const {
    Post
} = require('../models');
const commentData = [{
        title: "The Tech Blog",
        content: 'Once upon a time, there was a tech blog.',
        user_id: 1
    },
    {
        title: "Wriggity-wriggity-wreck",
        content: 'Want to learn how to screw up code? Come visit...',
        user_id: 2
    },
    {
        title: "The garbage chronicles",
        content: 'Thank god for garbage.',
        user_id: 3
    }
];

const seedPosts = () => Comment.bulkCreate(postData);

module.exports = seedPosts;