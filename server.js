const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch")
// const validator = require("validator")
// const {check, validationResult} = require("express-validator")

const app = express();
app.use(express.json());
app.use(cors());

const dataArray = []

app.get("/", (req, res) => {
    res.send(dataArray[0])
})

app.post("/validate-rule", (req, res) => {
    const {rule, data} = req.body

    if(!rule || !data) {
        return res.status(400).send("Rule and Data fields are required");
    }

    // Write store response inside array
    dataArray.push({rule, data})
    res.send({rule, data})

})











// const express = require("express");
// const cors = require("cors");
// const fetch = require("node-fetch")
// // const validator = require("validator")
// const {check, validationResult} = require("express-validator")

// const app = express();
// app.use(express.json());
// app.use(cors());

// // Empty array to store data
// let dataArray = [];

// // GET route
// app.get("/", (req, res) => {

//     res.send({
//         message: "My Rule-Validation API",
//         status: "success",
//         "data":  dataArray[0]
 
//         })   
// })

// // POST route
// app.post("/validate-rule", [
//     check("name")
//     .notEmpty()
//     .withMessage("Name cannnot be empty")
//     .isLength({min: 5})
//     .withMessage("Username must be at least 5 characters"),
//     check("email")
//     .notEmpty()
//     .withMessage("Email cannot be empty")
// ], (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         // return res.status(400).send(errors.array().map((item) => {
//         //     return item.msg
//         // }))
//        return res.status(400).send({errors: errors.array()})
//     }

//     const {name, github, email, mobile, twitter} = req.body
//     let dataObject = {name, github, email, mobile, twitter}
//     dataArray.push(dataObject)
//     res.send(dataObject)
// })



// set up server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
