const Discord = require("discord.js");
const client = new Discord.Client();
let prefix = ('Suzu')
client.login("NjU0MzI0OTU1NjA5MDM4ODUw.XfD7bQ.hE2YeCmkSvdD7po3jJG_dZz9tvo");
const fs = require('fs');

client.on('ready', () => {
     console.log("Bot Connecté avec succès!")
     client.user.setStatus("dnd")
     client.user.setActivity("Penser à sa Suzu😍")
})

     

client.commands = new Discord.Collection();

client.on('message', msg => {
    if (msg.content === 'Suzuinvite') {
     msg.channel.send('\n**__Voici le serveur de mon créateur:https://discord.gg/UQqwqud \nEt voici mon lien:https://discordapp.com/oauth2/authorize?client_id=654324955609038850&scope=bot&permissions=225934425__**');
   }
  });
client.on('message', msg => {
    if (msg.content === 'tg') {
      msg.reply('Ferme la toi même sale batard.');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Tg') {
      msg.reply('Ferme la toi même sale batard.');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'TG') {
      msg.reply('Ferme la toi même sale batard.');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Ta gueule.') {
      msg.reply('Mais va te faire foutre enculé.');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Ntm') {
      msg.reply('**Mais tu vas te calmer enculé!**');
    }
  });
 client.on('message', msg => {
    if (msg.content === 'Céline') {
      msg.reply('**La touche pas gros fils de pute,attends que Zowtopy se ramène tu vas chialer sale enculé.**');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'ptn') {
      msg.reply('Apprends à écrire sale sous-merde.');
    }
  });
  client.on('message', msg => {
    if (msg.content === '^^hgif') {
      msg.reply('Saaaale');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Suzu') {
      msg.reply('**La touche pas gros fils de pute,attends que Zowtopy se ramène tu vas chialer sale enculé.**');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Mh') {
      msg.reply('Mais ferme ta gueule bouffon.');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Mmmmh') {
      msg.reply('Mais ferme ta gueule bouffon.');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Mmmh') {
      msg.reply('Mais ferme ta gueule bouffon.');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'M') {
      msg.reply('La pute?');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'm') {
      msg.reply('La pute?');
    }
  });
  client.on('message', msg => {
    if (msg.content === '.M.') {
      msg.reply('La pute de luxe là?');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Satsouki') {
      msg.reply('**Le gros enculé bah qu il aille baiser ses ancètres ce fils de pute.**');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Souzouya') {
      msg.reply('**Elle est a Zowtopy,la touche pas sale connard.**');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Bonjour') {
      msg.reply('Salut mon loulou👋');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Coucou') {
      msg.reply('Coucou twa');
    }
  }); 
  client.on('message', msg => {
    if (msg.content === 'Cc') {
      msg.reply(`Coucou p'tit loup👋`);
    }
  }); 
  client.on('message', msg => {
    if (msg.content === 'Cv?') {
      msg.reply('Ui et twa?');
    }
  }); 
  client.on('message', msg => {
    if (msg.content === 'Ca va ?') {
      msg.reply('Ui et twa?');
    }
  }); 
  client.on('message', msg => {
    if (msg.content === 'Ça va?') {
      msg.reply('Ui et twa?');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'cv?') {
      msg.reply('Ui et twa?');
    }
  });  
  client.on('message', msg => {
    if (msg.content === 'ça va?') {
      msg.reply('Ui et twa?');
    }
  }); 
  client.on('message', msg => {
    if (msg.content === 'tfk?') {
      msg.reply('Je t observe mon chat');
    }
  }); 
  client.on('message', msg => {
    if (msg.content === 'Wsh') {
      msg.reply('Canapesh bien ou bien?');
    }
  }); 

  module.exports.run = async(client, message, args) => {

    if(!message.guild.member(message.author) .hasPermission("BAN_MEMBERS")) return message.channel.send('Vous n`avez pas la permission !');

    if(message.mentions.user.sizer === 0) {
          return message.channel.send('Vous devez mentionner un utilisateur !');
    }


    let ban = message.guild.member(message.mention.users.first());

    if(!ban) {
      return message.channel.send('Je n ai pas trouvé l utilisateur !');
    }

    if(!message.guild.member(client.user) .hasPermission("BAN_MEMBERS")) return message.channel.send('Le bot n a pas la permission !');

    ban.ban().then(member => {

      message.channel.send(`${member.user.username} est ban ! Par ${message.author.username}`);
      message.mention.users.first().send(`Vous êtes banni du serveur **${message.guild.name}** par ${message.author.username}`).catch(console.error);
    });
  };

  module.exports.help = {
    name: "ban"
  };
  client.on('message', msg => {
    if (msg.content === 'Re') {
      msg.channel.send('nard🦊');
    }
  }); 
  client.on('message', msg => {
    if (msg.content === 'tfk ?') {
      msg.channel.send(`Je te regarde p'tit loup`);
    }
  }); 
  client.on('message', msg => {
    if (msg.content === 'Tor') {
      msg.channel.send('tue🐢');
    }
  }); 
  client.on('message', msg => {
    if (msg.content === 'Mmh.') {
      msg.reply('Tu te crois malin trisaumique?');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'mmh') {
      msg.reply('Tu crois quoi gros malin? Cheh dans ta gueule!');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'mmh.') {
      msg.reply('Tu crois quoi gros malin? Cheh dans ta gueule!');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'yo') {
      msg.reply('ga🧘‍♂️');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'TOR') {
      msg.channel.send('TUE‼️🐢');
    }
  }); 
  client.on('message', msg => {
    if (msg.content === 'Matthieu') {
      msg.channel.send(`**Esclave obéis à ta maîtresse, la Déesse Suzu !**`);
    }
  }); 
  client.on('message', msg => {
    if (msg.content === 'Matt') {
      msg.channel.send(`**Bon Toutou !**`);
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Baptiste') {
      msg.reply('Il est un peu con mais il ne faut pas lui en vouloir ;)');
    }
  });
  client.on('message', msg => {
    if (msg.content === 'Coincé du cul va') {
      msg.channel.send(`Au moins il ne sera pas pd c'est bien :')`);
    }
  });
  client.on('message', msg => {
    if (msg.content === `Mattéo`) {
      msg.channel.send(`**Eh Océane, viens là y'a ton esclave préféré.**`);
    }
  });
  client.on('message', msg => {
    if (msg.content === `Océane`) {
      msg.channel.send(`Ton soumis t'attend`);
    }
  });
  client.on('message', msg => {
    if (msg.content === `Suzuyaa`) {
      msg.channel.send(`Elle est à Founoutre🥰💖`);
    }
  });
  client.on('message', msg => {
    if (msg.content === `Founoutre`) {
      msg.channel.send(`Il est à Souzouya🥰💖`);
    }
  });
