const express= require('express')
const Categories = require('../../models/categorie/Categories')


const getCategories = async(req, res)=>{

    try {

        const data= await Categories.findAll({
            attributes:["ID_CATEGORIE","DESCR_CATEGORIE"],
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

const createCategories= async(req, res)=>{

    try {


        const{DESCR_CATEGORIE}=req.body
       
        const categorie = await Categories.create({
            DESCR_CATEGORIE:DESCR_CATEGORIE
             
        })
      
        res.status(200).json({
            message:"Enregistrement faite avec succes",
            categorie
        })
     
    } catch (error) {
         console.log(error)
         res.status(500).send("Erreur interne")
    }

 }  


 const updateCategories = async(req, res) =>{
    try {

        const{DESCR_CATEGORIE}=req.body
        const{ID_CATEGORIE}=req.params
     await Categories.update({
        DESCR_CATEGORIE: DESCR_CATEGORIE
            
        },{
            where: {
                ID_CATEGORIE: ID_CATEGORIE
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


 const deleteCategories = async (req, res)=>{

    try {

    const{ID_CATEGORIE}=req.params
    const categories= await Categories.destroy({
        where: {
            ID_CATEGORIE: ID_CATEGORIE
        }
    })

    res.status(200).json({
        message:("Suppression faite avec succes"),
        categories
    })
        
    } catch (error) {
        console.log(error)
        res.status(500).send("Erreur interne")

    }

 }


 const findCategorie = async (req, res) => {
    try {
              const { ID_CATEGORIE } = req.params
              const categorie = await Categories.findOne({
                
                 where: {
                    ID_CATEGORIE
                        },
                     
              })
              res.status(200).json({
                message:("Affichage faite avec succes"),
                categorie
            })
           
    } catch (error) {
              console.log(error)
              res.status(500).send("Erreur interne")
    }
}


module.exports={
    getCategories,
    createCategories,
    updateCategories,
    deleteCategories,
    findCategorie
}