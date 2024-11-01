const Blog = require("../Models/BlogModel")
const fs = require("fs")


const createBlog = async (req, res) => {
    try {
        const { blogHeading, blogDetails, blogDescription } = req.body
        const errorMessage = []
        if (!blogHeading) errorMessage.push("Blog Heading is must required")
        if (!blogDetails) errorMessage.push("Blog Details is must required")
        if (!blogDescription) errorMessage.push("Blog Description is must required")

        if (errorMessage.length > 0) {
            return res.status(400).json({
                success: false,
                message: errorMessage.join(",")
            })
        }

        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Blog Image is must required"
            })
        }

        const chnageUpperCase = blogHeading.toUpperCase()
        const exitBlogHeadeing = await Blog.findOne({ blogHeading: chnageUpperCase })
        if (exitBlogHeadeing) {
            return res.status(400).json({
                success: false,
                message: "This Blog Name is already exits"
            })
        }
        const addBlog = new Blog({ blogHeading: chnageUpperCase, blogDetails, blogDescription, blogImage: req.file.path })
        await addBlog.save()
        return res.status(200).json({
            success: true,
            message: "Blog Added Successfully"
        })
    } catch (error) {
        console.log(error)
        if (req.file) fs.unlinkSync(req.file.path);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const getBlog = async (req, res) => {
    try {
        const data = await Blog.find()
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Blog Not Found"
            })
        }
        const reverseData = data.reverse()
        res.status(200).json({
            success: true,
            message: "Blog Found Successfully",
            data: reverseData
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const getSingleBlog = async (req, res) => {
    try {
        const data = await Blog.findById(req.params.id)
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Blog Not Found"
            })
        }
        res.status(200).json({
            success: true,
            message: "Blog Found Successfully",
            data: data
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

const deleteBlog = async (req, res) => {
    try {
        const data = await Blog.findById(req.params.id)
        if (!data) {
            return res.status(404).json({
                success: false,
                message: "Blog Not Found"
            })
        }
        const deleteImagePath = data.blogImage
        fs.unlinkSync(deleteImagePath)
        await data.deleteOne()
        res.status(200).json({
            success: true,
            message: "Blog Delete Successfully"
        })
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

// Update Blog
const updateBlog = async (req, res) => {
    try {
        const { blogHeading, blogDetails, blogDescription } = req.body;
        const errorMessage = [];
        if (!blogHeading) errorMessage.push("Blog Heading is must required");
        if (!blogDetails) errorMessage.push("Blog Details is must required");
        if (!blogDescription) errorMessage.push("Blog Description is must required");

        if (errorMessage.length > 0) {
            return res.status(400).json({
                success: false,
                message: errorMessage.join(",")
            });
        }

        const chnageUpperCase = blogHeading.toUpperCase()
        const exitBlogHeadeing = await Blog.findOne({ blogHeading: chnageUpperCase })
        if (exitBlogHeadeing) {
            return res.status(400).json({
                success: false,
                message: "This Blog Name is already exits"
            })
        }

        const blog = await Blog.findById(req.params.id);
        if (!blog) {
            return res.status(404).json({
                success: false,
                message: "Blog Not Found"
            });
        }
        if (req.file) {
            fs.unlinkSync(blog.blogImage);
            blog.blogImage = req.file.path;
        }
        blog.blogHeading = chnageUpperCase;
        blog.blogDetails = blogDetails;
        blog.blogDescription = blogDescription;

        await blog.save();

        res.status(200).json({
            success: true,
            message: "Blog Updated Successfully"
        });
    } catch (error) {
        console.log(error);
        if (req.file) fs.unlinkSync(req.file.path);
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = {
    createBlog,
    getBlog,
    getSingleBlog,
    deleteBlog,
    updateBlog
};