# Use cases

En utilisateur, on peut avoir :

- des visiteurs lambda
- des users
- des admins
- Un superAdmin

| En tant que ... | J'ai besoin de ...                                           | Afin de ...                  | Sprint |
| --------------- | ------------------------------------------------------------ | ---------------------------- | ------ |
| visiteur        | consulter la page d'accueil                                  | vusialiser le contenu        | 1      |
| visiteur        | consulter la page a propos                                   | découvrir le concept         | 1      |
| visiteur        | consulter la page contact/FAQ                                | poser un question aux admins | 1      |
| visiteur        | consulter la page ateliers                                   | découvrir le concept         | 1      |
| visiteur        | consulter le jeux concours                                   | découvrir le concept         | 1      |
| visiteur        | m'inscrire                                                   | pouvoir se s'inscrire        | 1      |
| visiteur        | me connecter                                                 | pouvoir se connecter         | 1      |
| users           | de me déconnecter                                            | se deconnecter               | 2      |
| users           | avoir accés à la page profil                                 | afficher mon profile         | 2      |
| users           | modifier mes informations                                    |                              | 2      |
| users           | desactiver mon compte                                        |                              | 2      |
| users           | pouvoir mettre à jour ou récup son mot de passe de connexion |                              | 2      |
| users           | participer a un event                                        |                              | 2      |
| users           | ajouter des infos supp                                       |                              | 2      |
| users           | consulter et utiliser COPILOT                                |                              | 2      |
| users           | consulter ma scoreCard                                       |                              | 2      |
| Admin           | Avoir acces au backoffice (users, notes,events etc..)        |                              | 2      |
| Admin           | selectionner un event et un joueur pour ajouter les notes    |                              | 2      |
| Admin           | ajouter un event                                             |                              | 2      |
| Admin           | modifier un event                                            |                              | 2      |
| Admin           | modifier des notes                                           |                              | 2      |
| Admin           | ajouter un code promo                                        |                              | 2      |
| Admin           | modifier un code promo                                       |                              | 2      |
| Admin           | supprimer un code promo                                      |                              | 2      |
| Admin           | generer une facture                                          |                              | 2      |
| Admin           | desactiver un compte user                                    |                              | 3      |
| Admin           | ajouter un product                                           |                              | 3      |
| SuperAdmin      | donner l'accés Admin à un users                              |                              | 3      |
| SuperAdmin      | supprimer un user ou un admin                                |                              | 3      |
| SuperAdmin      | meme fonctionnalités qu'un admin                             |                              | 3      |

# Les routes de `THE LAB`

| route                  | Verbe                    | Front | Back | Description                                                 |
| ---------------------- | ------------------------ | ----- | ---- | ----------------------------------------------------------- |
| /                      | non                      | oui   | non  | consulter la page d'accueil                                 |
| /about                 | non                      | oui   | non  | acceder à la page a propos                                  |
| /contact               | non                      | oui   | non  | acceder à la page contact                                   |
| /workshop              | non                      | oui   | non  | acceder à la page d'ateliers                                |
| /competition           | non                      | oui   | non  | acceder à la page jeux concours                             |
| /signup                | non                      | oui   | non  | acceder à la page d'inscription                             |
| /users                 | post                     | non   | oui  | enregister un user                                          |
| /connexion             | non                      | oui   | non  | acceder à la page de connextion                             |
| /login                 | post                     | non   | oui  | se connecter                                                |
| /logout                | post                     | non   | oui  | se déconnecter                                              |
| /me                    | get                      | non   | oui  | recuperer mes informations de profil                        |
| /profile               | non                      | oui   | non  | acceder à la page de profile                                |
| /users                 | put                      | non   | oui  | mettre à jour les informations de user sans le mot de passe |
| /userInfos/:id         | get                      | non   | oui  | recupere les infos de user par son id                       |
| /userInfos             | post                     | non   | oui  | ajouter les informations de user                            |
| /userInfos             | put                      | non   | oui  | mettre à jour les informations de user                      |
| /users/update-password | put                      | non   | oui  | mettre à jour le mot de passe                               |
| /users/desactivate     | put                      | non   | oui  | desactiver le compte                                        |
| /users/reset-password  | put                      | non   | oui  | mot de passe oublié                                         |
| /users/reset-password  | post                     | non   | oui  | mot de passe oublié                                         |
| /reset-password        | non                      | oui   | non  | mot de passe oublié                                         |
| /evenements            | non                      | oui   | non  | acceder a la page event                                     |
| /stockEvent            | post                     | non   | oui  | s'inscrire a un event                                       |
| /payment               | post                     | non   | oui  | effectuer un paiement                                       |
| /events                | get                      | non   | oui  | get la list des events                                      |
| /copilot               | non                      | oui   | non  | acceder a la page copilot                                   |
| /notes                 | get                      | non   | oui  | get notes avec son id                                       |
| /scoreCard             | get                      | non   | oui  | get scoreCard avec son id                                   |
| /userDiscount          | post                     | non   | oui  | utiliser un code promo                                      |
| /admin/backoffice      | non                      | oui   | non  | acceder a la page backoffice admin                          |
| /users                 | get                      | non   | oui  | recuperer tous les users                                    |
| /stockEvent            | get / post/ put / delete | non   | oui  | get / create / update / delete un stockEvent                |
| /notes                 | get / post/ put / delete | non   | oui  | get / create / update / delete une note                     |
| /scoreCard             | get / post/ put / delete | non   | oui  | get / create / update / delete une scoreCard                |
| /discount              | get / post/ put / delete | non   | oui  | get / create / update / delete un discount                  |
| /product               | get / post/ put / delete | non   | oui  | get / create / update / delete un product                   |
| /privileges            | get / post/ put / delete | non   | oui  | get / create / update / delete un privilege                 |
| /order                 | get / post/ put / delete | non   | oui  | get / create / update / delete un order                     |
| /events                | get / post/ put / delete | non   | oui  | get / create / update / delete un event                     |
| /userInfos             | get                      | non   | oui  | get les informations de tous les user                       |
| /events/:id            | get                      | non   | oui  | get un event par son id                                     |
| /userDiscount          | get                      | non   | oui  | consulter les personnes qui ont utiliser un codePromo       |
| /payment               | get                      | non   | oui  | consulter tous les paiement                                 |
| /superAdmin/backoffice | non                      | oui   | non  | acceder a la page backoffice Superadmin                     |
| /authorisation/admin   | post                     | non   | oui  | passer un user au status admin ou l'inverse                 |
| /delete/users          | delete                   | oui   | non  | suprimer un user                                            |
