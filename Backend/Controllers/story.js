const asyncErrorWrapper = require("express-async-handler")
const Story = require("../Models/story");
const deleteImageFile = require("../Helpers/Libraries/deleteImageFile");
const { searchHelper, paginateHelper } = require("../Helpers/query/queryHelpers");
const { uploadImageToFirebase } = require("../Helpers/Libraries/imageUpload");
const { read } = require("fs");
const User = require("../Models/user");

const addStory = asyncErrorWrapper(async (req, res, next) => {


    const { title, content } = req.body

    var wordCount = content.trim().split(/\s+/).length;

    let readtime = Math.floor(wordCount / 200);

    const photoUrl = (await uploadImageToFirebase(req.user_id, req.file.path, "story")).toString();


    try {
        const newStory = await Story.create({
            title,
            content,
            author: req.user._id,
            image: photoUrl,
            readtime
        })

        return res.status(200).json({
            success: true,
            message: "add story successfully ",
            data: newStory
        })
    }

    catch (error) {

        deleteImageFile(req)

        return next(error)

    }

})

const getAllStories = asyncErrorWrapper(async (req, res, next) => {

    let query = Story.find();

    query = searchHelper("title", query, req)

    const paginationResult = await paginateHelper(Story, query, req)

    query = paginationResult.query;

    query = query.sort("-likeCount -commentCount -createdAt")

    const stories = []

    for(let q of await query){
        var story = await Story.findById(q.id).populate("author")
        stories.push(story);
    }


    return res.status(200).json(
        {
            success: true,
            count: stories.length,
            data: stories,
            page: paginationResult.page,
            pages: paginationResult.pages
        })

})

const detailStory = asyncErrorWrapper(async (req, res, next) => {

    const { slug } = req.params;
    const { activeUser } = req.body

    const story = await Story.findOne({
        slug: slug
    }).populate("author likes")

    const storyLikeUserIds = story.likes.map(json => json.id)
    const likeStatus = storyLikeUserIds.includes(activeUser._id)


    return res.status(200).
        json({
            success: true,
            data: story,
            likeStatus: likeStatus
        })

})

const likeStory = asyncErrorWrapper(async (req, res, next) => {

    const { activeUser } = req.body
    const { slug } = req.params;

    const story = await Story.findOne({
        slug: slug
    }).populate("author likes")

    const storyLikeUserIds = story.likes.map(json => json._id.toString())

    if (!storyLikeUserIds.includes(activeUser._id)) {

        story.likes.push(activeUser)
        story.likeCount = story.likes.length
        await story.save();
    }
    else {

        const index = storyLikeUserIds.indexOf(activeUser._id)
        story.likes.splice(index, 1)
        story.likeCount = story.likes.length

        await story.save();
    }

    return res.status(200).
        json({
            success: true,
            data: story
        })

})

const editStoryPage = asyncErrorWrapper(async (req, res, next) => {
    const { slug } = req.params;

    const story = await Story.findOne({
        slug: slug
    }).populate("author likes")

    return res.status(200).
        json({
            success: true,
            data: story
        })

})


const editStory = asyncErrorWrapper(async (req, res, next) => {
    const { slug } = req.params;
    const { title, content, image, previousImage } = req.body;

    const story = await Story.findOne({ slug: slug })


    story.title = title;
    story.content = content;

    if (!req.file) {
        // if the image is not sent
        story.image = previousImage
    }
    else {
        // if the image sent
        // old image  delete
        deleteImageFile("story", story.image);
        const photoUrl = (await uploadImageToFirebase(story.author, req.file.path, "story")).toString();
        story.image = photoUrl;

    }

    await story.save();

    return res.status(200).
        json({
            success: true,
            data: story
        })

})

const deleteStory = asyncErrorWrapper(async (req, res, next) => {

    const { slug } = req.params;

    const story = await Story.findOne({ slug: slug })

    const readList = story.readList;

    for (let readerUser of readList) {
        const user = await User.findById(readerUser);
        const index = user.readList.indexOf(story.id);
        user.readList.splice(index, 1);
        user.readListLength = user.readList.length;
        await user.save();
    }

    deleteImageFile(req, story.image);

    await story.remove()

    return res.status(200).
        json({
            success: true,
            message: "Story delete succesfully "
        })

})


module.exports = {
    addStory,
    getAllStories,
    detailStory,
    likeStory,
    editStoryPage,
    editStory,
    deleteStory
}