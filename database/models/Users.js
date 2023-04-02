module.exports = (sequelize, DataTypes)=>{
    //Definimos cómo va a llamar sequelize a la tabla.
    let alias = "Users"
    let cols = {
        id_users:{
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
      tableName:"users" ,
       timestamp: false 
   }
 
    let Users= sequelize.define(alias, cols, config);
    
    return Users;
}
