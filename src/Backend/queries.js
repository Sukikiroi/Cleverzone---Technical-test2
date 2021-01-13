const db = require("./Db-Config");
const config = require("../Backend/config/auth.config");

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { isEmpty } = require("lodash");

const signup = (request, response) => {
  const Email = request.body.Email;
  const Passsword = bcrypt.hashSync(request.body.Password, 8);
  const Name = request.body.Name;
  response.status(200).send("Rabi yahfdk");
};

const signin = async (request, response) => {
  const Email = request.body.Email;
  const Passsword = request.body.Password;
  await db.pooldb.query(
    'SELECT "Name", "Email", "Passsword", "ID" FROM public."Users" where "Email"= $1 and "Passsword" = $2 ',
    [Email, Passsword],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getAgencies = async (request, response) => {
  const id = parseInt(request.params.id);
  console.log(id);
  await db.pooldb.query(
    'SELECT "NameAgence", "Address", "Wilaya", "Commune", "Phone", "Created At" FROM public."Agencies" where "Userid"=$1',
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getUsers = async (request, response) => {
  await db.pooldb.query(
    'SELECT * FROM public."Users" ORDER BY id ASC ',
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createAgence = async (request, response) => {
  const id = parseInt(request.params.id);
  const NameAgence = request.body.NameAgence;
  const Address = request.body.Address;
  const Wilaya = request.body.Wilaya;
  const Commune = request.body.Commune;
  const Phone = request.body.Phone;

  await db.pooldb.query(
    ' INSERT INTO public."Agencies"("NameAgence", "Address", "Wilaya", "Commune", "Phone", "Created At", "Userid") VALUES ($1, $2, $3, $4, $5, 1254,$6)',
    [NameAgence, Address, Wilaya, Commune, Phone, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Agencies added with ID: ${results.insertId}`);
    }
  );
};

const BedlUser = async (request, response) => {
  const id = parseInt(request.params.id);
  const NameAgence = request.body.NameAgence;
  const Address = request.body.Address;
  const Wilaya = request.body.Wilaya;
  const Commune = request.body.Commune;
  const Phone = request.body.Phone;
  await db.pooldb.query(
    'UPDATE public."Agencies" SET "NameAgence"=$1, "Address"=$2, "Wilaya"=$3, "Commune"=$4, "Phone"=$5 WHERE  "Userid"=$6;',
    [NameAgence, Address, Wilaya, Commune, Phone, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Agencies modified with ID:`);
    }
  );
};

const deleteAgence = async (request, response) => {
  const id = parseInt(request.params.id);
  const NameAgence = request.body.oldData.NameAgence;
  console.log(NameAgence);
  await db.pooldb.query(
    'DELETE FROM public."Agencies" WHERE "Userid"=$1 and  "NameAgence"=$2',
    [id, NameAgence],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Agencies deleted with ID:`);
    }
  );
};

module.exports = {
  getUsers,
  deleteAgence,
  signin,
  signup,
  BedlUser,
  createAgence,
  getAgencies,
};
