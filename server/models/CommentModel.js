const mongoose = require('mongoose');

const {Schema, model} = mongoose;

const CommentSchema = new Schema(
    {
        commentator: {type: Schema.Types.ObjectId, ref: "User", required: true, index: true},
        image_url: [{type: String}],
        postId: {type: Schema.Types.ObjectId, ref: "Post", required: true, index: true},
        type: {type: String, required: true},
        emoji: [{type: Object}]
    }, {timestamps: {createdAt: "created_at"}});

module.exports = model('Comment', CommentSchema);
