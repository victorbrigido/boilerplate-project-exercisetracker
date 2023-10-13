const express = require('express')
const app = express()
const cors = require('cors')
require('dotenv').config()
const mongoose = require('mongoose')
const { Schema } = mongoose;

mongoose.connect(process.env.DB_URL)

const UserSchema = new Schema({
  username: String,
});
const User = mongoose.model("User", UserSchema);

const ExerciseSchema = new Schema({
  user_id: { type: String, required: true },
  description: String,
  duration: Number,
  date: Date,
});
const Exercise = mongoose.model("Exercise", ExerciseSchema);

app.use(cors())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

app.post("/api/users", async (req, res) => {
  const { username } = req.body;
  try {
    const user = await new User({ username }).save();
    res.json({ username: user.username, _id: user._id });
  } catch (err) {
    console.error(err);
    res.send("Error creating user");
  }
});

app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find().select("_id username");
    res.json(users);
  } catch (err) {
    console.error(err);
    res.send("Error fetching users");
  }
});






app.post("/api/users", async (req, res) => {
    console.log(req.body)
    const userObj = new User({
      username: req.body.username,
    })
    try{
      const user = await userObj.save()
      console.log(user)
      res.json(user)
    }catch(err){
      console.log(err)
    }   
});


app.post("/api/users/:_id/exercises", async (req, res) => {
  const userId = req.params._id;
  const { description, duration, date } = req.body;

  try {
    const user = await User.findById(userId);

    if (!user) {
      res.send("Could not find user");
    } else {
      const exercise = new Exercise({
        user_id: user._id,
        description,
        duration,
        date: date ? new Date(date) : new Date(),
      });

      const savedExercise = await exercise.save();

      res.json({
        _id: user._id,
        username: user.username,
        description: savedExercise.description,
        duration: savedExercise.duration,
        date: new Date(savedExercise.date).toDateString(),
      });
    }
  } catch (err) {
    console.error(err);
    res.send("There was an error saving the exercise");
  }
});



app.get("/api/users/:_id/logs", async (req, res) => {
  const { from, to, limit } = req.query;
  const userId = req.params._id;

  try {
    const user = await User.findById(userId);

    if (!user) {
      res.send("Could not find user");
      return;
    }

    const filter = { user_id: userId };
    if (from || to) {
      filter.date = {};
      if (from) filter.date["$gte"] = new Date(from);
      if (to) filter.date["$lte"] = new Date(to);
    }

    const exercises = await Exercise.find(filter)
      .limit(+limit || 500)
      .exec();

    const log = exercises.map((e) => ({
      description: e.description,
      duration: e.duration,
      date: e.date.toDateString(),
    }));

    res.json({
      username: user.username,
      count: exercises.length,
      _id: user._id,
      log,
    });
  } catch (err) {
    console.error(err);
    res.send("Error fetching exercise logs");
  }
});






const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
