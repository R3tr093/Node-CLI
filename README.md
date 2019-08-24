
<p align="center">

<img src="header.png"><hr>

</p>


##  :grey_question: About


<p> Une petite séance découverte sur mon temps libre, nous allons explorer Node et surtotu tenter de créer une application exploitable depuis le CLI de notre système.</p>

<p> J'ai donc parcouru plusieurs sites afin de trouver un tutoriel qui me plaisait ( et surtout que je pouvais comprendre  :confounded: ! ), ce tutoriel nous guide sur la création d'une petite application permettant de créer des fichiers depuis votre CLI, ce n'est pas le truc le plus révolutionnaire au monde, mais on y aborde pas mal de modules très intéressant que nous dépeceront ensuite tous ensemble dans la joie et la bonne humeur  :smiling_imp: </p>


<p> Vous trouverez toutes les informations sur le coté pédagogique que j'ai put assimiler dans les commentaires de mes lignes de codes. </p>

<p> Vous pourrez notamment vous rendre sur les 4 branches suivantes qui aborde chacune les modules à part avec les commandes suivantes : </p> 

<p> :one:<b>git checkout chalk </b></p> 
<p> :two:<b>git checkout inquire</b></p> 
<p> :three:<b>git checkout figlet </b></p> 
<p> :four:<b>git checkout shell </b></p> 

<p> :warning: <em> Ces branches ne seront accessibles que à partir de la version 0.1.0 du projet </em></p>

<p> Pour ceux qui n'aurais pas installer Node sur leurs systèmes je vous fais un très sobre tutoriel d'installation pour sa dernière version un peu plus bas. </p>

##  :cd: Installation de Node

<p> Pour l'installation de Node.js j'ai suivi le guide de <a href="https://tecadmin.net/install-latest-nodejs-npm-on-ubuntu/" target="_blank"> <i>TecAdmin</i></a>, on les remercies car ce sont des gens biens  :raised_hands:</p>

<p>:arrow_right: <b>  sudo apt-get install curl </b><em><br>( Déployement du PPA )</em></p>

<p>:arrow_right: <b> curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash - </b><em><br>( Déployement du PPA  )</em></p>

<p>:arrow_right: <b> sudo apt-get install nodejs </b><em><br>( Installation de Node.js )</em></p>

<p>:arrow_right: <b> node -v  </b><em><br>( Vérification de la version de Node.js )</em></p>

<p>:arrow_right: <b> npm -v   </b><em><br>( Vérification de la version de npm )</em></p>

<p>  :star2: À ce stade vous posséder tout l'environnement nécessaires pour déployer le projet félicitation, vraiment. </p>


##  :cd: Installation du repository

<p> Pour avoir une base pour aborder la création d'application Node sur le CLI  j'ai suivi le guide de <a href="https://opensource.com/article/18/7/node-js-interactive-cli" target="_blank"> <i>openSource</i></a>, on les remercies car ce sont des gens biens  :raised_hands:</p>


<p> Télécharger le repository, ensuite placez vous avec votre terminal dans la racine du projet Node-CLI. </p>

<p>:arrow_right: <b> npm init </b><em><br>( Crée une instance npm pour le projet.)</em></p>

<p> Il vous sera alors demander si vous désirez définir un configuration pour votre package.json, si vous le désirez vous pouvez entrez votre nom d'auteur, des dépendances, ou ce qui vous passe par la tête. Dans les faits vous pouvez appuyez sur enter jusqu'à ce qu'il initialise le repository car nous n'avons besoin d'aucunes particularités dans le cadre de projet? </p>

<p>:arrow_right: <b> ~ npm install --save chalk figlet inquirer shelljs </b><em><br>( Installe les modules que nous allons explorer.)</em></p>

<p> Et voilà vous êtes bon , lancez depuis la racine de votre projet la commande :: <b> node index.js </b> </p>

<p> N'hésiter pas à lire les commentaires car c'est vraiment là que ce trouve tout l'intérêt du parcours, et à jouer un peu avec le code afin vous mettre dans le bain. </p>

<p> :hand: Si vous avez trouver une erreur, ou mieux encore que vous avez un retour positif à me faire, n'hésiter pas à m'envoyer un mail, je me sens seul en ce moment ;) </p>