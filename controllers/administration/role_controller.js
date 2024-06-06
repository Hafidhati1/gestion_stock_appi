const express= require('express')
const Roles = require('../../models/Roles')


const getRoles = async(req, res)=>{

    try {
        const data= await Roles.findAll({
            attributes:["ID_ROLE","DESCRIPTION_ROLE"],
        })
        res.status(200).json({
            message:"Visualisation faite avec succes",
            data
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).send("Erreur interne")
    }
}

const createRoles= async(req, res)=>{
    try {
        const{DESCRIPTION_ROLE}=req.body
       
        const role = await Roles.create({
            DESCRIPTION_ROLE:DESCRIPTION_ROLE
        })
      
        res.status(200).json({
            message:"Enregistrement faite avec succes",
            role
        })
     
    } catch (error) {
         console.log(error)
         res.status(500).send("Erreur interne")
    }
 }  


 const updateRoles = async(req, res) =>{
    try {
        const{DESCRIPTION_ROLE}=req.body
        const{ID_ROLE}=req.params
        await Roles.update({
        DESCRIPTION_ROLE: DESCRIPTION_ROLE
            
        },{
            where: {
                ID_ROLE:ID_ROLE
            } 
        })
        res.status(200).json({
            message:"Modification faite avec succes",
        })
    } catch (error) {
        console.log(error)
        res.status(500).send("Erreur interne")
    }
 }


 const deleteRoles = async (req, res)=>{
    try {
        const{ID_ROLE}=req.params
        const roles= await Roles.destroy({
        where: {
            ID_ROLE:ID_ROLE
        }
    })
    res.status(200).json({
        message:("Suppression faite avec succes"),
        roles
    })   
    } catch (error) {
        console.log(error)
        res.status(500).send("Erreur interne")
    }
 }

module.exports={
    getRoles,
    createRoles,
    updateRoles,
    deleteRoles
}