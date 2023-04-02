module.exports = (sequelize, DataTypes)=>{
    //Definimos cómo va a llamar sequelize a la tabla.
    let alias = "Product"
    let cols = {
        id_products:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull:false,
        },
        name:{
            type: DataTypes.STRING ,
            allowNull:false
        },
        adress:{
            type:DataTypes.STRING,
            allowNull:false, 
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
            unique:true
        },
        password:{
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.JSON
        },
        updatedAt: {
            type: DataTypes.JSON
        },
        dni:{
            type: DataTypes.STRING,
            allowNull: false
        },
        phone:{
            type: DataTypes.STRING,
            allowNull: false
        }
    }
    let config= {
      tableName:"products" ,
       timestamp: false 
   }
 
    let Product= sequelize.define(alias, cols, config);
    
   /* Product.associate=function(models){
                                    //Utilizo el alias que difinimos en el primer objeto del modelo.
 
                                    
        Product.belongsTo(models.Category, 
            { foreignKey: 'id_category' 
        });
        Product.belongsTo(models.Img, { foreignKey: 'id_img' });
    }
    */
    
    return Product;
}