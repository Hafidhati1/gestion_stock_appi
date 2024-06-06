const express= require('express')
const Clients = require('../../models/client/Clients')


const getClients = async(req, res)=>{

    try {

        const data= await Clients.findAll({
            attributes:["ID_CLIENT","NOM_CLIENT","PRENOM_CLIENT","ADDRESSE_CLIENT","TEL_CLIENT","EMAIL_CLIENT"],
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

const createClients= async(req, res)=>{

    try {


        const{NOM_CLIENT,PRENOM_CLIENT,ADDRESSE_CLIENT,TEL_CLIENT,EMAIL_CLIENT}=req.body
       
        const client = await Clients.create({
            NOM_CLIENT:NOM_CLIENT,
            PRENOM_CLIENT:PRENOM_CLIENT,
            ADDRESSE_CLIENT:ADDRESSE_CLIENT,
            TEL_CLIENT:TEL_CLIENT,
            EMAIL_CLIENT:EMAIL_CLIENT
             
        })
      
        res.status(200).json({
            message:"Enregistrement faite avec succes",
            client
        })
     
    } catch (error) {
         console.log(error)
         res.status(500).send("Erreur interne")
    }

 }  


 const updateClients = async(req, res) =>{
    try {

        const{NOM_CLIENT,PRENOM_CLIENT,ADDRESSE_CLIENT,TEL_CLIENT,EMAIL_CLIENT}=req.body
        const{ID_CLIENT}=req.params
     await Clients.update({
            NOM_CLIENT:NOM_CLIENT,
            PRENOM_CLIENT:PRENOM_CLIENT,
            ADDRESSE_CLIENT:ADDRESSE_CLIENT,
            TEL_CLIENT:TEL_CLIENT,
            EMAIL_CLIENT:EMAIL_CLIENT
            
        },{
            where: {
                ID_CLIENT: ID_CLIENT
            } 
        })

        res.status(200).json({
            message:"Modification faite avec succes",
            // utilisateur
        })

    } catch (error) {
        
        console.log(error)
        res.status(500).send("Erreur interne")

    }
 }


 const deleteClients = async (req, res)=>{

    try {

    const{ID_CLIENT}=req.params
    const clients= await Clients.destroy({
        where: {
            ID_CLIENT: ID_CLIENT
        }
    })

    res.status(200).json({
        message:("Suppression faite avec succes"),
        clients
    })
        
    } catch (error) {
        console.log(error)
        res.status(500).send("Erreur interne")

    }

 }


 const findClient = async (req, res) => {
    try {
              const { ID_CLIENT } = req.params
              const client = await Clients.findOne({
                
                 where: {
                    ID_CLIENT
                        },
                     
              })
              res.status(200).json({
                message:("Affichage faite avec succes"),
                client
            })
           
    } catch (error) {
              console.log(error)
              res.status(500).send("Erreur interne")
    }
}


module.exports={
    getClients,
    createClients,
    updateClients,
    deleteClients,
    findClient
}