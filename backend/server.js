import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// Your Details
const FULL_NAME = "Manikanti_Aaadarsh"; // replace with your name
const DOB = "26052006";
const EMAIL = "manikantiaadarsh6@gmail.com";
const ROLL_NUMBER = "22BCE20449";

function alternatingCapsReverse(str) {
  let reversed = str.split("").reverse();
  return reversed
    .map((ch, idx) => (idx % 2 === 0 ? ch.toUpperCase() : ch.toLowerCase()))
    .join("");
}

function validateInput(req, res, next) {
  const { data } = req.body;
  if (!Array.isArray(data)) {
    return res.status(400).json({
      is_success: false,
      message: "Invalid input, data must be an array",
    });
  }
  next();
}

function processData(req, res) {
  try {
    const data = req.body.data;

    let evenNumbers = [];
    let oddNumbers = [];
    let alphabets = [];
    let specialChars = [];
    let sum = 0;

    for (let item of data) {
      if (!isNaN(item)) {
        let num = parseInt(item, 10);
        if (!isNaN(num)) {
          if (num % 2 === 0) evenNumbers.push(item.toString());
          else oddNumbers.push(item.toString());
          sum += num;
        }
      } else if (/^[a-zA-Z]+$/.test(item)) {
        alphabets.push(item.toUpperCase());
      } else {
        specialChars.push(item);
      }
    }

    let concatStr = alternatingCapsReverse(alphabets.join(""));

    res.status(200).json({
      is_success: true,
      user_id: `${FULL_NAME}_${DOB}`,
      email: EMAIL,
      roll_number: ROLL_NUMBER,
      odd_numbers: oddNumbers,
      even_numbers: evenNumbers,
      alphabets: alphabets,
      special_characters: specialChars,
      sum: sum.toString(),
      concat_string: concatStr,
    });
  } catch (err) {
    res.status(500).json({
      is_success: false,
      message: "Server error",
      error: err.message,
    });
  }
}

app.post("/bfhl", validateInput, processData);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
