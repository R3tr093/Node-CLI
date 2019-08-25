// # README. Salut visiteur, j'ai suivi un article pour réaliser quelques travaux sur le CLI avec Node.

// Cette idée m'as conduit sur ce site :: https://opensource.com/article/18/7/node-js-interactive-cli

// J'ai donc suivi le tutoriel et éplucher les modules utilisés un par un afin de pouvoir créer ma propre App CLI ! 

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
 

// Maintenant que nous avons définis quelques thèmes et un raccourcis au console.log initialisons notre programme .

const init = () => {


// Ceci à juste pour but d'améliorer la lisibilité du flux du programme, ignorez ce code pour le moment il sera expliquer plus bas.  
    log(chalk`
    {white.bold !-- MODULE CHALK IGNORED ON THIS VERSION --! }
 
 `);




};


// Utilisons dans cette partie le module Inquirer :: https://www.npmjs.com/package/inquirer

// Dans les grandes lignes ce module va nous permettre d'avoir des interactions avec notre utilisateur sur le CLI,  voyons comment l'utiliser.

// !-- Attention les appels au variables comme error,warning, et basic sont celles que nous avions définis sur la séance découverte de chalk. -- !


// Lorsque vous avez intégré le module inquirer et récupérer celui au sein d'une variable require cela rend cette variable éligible pour utiliser inquirer.

/**
 
    Étape 1 : - Voyons plutôt la méthode inquirer.prompt(questions), nous utilisons notre variable inquirer afin de faire appel à la méthode prompt.
    Étape 2 : - Cette méthode prend en argument un paramètre ici nous l'avons appeler question qui est censé être un Array contenant des valeurs liées à notre question.



 **/
const askQuestions = () => {
   
    log(chalk`
     {white.bold !-- PASSAGE AU MODULE INQUIRER --! }
  
  `);


      // Voici la structure d'un array qui contient plusieurs questions à poser à l'utilisateur.

      const questions = [
      {
          name: "A", // (String) Contient le nom de la variable à utiliser pour récupérer la réponse à votre question.
          
          type: "input",  // type: (String) Le " type de question ". Par défaut vous aurez la valeur input - Les différentes valeurs possibles étant : input, number, confirm, list, rawlist, expand, checkbox, password, editor
          
          message: warning(" -- > Combien de petits cochons reste t'il dans ma ferme ? : " ) // Contient le message à retourner avec la question.
      },

      {
        type: "list",
        name: "B",
        message: basic(" Quelle est le meilleur langage de programmation : "),
        choices: [ warning(" Javascript "), error(" PHP "),basic(" Python "), error(" CSS"),],
      },

      {
        type: "list",
        name: "C",
        message: basic(" Quelle est la mascotte de Linux : "),
        choices: [ warning("Une version Cheebee de Linus Torvald."), error("Un pingouin"),basic("Un manchot"), error("Un wombat"),],
      },

      {
        type: "list",
        name: "D",
        message: basic(" Quelle est le plus vieux studio de jeux vidéos  : "),
        choices: [ warning(" Ubisoft "), error(" EA Electronic Arts "),basic(" Square Enix "), error(" Nintendo "),],
      },

      {
        type: "password",
        name: "E",
        message: basic(" Quelle est le mot de passe ?  : "),

      }
    ];


    // On return un appel à la méthode prompt de notre constante inquirer en lui passant l'argument nécéssaire, notre array question.
    return inquirer.prompt(questions);
   
  };


  // Vous pourrez naturellement traiter vos réponses avec une fonction prenons pour exemple la fonction ci-dessous.

  // Cette fonction doit prendre pour paramètres nos réponses, nous verrons ceci dans la constante run qui lance le programme.

  // L'appel de cette fonction ressemble à ceci --> const resolve = resolveAnswers(A, B , C , D, E);

  const resolveAnswers = (A,B,C,D,E) => {
   
    log(warning("Votre réponse A :: ") + A);
    log(warning("Votre réponse B :: ") + B);
    log(warning("Votre réponse C :: ") + C);
    log(warning("Votre réponse D :: ") + D);
    log(warning("Votre réponse E :: ") + E);

    let correct = 0;

    if(A === "9")
    {
        correct++;
    }
    
    if(B === basic(" Python "))
    {
        correct++;

       
    }

    if(C === basic("Un manchot"))
    {
        correct++;
    }
    if(D == error(" Nintendo "))
    {
        correct++;
    }
    if(E === "password" || E === "root")
    {
        correct++;
    }

    log();

    if(correct === 0)
    {
        log(chalk`
        {bgWhite.red.bold Mon dieu c'était si nul, que je n'ai même pas envie de te dire ton score.}
      
      `);
    }

    if(correct === 1)
    {
        log(chalk`
        {bgWhite.red.bold Ton score c'est 1, vraiment pas de quoi être fière...}
      
      `);
    }

    if(correct === 2)
    {
        log(chalk`
        {bgWhite.red.bold Votre score : 2 --> C'est pas mal.}
      
      `);
    }
    
    if(correct === 3)
    {
        log(chalk`
        {bgWhite.red.bold Votre score : 3 --> Vous avez les bases.}
      
      `);
    }

    if(correct === 4)
    {
        log(chalk`
        {bgWhite.red.bold Votre score : 4 --> Super, c'est plus que 3 et moins que 5 quand même...}
      
      `);
    }

    if(correct === 5)
    {
        log(chalk`
        {bgWhite.red.bold Votre score : 5 --> Vous êtes incollable, et en plus vous avez bon goût ! }
      
      `);
    }

    log();

    log(chalk`
    {red.bold Tu veux toi aussi créer tes propres quizz pourri ? Rien de plus simple  }{white.bold -->} {green.bold.italic https://www.npmjs.com/package/inquirer}
  
  `);

    
  };








// Nous ne nous intéresserons pas encore au phénomène d'asynchronicité, mais jettons un bref coup d'oeil tout de même.

const run = async () => {
    
    // Étape 1 : On lance la fonction init avec une présentation de Chalk.

    init(); 



    // Étape 2 : On crée un variable qui attendra le retour d'une valeur de la fonction askQuestion() , introduction à Inquirer.

    const answers = await askQuestions(); 
    
    const { A, B , C , D, E} = answers; // On crée des variables qui vont récupérer leurs valeurs dans la constante answers

    log()
    log(chalk`{bgWhite.red.bold Processus de traitements de vos réponses en cours... }`);
    log()



    // Étape 3 : On traite les réponses obtenu par le module Inquirer dans la fonction resolveAnswers()
    
    const resolve = resolveAnswers(A, B , C , D, E);
    // Faire autre chose
    
    // autreChose();

  };
  
  run();
  