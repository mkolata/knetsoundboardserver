const express = require('express');
const cors = require('cors');
const multer = require('multer');

const upload = multer({
    dest: 'uploads/'
});

const app = express();
const port = 3000;

app.use(cors());

app.post('/upload-mp3', upload.single('soundfile'), function (req, res, next) {
    
    if (!req.file || req.file.length === 0) {
        return res.status(400).send('No files were uploaded.');
      }
    res.status(201).send();
})

app.get('/', (req, res) => {
    res.send('Hello Soundboard!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})