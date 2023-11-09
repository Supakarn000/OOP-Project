const express = require('express')
const mysql = require('mysql')
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'oopdb',
});

db.connect((err) => {
  if (err) {
    console.error('connect fail');
    return;
  }
  console.log('connect success');
});

app.post("/calculate", (req, res) => {
    const { n, a } = req.body;
    let x1 = 0;
    let y1 = 0;
  
    for (let i = 0; i < n; i++) {
      if (a[i] % 4 === 1) {
        y1++;
      } else if (a[i] % 4 === 2) {
        x1--;
      } else if (a[i] % 4 === 3) {
        x1++;
      } else {
        y1--;
      }
    }
  
    res.json({ x1, y1 });
    // console.log("cal is using")
  });

app.get("/calculate/value",(req,res)=>{
    const n = 2;
    let a = [12,14];
    let x1 = 0;
    let y1 = 0;

    for (let i = 0; i < n; i++) {
        if (a[i] % 4 === 1) {
          y1++;
        } else if (a[i] % 4 === 2) {
          x1--;
        } else if (a[i] % 4 === 3) {
          x1++;
        } else {
          y1--;
        }
      }

    
      res.json({ x1, y1 });
})

app.get("/calculate/db", (req, res) => {
  const id = req.query.id;
  const query = `SELECT * FROM kor9q WHERE id = ?`;

  db.query(query, [id], (err, results) => {
    if (err) {
      res.status(500).json({err});
    } else {
      if (results.length > 0) {
        const { n, a } = results[0];
        const numA = JSON.parse(a);
        // console.log('n =', n);
        // console.log("a =",a);
        let x1 = 0;
        let y1 = 0;

        for (let i = 0; i < n; i++) {
          if (numA[i] % 4 === 1) {
            y1++;
          } else if (numA[i] % 4 === 2) {
            x1--;
          } else if (numA[i] % 4 === 3) {
            x1++;
          } else {
            y1--;
          }
        }

        // console.log('x1:', x1);
        // console.log('y1:', y1);
      
        res.json({ x1, y1 });
      } else {
        res.status(404).json({ error: 'Data not found' });
      }
    }
  });
});

app.get("/all", (req, res) => {
  const query = "SELECT * FROM kor9q";

  db.query(query, (err, results) => {
    if (err) {
      res.status(500).json({err});
    } else {
      res.json(results);
    }
  });
});





app.listen(8000,()=>console.log("api running"))