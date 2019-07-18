// STARTER CODE
// ==============================================================

// module.exports = function(sequelize, DataTypes) {
//   var Example = sequelize.define("Example", {
//     text: DataTypes.STRING,
//     description: DataTypes.TEXT
//   });
//   return Example;
// };

// INITIAL CODE / DATABASE CONFIG
// ==============================================================

module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define("Post", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
      len: [1]
      }
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    },
    rank: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '0'
    },

    // sequelize adds created_at by default

    // created_at: {
    //   type: 'TIMESTAMP',
    //   defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    //   allowNull: false 
    // }
    
  });

  Post.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Post.belongsTo(models.Author, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Post;
};
