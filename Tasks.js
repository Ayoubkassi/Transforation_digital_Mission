tasksEmployes = [
  {
    employe : "Opérateur 3",
    tasks : {
      "Lit le planning travaux" : {
        activite_associe : [ "chercher le fichier word planing traveaux",
                             "ouvrir le fichier word de planing traveaux qui ont ete redige par le chef de quart",
                             "lire le fichier word planing traveaux"
                           ],
        donnes_pre_requis : [ "planning traveaux" ],
        donnes_modifies : []

      },

      "Remplit la feuille de tournee" : {
        activite_associe : [ "chercher le fichier feuille de tournée" ,
                             "ouvrir le fichier feuille de tournée",
                             "entrer des nouvelle valeur dans le fichier feuille de tournée"
                           ],
        donnes_pre_requis : [ "feuille de tournée" ],
        donnes_modifies : [ "feuille de tournée" ]
      },

      "Lit la mise à disposition" : {
        activite_associe : [ "chercher le fichier mise à disposition",
                             "ouvrir le fichier mise à disposition",
                             "lire le fichier mise à disposition"
        ],
        donnes_pre_requis : ["la mise à disposition"],
        donnes_modifies : []
      },

      "Lit les consignes" : {
        activite_associe : [ "chercher le fichier consignes",
                             "ouvrir le ficher consignes",
                             "ouvrir le ficher consignes"
        ],
        donnes_pre_requis : ["les consignes"],
        donnes_modifies : []
      },

      "Lit le plan consignation" : {
        activite_associe : [ "chercher le fichier plan de consignation",
                             "ouvrir le fichier plan de consignation",
                             "lire le fichier plan de consignation"
        ],
        donnes_pre_requis : ["plan consignation"],
        donnes_modifies : []
      }

    }
  }
]


console.log(tasksEmployes[0].tasks)
