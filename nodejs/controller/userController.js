const { Router } = require("express");

const userRouter = Router({ mergeParams: true });
const userService = require("../../service/userService");

userRouter.get("/user/:id", async (req, res) => {
  const userResultFetch = await userService.findUserById(req.params.id);
  if (userResultFetch) {
    res.status(200).send(userResultFetch);
  } else {
    res.status(500).send({ message: "Unable to find user" });
  }
});

userRouter.get("/userByEmail/:email", async (req, res) => {
  const emailFetch = await userService.findUserByEmail(req.params.email);
  if (emailFetch) {
    res.status(200).send(emailFetch);
  } else {
    res.status(500).send({ message: "Unable to find a email" });
  }
});

userRouter.post("/createUser", (req, res) => {
  userService
    .createUser(req.body)
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((err) => res.status(500).send(err));
});

module.exports = userRouter;