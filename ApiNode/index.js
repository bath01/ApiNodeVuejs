const express = require("express");
const cors = require("cors");
const app = express();

const port = 3001;

const mysql = require("mysql2");
const bodyParser = require("body-parser");
app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "school",
  port: 8889,
});
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connection.connect((error) => {
  if (error) console.error(error);
  else console.log("Connexion à la base de données réussie.");
});

// Création d'un nouveau inscris
app.post("/", (req, res) => {
  let query = "INSERT INTO inscris SET ?";
  console.log(req.body);
  let donnee = {
    name: req.body.name,
    email: req.body.email,
    contact: req.body.contact,
    // idProjet: req.body.idProjet,
  };
  // eslint-disable-next-line no-unused-vars
  connection.query(query, donnee, (error, results) => {
    if (error) res.json({ msg: error });
    else {
      res.json({ msg: "Inscris bien créé" });
    }
  });
});

//Pour le commentairen la creation d'un nouveau
app.post("/commentaire", (req, res) => {
  let query = "INSERT INTO commentaire SET ?";
  console.log(req.body);
  let donnee = {
    comment: req.body.comment,
  };
  // eslint-disable-next-line no-unused-vars
  connection.query(query, donnee, (error, results) => {
    if (error) res.json({ msg: error });
    else {
      res.json({ msg: "Commentaire bien ajouté" });
    }
  });
});

//Pour le commentairen la creation d'un nouveau
app.post("/commentaire", (req, res) => {
  let query = "INSERT INTO commentaire SET ?";
  console.log(req.body);
  let donnee = {
    comment: req.body.comment,
  };
  // eslint-disable-next-line no-unused-vars
  connection.query(query, donnee, (error, results) => {
    if (error) res.json({ msg: error });
    else {
      res.json({ msg: "Commentaire bien ajouté" });
    }
  });
});

//Pour le projet la creation d'un nouveau
app.post("/projet", (req, res) => {
  let query = "INSERT INTO projet SET ?";
  console.log(req.body);
  let donnee = {
    titreProjet: req.body.titreProjet,
    descripProjet: req.body.descripProjet,
  };
  // eslint-disable-next-line no-unused-vars
  connection.query(query, donnee, (error, results) => {
    if (error) res.json({ msg: error });
    else {
      res.json({ msg: "Projet bien ajouté" });
    }
  });
});

// lecture de toutes les inscris

app.get("/", (req, res) => {
  let query = "SELECT * FROM inscris";
  console.log(req.body);

  connection.query(query, (error, results) => {
    if (error) res.json({ msg: error });
    else {
      res.json(results);
    }
  });
});

app.get("/one/:id", (req, res) => {
  let query = `SELECT * FROM inscris WHERE id=${req.params.id}`;
  console.log(req.body);

  connection.query(query, (error, results) => {
    if (error) res.json({ msg: error });
    else {
      res.json(results);
    }
  });
});
// lecture de toutes les commentaires

app.get("/commentaire", (req, res) => {
  let query = "SELECT * FROM commentaire";
  console.log(req.body);

  connection.query(query, (error, results) => {
    if (error) res.json({ msg: error });
    else {
      res.json(results);
    }
  });
});

// lecture de tout les projets

app.get("/projet", (req, res) => {
  let query = "SELECT * FROM projet";
  console.log(req.body);

  connection.query(query, (error, results) => {
    if (error) res.json({ msg: error });
    else {
      res.json(results);
    }
  });
});

// Modification d'un inscrit
app.put("/:id", (req, res) => {
  console.log(req.body);
  let query = `UPDATE inscris SET name='${req.body.name}', email='${req.body.email}',contact='${req.body.contact}' WHERE id=${req.params.id}`;

  // const newProduct = {content: req.body.content};
  // eslint-disable-next-line no-unused-vars
  connection.query(query, (error, results) => {
    if (error) res.json({ msg: error });
    else {
      res.json({ msg: "Inscris Modifié" });
    }
  });
});


// Modification d'un commentaire
app.put("/commentaire/:id", (req, res) => {
  let query = `UPDATE commentaire SET comment='${req.body.comment}' WHERE idCom=${req.params.idCom}`;
  console.log(req.body);

  // const newProduct = {content: req.body.content};
  // eslint-disable-next-line no-unused-vars
  connection.query(query, (error, results) => {
    if (error) res.json({ msg: error });
    else {
      res.json({ msg: "Commentaire bien modifié" });
    }
  });
});

// Modification d'un projet
app.put("/projet/:id", (req, res) => {
  let query = `UPDATE projet SET titreProjet='${req.body.titreProjet}',descripProjet='${req.body.descripProjet}' WHERE idProjet=${req.params.idProjet}`;
  console.log(req.body);

  // const newProduct = {content: req.body.content};
  // eslint-disable-next-line no-unused-vars
  connection.query(query, (error, results) => {
    if (error) res.json({ msg: error });
    else {
      res.json({ msg: "Commentaire bien modifié" });
    }
  });
});

app.listen(port, () => {
  console.log(`L'application écoute sur le port ${port}.`);
});
