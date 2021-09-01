module.exports = (sequelize, Sequelize) => {
    const Proj = sequelize.define("Projeto", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Proj;
  };