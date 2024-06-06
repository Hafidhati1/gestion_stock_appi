const express= require('express')
const Produits = require('../../models/produit/Produits')
const Categories = require('../../models/categorie/Categories')


const getProduits = async(req, res)=>{

    try {

        const data= await Produits.findAll({
            attributes:["ID_PRODUIT","NOM_PRODUIT","DESCR_PRODUIT","PRIX","QUANTITE"],
            include: {
                model: Categories,
                as: 'categories',
                attributes:["DESCR_CATEGORIE"]
           }
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

const createProduits= async(req, res)=>{

    try {

        const{NOM_PRODUIT,DESCR_PRODUIT,PRIX,QUANTITE,ID_CATEGORIE}=req.body
       
        const produit = await Produits.create({
            NOM_PRODUIT:NOM_PRODUIT,
            DESCR_PRODUIT:DESCR_PRODUIT,
            PRIX:PRIX,
            QUANTITE:QUANTITE,
            ID_CATEGORIE :ID_CATEGORIE 
        })
      
        res.status(200).json({
            message:"Enregistrement faite avec succes",
            produit
        })
     
    } catch (error) {
         console.log(error)
         res.status(500).send("Erreur interne")
    }

 }  


 const updateProduits = async(req, res) =>{
    try {

        const{NOM_PRODUIT,DESCR_PRODUIT,PRIX,QUANTITE,ID_CATEGORIE}=req.body
        const{ID_PRODUIT}=req.params
     await Produits.update({
        NOM_PRODUIT:NOM_PRODUIT,
            DESCR_PRODUIT:DESCR_PRODUIT,
            PRIX:PRIX,
            QUANTITE:QUANTITE,
            ID_CATEGORIE :ID_CATEGORIE
            
        },{
            where: {
                ID_PRODUIT: ID_PRODUIT
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


 const deleteProduits = async (req, res)=>{

    try {

    const{ID_PRODUIT}=req.params
    const produit= await Produits.destroy({
        where: {
            ID_PRODUIT: ID_PRODUIT
        }
    })

    res.status(200).json({
        message:("Suppression faite avec succes"),
        produit
    })
        
    } catch (error) {
        console.log(error)
        res.status(500).send("Erreur interne")

    }

 }

 const findProduit = async (req, res) => {
    try {
              const { ID_PRODUIT } = req.params
              const produit = await Produits.findOne({
                attributes:["ID_PRODUIT","NOM_PRODUIT","DESCR_PRODUIT","PRIX","QUANTITE"],
                include: {
                    model: Categories,
                    as: 'categories',
                    attributes:["ID_CATEGORIE","DESCR_CATEGORIE"]
               },
                 where: {
                            ID_PRODUIT
                        },
                     
              })
              res.status(200).json({
                message:("Affichage faite avec succes"),
                produit
            })
           
    } catch (error) {
              console.log(error)
              res.status(500).send("Erreur interne")
    }
}


module.exports={
    getProduits,
    createProduits,
    updateProduits,
    deleteProduits,
    findProduit
}