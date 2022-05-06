import mongoose from "mongoose";
import Category from "../Models/Category";

export const create = async (req, res, next) => {
  try {
    const cate = await Category(req.body).save();
    res.status(200).json({
      message: "created success",
      cate,
    });
  } catch (error) {
    res.status(400).json({ message: "created fail", error });
  }
};

export const getList = async (req, res, next) => {
  try {
    const cate = await Category.find().exec();
    res.status(200).json({
      message: "loaded success",
      cate,
    });
  } catch (error) {
    res.status(400).json({ message: "created fail", error });
  }
};

export const getDetailBySlug = async (req, res, next) => {
  try {
    const condition = { slug: req.params.slug };
    const cate = await Category.findOne(condition).exec();
    res.status(200).json({
      message: "loaded suceess",
      cate,
    });
  } catch (error) {
    res.status(400).json({ message: "loaded fail", error });
  }
};

export const getDetailById = async (req, res, next) => {
  try {
    const condition = { _id: req.params.id };
    const cate = await Category.findOne(condition).exec();
    res.status(200).json({
      message: "loaded suceess",
      cate,
    });
  } catch (error) {
    res.status(400).json({ message: "loaded fail", error });
  }
};

export const update = async (req, res) => {
  const condition = { _id: req.params.id };
  const update = req.body;
  try {
    const cate = await Category.findOneAndUpdate(condition, update).exec();
    res.json({
      message: "update success",
      cate,
    });
  } catch (error) {
    res.status(400).json({
      message: "update failed",
      error,
    });
  }
};

export const softDel = async (req, res, next) => {
  try {
    const condition = { _id: req.params.id };
    const cate = await Category.delete(condition).exec();
    res.status(200).json({
      message: "soft delete success",
      cate,
    });
  } catch (error) {
    res.status(400).json({
      message: "delete failed",
      error,
    });
  }
};
export const forceDel = async (req, res, next) => {
  try {
    const condition = { _id: req.params.id };
    const cate = await Category.deleteOne(condition).exec();
    res.status(200).json({
      message: "soft delete success",
      cate,
    });
  } catch (error) {
    res.status(400).json({
      message: "delete failed",
      error,
    });
  }
};

export const restored = async (req, res,next) =>{
    try {
        const condition = { _id: req.params.id };
        const cate = await Category.restore(condition).exec();
        res.status(200).json({
          message: "restored success",
          cate,
        });
    } catch (error) {
        res.status(400).json({
            message: "restore failed",
            error,
          });
    }
}