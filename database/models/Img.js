module.exports = (sequelize, DataTypes)=>{
    //Definimos cómo va a llamar sequelize a la tabla.
    let alias = "Img"
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
        }
    }
    let config= {
      tableName:"img" ,
       timestamp: false 
   }
 
    let Img = sequelize.define(alias, cols, config);
    
    Img.associate=function(models){
                                    //Utilizo el alias que difinimos en el primer objeto del modelo.
        Img.associate=function(models){
        Category.hasMany(models.Product, 
            { foreignKey: 'id_img' })
                                    }
    }

    return Img;
}