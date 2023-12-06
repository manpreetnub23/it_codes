const http = require("http");
const mysql = require("mysql");

const port = 10000;

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "temp",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("hello");
});

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  if (req.method === "OPTIONS") {
    res.setHeader("Access-Control-Allow-Methods", "POST");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === "/signup" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        const query = `INSERT INTO users (name, username, password) VALUES ("${data.name}", "${data.username}", "${data.password}")`;

        con.query(query, (err, result) => {
          if (err) {
            console.log(err);
            res.end(JSON.stringify({ error: "Internal Server Error" }));
            return;
          }
          res.end(JSON.stringify({ message: "Signup successful" }));
        });
      } catch (error) {
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
  } else if (req.url === "/login" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        usernameQuery = `SELECT * FROM users WHERE username = "${data.username}"`;
        con.query(usernameQuery, (err, result) => {
          if (err) {
            res.end(JSON.stringify({ error: "Internal Server Error" }));
            return;
          }
          if (result.length === 0) {
            res.end(JSON.stringify({ error: "Username does not exist" }));
            return;
          }
          passwordQuery = `SELECT * FROM users WHERE password ="${data.password}" AND username ="${data.username}"`;
          const checkPasswordQuery = con.query(passwordQuery, (err, result) => {
            if (err) {
              res.end(JSON.stringify({ error: "Internal Server Error" }));
              return;
            }
            if (result.length === 0) {
              res.end(JSON.stringify({ error: "Incorrect password" }));
              return;
            }
            res.end(JSON.stringify({ message: "Login successful" }));
          });
        });
      } catch (error) {
        res.end(JSON.stringify({ error: "Invalid JSON" }));
      }
    });
  }
});

server.listen(port, () => {
  console.log(`Server running at port ${port}`);
});