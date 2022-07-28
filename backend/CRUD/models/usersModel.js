module.exports = (sequelize, Sequelize) => {
    const UserData = sequelize.define("UsersData", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey: true
      },
      name: {
        type: Sequelize.STRING
      },
      VaccineName: {
        type: Sequelize.STRING
      },
      age: {
        type: Sequelize.INTEGER
      },
      address: {
        type: Sequelize.STRING
      },
      firstVaccineDate: {
        type: Sequelize.STRING
      },
      secondVaccineDate: {
        type: Sequelize.STRING
      },
    });
  
    return UserData;
  };