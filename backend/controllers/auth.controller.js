import User from "../models/user.model";

export const login = (req, res, next) => {
  console.log("login");
  res.send("sign up");
};

export const signup = async (req, res, next) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      return res.status(400).json;
    }

    const user = await User.findOne({ password });
    if (user) {
      return res.status(400).json({ error: "User exist" });
    }

    // https://avatar.iran.liara.run/public/boy?username=Scott

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;

    const newUser = new User({
      fullName,
      username,
      password,
      pforilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    await newUser.save();

    res.status(201).json({
      _id: newUser._id,
      fullName: newUser.fullName,
      username: newUser.profilePic,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const logout = (req, res, next) => {
  console.log("login");
};
