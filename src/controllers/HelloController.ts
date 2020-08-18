import { Request, Response } from "express";

const HelloController = {
  async index(request: Request, respose: Response) {
    return respose.json({ message: "hello" });
  },
};

export { HelloController };
