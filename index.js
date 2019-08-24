// # README. Salut visiteur, j'ai suivi un article pour réaliser quelques travaux sur le CLI avec Node.

// Cette idée m'as conduit sur ce site :: https://opensource.com/article/18/7/node-js-interactive-cli

// J'ai donc suivi le tutoriel et éplucher les modules utilisés un par un afin de pouvoir créer ma propre App CLI ! 

// Ce fichier parle de chalk, un module css pour le CLI en gros.


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
 
// Vous pouvez appeler vos " thèmes " dans un log comme ceci.

log(error('Out from init function - Error ! '));
log(warning('Out from init function - Warning !'));
log(basic("Out from init function - Basic text font style."));



// Notons aussi la possibilité d'une définition d'un backgroundColor, color, font-style :: bgWhite.green.bold 

// Et en bonus track, un example d'interpolation de variables dans chalk ! Wouah j'ai la forme aujourd'hui !!!

const pigs = 3;
const pigscount = pigs => pigs * 3;
 
log(chalk`
  Il y a  {bold 3 petits cochons} dans ma ferme.
  Je les multiplie par  {bold ${pigs}}, et turlututu chapeau pointu il y a  {bgWhite.green.bold ${pigscount(pigs)} petits cochons dans ma ferme.}.
`);


// On peut donc exécuter un petit script js dans ce style.

var i = 0;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

var random = getRandomInt(0,2);

var powerGreen = 0;

var powerBlue = 0;

var powerRed = 0;



while (i < 25)
{

    random = getRandomInt(0,2);

    log()

    if (random === 0)
    {
        powerRed++;
        log(styleArray[random](" Badaboom Power Rangers Rouge ! "));
    }

    if (random === 1)
    {
        message = " Badaboom Power Rangers Vert ! ";
        powerGreen++;
        log(styleArray[random](" Badaboom Power Rangers Vert ! "));
    }

    if (random === 2)
    {
        message = " Badaboom Power Rangers Bleu ! ";
        powerBlue++;
        log(styleArray[random](" Badaboom Power Rangers Bleu ! "));
    }
    
    i++;
}

    
    log()
    
    if(powerBlue > powerGreen && powerBlue > powerRed)
    {
        log(chalk`{bgBlue.white.bold.underline Power Rangers bleu remporte la partie !.}.`);

    }

    if(powerRed > powerGreen && powerRed > powerBlue)
    {
        log(chalk`{bgRed.white.bold.underline Power Rangers Rouge remporte la partie !.}.`);
    }

    else
    {
        log(chalk`{bgGreen.white.bold.underline Power Rangers Vert remporte la partie !.}.`);
    }

    log()




// Nous ne nous intéresserons pas encore au phénomène d'asynchronicité, mais jettons un bref coup d'oeil tout de même.



const init = () => {

    log(chalk`
  {red.bold Tu veux toi aussi faire du grand art avec Chalk ? Rien de plus simple  }{white.bold -->} {green.bold.italic https://www.npmjs.com/package/chalk}

`);

};


const run = async () => {
    
    // Initialiser le programme avec un petit exemple sur chalk
    
    init();

    // Faire autre chose
    
    // autreChose();

  };
  
  run();
  