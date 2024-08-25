const PORT = 8080;
const express = require('express');
const app = express();
app.use(express.json())
app.listen(
    PORT,
    () => console.log(`Its alive on http://localhost:${PORT}`)
)

function separateCharacters(data) {
    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => isNaN(item));
    const highestLowercase = alphabets.filter(item => item === item.toLowerCase()).sort().reverse()[0] || '';
    return { numbers, alphabets, highestLowercase };
}

app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    

    if (!Array.isArray(data)) {
        return res.status(400).json({ is_success: false, error: "Invalid input data" });
    }

    
    const { numbers, alphabets, highestLowercase } = separateCharacters(data);

    
    const userId = "john_doe_17091999";
    const email = "john@xyz.com";
    const rollNumber = "ABCD123";
    
    
    res.json({
        is_success: true,
        user_id: userId,
        email: email,
        roll_number: rollNumber,
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: [highestLowercase]
    });
});

app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});