# **_Problème rencontré :_**

**Titre : Problème de déconnexion pendant l'utilisation de l'application**

composant : tout les composants lors de la connexion

Description : Pendant l'utilisation de la application quand le token expire on est immediatement déconnecté de l'application et on est dans l'obligation de se reconnecter pour continuer à utiliser l'application.

**Titre : Problème de css sur la pages APP à cause du Carroussel**

composant : APP || All Home/Performance2

Description : Le carroussel utilise la bibliothèque de react-slick qui possède des proprièté css déjà exisante qui fait que le composant n'est pas bon en css / les flèches ne sont pas centré par rapport au image.

**Titre : Problème de css sur la pages à propos**

composant : About

Description : Certain éléments sort de l'écran l'une des raisons est due à data-aos="fade-left"data-aos-duration="3000" lorsque il n'est pas apparue.

**Titre : Problème de css sur la pages App et jeu concours**

composant : Workshop et APP

Description : Un éléments sort de l'écran la raison est due à data-aos="fade-left"data-aos-duration="3000" lorsque que l'élément n'est pas apparue.

**Titre : Problème de css sur la pages jeu concours**

composant : Workshop

Description : Un éléments sort de l'écran la raison est due à data-aos="fade-left"data-aos-duration="3000" lorsque que l'élément n'est pas apparue.

# **_Suggestion :_**

**Titre : Utilisation de la route ScoreCard**

composant : DashBoard/AddScoreCard

Description : Après avoir regarder les notes de l'utilisateur, récupérer l'ID des notes de l'utilisateur et d'ajouter une photos du user qui sera pris lors de l'événement afin de l'ajouter dans le back et qui pourra être réutilisé pour les ScoreCards.

**Titre : Mettre des alertes après un PUT || POST || DELETE**

composant : Tous les composants utilisant un PUT || POST || DELETE.

Description : Simplifier l'utilisation du site en alertant sois le user soit l'admin que son actions a été effectuer avec succès.

**Titre : Après un PUT mise à jour de la page**

composant : les composants qui utilise un PUT.

Description : Ne pas avoir besoin de réactualisé la page à la fin de l'update.

**Titre : POST du User Info.**

composant : Copilot/AddProfileCopilotModal.

Description : Dans le POST du User Info ne pas rendre obligatoire les champs non obligatoire émis dans le back.

**Titre : Affichage du TopMain**

composant : TopMain, APP, Workshop, Signup et Login .

Description : Pouvoir afficher le top main dans App et workshop et que lorsque l'on remplis les champs de signup ou login que le comportement du topMain soit comme celui de contact.

**Titre : Donnée des missions**

composant : CopilotMissionsComponents.

Description : Pouvoir stocké dans le back sous ce format les informations :
id: 1,
missi: "Réalise 2 passes décisives durant le même match." (Description de la missions),
status: "Non commencé" (status qui serait en enum(non commencee, en cours terminé)),
difficulty: 1 (difficulté qui serait en enum(1,2,3)), attribut(enum(tir, passe, dégagement etc.)),.

**Titre : Donnée des entrainements**

composant : CopilotTrainComponent.

Description : Pouvoir stocké dans le back les vidéos ou alors mettre les vidéos sur youtube et après importé les liens.

**Titre : Title TOPMAIN version mobile**

composant : tous où on ajoute TOPMAIN.

Description : le title n'est pas centré.

**Titre : Input date de naissance page inscription**

composant : .

Description : le input ne s'affiche pas correctement.

