module.exports = (sequelize, DataTypes) => {
    return sequelize.define('book', {
      nameOfBook: DataTypes.STRING,
      author: DataTypes.STRING,
      genre: DataTypes.ENUM( 'Fiction', 'Nonfiction', 'Sci-Fi', 'Horror', 'Mystery', 'Erotica', 'Self Help', 'Psychology', 'Cooking'),
      pubYear: DataTypes.INTEGER,
      rating: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        validate: {
          min: 1,
          max: 5
        }
      }
    });
  };