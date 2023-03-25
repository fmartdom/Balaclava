module.exports = (sequelize, DataTypes)=>{
    //Definimos cómo va a llamar sequelize a la tabla.
    let alias = "Product"
    let cols = {
        id_category:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
        },
        name:{
            type: DataTypes.STRING ,
            allowNull:false
        }
        }
    
    let config= {
      tableName:"category" ,
       timestamp: false 
   }
 
    let Category= sequelize.define(alias, cols, config);
    
    Category.associate=function(models){
        Category.hasMany(Product, { foreignKey: 'id_category' })
    }

    return Category;
}