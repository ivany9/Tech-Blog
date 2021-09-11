const User = require('./User');
const Comments = require('./Comments');
const Article = require('./Article');

//create associations


Article.hasMany(Comments, {
  foreignKey: 'post_id'
});
Article.belongsTo(User, {
    foreignKey: 'user_id',
});

Comments.belongsTo(User, {
    foreignKey: 'user_id'
  });
  
Comments.belongsTo(Article, {
    foreignKey: 'post_id'
});
  
User.hasMany(Comments, {
    foreignKey: 'user_id'
});

User.hasMany(Article, {
  foreignKey: 'user_id'
});
  


module.exports = {User, Article, Comments};