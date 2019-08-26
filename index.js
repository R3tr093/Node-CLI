// # README. Salut visiteur, j'ai suivi un article pour réaliser quelques travaux sur le CLI avec Node.

// Cette idée m'as conduit sur ce site :: https://opensource.com/article/18/7/node-js-interactive-cli

// J'ai donc suivi le tutoriel et éplucher les modules utilisés un par un afin de pouvoir créer ma propre App CLI ! 

// Le code ci-dessous parle de chalk, un module css pour le CLI en gros.


// On récupère quelques modules qui vont nous permettre de manipuler le CLI.

const inquirer = require("inquirer");
const chalk = require("chalk");
const figlet = require("figlet");
const shell = require("shelljs");


// Quelques tips à propos de chalk.

const log = console.log; // On peut maintenant utiliser cette variable comme un print.



// Vous pouvez définir vos variables comme ceci afin de créez des thèmes personnalisez.

const error = chalk.bold.red;
const warning = chalk.keyword('orange');
const basic = chalk.hex('#DEADED').bold;
var styleArray = [error,warning,basic];
 

// Maintenant que nous avons définis quelques thèmes et un raccourcis au console.log initialisons notre  programme.




// !-- Cette partie traite du module Figlet, il permet de réaliser un petit Art Work en se basant sur une chaîne de caractères -- !





const buildFiglet = () => {
  

  log(chalk`
  {white.bold !-- PASSAGE AU MODULE Figlet --! }

`);


  // Exemple du Hello World

  // Étape 1 : Appeler notre module figlet sans appeler de fonction paraticulière dans celui-ci afin de voir l'affichage par défaut de Figlet.
  figlet('Hello World!!', function(err, data) {
   
     if (err) {
     
       console.log('Something went wrong...');
      
       console.dir(err);
      
       return;
    
      }
    
      console.log(data)
  });

  // Le module Figlet comprend 5 fonctions distinctes, nous allons voir la fonction text , et textAsync je vous laisse chercher un peu pour les autres.

  // À partir de ce stade vous remarquerez aisément la présence d'une fonction function(err, data) qui permet de traiter une erreur si tel est le cas,
  
  // ou de retourner sont résultat (data) si tout à fonctionner comme prévu.

  // Exemple du Spokky ghost.

  figlet.text("Spooky ghost !", {
    font: 'Ghost',
    horizontalLayout: 'fitted', // Valeurs possibles :: --> "default", full", "fitted", "controlled smushing", and "universal smushing". 
    verticalLayout: 'fitted' // Valeurs possibles :: --> "default", full", "fitted", "controlled smushing", and "universal smushing". 
    }, function(err, data) {
    
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    
    console.log(data);
});

// Nous avons appeler la fonction text du module Figlet et lui avons passé en paramètres le texte Spooky ghost ! et un Array contenant un jeu de propriétés - valeurs


// Les fonts disponibles

figlet.text(" BEAR text font !", {
  font: 'Bear',
  horizontalLayout: 'fitted', // Valeurs possibles :: --> "default", full", "fitted", "controlled smushing", and "universal smushing". 
  verticalLayout: 'fitted' // Valeurs possibles :: --> "default", full", "fitted", "controlled smushing", and "universal smushing". 
  }, function(err, data) {
  
  if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
  
    // Notez qu'ont peut toujours appelez nos thèmes chalk sur nos art works figlet !
    console.log(warning(data));
});


figlet.fonts(function(err, fonts) {
    if (err) {
        console.log('something went wrong...');
        console.dir(err);
        return;
    }

    log(chalk`
    {white.bold !-- Affichage des fonts Figlet --! }
  
  `);

    console.dir(fonts);
});

// Si par hasard vous ne trouvez pas votre bonheur dans toutes ces polices, vous pouvez implémenter  une police depuis votre système avec le code suivant.

/** const fs = require('fs');
const path = require('path');
 
let data = fs.readFileSync(path.join(__dirname, 'myfont.flf'), 'utf8');
figlet.parseFont('myfont', data);
console.log(figlet.textSync('myfont!', 'myfont'));


**/


// Et un dernier exemple pour la forme, parce qu'on est motivé !

figlet.text(" Figlet Rock's !", {
  font: 'Doom',
  horizontalLayout: 'fitted', // Valeurs possibles :: --> "default", full", "fitted", "controlled smushing", and "universal smushing". 
  verticalLayout: 'fitted' // Valeurs possibles :: --> "default", full", "fitted", "controlled smushing", and "universal smushing". 
  }, function(err, data) {
  
  if (err) {
      console.log('Something went wrong...');
      console.dir(err);
      return;
    }
  
    console.log(basic(data));
    
});




}




// Nous ne nous intéresserons pas encore au phénomène d'asynchronicité, mais jettons un bref coup d'oeil tout de même.

const run = async () => {
    
    // Étape 1 : On lance la fonction init avec une présentation de Chalk.

  



    // Étape 2 : On crée un variable qui attendra le retour d'une valeur de la fonction askQuestion() , introduction à Inquirer.

    //const answers = await askQuestions(); 
    
    //const { A, B , C , D, E} = answers; // On crée des variables qui vont récupérer leurs valeurs dans la constante answers

    //log()
    //log(chalk`{bgWhite.red.bold Processus de traitements de vos réponses en cours... }`);
    //log()



    // Étape 3 : On traite les réponses obtenu par le module Inquirer dans la fonction resolveAnswers()
    
    //const resolve = resolveAnswers(A, B , C , D, E);
   
   
    // Étape 4 : Réalisez une signature avec Figlet

    log(chalk`{white.bold !-- Ignore le processus Chalk Introduction -- ! }`);
    log(chalk`{white.bold !-- Ignore le processus Inquirer Introduction -- ! }`);
    log(chalk`{white.bold !-- Lancement du processus Figlet introduction -- ! }`);
    buildFiglet();
   
   
    // Faire autre chose
    
    // autreChose();

  };
  
  run();
  