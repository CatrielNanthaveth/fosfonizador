require('dotenv').config();
const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_KEY);

const fosf = (message) => {

    if (/[oO]/.test(message[message.length - 1])) {
        message[message.length - 1] === 'o'
        ? message = message + 'sf'
        : message = message + 'SF'
    }
    else if (/[aeiuAEIU]/.test(message[message.length - 1])) {
        /[aeiu]/.test(message[message.length - 1]) 
        ? message = message + 'fosf'
        : message = message + 'FOSF'
    }
    else if (/[a-zA-Z]/.test(message[message.length - 1])){
        /[a-z]/.test(message[message.length - 1]) 
        ? message = message + 'osf'
        : message = message + 'OSF'
    }
    else {
        message = 'Argumento imposible de fosfonizar.'
    }

    return message;
}

bot.start((ctx) => {
    ctx.reply('¡Bienvenido al Fosfonizador! \n\nCon este bot podrás fosfonizar tus palabras a la perfección, siguiendo las mejores convenciones gramaticales para poder hacer honor al nombre del gran Phosphorus.');
});

bot.help((ctx) => {
    ctx.reply('Para usar el bot simplemente usa el comando /fosfit [PALABRA] o /fosfonizar [PALABRA].')
})

bot.command(['fosfit', 'fosfonizar'], (ctx) => {
    try {
        const messageText = ctx.message.text;

        if (!messageText) {
            throw new Error('El mensaje está vacío');
        }

        console.log(messageText)
        const response = fosf(messageText.split(' ')[1]);
        ctx.reply(response);

    } catch (error) {
        console.error(error);
        ctx.reply('Hubo un error al procesar el comando.');
    }
});


bot.launch();