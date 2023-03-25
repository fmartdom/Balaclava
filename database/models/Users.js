module.exports = (sequelize, DataTypes)=>{
    //Definimos cómo va a llamar sequelize a la tabla.
    let alias = "User"
    let cols = {
        id:{
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
      tableName:"user" ,
       timestamp: false 
   }
 
    let User= sequelize.define(alias, cols, config);
    
    User.associate=function(models){
                                    //Utilizo el alias que difinimos en el primer objeto del modelo.
        User.belongsToMany(models.Product,{
            as:"user_product",
            through:"purchase",
            foreingKey:"userId",
            otherKey:"productId"
        })  
    }

    return User;
}
