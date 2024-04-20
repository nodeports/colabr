import { Request, Response } from "express";
import co from "co";
import Task from "../models/task";

export const getTasks = co.wrap(function* (req: Request, res: Response) {
  try {
    const tasks = yield Task.find().exec();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export const createTask = co.wrap(function* (req: Request, res: Response) {
  try {
    const { title, description } = req.body;
    const newTask = new Task({ title, description });
    const task = yield newTask.save();
    res.status(201).json(task);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
