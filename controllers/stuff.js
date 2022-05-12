//Contenir la logique métier 

exports.getThing = (req, res) => {
    res.json([
        {titre: "Votre requete a été bien reçue",
         note: "10"   
        },
        {titre: "Votre requete a été bien reçue2",
         note: "11"   
        }
    ]);
    
}