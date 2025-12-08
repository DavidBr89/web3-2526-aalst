// CRUD operaties

const { prisma } = require("../config/prisma");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const UsersController = {
  getAll: async (req, res) => {
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          email: true,
          firstName: true,
          lastName: true,
        },
        where: {
          isVerified: false,
        },
      });
      res.json(users);
    } catch (error) {
      res.sendStatus(500);
    }
  },
  create: async (req, res) => {
    try {
      const userData = req.body;

      const hashedPassword = await bcrypt.hash(userData.password, 12);

      const newUser = await prisma.user.create({
        data: { ...userData, password: hashedPassword },
      });

      const token = jwt.sign(
        { sub: newUser.id },
        process.env.JWT_TOKEN_SECRET,
        { expiresIn: "5m" }
      );

      res.cookie("web3_token", token, {
        httpOnly: true,
        secure: false,
        expires: new Date(Date.now() + 5 * 60 * 1000),
      });

      res.status(201).json(newUser);
    } catch (error) {
      res.sendStatus(500);
    }
  },
  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!user) {
        return res.sendStatus(400);
      }

      const result = await bcrypt.compare(password, user.password);

      if (result) {
        const token = jwt.sign({ sub: user.id }, process.env.JWT_TOKEN_SECRET, {
          expiresIn: "5m",
        });

        return res
          .cookie("web3_token", token, {
            httpOnly: true,
            secure: false,
            expires: new Date(Date.now() + 5 * 60 * 1000),
          })
          .sendStatus(200);
      }

      res.sendStatus(400);
    } catch (error) {
      res.sendStatus(500);
    }
  },
};

module.exports = UsersController;
