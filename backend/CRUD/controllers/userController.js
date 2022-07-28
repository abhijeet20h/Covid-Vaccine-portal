const db = require("../models");
const userDataa = db.userdata;
const Op = db.Sequelize.Op;
            
          
// Create and Save a new userData
exports.create = (req, res) => {
  // Validate request
  if (!req.body.name) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  }

  // Create a userData
  const userData = {
    name: req.body.name,
    age: req.body.age,  
    VaccineName:req.body.VaccineName,
    firstVaccineDate:req.body.firstVaccineDate,
    secondVaccineDate:req.body.secondVaccineDate,
    address: req.body.address
  };

  // Save userData in the database
  userDataa.create(userData)
    .then(data => {
      res.status(201).send({});
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the userData."
      });
    });
};

// Retrieve all userDatas from the database.
exports.findAll = (req, res) => {
  const name = req.query.name;
  var condition = name ? { name: { [Op.like]: `%${name}%` } } : null;

  userDataa.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving userDatas."
      });
    });
};

// Find a single userData with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  userDataa.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find userData with id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving userData with id=" + id
      });
    });
};

// Update a userData by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;


  userDataa.update(req.body, {
    where: { id: id }
  })
    .then(num => {  
      if (num == 1) {
        res.send({
          message: "userData was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update userData with id=${id}. Maybe userData was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating userData with id=" + id 
      });
    });
};
 
// Delete a userData with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  userDataa.destroy({
    where: { id: id }
  })       
    .then(num => {
      if (num == 1) {
        res.send({
          message: "userData was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete userData with id=${id}. Maybe userData was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete userData with id=" + id
      });
    });
};

// Delete all userDatas from the database.
exports.deleteAll = (req, res) => {
  userDataa.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} userDatas were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all userDatas."
      });
    });
};

    // find all published userData
    exports.findAllPublished = (req, res) => {
      userDataa.findAll({ where: { address , VaccineName } })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving userDatas."
          });
        });
    };