require('./api-config');

/*//ESSA BASE FOI CONSTRUÍDA, NO INTUITO DE OBTER A MELHOR PERFORMANCE DE SEUS BOT, NÃO UMA BASE PÚBLICA ENTT NAO VAZEM E NEM VENDAM SEM A MINHA AUTORIZAÇÃO
 ® COPYRIGHT BY GLEYSON BOTS*/

const { downloadContentFromMessage, relayWAMessage, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, getLastMessageInChat, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, logger } = require("@whiskeysockets/baileys");


//∆JS-MENUS/INFORMAÇÕES∆

const { linguagem, mess, getInfo, destrava, destrava2, tabela, conselhob, fatos, randomCantadas, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, premium, muted, rg_aluguel, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, addVote, delVote, patentes, antispam, anotar, black_, enviarfiguUrl, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ, EnvBotao, annarpg, bcbet } = require('./library/constante.js');


//INFOS

var { NomeDoBot, NickDono, prefix, API_KEY_anna, TOKEN_CONSULTAS } = require("./configs/settings.json");

const { audio_menu, bom_dia, boa_tarde, boa_noite, corno, qviado } = require('./configs/media/audios.json')
const mscsoli = require('./library/mscPlay.json');
const { Aki } = require('aki-api')
const jogo = {jogador: "", now: true}

var { botoes_, forwarding, crtt, visualizarmsg, dono1, dono2, dono3, dono4, dono5, dono6 } = require("./configs/nescessario.json");
//const { puxadinhas } = require("./library/puxada.js")
var { fundo1, fundo2, imgnazista, imggay, imgcorno, imggostosa, imggostoso, imgfeio, imgvesgo, imgbebado, imggado, matarcmd, deathcmd, beijocmd, chutecmd, tapacmd, rnkgay, rnkgado, rnkcorno, rnkgostoso, rnkgostosa, rnknazista, rnkotaku, rnkpau, suruba, minado_bomb, thumbnail } = require("./configs/links_img.json");

//∆MÓDULOS E FUNÇÕES∆

const { fs, Boom, axios, yts, crypto, util, P, linkfy, request, cheerio, ms, ffmpeg, webp_mp4, qrterminal, exec, spawn, execSync, moment, color, time, hora, date, getBuffer, convertSticker, recognize, fetchJson, fetchText, fetch, getBase64, createExif, addLimit, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanimais, garticArchives, enigmaArchive, getpc, supre, wait, getExtension, generateMessageID, getGroupAdmins, getMembros, sendPoll, getRandom, banner2, banner3, temporizador, chyt, kyun, simih, botoff, colors, comand, RSM_FUNC, infoSystem, os, arcloud, EmojiAPI, emoji, infoClima, insert, response, addFilter, isFiltered, mines, getMinesPositions, MinesHelp, ytdl, psycatgames, MultiDownload, AssemblyAI } = require('./library/constante.js');
const { sendButton, sendListB } = require(`./bunker/armor/funcoes/botoes.js`)
var { botoes, forwarding, crtt, visualizarmsg, modoaluguel,API_KEY_ANNA, stopcmdlist, annasite, idchatofc, idprivategp, dono1, dono2, dono3, dono4, dono5, dono6 } = require("./configs/config-all.json");
//====================≠≠===============\\
 const contar = (frase, letraProcurada) => {
  total = 0
  for(i = 0; i < frase.length; i++) {
    if(letraProcurada == frase[i]) total += 1
  }
  return total
}

const contarDias = (dias) => {
  if(!dias.includes("/")) return "Tem que colocar em /, ex: 01/01/2024"
  barra = 0
  for(i of dias) {
    if(i == "/") barra += 1
  }
  if(barra <= 0 || barra > 2) return "Revise o formato da data pfvr... Receio que você não tenha colocado o formato correto DD/MM/YYYY"
  var [aa, bb, cc] = dias.split("/")
  year = cc.length == 2 ? "20" + cc : cc
  if(Number(aa) < 1 || Number(aa) > 31) return `Os dias vão de 1 até no mxm 31`
  if(Number(bb) < 1 || Number(bb) > 12) return `Os meses vão de 1 até no mxm 12`
  if(Number(year) < 1 || Number(aa) > 100000000) return `Os anos vão de 1 até no mxm 100000000`
  day = Number(year) * 365
  day += Number(bb) * 30
  day += Number(aa)
  return day
}

const converterDias = (dias) => {
  nmr = Number(dias)
  if(nmr < 0) return "A quantidade de dias precisa ser ≥ 0"
  year = (nmr - (nmr % 365)) / 365
  mm = ((nmr % 365) - ((nmr % 365) % 30)) / 30
  day = (nmr % 365) % 30
  txt = year > 0 ? year + ` Ano${year != 1 ? "s" : ""}${day > 0 ? mm > 0 ? ", " : " e " : "  "}` : ``
  txt += mm > 0 ? mm + ` M${mm != 1 ? "eses" : "ês"}${day > 0 ? " e " : "  "}` : ``
  txt += day > 0 ? day + ` Dia${day != 1 ? "s" : ""}  ` : ``
  return txt.slice(0, txt.length - 2)
}

const contarMin = (base_a) => {
  if(contar(base_a, `:`) != 1) return `É necessário o uso dos : no horário, seguindo apenas horas e minutos`
  var [a, b] = base_a.split(':')
  return Number(Number(a) * 60) + Number(b)
}

const converterMin = (base_b) => {
  if(!Number(base_b)) return `Precisa ser um número`
  nmr = Number(base_b)
  b = nmr % 60
  a = (nmr - b) / 60
  return `${a < 10 ? `0` + a : a}:${b < 10 ? `0` + b : b}`
}
var numerodono_ofc = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "");

async function reiniciaranna() {
file = require.resolve("./anna-call.js");
delete require.cache[file];
require(file);
}

var AsMsg = [];

// ABAIXO: INÍCIO DE CONEXÃO

async function iniciaranna() {

module.exports = anna = async(anna, folderUserAuth) => {
module.exports = upsert = async(upsert, anna) => {
async function msgupsrt() {
const nmrdn_dono2 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net";

var hora120 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

RSM_FUNC(anna, nmrdn_dono2, hora120, upsert);

for (const info of upsert?.messages || []) {

const from = info.key.remoteJid;
const isGroup = from.endsWith('@g.us');

if(fs.existsSync(`./bunker/database/grupos/activation_gp/${from}.json`)) {
var jsonGp = JSON.parse(fs.readFileSync(`./bunker/database/grupos/activation_gp/${from}.json`));
}

if(fs.existsSync(`./bunker/database/grupos/activation_gp/${from}.json`) && jsonGp[0].x9 && info.messageStubType){
switch(info.messageStubType){
case 29:
await delay(1000);
anna.sendMessage(info.key.remoteJid, {text: `O participante: [ @${info.messageStubParameters[0].split("@")[0]} ] foi promovido ao cargo de admin do grupo pelo admin - [ @${info.participant.split("@")[0]} ]`
, mentions: [info.messageStubParameters[0], info.participant]});
break;
case 30:
await delay(1000);
anna.sendMessage(info.key.remoteJid, {
text: `O adminstrador: [ @${info.messageStubParameters[0].split("@")[0]} ] foi rebaixado para membro comum do grupo pelo admin - [ @${info.participant.split("@")[0]} ]`
, mentions: [info.messageStubParameters[0], info.participant]});
break;
}}
  
if(!info.message) return;
if(upsert.type == "append") return;  
const baileys = require('@whiskeysockets/baileys');
const type = baileys.getContentType(info.message);
const content = JSON.stringify(info.message);
const pushname = info.pushName ? info.pushName : '';
if(visualizarmsg) {
await anna.readMessages([info.key]);
} else {
if(from == "status@broadcast") return;
}

global.prefix;
global.blocked;

const speed = require('performance-now');

//==============(BODY)================\\

//var body = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || info.message?.buttonsResponseMessage?.selectedButtonId || info.message?.listResponseMessage?.singleSelectReply?.selectedRowId || info.message?.templateButtonReplyMessage?.selectedId || info?.text || ""
var body = type === "conversation" ? info.message.conversation : type === "viewOnceMessageV2" ? info.message.viewOnceMessageV2.message.imageMessage ? info.message.viewOnceMessageV2.message.imageMessage.caption : info.message.viewOnceMessageV2.message.videoMessage.caption : type === "imageMessage" ? info.message.imageMessage.caption : type === "videoMessage" ? info.message.videoMessage.caption : type === "extendedTextMessage" ? info.message.extendedTextMessage.text : type === "viewOnceMessage" ? info.message.viewOnceMessage.message.videoMessage ? info.message.viewOnceMessage.message.videoMessage.caption : info.message.viewOnceMessage.message.imageMessage.caption : type === "documentWithCaptionMessage" ? info.message.documentWithCaptionMessage.message.documentMessage.caption : type === "buttonsMessage" ? info.message.buttonsMessage.imageMessage.caption : type === "buttonsResponseMessage" ? info.message.buttonsResponseMessage.selectedButtonId : type === "listResponseMessage" ? info.message.listResponseMessage.singleSelectReply.selectedRowId : type === "templateButtonReplyMessage" ? info.message.templateButtonReplyMessage.selectedId : type === "groupInviteMessage" ? info.message.groupInviteMessage.caption : type === "pollCreationMessageV3" ? info.message.pollCreationMessageV3 : type === "interactiveResponseMessage" ? JSON.parse(info.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : type === "text" ? info.text : ""

var Procurar_String = info.message?.conversation || info.message?.viewOnceMessageV2?.message?.imageMessage?.caption || info.message?.viewOnceMessageV2?.message?.videoMessage?.caption || info.message?.imageMessage?.caption || info.message?.videoMessage?.caption || info.message?.extendedTextMessage?.text || info.message?.viewOnceMessage?.message?.videoMessage?.caption || info.message?.viewOnceMessage?.message?.imageMessage?.caption || info.message?.documentWithCaptionMessage?.message?.documentMessage?.caption || info.message?.buttonsMessage?.imageMessage?.caption || ""

const args = body.trim().split(/ +/).slice(1);

var budy2 = body.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

if(isGroup && fs.existsSync(`./bunker/database/grupos/activation_gp/${from}.json`) && jsonGp[0].multiprefix) {
var prefix = jsonGp[0]?.prefixos[jsonGp[0]?.prefixos?.indexOf(String(body)?.trim()?.charAt(0))] || jsonGp[0].prefixos[0]
}

if(isGroup && fs.existsSync(`./bunker/database/grupos/activation_gp/${from}.json`) && !jsonGp[0].multiprefix) {
var prefix = setting.prefix;
} else if(!isGroup) {
var prefix = setting.prefix
};

var isCmd = body.trim().startsWith(prefix);

var kaic = anna
var client = anna
var rooh = anna
var conn = anna
var blackmd = anna
var sabrina = anna
var rock = anna
var sock = anna 
var bkz = anna
var nahida = anna
var yoshino = anna
var loli = anna 
var cliente = anna

const command = isCmd ? budy2.trim().slice(1).split(/ +/).shift().toLocaleLowerCase(): null;

const q_2 = budy2.trim().split(/ +/).slice(1).join(' ');

const q = args.join(' ');

var budy = (type === 'conversation') ? info.message?.conversation : (type === 'extendedTextMessage') ? info.message?.extendedTextMessage?.text : '';

var budy3 = budy.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

var PR_String = Procurar_String.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

const q_ofc = PR_String.trim().split(/ +/).slice(1).join(" ");


//======================================\\

try {var groupMetadata = isGroup ?  await anna.groupMetadata(from): ""} catch {return}

const groupName = isGroup ? groupMetadata.subject : '';

const sender = isGroup ? info.key.participant.includes(':') ? info.key.participant.split(':')[0] +'@s.whatsapp.net': info.key.participant : info.key.remoteJid;

const messagesC = PR_String.slice(0).trim().split(/ +/).shift().toLowerCase();

const arg = body.substring(body.indexOf(' ') + 1);

const botNumber = await anna.user.id.split(':')[0]+'@s.whatsapp.net';
const argss = body.split(/ +/g);
const testat = body;
const ants = body;

const groupDesc = isGroup ? groupMetadata.desc : ''

const groupMembers = isGroup ? groupMetadata.participants : ''

const isnit = nit.includes(sender) 

const issupre = supre.includes(sender)

const ischyt = chyt.includes(sender)

const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''

const somembros = isGroup ? getMembros(groupMembers) : ''

//======================================\\

const nmrdn = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` || isnit

const numerodono = [`${nmrdn}`, `${dono1}@s.whatsapp.net`, `${dono2}@s.whatsapp.net`, `${dono3}@s.whatsapp.net`, `${dono4}@s.whatsapp.net`, `${dono5}@s.whatsapp.net`, `${dono6}@s.whatsapp.net`]

//========(Mensagem/Sorteio)===========\\

const { enviar, sortear } = require('./configs/message.js'); 

//=====================================\\

//=================> Funções de Grupo 🥋

const dirGroup = `./bunker/database/grupos/activation_gp/${from}.json`

const nescj = "./configs/nescessario.json"

if(isGroup && !fs.existsSync(dirGroup)){
var data = [{
name: groupName,
groupId: from, x9: false, 
antiimg: false, antivideo: false,
antiaudio: false, antisticker: false,
antidoc: false, antictt: false,
antiloc: false, antilinkgp: false,
antilinkhard: false, antifake: false, antiporn: false,
Odelete: false, antispam: false, 
antinotas: false, anticatalogo: false, visuUnica: false, 
registrarFIGUS: false, soadm: false, 
listanegra: [], advertir: [], prefixos: [`${setting.prefix}`],
advertir2: [], legenda_estrangeiro: "0",
legenda_documento: "0", legenda_video: "0",
legenda_imagem: "0", multiprefix: false, 
forca_ofc: [{acertos: 0, erros: 0, palavra: [], escreveu: [], palavra_ofc: 0, dica: 0, tema: 0}], ausentes: [],  
antipalavrao: {
active: false,
palavras: []
},
limitec: {
active: false,
quantidade: null
},
wellcome: [{
bemvindo1: false,
legendabv: "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
legendasaiu: "#numerodele# – Saiu do grupo: #nomedogp#"
},
{
bemvindo2: false,
legendabv: "Olá #numerodele#, seja bem vindo (a) ao grupo: #nomedogp#",
legendasaiu: "#numerodele# – Saiu do grupo: #nomedogp#"
}],
simi1: false, simi2: false,
autosticker: false, autoresposta: false,
jogos: false, level: false,
bangp: false, nsfw: false,
aluguel: false
}]
fs.writeFileSync(dirGroup, JSON.stringify(data, null, 2) + '\n')
}

const dataGp = isGroup ? JSON.parse(fs.readFileSync(dirGroup)) : undefined 

var DFNMULTIP = `./bunker/database/func/prefixo/multip_${from}.json`

function setGp(index){
fs.writeFileSync(dirGroup, JSON.stringify(index, null, 2) + '\n')}

function setNes(index){
fs.writeFileSync(nescj, JSON.stringify(index, null, 2) + '\n')}

//=====(ADMS/DONO/ETC..CONST)=======\\

const adivinha = info.key.id.length > 21 ? 'Android' : info.key.id.substring(0, 2) == '3A' ? 'iPhone' : 'WhatsApp Web';

const quoted = info.quoted ? info.quoted : info

const isBot = info.key.fromMe ? true : false

const SoDono = numerodono.includes(sender) || isBot || isnit || issupre || ischyt

dfndofc = setting.numerodono+"@s.whatsapp.net"

const DonoOficial = dfndofc.includes(sender) 

const isPremium = premium.includes(sender) || SoDono

const isBotGroupAdmins = groupAdmins.includes(botNumber) || false

const isGroupAdmins = groupAdmins.includes(sender) || false || DonoOficial

const isBanned = ban.includes(sender)

const isVisualizar = nescessario.visualizarmsg

const isVerificado = nescessario.verificado

const isWelcomePrivate = nescessario.welcomepv

const isAudioMenu = nescessario.menu_audio

const isAntiPv2 = nescessario.banChats

const isConsole = nescessario.consoleoff

const isBotoff = nescessario.botoff

const listanegraG = nescessario.listanegraG

const isAntiPv = nescessario.antipv

const isAnticall = nescessario.anticall

const TOKEN_GPT = nescessario.TOKEN_GPT

const isJoguin = isGroup ? joguinhodavelhajs.includes(sender) : false

//============(FUNÇÕES)============\\


const isAntiImg = isGroup ? dataGp[0].antiimg : undefined

const isAntiVid = isGroup ? dataGp[0].antivideo : undefined

const isAntiAudio = isGroup ? dataGp[0].antiaudio : undefined

const isAntiSticker = isGroup ? dataGp[0].antisticker : undefined

const Antidoc = isGroup ? dataGp[0].antidoc : undefined

const isAntiCtt = isGroup ? dataGp[0].antictt : undefined

const Antiloc = isGroup ? dataGp[0].antiloc : undefined

const isAntilinkgp = isGroup ? dataGp[0].antilinkgp : undefined

const isAntiLinkHard = isGroup ? dataGp[0].antilinkhard : undefined

const isAntiPorn = isGroup ? dataGp[0].antiporn : undefined

const isAntifake = isGroup ? dataGp[0].antifake : undefined

const IS_DELETE = nescessario.Odelete

const So_Adm = isGroup ? dataGp[0].soadm: undefined

const isX9VisuUnica = isGroup ? dataGp[0].visuUnica : undefined

const ADVT = isGroup ? dataGp[0].advertir: undefined

const ADVT2 = isGroup ? dataGp[0].advertir2: undefined

const isx9 = isGroup ? dataGp[0].x9 : undefined

const isMultiP = isGroup ? dataGp[0].multiprefix : undefined

const isAntiNotas = isGroup ? dataGp[0].antinotas : undefined

const isAnticatalogo = isGroup ? dataGp[0].anticatalogo : undefined

const isWelkom = isGroup ? dataGp[0].wellcome[0].bemvindo1 : undefined

const isWelkom2 = isGroup ? dataGp[0].wellcome[1].bemvindo2 : undefined

const isSimi = isGroup ? dataGp[0].simi1 : undefined

const isSimi2 = isGroup ? dataGp[0].simi2 : undefined

const isAutofigu = isGroup ? dataGp[0].autosticker : undefined

const isAutorepo = isGroup ? dataGp[0].autoresposta : undefined

const isModobn =  isGroup ? dataGp[0].jogos : undefined

const isLevelingOn = isGroup ? dataGp[0].level : undefined

const isBanchat = isGroup ? dataGp[0].bangp : undefined

const isNsfw = isGroup ? dataGp[0].nsfw : undefined

const isPalavrao = isGroup ? dataGp[0].antipalavrao.active : undefined

const isPalavras = isGroup ? dataGp[0].antipalavrao.palavras : undefined

const isAntiFlood = isGroup ? dataGp[0].limitec.active : undefined

const isLimitec = isGroup ? dataGp[0].limitec.quantidade : undefined

const isModoAluguel =  isGroup ? dataGp[0].aluguel : undefined

var isCmdPremium = nescessario.cmd_premium

//=======================================\\

//==========(VERIFICADO)===============\\

if(!isVerificado) {
var sasah = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "558399849627-1625944593@g.us" } : {}) }, message: { "liveLocationMessage": { "caption": `DONO: inp7turco 🇹🇷\nBOT: A N N A - V 5` } } }
} else {
var sasah = info
}
//global.api = (name, path = '/', query = {}, apikeyqueryname) => (name in global.APIs ? global.APIs[name] : name) + path + (query || apikeyqueryname ? '?' + new URLSearchParams(Object.entries({ ...query, ...(apikeyqueryname ? { [apikeyqueryname]: apikey } : {}) })) : '')
// FUNÇÕES DE MARCAÇÕES ESSENCIAL \\

const menc_prt = info.message?.extendedTextMessage?.contextInfo?.participant

const menc_jid = args?.join(" ").replace("@", "") + "@s.whatsapp.net"

const menc_jid2 = info.message?.extendedTextMessage?.contextInfo?.mentionedJid

const sender_ou_n = q.includes("@") ? menc_jid : sender

const mrc_ou_numero = q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 
const menc_os2 = q.includes("@") ? menc_jid : menc_prt 

const marc_tds = q.includes("@") ? menc_jid : q.length > 6 && !q.includes("@") ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt 

const menc_prt_nmr = q.length > 12 ? q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net` : menc_prt

////////////////////////////////////////////


var isUrl = (url) => {
if(linkfy.find(url)[0]) return true
return false
}

//if(info.key.fromMe) return

const reply = (content, type, options = {}) => {
   const isFullUrl = (url) => new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, 'gi').test(url);
const mediaKeys = ['image', 'video', 'sticker', 'audio', 'document', 'history', 'md-app-state'];
options[type || 'text'] = isFullUrl(content) && mediaKeys.includes(type) ? {url: content}: content;
return anna.sendMessage(from, options, {quoted: info}).catch(e => {
reply("Erro ao enviar a mensagem..");
})
}

const replyPeR = (texto) => {
  return new Promise((resolve) => {
setTimeout(() => {
anna.sendMessage(from, { text: texto }, { quoted: info }).then(() => resolve()).catch((error) => {
console.log(JSON.stringify(error, null, 2));
resolve();
});
}, 1000);
});
};

const msgSemQuoted = (content, type, options = {}) => {
   const isFullUrl = (url) => new RegExp(/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)$/, 'gi').test(url);
const mediaKeys = ['image', 'video', 'sticker', 'audio', 'document', 'history', 'md-app-state'];
options[type || 'text'] = isFullUrl(content) && mediaKeys.includes(type) ? {url: content}: content;
return anna.sendMessage(from, options).catch(e => {
reply("Erro ao enviar a mensagem..");
})
}

//
const time2 = moment().tz('America/Sao_Paulo').format('HH:mm:ss')
if(time2 > "00:00:00" && time2 < "05:00:00"){
var tempo = 'Boa noite'
} if(time2 > "05:00:00" && time2 < "12:00:00"){
var tempo = 'Bom dia'
} if(time2 > "12:00:00" && time2 < "18:00:00"){
var tempo = 'Boa tarde'
} if(time2 > "18:00:00"){
var tempo = 'Boa noite'
}

const sendSticker = (from, filename, info) => {
anna.sendMessage(from, {sticker: {url: fileName}}, {quoted: sasah})
}

const sendVideo = (id, link, desc, hehe) => {
  return anna.sendMessage(id, {video: {url: link}, caption: desc, mentions: [sender], mimetype: 'video/mp4'}, {quoted: sasah})
}

const sendAudio = (id, link, tipo, hehe) => {
  return anna.sendMessage(id, {audio: {url: link}, mimetype: tipo}, {quoted: hehe})
}

const sendImage = (id, ytb, cap) => {
anna.sendMessage(from, {image: {url: ytb}, caption: cap}, {quoted:info})
}

const sendMess = (hehe, ytb, yah) => {
anna.sendMessage(hehe, {text: ytb}, {quoted: yah})
}

const sendMenu = (cap) => {
anna.sendMessage(from, {image: {url: logoslink.logo}, caption: cap, mentions: [sender]}, {quoted: sasah})
}


const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? anna.sendMessage(from, {text: teks.trim(), mentions: memberr}) : anna.sendMessage(from, {text: teks.trim(), mentions: memberr})
}
	
const mention = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
anna.sendMessage(from, {text: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const mentionSemQuoted = (teks= '', ms = info) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
anna.sendMessage(from, {text: teks.trim(), mentions: memberr}) 
}

const mencionarIMG = (teks= '', Url, ms) => {
memberr = []
vy = teks.includes('\n') ? teks.split('\n') : [teks]
for(vz of vy){ for(zn of vz.split(' ')){
if(zn.includes('@'))memberr.push(parseInt(zn.split('@')[1])+'@s.whatsapp.net')
}}
anna.sendMessage(from, {image: {url: Url}, caption: teks.trim(), mentions: memberr}, {quoted: ms}) 
}

const reagir = async (idgp, emj) => {
var reactionMessage = {
react: {
text: emj, 
key: info.key
}
} 
anna.sendMessage(idgp, reactionMessage)
}

const verificarN = async(sla) => {
const [result] = await anna.onWhatsApp(sla)
if(result == undefined) {
reply("Este usuário não é existente no WhatsApp")
} else {
reply(`${sla} Número inserido é existente no WhatsApp com o id: ${result.jid}`)
}
}

var sendlistA = async (id, txt1, txt2, title1, btext, but, vr) => {
var sections = but
var listMessage = {
text: txt1,
footer: txt2,
title: title1,
buttonText: btext,
sections
}
anna.sendMessage(id, listMessage, {quoted: vr})  
}

const EnvLista = async(IDG, TXT1, TXT2, TTL, TTB, TTB2, ENVLRW) => {
listMessage = {
text: TXT1, footer: TXT2,
title: TTL, buttonText: TTB,
sections: [{
title: TTB2, rows: ENVLRW
}]};
anna.sendMessage(IDG, listMessage).catch(e => {
console.log(e);
});
};

if(isGroup && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.key.fromMe) {
if(menc_jid2?.length >= groupMembers.length - 1) { 
anna.sendMessage(from, {text: markingAllMember()})
if(IS_DELETE) {
setTimeout(() => {
anna.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
anna.groupParticipantsUpdate(from, [sender], "remove")
}
}

const enviarfigu = async (figu, tag) => {
anna.sendMessage(from, {sticker: {url: figu}}, {quoted: tag})
}

if(isAutofigu && isGroup) {
async function autofiguf() {
setTimeout(async() => {    

if(budy.includes(`${prefix}sticker`) || budy.includes(`${prefix}s`) || budy.includes(`${prefix}stk`) || budy.includes(`${prefix}st`) || budy.includes(`${prefix}fsticker`) || budy.includes(`${prefix}f`) || budy.includes(`${prefix}fstiker`)) return

if(type == 'imageMessage') {
var pack = `👑 ⃟ᴄʀɪᴀᴅᴀ ᴘᴏʀ\n↳ ${NomeDoBot}\n\n↧ 🥀 ⃟ɴɪᴄᴋ ᴅᴏɴᴏ\n↳ ${NickDono}`
var author2 = `↧ ☁️ ⃟ɢʀᴜᴘᴏ\n↳ ${groupName}\n\n↧ 💻 ⃟ғᴇɪᴛᴀ ᴘᴏʀ:\n↳ ${pushname}`
owgi = await getFileBuffer(info.message.imageMessage, 'image')
let encmediaa = await sendImageAsSticker2(anna, from, owgi, info, { packname:pack, author:author2})
DLT_FL(encmediaa)
}

if(type == 'videoMessage') {
if((isMedia && info.message.videoMessage.seconds < 10)){
var pack = `👑 ⃟ᴄʀɪᴀᴅᴀ ᴘᴏʀ\n↳ ${NomeDoBot}\n\n↧ 🥀 ⃟ɴɪᴄᴋ ᴅᴏɴᴏ\n↳ ${NickDono}`
var author2 = `↧ ☁️ ⃟ɢʀᴜᴘᴏ\n↳ ${groupName}\n\n↧ 💻 ⃟ғᴇɪᴛᴀ ᴘᴏʀ:\n↳ ${pushname}`
owgi = await getFileBuffer(info.message.videoMessage, 'video')
let encmedia = await sendVideoAsSticker2(anna, from, owgi, info, { packname:pack, author:author2})
DLT_FL(encmedia)
}
} 
}, 1000)
}
autofiguf().catch(e => {
console.log(e)
})
}

var nmrdnofc1 = setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")

if(isGroup && fs.existsSync(`./bunker/database/func/afk/afk-@${nmrdnofc1}.json`)) {
if(budy.indexOf(`@${nmrdnofc1}`) >= 0) {
const tabelin = JSON.parse(fs.readFileSync(`./bunker/database/func/afk/afk-@${nmrdnofc1}.json`));  
anna.sendMessage(from, {text: mess.absenceRecordOwner(NickDono, tabelin)}, {quoted: sasah})
}
}

if(isGroup && dataGp[0].ausentes?.length > 0 && menc_jid2?.length > 0 && JSON.stringify(dataGp[0].ausentes).includes(menc_jid2)) {
blue = [] 
for (i of menc_jid2) {
if(groupAdmins.indexOf(String(i)) != -1) blue.push(groupAdmins.indexOf(String(i)))
}
if(blue.length == 0) return
big = [] 
for ( i of blue) {
big.push(groupAdmins[i])
}
blr = []
for ( i = 0; i < big.length; i++) {
blr.push(dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(big[i])])
}
for ( i of blr) {
var blak = i
}

mention(mess.absenceRecordAdmin(blak))
}

if(isBotGroupAdmins && isGroupAdmins && body === "apaga") {
if(!menc_prt) return
anna.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
}

if(SoDono && budy.includes("reiniciar-anna") || info.key.fromMe && budy.includes("reiniciar-anna")) {
fs.writeFileSync("./cnt-upd.json",JSON.stringify([], null, 2))
setTimeout(() => {
file = require.resolve("./anna-call.js")  
delete require.cache[file]
require(file)  
}, 500)
setTimeout(() => {
DLT_FL("./cnt-upd.json")
}, 1500)
}

if(isGroup && isCmd && isModoAluguel && !SoDono) return reply(mess.aluguelMessageActivated(pushname)) 

if(!isPremium && !SoDono && !info.key.fromMe && isCmdPremium.includes(command)) return reply(enviar.msg.premium)

//========================================\\

//BAN GRUPO & BOT OFF
if(isGroup && isCmd && isBanchat && !SoDono) return

if(isGroup && isCmd && So_Adm && !SoDono && !isGroupAdmins) return

if(isBotoff && !SoDono) return

//=======================================\\

const sendStickerFromUrl = async(to, url) => {
try {
var names = Date.now() / 10000;
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, './sticker' + names + '.png', async function () {
console.log('Enviando sticker..');
let filess = './sticker' + names + '.png'
let asw = './sticker' + names + '.webp'
exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${asw}`, (err) => {
let media = fs.readFileSync(asw)
anna.sendMessage(to, {sticker: media}, {sendEphemeral: true, contextInfo: { forwardingScore: 50, isForwarded: true}, quoted: sasah}).catch(e => {
return reply(mess.error())
})
DLT_FL(filess)
DLT_FL(asw)
});
});
} catch {
return reply("Erro.. FNC")
}
}

//=========(isQuoted/consts)=============\\
const isImage = type == 'imageMessage'
const isVideo = type == 'videoMessage'
const isVisuU2 = type == 'viewOnceMessageV2'
const isAudio = type == 'audioMessage'
const isSticker = type == 'stickerMessage'
const isContact = type == 'contactMessage'
const isLocation = type == 'locationMessage'
const isProduct = type == 'productMessage'
const isMedia = (type === 'imageMessage' || type === 'videoMessage' || type === 'audioMessage' || type == "viewOnceMessage" || type == "viewOnceMessageV2")
typeMessage = body.substr(0, 50).replace(/\n/g, '')
if(isImage) typeMessage = "Image"
else if(isVideo) typeMessage = "Video"
else if(isAudio) typeMessage = "Audio"
else if(isSticker) typeMessage = "Sticker"
else if(isContact) typeMessage = "Contact"
else if(isLocation) typeMessage = "Location"
else if(isProduct) typeMessage = "Product"

const isQuotedMsg = type === 'extendedTextMessage' && content.includes('conversation')

const isQuotedMsg2 = type === 'extendedTextMessage' && content.includes('text')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')

const isQuotedVisuU = type === 'extendedTextMessage' && content.includes('viewOnceMessage')

const isQuotedVisuU2 = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2')

const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')

const isQuotedDocument = type === 'extendedTextMessage' && content.includes('documentMessage')

const isQuotedDocW = type === 'extendedTextMessage' && content.includes('documentWithCaptionMessage')

const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')

const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')

const isQuotedLocation = type === 'extendedTextMessage' && content.includes('locationMessage')

const isQuotedProduct = type === 'extendedTextMessage' && content.includes('productMessage')

const API_KEY_KITAZINHA = fs.readFileSync("./configs/settings.json")

//const http://gleysonapi.store:2005 = require("./configs/settings.json")

const SITE_KEY_KITAGAWA_PRIV = require("./configs/settings.json")
            
//////BLOCK CMD///////
//(CREDITOS AO KAUAN GAY)\\
if(isGroup){
const checar = getComandos(from)
if(checar === undefined) addComandosId(from)
}
if(isGroup && isCmd && !SoDono && !isnit && getComandoBlock(from).includes(command))return reply('Comando bloqueado.')

////FIMMMMMMMMM/////

///// SISTEMA DE DINHEIRO /////
const { AdicionarSaldo, AdicionarUser, VerSaldo, ConfirmarPagamento } = require("./bunker/armor/js/dinheiro.js")
// Adiciona 500$ de saldo automaticamente, a partir da primeira mensagem ou executar comando em grupo ou no privado do bot.
const saldoAddRegistro = VerSaldo(sender)
try {
   if (saldoAddRegistro === undefined) AdicionarUser(sender)
   valor = 0
   AdicionarSaldo(sender, valor)
} catch (err) {
console.error(err)
}
///// FIMMMMMMMMMMMMM /////

const { color, bgcolor } = require('./bunker/armor/js/color.js')
const tipoMensagem = type == 'audioMessage' ? 'Áudio' : type == 'stickerMessage' ? 'Figurinha' : type == 'imageMessage' ? 'Imagem' : type == 'videoMessage' ? 'Vídeo' : type == 'documentMessage' ? 'Documento' : type == 'contactMessage' ? 'Contato' : type == 'locationMessage' ? 'Localização' ? 'Enquete' : 'pollCreationMessage' : 'Mensagem'

 if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m COMANDO \x1b[1;37m]', color(command, "yellow"), 'do', color(pushname, "yellow"), 'Horas:', color(time, "yellow"));  

if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m COMANDO \x1b[1;37m]', color(command, "yellow"), 'do', color(pushname, "yellow"), 'Grupo:', color(groupName, "yellow"), 'Horas:', color(time, "yellow"));
if (!isCmd && isGroup && !info.key.fromMe) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MENSAGEM \x1b[1;37m]', color(tipoMensagem, "yellow"), 'do', color(pushname, "yellow"), 'Grupo:', color(groupName, "yellow"), 'Horas:', color(time, "yellow"));
 if (!isGroup && !isCmd && !info.key.fromMe) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m MENSAGEM \x1b[1;37m]', color(tipoMensagem, "yellow"), 'do', color(pushname, "yellow"), 'Horas:', color(time, "yellow"))
if(isGroup && info.message?.reactionMessage?.text) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32m REAÇÃO \x1b[1;37m]', color(`Emoji: " ${info.message.reactionMessage.text} "`, "yellow"), 'do', color(pushname, "yellow"), 'Horas:', color(time, "yellow"))

// ========= || Jogo da Velha || ======== \\
async function joguinhodavelha() {
if(joguinhodavelhajs2.includes(from) || joguinhodavelhajs.includes(sender)) {
const cmde = budy.toLowerCase().split(" ")[0] || "";
let arrNum = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
if(fs.existsSync(`./bunker/armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
if(budy == "Cex") return reply("why");
if(
budy.toLowerCase() == "s" ||
budy.toLowerCase() == "sim" ||
budy.toLowerCase() == "ok"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return reply(`O jogo já começou antes!`);
const matrix = boardnow._matrix;
boardnow.status = true;
fs.writeFileSync(`./bunker/armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const chatAccept = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
                    
❌ : @${boardnow.X}
⭕ : @${boardnow.O}
               
Sua vez... : @${boardnow.turn == "X" ? boardnow.X : boardnow.O}

${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}
${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}
${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}
`;
mention(chatAccept);
}
} else if(
budy.toLowerCase() == "n" ||
budy.toLowerCase() == "não" ||
budy.toLowerCase() == "no"
) {
if(boardnow.O == sender.replace("@s.whatsapp.net", "")) {
if(boardnow.status)
return reply(`O jogo já começou!`);
DLT_FL(`./bunker/armor/tictactoe/db/${from}.json`);
mention(`@${boardnow.X} *_Infelizmente seu oponente não aceitou o desafio ❌😕_*`)
joguinhodavelhajs.splice([])
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}
}
}

if(arrNum.includes(cmde)) {
const boardnow = setGame(`${from}`);
if(!boardnow.status) return reply(`Parece que seu oponente não aceitou o desafio ainda...`)
if(
(boardnow.turn == "X" ? boardnow.X : boardnow.O) !=
     
sender.replace("@s.whatsapp.net", "")
)
return;
const moving = validmove(Number(budy), `${from}`);
const matrix = moving._matrix;
if(moving.isWin) {
if(moving.winner == "SERI") {
const chatEqual = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*
          
Jogo da velha termina empatado 😐
`;
reply(chatEqual);
DLT_FL(`./bunker/armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
return;
}
const abt = Math.ceil(Math.random() + 4000)
const winnerJID = moving.winner == "O" ? moving.O : moving.X;
const looseJID = moving.winner == "O" ? moving.X : moving.O;
const limWin = Math.floor(Math.random() * 1) + 10;
const limLoose = Math.floor(Math.random() * 1) + 5;
const chatWon = `*🎮Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸🕹️*

O jogo da velha foi vencido pelo usuário: @${winnerJID}..`;

anna.sendMessage(from, {text: chatWon}, {quoted: sasah,
mentions: [
moving.winner == "O" ?
moving.O + "@s.whatsapp.net" :
moving.X + "@s.whatsapp.net"]
});
setTimeout( () => {
if(fs.existsSync("./bunker/armor/tictactoe/db/" + from + ".json")) {
DLT_FL("./bunker/armor/tictactoe/db/" + from + ".json");
reply(`*🕹️JOGO DA VELHA RESETADO...🕹️*`);
} else {
console.log(colors.red(time, "red"), colors.magenta("[ EXPIRADO ]"), colors.red('Jogo da velha espirado..'));
}
joguinhodavelhajs.splice([])
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
}, 300000) //5 minutos
reply(`Parabéns @${winnerJID} você ganhou o jogo da velha... 🥳\nParabéns aos ambos jogadores, vocês foram bem, perder não é o fim, perder faz parte da vida.. Não desista!`)   
DLT_FL(`./bunker/armor/tictactoe/db/${from}.json`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs)) 
joguinhodavelhajs2.splice([])
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
const chatMove = `*『 🎮 Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸ 🕹️ 』*\n-\n❌ : @${moving.X}\n⭕ : @${moving.O}\n-\nAgora é a vez do jogador: @${moving.turn == "X" ? moving.X : moving.O}\n-\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`;
mention(chatMove);
}
} 
} 
}


//CONST NUNO
async function btncomfoto(jid, text = "a", title = "b", subtitle = "c", footer = "d", media, mediaType, quoted, options, buttons) {
  if(!jid) throw new Error("precisa do jid")
  if(typeof jid !== "string") throw new TypeError("jid tem que ser uma string")
  if(typeof text !== "string") throw new TypeError("text tem que ser uma string")
  if(typeof title !== "string") throw new TypeError("title tem que ser uma string")
  if(typeof footer !== "string") throw new TypeError("footer tem que ser uma string")
  if(media && typeof mediaType !== "string") throw new TypeError("mediaType  tem que ser uma string")
  if(quoted && typeof quoted !== "object") throw new TypeError("quoted tem que ser um objeto")
  if(options && typeof options !== "object") throw new TypeError("options tem que ser um objeto")
  if(mediaType && !["document", "image", "video"].includes(mediaType)) throw new TypeError("mediaType invalido, formatos suportados: image, video, document")
  quoted = { ...quoted }
  options = { ...options }
  const contextInfo = {
    mentionedJid: Array.isArray(options.mentions) ? options.mentions : [],
    ...options.contextInfo,
    stanzaId: quoted.key?.id,
    remoteJid: quoted.key?.remoteJid,
    participant: quoted.key?.participant,
    fromMe: quoted.key?.fromMe,
    quotedMessage: quoted.message
  }
  delete options.contextInfo
  const msg = baileys.generateWAMessageFromContent(jid, {
    interactiveMessage: baileys.proto.Message.InteractiveMessage.create({
      body: baileys.proto.Message.InteractiveMessage.Body.create({
        text
      }),
      footer: baileys.proto.Message.InteractiveMessage.Footer.create({
        text: footer
      }),
      header: baileys.proto.Message.InteractiveMessage.Header.create({
        title,
        subtitle,
        hasMediaAttachment: !!media,
        ...(media && mediaType ? await baileys.generateWAMessageContent({ [mediaType]: media }, { upload: client.waUploadToServer }) : {})
      }),
      nativeFlowMessage: baileys.proto.Message.InteractiveMessage.NativeFlowMessage.create({
        buttons: buttons
      }),
      contextInfo
    })
  }, {})
  await client.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  })
  return msg
}



var comando = command
var prefixo = prefix






// ==========[ NAMORO ]==========\\
const namoro1 = JSON.parse(fs.readFileSync("./bunker/database/func/namoro1.json"))

const namoro2 = JSON.parse(fs.readFileSync("./bunker/database/func/namoro2.json"))

//aceitar namoro
if(budy2.toLowerCase() === "s" || budy2.toLowerCase() === "sim") {
if(JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
C14 = namoro2.map(i => i.id).indexOf(sender)
C12 = namoro1.map(i => i.usu1).indexOf(namoro2[C14].pedido + "@s.whatsapp.net")
namoro1[C12].namorados = true
fs.writeFileSync("./bunker/database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro1.push({usu1: sender, usu2: namoro2[C14].pedido, namorados: true, idgp: from, hora: hora, data: date})
fs.writeFileSync("./bunker/database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C14, 1)
fs.writeFileSync("./bunker/database/func/namoro2.json", JSON.stringify(namoro2))
mention(`🥳 Felicitações @${namoro1[C12].usu1.split('@')[0]}! O (a) seu grande amor, @${sender.split('@')[0]}, aceitou o seu pedido de namoro.\nSeu par pode ser consultado no comando: ${prefix}minhadupla`)
}
}

//recusar namoro
if(budy2.toLowerCase() === "n" || budy2.toLowerCase().replace("ã", "a") === "nao") {
if(JSON.stringify(namoro2).includes(sender) && namoro2[namoro2.map(i => i.id).indexOf(sender)].idgp == from && isGroup) {
C14 = namoro2.map(i => i.id).indexOf(sender)
C12 = namoro1.map(i => i.usu1).indexOf(`${namoro2[C14].pedido}@s.whatsapp.net`)
mention(`Sinto muito @${namoro1[C12].usu1.split('@')[0]}! O (a) @${sender.split('@')[0]} não te ama, deve está confuso(a) ou não preparado(a) e por isso não aceitou o seu pedido de namoro. 😦`)
namoro1.splice(C12, 1)
fs.writeFileSync("./bunker/database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C14, 1)
fs.writeFileSync("./bunker/database/func/namoro2.json", JSON.stringify(namoro2))
}
}

// ==========[ ANAGRAMA ]==========\\

if(isGroup && fs.existsSync(`./bunker/armor/games/anagrama/${from}.json`)){
let dataAnagrama = JSON.parse(fs.readFileSync(`./bunker/armor/games/anagrama/${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagrama.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagrama.original) return reply('está perto')
if(budy.toUpperCase() == dataAnagrama.original) { anna.sendMessage(from, {text: `*Parabéns ${pushname}. Você acertou! 🥳🥳*\n*Palavra original:* ${dataAnagrama.original}\n*Iniciando o proximo jogo em 5 segundos...*`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./bunker/armor/games/anagrama/${from}.json`)		
		setTimeout(async() => {
fs.writeFileSync(`./bunker/armor/games/anagrama/${from}.json`, `${JSON.stringify(palavrasANA[Math.floor(Math.random() * palavrasANA.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./bunker/armor/games/anagrama/${from}.json`))
anna.sendMessage(from, {text:`╭━━ ⪩ 「 Descubra a palavra 」
▢ ⌁ ⚠︎ Anagrama: ${dataAnagrama2.embaralhada}
▢ ⌁ ⚠︎ Dica: ${dataAnagrama2.dica}
╰━━━ ⪨
`}) 
}, 5000)
}}

if(isGroup && fs.existsSync(`./bunker/armor/games/quiz-animais/${from}.json`)){
let dataAnagramaa = JSON.parse(fs.readFileSync(`./bunker/armor/games/quiz-animais/${from}.json`))
if(budy.slice(0,4).toUpperCase() == dataAnagramaa.original.slice(0,4).toUpperCase() && budy.toUpperCase() != dataAnagramaa.original) return reply('está perto')
if(budy.toUpperCase() == dataAnagramaa.original) { 
anna.sendMessage(from,{text: `*Parabéns ${pushname}. Você acertou! 🥳🥳*\n*Nome do Animal:* ${dataAnagramaa.original}\n*Iniciando o proximo jogo em 5 segundos...*`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./bunker/armor/games/quiz-animais/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./bunker/armor/games/quiz-animais/${from}.json`, `${JSON.stringify(quizanimais[Math.floor(Math.random() * quizanimais.length)])}`)
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./bunker/armor/games/quiz-animais/${from}.json`))
imagemtexto =`╭━━ ⪩ 「 Descubra o animal 」
▢ ⌁ ⚠︎ Jogador: ${pushname}
╰━━━ ⪨`
wew = await getBuffer(`${dataAnagrama2.foto}`)   
await anna.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: sasah})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./bunker/armor/games/gartic/${from}.json`)){
let perg_gartic = JSON.parse(fs.readFileSync(`./bunker/armor/games/gartic/${from}.json`))
if(budy.slice(0,4).toUpperCase() == perg_gartic.resposta.slice(0,4).toUpperCase() && budy.toUpperCase() != perg_gartic.resposta) return reply('Está perto!')
if(budy.toUpperCase() == perg_gartic.resposta) { 
anna.sendMessage(from,{text: `*DESCOBERTO!* Parabéns ${pushname}, iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./bunker/armor/games/gartic/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./bunker/armor/games/gartic/${from}.json`, `${JSON.stringify(garticArchives[Math.floor(Math.random() * garticArchives.length)])}`)
let dataGartic2 = JSON.parse(fs.readFileSync(`./bunker/armor/games/gartic/${from}.json`))
garticText = `👩🏼‍🏫 - A resposta é representada por um(a): ${dataGartic2.pergunta}
📜 - A resposta supostamente começa com a(s) letra(s): "${dataGartic2.letra_inicial}"
🤔 - Hmmm, contém traços? ${dataGartic2.contem_traços}

❓️ - *Não annae a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}Revelar_resposta* para revelar a resposta correta da afirmação._`
wew = await getBuffer(`${dataGartic2.imagem}`)
await anna.sendMessage(from, {image: wew, caption: garticText, thumbnail: wew}, {quoted: sasah})
}, 5000)
}
}

if(isGroup && fs.existsSync(`./bunker/armor/games/enigma/${from}.json`)){
let enigmaData = JSON.parse(fs.readFileSync(`./bunker/armor/games/enigma/${from}.json`))
if(budy.slice(0,4).toUpperCase() == enigmaData.respostaEne.slice(0,4).toUpperCase() && budy.toUpperCase() != enigmaData.respostaEne) return reply('Está perto!')
if(budy.toUpperCase() == enigmaData.respostaEne) { 
anna.sendMessage(from,{text: `*ENIGMA RESOLVIDO!* Parabéns ${pushname}, iniciando o próximo jogo em 5 segundos.`}, {"mentionedJid": [sender]}), fs.unlinkSync(`./bunker/armor/games/enigma/${from}.json`)		
setTimeout(async() => {
fs.writeFileSync(`./bunker/armor/games/enigma/${from}.json`, `${JSON.stringify(enigmaArchive[Math.floor(Math.random() * enigmaArchive.length)])}`)
let dataEnigmadataEnigma333 = JSON.parse(fs.readFileSync(`./bunker/armor/games/enigma/${from}.json`))
enigmaTezt = `📜 - Resolva o seguinte enigma abaixo:

${dataEnigmadataEnigma333.charada}

❓️ - *Não annae a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}Revelar_enigma* para revelar a resposta correta da enigma._`
wew = await getBuffer(`https://telegra.ph/file/15be608763684b3e3af38.jpg`)
await anna.sendMessage(from, {image: wew, caption: enigmaTezt, thumbnail: wew}, {quoted: sasah})
}, 5000)
}
}

//=================================\\

function contar(frase, letraProcurada) { 
var total = 0; [...frase].forEach(letra => {
if(letra === letraProcurada) total++; 
}); 
return total; 
}

joguinhodavelha()

var minesId = []
for(let obj of mines) minesId.push(obj.id)
const isPlayMines = (await mines.find(obj => obj.id == from)) ? true : false
var minecor = ['a1', 'a2', 'a3', 'a4', 'a5', 'b1', 'b2', 'b3', 'b4', 'b5', 'c1', 'c2', 'c3', 'c4', 'c5', 'd1', 'd2', 'd3', 'd4', 'd5', 'e1', 'e2', 'e3', 'e4', 'e5']

if(isAntilinkgp && isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(Procurar_String.includes("chat.whatsapp.com/")){
if(isBot) return 
link_dgp = await anna.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ')  
if(IS_DELETE) {
setTimeout(() => {
anna.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
anna.groupParticipantsUpdate(from, [sender], 'remove')
}
}

const groupIdscount = [];
for(let obj of countMessage) {
groupIdscount.push(obj.groupId);
}

// MUTAR USUÁRIO 
const GroupsMutedActived = []
for(let obj of muted) {
    GroupsMutedActived.push(obj.jid)
}
const isMuted = (isGroup && GroupsMutedActived.indexOf(from) >= 0) ? true : false
const NumbersMuted = isMuted ? muted[GroupsMutedActived.indexOf(from)].numbers : []
if(isMuted && NumbersMuted.indexOf(sender) >= 0){
setTimeout(async () => {
    //anna.groupParticipantsUpdate(from, [sender], 'remove')
    anna.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 1000)
return
}

if (isCmd) {
if (isFiltered(sender)) {
return reply(mess.floodCommands())
} else {
addFilter(sender)
}
}

//========(CONTADOR-DE-MENSAGENS)========\\
var numbersIds = []
if(isGroup && groupIdscount.indexOf(from) >= 0) {
var ind = groupIdscount.indexOf(from)
for(let obj of countMessage[ind].numbers) {numbersIds.push(obj.id)}
if(numbersIds.indexOf(sender) >=0) {
var indnum = numbersIds.indexOf(sender)
var RSM_CN = countMessage[ind].numbers[indnum]
type == "stickerMessage" ? "" : RSM_CN.messages += isCmd ? 0 : 1
type == "stickerMessage" ? "" : RSM_CN.cmd_messages += isCmd ? 1 : 0
type == "stickerMessage" ? "" : RSM_CN.aparelho = adivinha
RSM_CN.figus += type == "stickerMessage" ? 1 : 0
fs.writeFileSync('./configs/media/countmsg.json', JSON.stringify(countMessage, null, 2)+ '\n')
} else {
const messages = isCmd ? 0 : 1
const cmd_messages = isCmd ? 1 : 0
var figus = type == "stickerMessage" ? 1 : 0
countMessage[ind].numbers.push({
id: sender,
messages: messages,
cmd_messages: cmd_messages, 
aparelho: adivinha, 
figus: figus
})
fs.writeFileSync('./configs/media/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}
} else if(isGroup) {
countMessage.push({
groupId: from,
numbers: [{
id: sender,
messages: 2,
figus: 0,
cmd_messages: isCmd ? 1 : 0, 
aparelho: adivinha
}]
})
fs.writeFileSync('./configs/media/countmsg.json', JSON.stringify(countMessage, null, 2) + '\n')
}

const pickRandom = (arr) => {
return arr[Math.floor(Math.random() * arr.length)]
}

//============(EVAL-EXECUÇÕES)===========\\

if(budy.startsWith('>')){
try {
if(info.key.fromMe) return 
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return
console.log('[', colors.cyan('EVAL'),']', colors.yellow(moment(info.messageTimestamp * 1000).format('DD/MM HH:mm:ss')), colors.green(budy))
return anna.sendMessage(from, {text: JSON.stringify(eval(budy.slice(2)),null,'\t')}).catch(e => {
return reply(String(e))
})
} catch (e){
return reply(String(e))
}
}

if(budy.startsWith('(>')){
try {
if(info.key.fromMe) return   
if(!SoDono && !isnit && !issupre && !ischyt && !issupre && !ischyt) return 
var konsol = budy.slice(3)
Return = (sul) => {
var sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if(sat == undefined){
bang = util.format(sul)
}
return anna.sendMessage(from, {text: bang}, {quoted: sasah})
}

anna.sendMessage(from, {text: util.format(eval(`;(async () => { ${konsol} })()`))}).catch(e => { 
return reply(String(e))
})
console.log('\x1b[1;37m>', '[', '\x1b[1;32mEXEC\x1b[1;37m', ']', time, colors.green(">"), 'from', colors.green(sender.split('@')[0]), 'args :', colors.green(args.length))
} catch(e) {
return reply(String(e))
console.log(e)
}
}


if(body.startsWith('$')) {
if(info.key.fromMe) return 
if(!SoDono && !isnit) return 
exec(q, (err, stdout) => {
if(err) return reply(`${err}`)
if(stdout) {
reply(stdout)
}
})
}

//======================================\\


//======(ANTI-IMAGEM)========\\
if(isAntiImg && isBotGroupAdmins && type == 'imageMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return anna.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info})
if(dataGp[0].legenda_imagem != "0") {
anna.sendMessage(from, {text: dataGp[0].legenda_imagem}, {quoted: info})  
}
if(IS_DELETE) {
setTimeout(() => {
anna.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
anna.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-STICKER)========\\
if(isAntiSticker && isBotGroupAdmins && type == 'stickerMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return anna.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info})
anna.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
anna.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
anna.groupParticipantsUpdate(from, [sender], 'remove')
}

if(Antidoc && isBotGroupAdmins && type == 'documentMessage') {
if(info.key.fromMe) return
if(isGroupAdmins) return anna.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info})
if(dataGp[0].legenda_documento != "0") {
anna.sendMessage(from, {text: dataGp[0].legenda_documento}, {quoted: info}) 
}
if(IS_DELETE) {
setTimeout(() => {
anna.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
anna.groupParticipantsUpdate(from, [sender], 'remove')
}

let isTrueFalse = Array('tiktok', 'facebook','instagram','twitter','ytmp3','ytmp4','play', 'playmix', 'play2', 'play3', 'playvid', 'playvid2').some(item => item === command)

if(isUrl(PR_String) && isAntiLinkHard && !isGroupAdmins && isBotGroupAdmins && !info.key.fromMe) {
if(Procurar_String.includes("chat.whatsapp.com")) {
link_dgp = await anna.groupInviteCode(from)
if(Procurar_String.match(link_dgp)) return reply('Link do nosso grupo, não irei remover.. ') 
}
if(isCmd && isTrueFalse) return
if(IS_DELETE) {
setTimeout(() => {
anna.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
anna.groupSettingUpdate(from, 'announcement')
setTimeout(() => {
anna.groupSettingUpdate(from, 'not_announcement')
}, 1200)
if(!JSON.stringify(groupMembers).includes(sender)) return
anna.groupParticipantsUpdate(from, [sender], 'remove')
}

// ANTI NOTAS FAKES ======================>

if(isAntiNotas && budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi) && isBotGroupAdmins && !isGroupAdmins && !SoDono && !info.message?.reactionMessage?.text && budy2.length > 20) {
let verificar = budy2.toString().match(/(💳|💎|💸|💵|💷|💶|🪙|💰|🤑|⚖️)/gi)
if(verificar && budy.length < 100) return  
if(IS_DELETE) {
setTimeout(() => {
anna.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
anna.groupParticipantsUpdate(from, [sender], 'remove')
}

//FINALZIN ==============================>


//======(ANTI-VIDEO)========\\

if(isAntiVid && isBotGroupAdmins && type == 'videoMessage') {
if(isGroupAdmins) return anna.sendMessage(from,{text: mess.messageProhibitedDetAdmin()}, {quoted: info})
if(dataGp[0].legenda_video == "0") {
anna.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info})
} else {
anna.sendMessage(from, {text: dataGp[0].legenda_video}, {quoted: info})  
}
if(IS_DELETE) {
setTimeout(() => {
anna.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
anna.groupParticipantsUpdate(from, [sender], 'remove')
}

//======(ANTI-AUDIO)=======\\
if(isAntiAudio && isBotGroupAdmins && type == 'audioMessage') {
if(isGroupAdmins) return anna.sendMessage(from, {text: mess.messageProhibitedDetAdmin()}, {quoted: info})
anna.sendMessage(from, {text: mess.messageProhibitedDetUser()}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
anna.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
anna.groupParticipantsUpdate(from, [sender], 'remove')
}

//========(ANTI-PV-QUE-BLOQUEIA)======\\

if(isAntiPv) {
if(!isGroup && !SoDono && !isnit && !isPremium){ 
await sleep(2500)
msgpvblock = `./bunker/database/func/pv-msg_block-${sender}.json`
fs.writeFileSync(msgpvblock, JSON.stringify(mess.antiPrivateBlock(), null, 2))
msgmsglbl = JSON.parse(fs.readFileSync(msgpvblock))
reply(msgmsglbl)
DLT_FL(msgpvblock)
setTimeout(async () => {
anna.updateBlockStatus(sender, 'block')
}, 2000)
return
}
}

//========(ANTI_LIGAR)========\\

if(!isGroup && isAnticall) {
anna.ws.on('CB:call', async (B) => {
var msgcallblock = `./bunker/database/func/call-msg_block-${sender}.json`  
if(!fs.existsSync(msgcallblock)) {
fs.writeFileSync(msgcallblock, JSON.stringify(mess.antiCalls(), null, 2))
var msgcallbl = JSON.parse(fs.readFileSync(msgcallblock))
if(B.content[0].tag == 'offer') {
anna.sendMessage(B.content[0].attrs['call-creator'], { text: msgcallbl }).then(() => { 
anna.updateBlockStatus(B.content[0].attrs['call-creator'], "block")
DLT_FL(msgcallblock)
})
}
}
})
}

//======================================\\

{var hora_ = moment.tz('America/Sao_Paulo').format('HH:mm');
var hora_2 = moment.tz('America/Sao_Paulo').format('mm');
for (i of black_) {
if(i.hora == hora_) {var blu_dc = true} else {var blu_dc = false}
}
if(blu_dc == true) {
for ( i of black_) {
if(i.hora == hora_) var ik = i}
for ( i of ik?.PUXAR) {
if(i.avisou == true) return
if(i.length == 0) return
anna.sendMessage(i.idgp, {text: i.msg})
i.avisou = true 
fs.writeFileSync("./bunker/database/grupos/avisos.json", JSON.stringify(black_, null, 2))
}}; for ( i of black_) {
if(hora_2 >= i.hora.split(":")[1]+parseInt(1)) {
var ik2 = i
var ik_r = true} else {var ik_r = false}
}; if(ik_r == true) { 
for ( i of ik2.PUXAR) {
if(i.avisou == true) {
i.avisou = false
fs.writeFileSync("./bunker/database/grupos/avisos.json", JSON.stringify(black_, null, 2))}}}}

//=========(ANTIPV-QUE-SÓ-FALA)==========\\

if(!isGroup && !isPremium && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe && isAntiPv2) return reply(mess.antiPrivateNoBlock())

//======================================\\
var i9 = countMessage.map(i => i.groupId).indexOf(from)
var idgrupo = groupIdscount.indexOf(from)

var idusu = numbersIds?.indexOf(sender)

if(isGroup && JSON.stringify(countMessage).includes(from) && JSON.stringify(countMessage[i9]).includes(sender)) {

try {
var qnt_msg = countMessage[idgrupo].numbers[idusu].messages
} catch {
var qnt_msg = 0  
}

var patente = "Aspirante"
 
var level_up = 0

if(qnt_msg >= 0 && qnt_msg < 20){var patente = "Aspirante"; var level_up = 0};if(qnt_msg >= 20 && qnt_msg < 50){var patente = "Recruta"; var level_up = 1}; if(qnt_msg >= 50 && qnt_msg < 100){var patente = "Soldado"; var level_up = 2}; if(qnt_msg >= 100 && qnt_msg < 200){var patente = "Cabo"; var level_up = 3}; if(qnt_msg >= 200 && qnt_msg < 300){var patente = "Sargento"; var level_up = 4}; if(qnt_msg >= 300 && qnt_msg < 400){var patente = "Sargento I"; var level_up = 5}; if(qnt_msg >= 400 && qnt_msg < 500){var patente = "Sargento II"; var level_up = 6}; if(qnt_msg >= 500 && qnt_msg < 600){var patente = "Sargento III"; var level_up = 7}; if(qnt_msg >= 600 && qnt_msg < 700){var patente = "Sargento IV"; var level_up = 8}; if(qnt_msg >= 700 && qnt_msg < 800){var patente = "Sargento V"; var level_up = 9}; if(qnt_msg >= 800 && qnt_msg < 900){var patente = "Sargento VI"; var level_up = 10}; if(qnt_msg >= 900 && qnt_msg < 1000){var patente = "Sargento VII"; var level_up = 11}; if(qnt_msg >= 1000 && qnt_msg < 1100){var patente = "Sargento VII"; var level_up = 12}; if(qnt_msg >= 1100 && qnt_msg < 1200){var patente = "Sargento VIII"; var level_up = 13}; if(qnt_msg >= 1200 && qnt_msg < 1500){var patente = "Sargento IX"; var level_up = 14}; if(qnt_msg >= 1500 && qnt_msg < 2000){var patente = "Sargento X"; var level_up = 15}; if(qnt_msg >= 2000 && qnt_msg < 2500){var patente = "Tenente I"; var level_up = 16}; if(qnt_msg >= 2500 && qnt_msg < 2600){var patente = "Tenente II"; var level_up = 17}; if(qnt_msg >= 2600 && qnt_msg < 2700){var patente = "Tenente III"; var level_up = 18}; if(qnt_msg >= 2700 && qnt_msg < 2800){var patente = "Tenente III"; var level_up = 19}; if(qnt_msg >= 2800 && qnt_msg < 2900){var patente = "Tenente IV"; var level_up = 20}; if(qnt_msg >= 2900 && qnt_msg < 3000){var patente = "Tenente V"; var level_up = 21}; if(qnt_msg >= 3000 && qnt_msg < 3200){var patente = "Capitão I"; var level_up = 22}; if(qnt_msg >= 3200 && qnt_msg < 3400){var patente = "Capitão II"; var level_up = 23}; if(qnt_msg >= 3400 && qnt_msg < 3800){var patente = "Capitão III"; var level_up = 24};if(qnt_msg >= 3800 && qnt_msg < 4000){var patente = "Capitão IV"; var level_up = 25}; if(qnt_msg >= 4000 && qnt_msg < 5000){var patente = "Capitão V"; var level_up = 26}; if(qnt_msg >= 5000 && qnt_msg < 5500){var patente = "Major I"; var level_up = 27}; if(qnt_msg >= 5500 && qnt_msg < 6000){var patente = "Major II"; var level_up = 28}; if(qnt_msg >= 6000 && qnt_msg < 6500){var patente = "Major III"; var level_up = 29}; if(qnt_msg >= 6500 && qnt_msg < 8000){var patente = "Major IV"; var level_up = 30}; if(qnt_msg >= 8000 && qnt_msg < 9000){var patente = "Major V"; var level_up = 31};if(qnt_msg >= 9000 && qnt_msg < 10000){var patente = "Tenente C I"; var level_up = 32};if(qnt_msg >= 10000 && qnt_msg < 11000){var patente = "Tenente C II"; var level_up = 33};if(qnt_msg >= 11000 && qnt_msg < 12000){var patente = "Tenente C II"; var level_up = 34};if(qnt_msg >= 12000 && qnt_msg < 13000){var patente = "Tenente C III"; var level_up = 35};if(qnt_msg >= 13000 && qnt_msg < 15000){var patente = "Tenente C IV"; var level_up = 36};if(qnt_msg >= 15000 && qnt_msg < 17000){var patente = "Tenente C V"; var level_up = 37};if(qnt_msg >= 17000 && qnt_msg < 20000){var patente = "Coronel I"; var level_up = 38}; if(qnt_msg >= 20000 && qnt_msg < 23000){var patente = "Coronel II"; var level_up = 39}; if(qnt_msg >= 25000 && qnt_msg < 28000){var patente = "Coronel III"; var level_up = 40}; if(qnt_msg >= 28000 && qnt_msg < 30000){var patente = "Coronel IV"; var level_up = 41}; if(qnt_msg >= 30000 && qnt_msg < 35000){var patente = "Coronel V"; var level_up = 42}

if(isLevelingOn && !type == "stickerMessage") {
switch(qnt_msg) {
case 20: case 50: case 100: case 200:case 300: case 400:
case 500: case 600: case 700: case 800: case 900: case 1000:
case 1100: case 1200: case 1500: case 2000: case 2500: case 2600:
case 2700: case 2800: case 2900: case 3000: case 3200: case 3400:
case 3600: case 3800: case 4000: case 5000: case 5500: case 6000:
case 6500: case 8000: case 9000: case 10000: case 11000: case 12000: 
case 13000: case 15000: case 17000: case 20000: case 23000: 
case 25000: case 28000: case 30000:
anna.sendMessage(from, {text: mess.updatePatente(sender, qnt_msg, patente, level_up), mentions: [sender]}) 
break
}
}
}

if(isGroup) {
if(!JSON.stringify(patentes).includes(from)) {
patentes.push({
grupoID: from, 
usus: [{
id: sender, 
level_usu: level_up,
patente_usu: patente}]})
fs.writeFileSync("./configs/media/patentes.json", JSON.stringify(patentes))
}
var i8 = patentes.map(i => i.grupoID).indexOf(from)
if(!JSON.stringify(patentes[i8].usus).includes(sender)) {
patentes[i8].usus.push({
id: sender, 
level_usu: level_up,
patente_usu: patente})
fs.writeFileSync("./configs/media/patentes.json", JSON.stringify(patentes))
}
var i9 = patentes[i8].usus.map(i => i.id).indexOf(sender)
if(patentes[i8].usus[i9].patente_usu != patente) {
patentes[i8].usus[i9].patente_usu = patente
fs.writeFileSync("./configs/media/patentes.json", JSON.stringify(patentes))
}
if(patentes[i8].usus[i9].level_usu != level_up) {
patentes[i8].usus[i9].level_usu = level_up
fs.writeFileSync("./configs/media/patentes.json", JSON.stringify(patentes))
}
}

if(isX9VisuUnica) {
if(info.message?.viewOnceMessageV2 || type == "viewOnceMessage") {
if(JSON.stringify(info).includes("videoMessage")) {
var px = info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage
px.viewOnce = false
px.video = {url: px.url}
px.caption += "\n\nRevelando o vídeo na visualização única enviada.."
anna.sendMessage(from,px)
} else {
var px = info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage
px.viewOnce = false
px.image = {url: px.url}
px.caption += "\n\nRevelando a imagem na visualização única enviada..."
anna.sendMessage(from,px)
}}}

/////\\\\\\//////\\\\\\////\\\\////\\\///\\\///\\\\
            
if(isCmd && isBanned) return reply(mess.bannedUser())

var palavrasfr = JSON.parse(fs.readFileSync("./bunker/database/grupos/palavras_forca.json"))

var palavrasfrc = palavrasfr[Math.floor(Math.random() * palavrasfr.length)]

var ALT_FR = palavrasfrc.plvr.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "");

async function rv_forca() {
var blue = []
for (let i = 0; i < ALT_FR.length; i++) {
if(ALT_FR[i] == ' '){
blue.push(' ')
} else {
blue.push('_')
}
}  
dataGp[0].forca_ofc = [{acertos: 0, erros: 0, palavra: blue, escreveu: [], palavra_ofc: ALT_FR, dica: palavrasfrc.dica, tema: palavrasfrc.tema}]
dataGp[0].forca_inc = false
setGp(dataGp)
}

function reactMessage(emoji) {
anna.sendMessage(from, {react: {text: emoji, key: info.key}})
}

// ÍNICIO: CASES / COMANDOS COM PREFIXO:
switch(command){
 
case 'lista_aluguel':
if(!SoDono&& !info.key.fromMe) return reply(enviar.msg.donosmt)
bla = `[Total: *${rg_aluguel.length}*] - Lista de grupos alugados:\n-\n`
for ( i = 0; i < rg_aluguel.length; i++) {
bla += `*[${i+1}]* - Id: ${rg_aluguel[i].grupo}\nNome do Grupo: ${rg_aluguel[i].nome_do_gp}\nData de vencimento: ${rg_aluguel[i].data}\nTexto informando sobre o dono do grupo alugado: ${rg_aluguel[i].texto}\n-\n`
}
reply(bla)
break

case 'rm_aviso':
case 'rm_avisos':  
if(!isGroup) return reply(enviar.msg.grupo)  
if(!isGroupAdmins) return reply(enviar.msg.adm)
for ( i of black_) {var RDFA = i}
if(!JSON.stringify(RDFA.PUXAR).includes(from)) return reply(mess.noWarning(prefix))
RDFA.PUXAR.splice(RDFA.PUXAR.indexOf(from))
fs.writeFileSync("./bunker/database/grupos/avisos.json", JSON.stringify(black_, null, 2))
reply(mess.warningRemoved())
break

case 'rg_aviso':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)  
var [hr, ms] = q.trim().split("|")
if(!q.trim().includes(":") && !q.trim().includes("|")) return reply(mess.warningSyntax(prefix))
var i5 = black_?.map(i => i?.hora)?.indexOf(hr)
if(JSON.stringify(black_[i5]?.PUXAR)?.includes(from)) {
black_[i5].PUXAR.splice(black_[i5].PUXAR.map(i => i.idgp).indexOf(from))
fs.writeFileSync("./bunker/database/grupos/avisos.json", JSON.stringify(black_, null, 2))
setTimeout(() => {
reply(mess.sucessDeleteWarning(prefix))
}, 500)
} else if(!JSON.stringify(black_).includes(hr)) {
black_.push({hora: hr, PUXAR: [{idgp: from, msg: ms, avisou: false}]})
fs.writeFileSync("./bunker/database/grupos/avisos.json", JSON.stringify(black_, null, 2))
reply(mess.sucessWarning())
} else if(!JSON.stringify(black_[i5].PUXAR).includes(from)) {
black_[i5].PUXAR.push({idgp: from, msg: ms, avisou: false})
fs.writeFileSync("./bunker/database/grupos/avisos.json", JSON.stringify(black_, null, 2))
reply(mess.sucessWarning())
}
break
  
case 'rg_aluguel':
if(!SoDono) return reply(enviar.msg.donosmt)
if(JSON.stringify(rg_aluguel).includes(from)) return reply(mess.aluguelGroupRegistered())
var [data, texto] = q.trim().split("|")
if(!q.trim().includes("|")) return reply(mess.aluguelRgSyntax(prefix))
rg_aluguel.push({grupo: from, data: data, texto: texto, nome_do_gp: groupName, cobrou: false})
fs.writeFileSync("./configs/media/rg_aluguel.json", JSON.stringify(rg_aluguel))
reply(mess.aluguelRegisteredS())
break

case 'iddogrupo':
if(!SoDono) return reply(enviar.msg.donosmt)
reply(from)
break

case 'rm_aluguel':
if(!SoDono) return reply(enviar.msg.donosmt)  
if(!q.trim().includes("g.us")) return reply(mess.aluguelRemoveSyntax(prefix))
var i6 = rg_aluguel.map(i => i.grupo).indexOf(q.trim())
rg_aluguel.splice(i6, 1)
fs.writeFileSync("./configs/media/rg_aluguel.json", JSON.stringify(rg_aluguel))
reply(mess.aluguelRemoveGroup())
break

//=========== [ ÍNICIO JOGOS ] ========= //

case 'addpalavras_forca':
case 'addpalavras_f':  
if(!SoDono) return reply(enviar.msg.donosmt)
var [ttl, tema, dc] = q.toLowerCase().trim().split("|")
if(!q.includes("|")) return reply(mess.FormWrong_AddWordsForca1(prefix))
if(q.lastIndexOf("|") < 0) return reply(mess.FormWrong_AddWordsForca2(prefix))
kir = []
for (i of palavrasfr) {kir.push(i.plvr)}
if(kir.indexOf(ttl.toLowerCase().trim()) >= 0) return reply(mess.inUseWords_Forca())
palavrasfr.push({plvr: ttl, tema: tema, dica: dc})
fs.writeFileSync("./bunker/database/grupos/palavras_forca.json", JSON.stringify(palavrasfr, null, 2))
reply(mess.sucessAddWord_Forca())
break 

case 'rmpalavra_f':
case 'rmpalavra_forca':  
if(!SoDono) return reply(enviar.msg.donosmt) 
var i5 = palavrasfr.map( i => i.plvr).indexOf(q.trim().toLowerCase())
palavrasfr.splice(i5, 1)
fs.writeFileSync("./bunker/database/grupos/palavras_forca.json", JSON.stringify(palavrasfr, null, 2))
reply(mess.sucessRemWord_Forca())
break

case 'rv-forca': case 'resetforca': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isGroup) return reply(enviar.msg.grupo)
if(dataGp[0].forca_inc == false) return reply(mess.gameForcaNotStarted(prefix))
rv_forca()
reply(mess.sucessResetForca(prefix))
break
  
case 'mostrar_forca':
case 'ver_forca':  
case 'iniciar_forca':  
case 'jogodaforca':  
if(!isGroup) return reply(enviar.msg.grupo)
try {
if(dataGp[0].forca_inc) return reply(mess.forcaInProgress(prefix))
if(!dataGp[0].forca_inc) {
rv_forca()
var DM_FR = dataGp[0].forca_ofc[0]
dataGp[0].forca_inc = true
setGp(dataGp)
await sleep(300)
linha_fr = " "
for (i of DM_FR.palavra){linha_fr += ` ${i}`}
reply(mess.forcaStarted(DM_FR, linha_fr, prefix)) 
}
} catch (e) {
console.log(e)
}
break

case 'r-forca':
case 'r-f':
if(!isGroup) return reply(enviar.msg.grupo)  
if(!dataGp[0].forca_inc) return reply(mess.gameForcaNotStarted(prefix))
if(!q.toLowerCase().trim()) return reply("Digite a letra que deseja responder..")
var q2 = q_2.trim().toLowerCase()
if(ANT_LTR_MD_EMJ(q2) || Number(q2)) return reply("Não pode letras modificadas, nem emoji, nem números..")
if(q.trim().length == 2) return reply("Digite letra por letra para tentar adivinhar, ou acerte a palavra toda, boa sorte...")
DM_FR = dataGp[0].forca_ofc[0]
if(DM_FR.escreveu.indexOf(q2) >= 0) return reply("Esta letra já foi utilizada..")
var ERRQ = DM_FR.palavra_ofc.includes(q2) ? 0 : 1
var ERROS = dataGp[0].forca_ofc[0].erros
DM_FR.escreveu.push(q2); setGp(dataGp)
PSC = [] 
if(DM_FR.palavra_ofc.indexOf(q2) >= 0) {
for (i = 0; i < DM_FR.palavra_ofc.length; i++) {
if(DM_FR.palavra_ofc[i] == q2) {
PSC.push(i)
DM_FR.acertos += 1
}}
setGp(dataGp)
for ( i of PSC){
DM_FR.palavra[i] = q2; setGp(dataGp)}
}
await sleep(300)
linha_fr = " "
for ( i of DM_FR.palavra){linha_fr += ` ${i}`}
letra_ut = " "
for ( i of DM_FR.escreveu){letra_ut += `${i}, `}
if(q.length > 2) {reply("Humm, espertinho quer acertar a palavra toda")}
await sleep(500)
if(DM_FR.palavra_ofc.indexOf(q2) >= 0 || q2.length > 2 && q2 == DM_FR.palavra_ofc) {
reply(`${q2.length > 2 ? `Você acertou a palavra toda e ganhou bom menino(a), irei resetar o jogo...` : DM_FR.acertos == DM_FR.palavra_ofc.length ? `Parabéns, toda palavra foi concluída : < ${DM_FR.palavra_ofc} > irei resetar o jogo..`:`Você acertou uma letra e ganhou continue assim..`}`)
if(q2.length > 2 || DM_FR.acertos == DM_FR.palavra_ofc.length){return rv_forca()}
await sleep(200)
reply(mess.forcaStartedRespond(DM_FR, ERROS, ERRQ, linha_fr, letra_ut))
} else {
reply(`${q2.length > 2 ? `Infelizmente você perdeu, errou a palavra toda, deveria ter tentado letra por letra né, irei resetar o jogo..` :ERROS+ERRQ == 6 ? `Aa, você completou 6 Erros, e perdeu irei resetar o jogo..` : `Você Errou, e perdeu 😥..`}`)
dataGp[0].forca_ofc[0].erros += 1
setGp(dataGp)
if(q2.length > 2 || ERROS+ERRQ == 6){return rv_forca()}
await sleep(200)
reply(RST_T)
}
break

case 'carteira':
var salldo = VerSaldo(sender) 
reply(`Seu saldo disponível em conta é: *R$${salldo}*, gaste com moderação!\nBanco: *annaCASH BANK - [BRAZIL]*\n-\nReceba transferências por meio de sua *chave pix*, use: ${sender.split("@")[0]}`)
break

case 'transferir': case 'pix': {
txt = q.replace(" /", "/").replace("/ ", "/").replace(" / ", "/")
var [receber, valor] = txt.split("/")
if (!q.includes('/')) return reply(mess.syntaxCash(prefix))
if (isNaN(valor)) return await reply('Use apenas números nada de letras.')
if (valor < 3) return reply(`Transfrência mínima é de 3 reais.`)
if (VerSaldo(sender) < valor) return reply(mess.syntaxWithoutCash(valor))
const recebidor = `${receber.split("@")[0]}@s.whatsapp.net`
taxa = 0.00 * valor 
taxado = valor - taxa
if (command === "transferir") {
AdicionarSaldo(recebidor, taxado)
ConfirmarPagamento(sender, valor)
reply(mess.sucessTransferCash1(sender, receber, valor))
} else if (command === "pix") {
AdicionarSaldo(recebidor, taxado)
ConfirmarPagamento(sender, valor)
reply(mess.sucessTransferCash2(sender, receber))
}
}
break

case 'saldo':
if (!SoDono) return reply(enviar.msg.donosmt)
if (!q) return  reply(mess.explanationCash(prefix))
if (args[0] === 'add') {
if (info.message.extendedTextMessage != undefined) {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
valoh = Number(args[2])
AdicionarSaldo(mentioned[0], valoh)
reply(`*「 SALDO ADICIONADO COM SUCESSO 」*\n➸ *ID*: ${mentioned[0]}`)
} else {
valoh = Number(args[2])
AdicionarSaldo(args[1] + '@s.whatsapp.net', valoh)
reply(`*「 SALDO ADICIONADO COM SUCESSO 」*\n➸ *ID*: ${args[1]}@s.whatsapp.net`)
}
} else if (args[0] === 'del') {
if (info.message.extendedTextMessage != undefined) {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
valoh = Number(args[2])
ConfirmarPagamento(mentioned[0], valoh)
reply(`*「 SALDO RETIRADO COM SUCESSO 」*\n➸ *ID*: ${mentioned[0]}`)
} else {
valoh = Number(args[2])
ConfirmarPagamento(args[1] + '@s.whatsapp.net', valoh)
reply(`*「 SALDO RETIRADO COM SUCESSO 」*\n➸ *ID*: ${args[1]}@s.whatsapp.net`)
}
}
break

case 'vercarteira': {
if (!SoDono) return reply(enviar.msg.donosmt)
if (info.message.extendedTextMessage != undefined) {
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
carteirauser = VerSaldo(mentioned[0])
mention(`Carteira do Usuário: @${mentioned[0].split("@")[0]}\n– Saldo total do usuário: R$${carteirauser}`)
} else {
carteirauser2 = VerSaldo(args[1] + '@s.whatsapp.net')
mention(`Carteira do Usuário: @${mentioned[0].split("@")[0]}\n– Saldo total do usuário: R$${carteirauser2}`)
}
}
break

case 'apostar':{
if (!isGroup) return reply('Comando apenas para grupo!') 
const dinheiro_ = VerSaldo(sender)
const checkxpr = VerSaldo(sender, dinheiro_) 
const quantidader = `50`
if (checkxpr <= quantidader) return reply(mess.betCashInsufficient(quantidader, checkxpr))
if (Number(args[0]) >= checkxpr || Number(args[0]) >= dinheiro_) return reply(mess.betCashUseDenied(quantidader, checkxpr))
if (Number(args[0]) < 1) return reply(`Qual o valor que você deseja apostar?`)
if (isNaN(args[0])) return reply(`Digite "${prefix}apostar 100" (desse jeito sem nenhuma vírgula ou letras por favor.`)
const double = Math.floor(Math.random() * 7) + 1
const nrolxp = Number(-args[0])
const prolxp = double + Number(args[0])
if (double == 1) {
await reply(`🔪BANG!!!💣\n\nVocê perdeu na roleta-russa, causando uma perca de ${nrolxp} em seu dinheiro.`)
valoh1 = Number(args[0])
ConfirmarPagamento(sender, valoh1)
} else if (double == 2) {
await reply(`*Você Ganhou! Parabéns.. 🥳*\nSobreviveu ao tiro e recebeu ${prolxp} COINS!`)
AdicionarSaldo(sender, prolxp, dinheiro_)
} else if (double == 3) {
await reply(`Poxa você está sem sorte😓\n\nVocê perdeu ${nrolxp}\nNão desista continue apostando😎🤙`)
valoh2 = Number(args[0])
ConfirmarPagamento(sender, valoh2)
} else if (double == 4) {
await reply(`Essa foi por pouco!!😬\n\nVocê consegiu concluir o golpe e ganhou ${prolxp} COINS`)
AdicionarSaldo(sender, prolxp, dinheiro_)
} else if (double == 5) {
await reply(`Você errou o cavalo 🐴! :(\n\nAcabou perdendo ${nrolxp} em seu dinheiro, que tal.. apostar mais alto??🙈.`)
valoh3 = Number(args[0])
ConfirmarPagamento(sender, valoh3)
} else if (double == 6) {
await reply(`*🥳 FINALMENTE, DEU BOM PA VC!* ✅️\n\nVocê finalmente ganhou, receba seus ${prolxp} COINS!️`)
AdicionarSaldo(sender, prolxp, dinheiro_)
}
}
break

case 'minado': 
if (isPlayMines) return reply('*Uma partida já foi iniciada, espere acabar para iniciar uma nova...*')
if (args.length < 1) return reply('*Diga a dificuldade: easy, normal, hard*')
teks = args[0].toLowerCase()
if (teks == 'easy') q_mines = 5
else if (teks == 'normal') q_mines = 8
else if (teks == 'hard') q_mines = 12
else return reply('*Dificuldade inválida*')
p_mines = await getMinesPositions(minecor, q_mines)
atp = (q_mines == 5) ? 3 : (q_mines == 8) ? 5 : (q_mines == 12) ? 8 : 5
ctw = minecor.filter(function(el) {
return !p_mines.includes(el)
})
var minframes = JSON.parse(fs.readFileSync('./bunker/armor/games/minesframe.json'))
mines.push({
id: from,
pos_mines: p_mines,
qnt_mines: q_mines,
selected_cord: [],
cord_to_win: ctw,
attempts: atp,
tips_d: 0,
hits: 0,
minesp: minframes,
})
fs.writeFileSync('./bunker/armor/games/mines.json', JSON.stringify(mines, null, 2))
anna.sendMessage(from, {image: {url: minado_bomb}, caption: `💣 *Campo Minado:*\n      • Não annae como jogar? Use o comando: *${prefix}mineshelp*\n      • Caso desejar encerrar ou resetar a partida, use: *${prefix}minareset*\n-\n• *Números:* 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣\n• *Coluna A:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna B:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna C:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna D:* 🟦 🟦 🟦 🟦 🟦\n• *Coluna E:* 🟦 🟦 🟦 🟦 🟦\n-\n• Quantidade de minas: *${q_mines}*\n• Nível de dificuldade: *${teks}*\n• Número de tentativas: *${atp}*`})
break

case 'mina': 
if (!isPlayMines) return reply('*Nehuma partida foi iniciada*')
if (args.length < 1) return reply('*Diga a dificuldade: easy, normal, hard*')
teks = args[0].toLowerCase()
play_i = minesId.indexOf(from)
for(let obj of args) {
teks = obj.toLowerCase()
if (!minecor.includes(teks)) return reply('Escolha uma coordenada')
if (mines[play_i].selected_cord.includes(teks)) return reply('Coordenada já selecionada')
if (mines[play_i].pos_mines.includes(teks)) {
mines[play_i].minesp[teks] = '💣'
mines[play_i].attempts -= 1
mines[play_i].tips_d = 0
} else {
mines[play_i].minesp[teks] = '⭐'
mines[play_i].hits += 1
mines[play_i].tips_d += 1
}
mines[play_i].selected_cord.push(teks)
}
e = mines[play_i].minesp
res_teks = `💣 *Campo Minado:*\n      • Não annae como jogar? Use o comando: *${prefix}mineshelp*\n      • Caso desejar encerrar ou resetar a partida, use: *${prefix}minareset*\n-\n• *Números:* 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣\n• *Coluna A:* ${e.a1} ${e.a2} ${e.a3} ${e.a4} ${e.a5}\n• *Coluna B:* ${e.b1} ${e.b2} ${e.b3} ${e.b4} ${e.b5}\n• *Coluna C:* ${e.c1} ${e.c2} ${e.c3} ${e.c4} ${e.c5}\n• *Coluna D:* ${e.d1} ${e.d2} ${e.d3} ${e.d4} ${e.d5}\n• *Coluna E:* ${e.e1} ${e.e2} ${e.e3} ${e.e4} ${e.e5}\n-\n• Quantidade de minas: *${mines[play_i].qnt_mines}*\n• Quantidade de tentativas: *${mines[play_i].attempts}*\n• Quantidade de acertos: *${mines[play_i].hits}*`
if (mines[play_i].attempts <= 0) {
res_teks += '\n-\n*😭 Que pena! você perdeu!❌*'
await mines.splice(play_i, 1)
console.log(mines);
fs.writeFileSync('./bunker/armor/games/mines.json', JSON.stringify(mines, null, 2))
anna.sendMessage(from, {image: {url: minado_bomb}, caption: res_teks})
} else {
if (mines[play_i].selected_cord.length >= mines[play_i].cord_to_win.length) {
containAll = mines[play_i].cord_to_win.every(e => {
return mines[play_i].selected_cord.includes(e)
})
if (containAll) {
res_teks += '\n-\n*🥳 Parabéns! você venceu!✅*'
await mines.splice(play_i, 1)
console.log(mines);
fs.writeFileSync('./bunker/armor/games/mines.json', JSON.stringify(mines, null, 2))
anna.sendMessage(from, {image: {url: minado_bomb}, caption: res_teks})
}
} else {
if (mines[play_i].tips_d >= 3) {
res_teks += `\n-\nVocê tem direito a ${parseInt(mines[play_i].tips_d/3)} Dica(s)`
fs.writeFileSync('./bunker/armor/games/mines.json', JSON.stringify(mines, null, 2))
anna.sendMessage(from, {image: {url: minado_bomb}, caption: res_teks})
} else {
fs.writeFileSync('./bunker/armor/games/mines.json', JSON.stringify(mines, null, 2))
anna.sendMessage(from, {image: {url: minado_bomb}, caption: res_teks})
}
}
}
break

case 'minareset': 
if (!isPlayMines) return reply('*Nehuma partida foi iniciada*')
play_i = minesId.indexOf(from)
mines.splice(play_i, 1)
fs.writeFileSync('./bunker/armor/games/mines.json', JSON.stringify(mines, null, 2))
reply('*Campo minado resetado com sucesso!*')
break

case 'mineshelp': 
reply(MinesHelp(prefix))
break

case 'minatips': 
if (!isPlayMines) return reply('*Nehuma partida foi iniciada*')
play_i = minesId.indexOf(from)
if (mines[play_i].tips_d >= 3) {
is_columns = Math.random() < 0.5
if (!is_columns) {
m_sorted = Math.floor(Math.random() * mines[play_i].pos_mines.length + 0);
row = mines[play_i].pos_mines[m_sorted].charAt(0)
mines_row = 0
for(let obj of mines[play_i].pos_mines) {
if (obj.startsWith(row)) mines_row += 1
}
mines[play_i].tips_d -= 3
fs.writeFileSync('./bunker/armor/games/mines.json', JSON.stringify(mines, null, 2))
reply(`*💡Há ${mines_row} bomba(s) na fileira ${row}💡*`)
} else {
m_sorted = Math.floor(Math.random() * mines[play_i].pos_mines.length + 0);
column = mines[play_i].pos_mines[m_sorted].charAt(1)
mines_column = 0
for(let obj of mines[play_i].pos_mines) {
if (obj.endsWith(column)) mines_column += 1
}
mines[play_i].tips_d -= 3
fs.writeFileSync('./bunker/armor/games/mines.json', JSON.stringify(mines, null, 2))
reply(`*💡Há ${mines_column} bomba(s) na coluna ${column}💡*`)
}
} else return reply('*Acerte 3 ou mais vezes para ter direito a uma dica*')
break

case 'churrasco': case 'açougue': case 'vendas':  
let picanha = Math.floor(Math.random() * 19) + 10
let contrafl = Math.floor(Math.random() * 10) + 17
let frangoassa = Math.floor(Math.random() * 15) + 20
let migilhon = Math.floor(Math.random() * 40) + 60
let resultFinal = picanha + contrafl + frangoassa + migilhon
reply(`Aguarde 9 segundos para sair os resultados da peças de carnes vendidas!`)
 await delay(9000)
var logochurras = "https://telegra.ph/file/96a9f0a48bb9f81b30ede.jpg"
anna.sendMessage(from, {image: {url: `${logochurras}`}, caption: mess.barbecueResult(picanha, contrafl, frangoassa, migilhon, resultFinal)}, {quoted: sasah})
AdicionarSaldo(sender, resultFinal)
break

case 'pescar': case 'pesca':  
var lagostas = Math.floor(Math.random() * 19) + 10
var caranguejos = Math.floor(Math.random() * 10) + 17
var camaroes = Math.floor(Math.random() * 15) + 20
var mexilhao = Math.floor(Math.random() * 40) + 60
var valorfinal = lagostas + caranguejos + camaroes + mexilhao
reply(`Aguarde 9 segundos para sair os resultados da pesca!`)
await delay(9000)
var logopescad = "https://telegra.ph/file/e0346a4d7a27cde1fd5cd.jpg"
anna.sendMessage(from, {image: {url: `${logopescad}`}, caption: mess.fishingResult(lagostas, caranguejos, camaroes, mexilhao, valorfinal)}, {quoted: sasah})
AdicionarSaldo(sender, fdskk)
break

case 'minerar':  
if (!isGroup) return reply(enviar.msg.grupo) 
let minerar = Math.floor(Math.random() * 100)
reply(mess.resultMinerar(minerar))
AdicionarSaldo(sender, minerar)
break

case 'hackear':
if (!marc_tds) return reply("Marque o usuário que deseja hackear...")
if (!fs.existsSync('./bunker/database/usuarios/hack-rpg.json')) {
   fs.writeFileSync('./bunker/database/usuarios/hack-rpg.json', JSON.stringify({}));
}
const hackCooldown = JSON.parse(fs.readFileSync('./bunker/database/usuarios/hack-rpg.json', 'utf8'));
const currentTimeHack = Date.now();
const lastHackTime = hackCooldown[sender] || 0;
const timeSinceLastHack = currentTimeHack - lastHackTime;
const hackCooldownTime = 30 * 60 * 1000; // 30 minutos em milissegundos
if (timeSinceLastHack < hackCooldownTime) {
const remainingTime = (hackCooldownTime - timeSinceLastHack) / 1000;
return reply(`Espere *${remainingTime.toFixed(0)}s* antes de hackear novamente.`);
}
const hacker = Math.floor((Math.random() * 100) + 200);
const dinheirohack = VerSaldo(marc_tds);
const checkxprhack = VerSaldo(marc_tds, dinheirohack);
const quantidaderhack = 50;
if (checkxprhack <= quantidaderhack) return reply(`Esse tá mais liso que manteiga! Vamos trabalhar vagabundokkkk`);
ConfirmarPagamento(marc_tds, hacker);
async function startHackingMessage() {
var messageEdited = [
`👤 Username: ${menc_os2.split("@")[0]}`,
"🔑 Password: **",
"🔑 Password: ****",
"🔑 Password: ******",
"🔑 Password: ********",
"🔑 Password: **********",
"✔️ Sucesso ao executar o login ao banco!",
"⏳️ Iniciando acesso aos servidores e fazendo uma varredura na segurança do cliente.",
`🤖 *Sucesso!* Você acabou de realizar a transferência no valor de R$${hacker} para sua conta bancária no *SBANK.*\nUsuário prejudicado: [@${menc_os2.split("@")[0]}]`
]
let { key } = await anna.sendMessage(from, {text: `👩🏻‍💻 Iniciando processo de invasão do banco de [@${menc_os2.split("@")[0]}].`, mentions: [menc_os2]}, {quoted: info})
for (let i = 0; i < messageEdited.length; i++) {
await anna.sendMessage(from, {text: messageEdited[i], mentions: [menc_os2], edit: key});
}
}
startHackingMessage()
AdicionarSaldo(sender, hacker)
hackCooldown[sender] = currentTimeHack;
fs.writeFileSync('./bunker/database/usuarios/hack-rpg.json', JSON.stringify(hackCooldown));
break;

case 'steal': case 'assaltar': case 'furtar':
if (!marc_tds) return reply("Marque o usuário que deseja roubar...")
if (!fs.existsSync('./bunker/database/usuarios/steal-rpg.json')) {
   fs.writeFileSync('./bunker/database/usuarios/steal-rpg.json', JSON.stringify({}));
}
const stealHomeUser = JSON.parse(fs.readFileSync('./bunker/database/usuarios/steal-rpg.json', 'utf8'));
const currentTimeSteal = Date.now();
const lastStealTime = stealHomeUser[sender] || 0;
const timeSinceLastSteal = currentTimeSteal - lastStealTime;
const stealCooldownTime = 30 * 60 * 1000; // 30 minutos em milissegundos
if (timeSinceLastSteal < stealCooldownTime) {
const remainingStTime = (stealCooldownTime - timeSinceLastSteal) / 1000;
return reply(`Espere *${remainingStTime.toFixed(0)}s* antes de roubar novamente.`);
}
const steal = Math.floor((Math.random() * 100) + 200);
const dinheiroSteal = VerSaldo(marc_tds);
const checkxprSteal = VerSaldo(marc_tds, dinheiroSteal);
const quantidaderSteal = 50;
if (checkxprSteal <= quantidaderSteal) return reply(`O usuário mencionado não tem dinheiro suficiente para ser hackeado...`);
ConfirmarPagamento(marc_tds, steal);
async function startStealMessage() {
var messageEdited = [
`️🕵🏼‍♀ *Verificando*, se há pessoas na rua ou na casa que será furtada por segurança.`,
`🕵🏼‍♀ *Verificando*, se há pessoas na rua ou na casa que será furtada por segurança..`,
`🕵🏼‍♀ *Verificando*, se há pessoas na rua ou na casa que será furtada por segurança...`,
`📡 *Resposta:* Nenhuma pessoa detectada em ambos dos lugares.`,
`🗝️ Abrindo as fechaduras das portas bem devagar para ninguém suspeitar.`,
`🗝️ Abrindo as fechaduras das portas bem devagar para ninguém suspeitar..`,
`🗝️ Abrindo as fechaduras das portas bem devagar para ninguém suspeitar...`,
`🧭 Procurando, localizando o cofre ou baú de tesouro da casa.`,
`🧭 Procurando, localizando o cofre ou baú de tesouro da casa..`,
`🧭 Procurando, localizando o cofre ou baú de tesouro da casa...`,
`🤖 *Encontrado!* Você realizou um furto com sucesso na casa de [@${menc_os2.split("@")[0]}], encontrando ${steal} coins em um cofre da casa.`
]
let { key } = await anna.sendMessage(from, {text: `⚠️ Iniciando o processo de invasão da casa do [@${menc_os2.split("@")[0]}]...`, mentions: [menc_os2]}, {quoted: info})
for (let i = 0; i < messageEdited.length; i++) {
await anna.sendMessage(from, {text: messageEdited[i], mentions: [menc_os2], edit: key});
}
}
startStealMessage()
AdicionarSaldo(sender, steal)
stealHomeUser[sender] = currentTimeSteal;
fs.writeFileSync('./bunker/database/usuarios/steal-rpg.json', JSON.stringify(stealHomeUser));
break;

case '1xbcbet': case '1xbcbets': 
// @matheuzinho
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
if(!q) return reply(`🛒 *anna's City Bets* é o novo sistema de apostas... Invista uma quantia entre R$ 100.00 e R$ 10000.00, e veja seu dinheiro rodar.`)
if(!Number(args[0])) return reply(`${args[0]} não é número...`)
AB = annarpg.map(i => i.id).indexOf(sender)
minuto3 = moment.tz('America/Sao_Paulo').format('mm')
if(Number(args[0]) < Number(annarpg[AB].saldo)) return reply(`Você não possui dinheiro suficiente para investir...`)
if(Number(args[0]) < 100) return reply(`Você deve investir no mínimo R$ 100.00`)
if(Number(args[0]) > 10000) return reply(`Nossa plataforma não paga mais que R$ 10000.00`)
if(!JSON.stringify(bcbet).includes(sender)) {
bcbet.push({id: sender, minuto: minuto3})
fs.writeFileSync("./bunker/database/usuarios/1xbcbet.json", JSON.stringify(bcbet))
}
AC = bcbet.map(i => i.id).indexOf(sender)
if(Number(bcbet[AC].minuto) !== Number(minuto3)) {
bcbet[AC].minuto = minuto3
fs.writeFileSync("./configs/media/dinheiro.json", JSON.stringify(annarpg))
MN = Math.floor(Math.random()*100)
reply(`📊 Analisando os gráficos...`)
if(Number(MN) > 15) {
PG = ["na construção de um estádio de futebol, mas a construção deannaou...", "na bolsa de valores, mas a Bovespa caiu drasticamente...", "num leilão de carros, mas os carros não foram leiloados...", "num leilão de carros, mas você sofreu um golpe...", "no seu time de futebol, mas o seu time perdeu o jogo...", "numa corrida, mas o carro bateu...", "em uma luta de UFC, e seu lutador sofreu um nocaute..."]
txt = `📊 As estatísticas não são favoráveis...
–
📉 Você investiu ${PG[Math.floor(Math.random()*PG.length)]}. Você perdeu R$ ${Number(args[0]).toFixed(2)}`
img = `https://telegra.ph/file/747133ed87f267ca8d35f.jpg`
ConfirmarPagamento(sender, args[0]);
fs.writeFileSync("./configs/media/dinheiro.json", JSON.stringify(annarpg))
} else {
GG = ["na construção de um estádio de futebol, e a construção foi bem sucedida...", "na bolsa de valores, e a Bovespa subiu exponencialmente...", "num leilão de carros, e obteve grande lucro na venda dos mesmos...", "no seu time de futebol, e o seu time venceu o jogo...", "numa corrida, e o seu carro chegou em primeiro lugar...", "em uma luta de UFC, e seu lutador derrubou o oponente facilmente..."]
VL1 = Math.floor(Math.random()*9)+1
VL2 = args[0] * VL1
txt = `📊 As estatísticas são boas
–
📈 Você investiu ${GG[Math.floor(Math.random()*GG.length)]}. Você ganhou R$ ${Number(VL2).toFixed(2)}`
img = `https://telegra.ph/file/f600b52a9963c58900e5b.jpg`
AdicionarSaldo(sender, VL2)
fs.writeFileSync("./configs/media/dinheiro.json", JSON.stringify(annarpg))
}
setTimeout(() => {
anna.sendMessage(from, {image: {url: img}, caption: txt}, {quoted: sasah})
}, 2000)
} else {
reply(`Aguarde *${60 - Number(moment.tz('America/Sao_Paulo').format('ss'))}s* para realizar outra aposta novamente.`)
}
break
    
case 'quando':  
if (args.length < 1) return reply('Digite a pergunta!')
const meupirul = ['Hoje', 'Amanhã', 'Nunca', 'dia', 'semana', 'mês', 'ano']
const meupirul2 = ['dias', 'semanas', 'meses', 'anos']
randomm = meupirul[Math.floor(Math.random() * meupirul.length)]
random2 = `${Math.floor(Math.random() * 11) + 1}`
if (randomm == 'Hoje' || randomm == 'Amanhã' || randomm == 'Nunca') {
texto = `Pergunta: ${body.slice(1)}\nResposta: ${randomm}`
} else if (random2 == 1) {
texto = `Pergunta: ${body.slice(1)}\nResposta:  1 ${randomm}`
} else {
random3 = meupirul2[Math.floor(Math.random() * meupirul2.length)]
texto = `Pergunta: ${body.slice(1)}\nResposta: ${random2} ${random3}`
}
reply(texto)
break

//=========== [ FINAL JOGOS ] ========= //

case 'limpar_mortos-cnt':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroup) return reply(enviar.msg.donosmt)
bla = [] 
var CNT_RS = countMessage[countMessage.map(i => i.groupId).indexOf(from)].numbers
for ( i = 0; i < CNT_RS.map( i => i.id).length; i++) { bla.push(CNT_RS.map( i => i.id)[i])};
for ( i of groupMembers) {bla.splice(bla.indexOf(i.id), 1)};
for ( i of bla) {CNT_RS.splice(CNT_RS.indexOf(i), 1)};
fs.writeFileSync("./configs/media/countmsg.json", JSON.stringify(countMessage))
reply("Usuários que já foi removido, ou saiu do grupo, foi tirado do contador de mensagens..")
break

case 'tirar_docnt':
if(!SoDono) return
if(!isGroup) return reply(enviar.msg.donosmt)
var i2 = countMessage.map(i => i.groupId).indexOf(from) 
var i = countMessage[i2].numbers.map(i => i.id).indexOf(q.trim()+"@s.whatsapp.net")  
countMessage[i2].numbers.splice(i,1)
fs.writeFileSync("./configs/media/countmsg.json", JSON.stringify(countMessage))
reply("Usuário tirado do contador de mensagens com sucesso...")
break

case 'anotar':
case 'tirar_nota':
case 'rmnota':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(!isGroupAdmins) return reply(`Só adm pode utilizar este tipo de comando.`)
if(command == "anotar") {
var [q5, q10] = q.trim().split("|")
if(!q5 || !q10 || !q.includes("|")) return reply(`Digite o título da anotação e o texto que deseja anotar..\nExemplo: ${prefix}anotar Cachorro|Cachorros são bom pra comer na Venezuela...`)
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q5)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q5)  
if(anotar[i2].puxar[i3].nota == q5) return reply(`Esta anotação já está inclusa, utilize outro título.. Ou você pode tirar com\n${prefix}tirar_nota ${q5}`)
}
}
if(!JSON.stringify(anotar).includes(from)) {
anotar.push({grupo: from, puxar: [{nota: q5, anotacao: q10}]})
fs.writeFileSync("./bunker/database/func/tabela/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")
} else {
anotar[i2].puxar.push({nota: q5, anotacao: q10})
fs.writeFileSync("./bunker/database/func/tabela/anotar.json", JSON.stringify(anotar))
reply("Anotação registrada com sucesso...")  
}
} else {
if(!q) return reply("Digite qual anotação deseja tirar pelo título..")
if(JSON.stringify(anotar).includes(from)) {  
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(JSON.stringify(anotar[i2].puxar).includes(q)) {
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
}
}
if(0 > anotar[i2].puxar.map(i => i.nota).indexOf(q)) return reply("Esta nota não está inclusa, verifique com atenção...")
anotar[i2].puxar.splice(i3, 1)
fs.writeFileSync("./bunker/database/func/tabela/anotar.json", JSON.stringify(anotar))
reply(`Anotação ${q} tirada com sucesso...`)
}
break

case 'anotacao':
case 'anotacoes':  
case 'nota':
case 'notas':
if(!isGroup) return reply(`Só em grupo pode utilizar este comando.`)
if(command == "anotacao" || command == "nota") {
if(!q) return reply("Digite o título da anotação que deseja puxar..")
if(!JSON.stringify(anotar).includes(from)) return reply("Este grupo não tem nenhuma anotação...")
var i2 = anotar.map(i => i.grupo).indexOf(from)  
if(!JSON.stringify(anotar[i2].puxar).includes(q)) return reply("Não contém nenhuma anotação com este título.")
var i3 = anotar[i2].puxar.map(i => i.nota).indexOf(q)  
mentions(`〈 ${anotar[i2].puxar[i3].anotacao} 〉`)
} else {
var i2 = anotar.map(i => i.grupo).indexOf(from)    
if(anotar[i2].puxar.length == 0) return reply("Este grupo não tem nenhuma anotação...")    
var i2 = anotar.map(i => i.grupo).indexOf(from) 
var antr = anotar[i2].puxar 
txtin = `Aqui está todas as anotações registradas em minha bunker/database do grupo: *[ ${groupName} ]*\n`
for ( i = 0; i < antr.length; i++) {
txtin += `\n↝ Anotação: ⟮ ${anotar[i2].puxar[i].nota} ⟯ - 〈 ${anotar[i2].puxar[i].anotacao} 〉\n`
}
txtin += ""
mentions(txtin)
}
break

case 'download-link':
if(q.includes("video") || q.includes("mp4")) {
anna.sendMessage(from, {video: {url: q}, mimetype: 'video/mp4'}, {quoted: sasah}).catch(e => {
reply("Erro, visualize se este link é válido...")
})
} else if(q.includes("webp") || q.includes("jpg")) {
anna.sendMessage(from, {image: {url: q}}, {quoted: sasah}).catch(e => {
reply("Erro, visualize se este link é válido...")
})
}
break

case 'signo':
try {
if(!q) return reply(`Digite seu signo, exemplo: ${prefix+command} Virgem`);
signos = ["Áries", "Touro", "Gêmeos", "Câncer", "Leão", "Virgem", "Libra", "Escorpião", "Sagitário", "Capricórnio", "Aquário", "Peixes", "aries", "touro", "gemeos", "cancer", "leao", "virgem", "libra", "escorpiao", "sagitario", "capricornio", "aquario", "peixes"]
if(!signos.includes(q_2)) return reply("Este signo não existe...")
ABC = await fetchJson(APIs.Site1 + `/api/horoscopo/v2?signo=${q}&apikey=` + apikey_kita)
anna.sendMessage(from, {image: {url: ABC.resultado.imagem}, caption: mess.horoscopo(q, ABC)}).catch(e => {
return reply(mess.error())
})
} catch (e) {
return reply(mess.error())
}
break
case 'adicionarcreditos':
    if (args.length !== 2) {
        reply("Uso incorreto do comando! Por favor, use o formato: !adicionarcreditos [Nome de usuário ou E-mail] [Quantidade de créditos]");
        return;
    
    const usernameOrEmail = args[0];
    const quantidadeCreditos = parseInt(args[1]);
    let adicionarCreditosUrl;
    if (usernameOrEmail.includes('@')) {
        adicionarCreditosUrl = `https://nooxhosting.cloud/api/users?filter[email]=${encodeURIComponent(usernameOrEmail)}`;
    } else {
        adicionarCreditosUrl = `https://nooxhosting.cloud/api/users?filter[name]=${encodeURIComponent(usernameOrEmail)}`;
    }
    const token = "XbtBpAoL_yZwYG1EcIQ1JjHV9rPQoviYZO_qmyOJGM9val2q";
    fetch(adicionarCreditosUrl, {
        method: "GET",
        headers: {
            "Authorization": `Bearer ${token}`,
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro ao buscar usuário");
        }
        return response.json();
    })
    .then(data => {
        if (data.data.length === 0) {
            throw new Error("Nenhum usuário encontrado com o e-mail ou nome de usuário fornecido.");
        }
        const userId = data.data[0].id;
        const adicionarCreditosUrlById = `https://nooxhosting.cloud/api/users/${userId}/increment`;
        const body = {
            credits: quantidadeCreditos,
            server_limit: 1
        };
        fetch(adicionarCreditosUrlById, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(body)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Erro ao adicionar créditos");
            }
            return response.json();
        })
        .then(data => {
            reply(`✅ Créditos adicionados com sucesso!\n\n👤 Novo saldo para o usuário ${data.name}:\n\n💳 ${data.credits}`);
        })
        .catch(error => {
            console.error("Erro ao adicionar créditos:", error);
            reply("❌ Ocorreu um erro ao adicionar créditos. Por favor, verifique se o nome de usuário ou e-mail são válidos e tente novamente.");
        });
    })
    .catch(error => {
        console.error("Erro ao buscar usuário:", error);
        reply("❌ Ocorreu um erro ao buscar usuário. Por favor, verifique se o nome de usuário ou e-mail são válidos e tente novamente.");
    });}
    break;
///INÍCIO DA ÁREA MENUS\\\
case 'menu': case 'm':
//setTimeout(() => {reagir(from, react2)}, 300)
botaoblk = {
  type: `list`,
  title: `❀⃟𝓜𝓮𝓷𝓾 𝓚𝓲𝓽𝓪𝓰𝓪𝔀𝓪⃟❀`,
  rowId: [
    {
      title: "By: EquipeNoox",
      options: [
        {title: "❯❯『𝐈𝐍𝐅𝐎-𝐃𝐎𝐍𝐎』❮❮", command: `${prefix}infodono`, body: `⮑ ${NomeDoBot}`}
      ]
    },
    //•._.••´¯``•.¸¸.•` info-dono `•.¸¸.•´´¯`••._.•,
    {
      title: "𝐃𝐈𝐕𝐄𝐑𝐒𝐎𝐒 𝐌𝐄𝐍𝐔𝐒",
      options: [
        {title: "❯❯『𝐌𝐄𝐍𝐔-𝐏𝐑𝐈𝐍𝐂𝐈𝐏𝐀𝐋』❮❮", command: `${prefix}comandos`, body: `⮑ ${NomeDoBot}`},
        {title: "❯❯『𝐌𝐄𝐍𝐔-𝐀𝐃𝐌』❮❮", command: `${prefix}menuadm`, body: `⮑ ${NomeDoBot}`},
                {title: "❯❯『𝐌𝐄𝐍𝐔-𝐁𝐀𝐒𝐈𝐂𝐎』❮❮", command: `${prefix}menubasico`, body: `⮑ ${NomeDoBot}`},
        {title: "❯❯『𝐌𝐄𝐍𝐔-𝐁𝐑𝐈𝐍𝐂𝐀𝐃𝐄𝐈𝐑𝐀』❮❮", command: `${prefix}brincadeiras`, body: `⮑ ${NomeDoBot}`},
        {title: "❯❯ 👑『𝐂𝐑𝐈𝐀𝐃𝐎𝐑𝐄𝐒』👑 ❮❮", command: `${prefix}criador`, body: `⮑ ${NomeDoBot}`},
        {title: "❯❯『𝐏𝐈𝐍𝐆』❮❮", command: `${prefix}ping`, body: `⮑ ${NomeDoBot}`},
        //{title: "`•.¸¸.•`🏦 𝙈𝙀𝙉𝙐-𝘽𝙇𝘼𝘾𝙆-𝘾𝙄𝙏𝙔 🏦`•.¸¸.•`", command: `${prefix}menubc`, body: `⮑ ${NomeDoBot}`},
        {title: "❯❯『𝐌𝐄𝐍𝐔-𝐄𝐅𝐄𝐈𝐓𝐎𝐒』❮❮", command: `${prefix}efeitos`, body: `⮑ ${NomeDoBot}`},
       // {title: "`•.¸¸.•`🧸 𝙈𝙀𝙉𝙐-𝙈𝙊𝘿𝙎 🧸`•.¸¸.•`", command: `${prefix}menumods`, body: `⮑ ${NomeDoBot}`},
        //{title: "`•.¸¸.•`💝 𝙈𝙀𝙉𝙐-𝙁𝙄𝙂𝙐𝙍𝙄𝙉𝙃𝘼𝙎 💝`•.¸¸.•`", command: `${prefix}menufigu`, body: `⮑ ${NomeDoBot}`},
        //{title: "`•.¸¸.•`😃 𝙈𝙀𝙉𝙐-𝙀𝙈𝙊𝙅𝙄 😃`•.¸¸.•`", command: `${prefix}menuemoji`, body: `⮑ ${NomeDoBot}`},
        //{title: "`•.¸¸.•`💿 𝙈𝙀𝙉𝙐-𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿𝙎 💿`•.¸¸.•`", command: `${prefix}menudownloads`, body: `⮑ ${NomeDoBot}`},
        {title: "❯❯『𝐌𝐄𝐍𝐔-𝐋𝐎𝐆𝐎𝐒』❮❮", command: `${prefix}menulogos`, body: `⮑ ${NomeDoBot}`},
        {title: "❯❯『𝐌𝐄𝐍𝐔 𝐏𝐑𝐄𝐌𝐈𝐔𝐌』❮❮", command: `${prefix}menupremium`, body: `⮑ ${NomeDoBot}`},
        //{title: "`•.¸¸.•`🔞 𝙈𝙀𝙉𝙐+18 🔞`•.¸¸.•`", command: `${prefix}menu+18`, body: `⮑ ${NomeDoBot}`},
        {title: "❯❯『𝐌𝐄𝐍𝐔 𝐃𝐎𝐍𝐎』❮❮", command: `${prefix}menudono`, body: `⮑ ${NomeDoBot}`}
      ]
    }
  ]
}
txt = `
╭═❀═❦═ೋ᯽ೋ═❦═❀═
│᯽ 𝕯𝖔𝖓𝖔: *${NickDono}*
│᯽ 𝕭𝖔𝖙: *${NomeDoBot}*
│᯽ 𝕭𝖎𝖔𝖌𝖗𝖆𝖋𝖎𝖆: *_LEGANCY_*
│᯽ 𝖀𝖘𝖚𝖆𝖗𝖎𝖔: *${pushname}*
│᯽ 𝕻𝖗𝖊𝖒𝖎𝖚𝖒: *${isPremium ? 'Sim👑' : 'Não🗑'}*
│᯽ 𝕾𝖙𝖆𝖙𝖚𝖘: [ *_~ONLINE~_* ]
│᯽©EquipeNoox
╰═❀═❦═ೋ᯽ೋ═❦═❀═`
sendButton(from, {image: {url: logoslink.logo}, caption: txt, footer: NomeDoBot}, anna, sender, [botaoblk], info)
break
case 'help4':
case 'comandos':  
reagir(from, "🌻")
await sleep (1000)
anna.sendMessage(from, {
text: linguagem.menu(prefix, NomeDoBot, sender, NickDono, isPremium),
contextInfo: {
mentionedJid: [sender],
externalAdReply: {
showAdAttribution: true,
title: `ANNA BOT- ${tempo}`,
body: `LEGANCY`,
thumbnailUrl: logoslink.logo,
sourceUrl: `https://chat.whatsapp.com/CNXRvatRcDaLmUP8EyynN9`,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {quoted: info}).catch(e => {
return reply(mess.error())
reagir(from, "❌")
})
break


case 'menubasico':
case 'menub':
reagir(from, "🌻")
await sleep (1000)
if(isAudioMenu) {
audiomenu = await fetch(audio_menu).then(v => v.buffer())
anna.sendMessage(from, {audio: audiomenu, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
}


anna.sendMessage(from, {
text: linguagem.basico(prefix, NomeDoBot, sender, NickDono, isPremium),
contextInfo: {
mentionedJid: [sender],
externalAdReply: {
showAdAttribution: true,
title: `ANNA BOT- ${tempo}`,
body: `LEGANCY`,
thumbnailUrl: logoslink.logo,
sourceUrl: `https://chat.whatsapp.com/CNXRvatRcDaLmUP8EyynN9`,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {quoted: info}).catch(e => {
return reply(mess.error())
reagir(from, "❌")
})
break 
case 'logos':
case 'menulogo':
case 'menulogos':  
reagir(from, "🖼")
await sleep (1000)
anna.sendMessage(from, {
text: linguagem.menulogos(prefix, NomeDoBot, sender),
contextInfo: {
mentionedJid: [sender],
externalAdReply: {
showAdAttribution: true,
title: `ANNA BOT- ${tempo}`,
body: `LEGANCY`,
thumbnailUrl: logoslink.logo,
sourceUrl: `https://chat.whatsapp.com/CNXRvatRcDaLmUP8EyynN9`,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {quoted: info}).catch(e => {
return reply(mess.error())
reagir(from, "❌")
})
break 

case 'menuadm':
case 'menuadms':
case 'adm':  
reagir(from, "💎")
await sleep (1000)
anna.sendMessage(from, {
text: linguagem.adms(prefix, NomeDoBot, sender, NickDono, isPremium),
contextInfo: {
mentionedJid: [sender],
externalAdReply: {
showAdAttribution: true,
title: `ANNA BOT- ${tempo}`,
body: `LEGANCY`,
thumbnailUrl: logoslink.logo,
sourceUrl: `https://chat.whatsapp.com/CNXRvatRcDaLmUP8EyynN9`,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {quoted: info}).catch(e => {
return reply(mess.error())
reagir(from, "❌")
})
break 

case 'menudono':
case 'donomenu':  
reagir(from, "👑")
await sleep (1000)
anna.sendMessage(from, {
text: linguagem.menudono(prefix, NomeDoBot, sender, NickDono, isPremium),
contextInfo: {
mentionedJid: [sender],
externalAdReply: {
showAdAttribution: true,
title: `ANNA BOT- ${tempo}`,
body: `LEGANCY`,
thumbnailUrl: logoslink.logo,
sourceUrl: `https://chat.whatsapp.com/CNXRvatRcDaLmUP8EyynN9`,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {quoted: info}).catch(e => {
return reply(mess.error())
reagir(from, "❌")
})
break 

case 'efeitosimg':
case 'efeitos':  
case 'efeitoimg':
case 'efeitosmarcar':  
reagir(from, "📷")
await sleep (1000)
anna.sendMessage(from, {
text: linguagem.efeitos(prefix, NomeDoBot, sender, NickDono, isPremium),
contextInfo: {
mentionedJid: [sender],
externalAdReply: {
showAdAttribution: true,
title: `ANNA BOT- ${tempo}`,
body: `LEGANCY`,
thumbnailUrl: logoslink.logo,
sourceUrl: `https://chat.whatsapp.com/CNXRvatRcDaLmUP8EyynN9`,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {quoted: info}).catch(e => {
return reply(mess.error())
reagir(from, "❌")
})
break

case 'owner':
case 'odono':
case 'dono': 
case 'infodono':  
numerodn = numerodono_ofc
anna.sendMessage(from, {image: {url: thumbnail}, caption: getInfo.infoOwner(prefix, NickDono, numerodn, NomeDoBot, sender), mentions: [sender]}, {quoted: sasah})
break 

case 'gleyson':
anna.sendMessage(from, {text: getInfo.tutorialBasic(prefix), contextInfo: {externalAdReply: {title: `Bot: ${NomeDoBot}`, body: `Olá ${pushname}, aqui está o tutorial de como usar o bot.`, thumbnail: await getBuffer(thumbnail), mediaType: 1, sourceUrl: APIs.Site1 + ``}}, mentions: [sender]}, {quoted: info}) 
break 


case 'criadores':
case 'criador'://By: EquipeNoox
await reply(`> *_Olá ${pushname}, estou enviando meus criadores o mais rápido possível!_*`)
await sleep(1000)
const createVCard = (name, org, waid, number) => {
return "BEGIN:VCARD\nVERSION:3.0\nFN:" + name + "\nORG:" + org + "\nTEL;waid=" + waid + ":" + number + "\nEND:VCARD"
}
const contacts = [
{name: "Gleyson", waid: "5511981106112", number: "+55 11 98110 6112"},
{name: "EquipeNoox", waid: "5512988082116", number: "+55 12 98808 2116"},
{name: "Clover", waid: "557598659560", number: "+55 75 9865 9560"},
{name: "Fantasma Mods", waid: "5521977373786", number: "+55 21 97737 3786"},
{name: "NUNU AKAME", waid: "5511959391525", number: "+55 11 95939 1525"},
{name: "Coringa", waid: "5521993136381", number: "+55 21 99313 6381"},
{name: "Zenitsu Modz", waid: "559892149806", number: "+55 98 9214 9806"},
{name: "Vix Zap", waid: "557481145568", number: "+55 74 8114 5568"},
{name: ".", waid: "595994966449", number: "+595 994 966449"},
{name: "Elizard", waid: "258847210337", number: "+258 84 721 0337"},
{name: "Rooh", waid: "5521976430222", number: "+55 21 97643 0222"},
{name: "Tanjiro Modz", waid: "556192435447", number: "+55 61 9243 5447"},
{name: "~", waid: "994401390574", number: "+994 40 139 0574"},
{name: "Denílson", waid: "258873138681", number: "+258 87 313 8681"},
{name: "Hari", waid: "5527998431388", number: "+55 27 99843 1388"},
{name: "Lz", waid: "555195574892", number: "+55 51 9557 4892"},
{name: "Nuno", waid: "553398397567", number: "+55 33 9839 7567"},
{name: "Diego Bryan", waid: "5527999307906", number: "+55 27 99930 7906"},
{name: "Anonimo", waid: "553491411816", number: "+55 34 9141 1816"}]
const vCards = contacts.map(contact => createVCard(contact.name, "Kitagawa produção", contact.waid, contact.number))
anna.sendMessage(from, {
displayName: "𝐌𝐄𝐔𝐒-𝐂𝐑𝐈𝐀𝐃𝐎𝐑𝐄𝐒:",
contacts: {
contacts: vCards.map(vcard => ({ vcard }))
}
})
break

case 'alteradores':
reagir(from, "🍆")
await sleep (1000)
anna.sendMessage(from, {
text: linguagem.altetadores(prefix, NomeDoBot, sender),
contextInfo: {
mentionedJid: [sender],
externalAdReply: {
showAdAttribution: true,
title: `ANNA BOT- ${tempo}`,
body: `LEGANCY`,
thumbnailUrl: logoslink.logo,
sourceUrl: `https://chat.whatsapp.com/CNXRvatRcDaLmUP8EyynN9`,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {quoted: info}).catch(e => {
return reply(mess.error())
reagir(from, "❌")
})
break 

case 'brincadeiras':
case 'brincadeira':
if(!isModobn) return reply(enviar.msg.modobn)  
reagir(from, "🤡")
await sleep (1000)
anna.sendMessage(from, {
text: linguagem.brincadeiras(prefix, NomeDoBot, sender, NickDono, isPremium),
contextInfo: {
mentionedJid: [sender],
externalAdReply: {
showAdAttribution: true,
title: `ANNA BOT- ${tempo}`,
body: `LEGANCY`,
thumbnailUrl: logoslink.logo,
sourceUrl: `https://chat.whatsapp.com/CNXRvatRcDaLmUP8EyynN9`,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {quoted: info}).catch(e => {
return reply(mess.error())
reagir(from, "❌")
})
break 

case 'menupremium':
case 'menuprem': 
reagir(from, "💎")
await sleep (1000)
anna.sendMessage(from, {
text: linguagem.menuprem(prefix, NomeDoBot, sender, NickDono, isPremium),
contextInfo: {
mentionedJid: [sender],
externalAdReply: {
showAdAttribution: true,
title: `ANNA BOT- ${tempo}`,
body: `LEGANCY`,
thumbnailUrl: logoslink.logo,
sourceUrl: `https://chat.whatsapp.com/CNXRvatRcDaLmUP8EyynN9`,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {quoted: info}).catch(e => {
return reply(mess.error())
reagir(from, "❌")
})
break 

case 'animes':
case 'menuanimes':
reagir(from, "🇯🇵")
await sleep (1000)
anna.sendMessage(from, {
text: linguagem.animes(prefix, NomeDoBot, sender, NickDono, isPremium),
contextInfo: {
mentionedJid: [sender],
externalAdReply: {
showAdAttribution: true,
title: `ANNA BOT- ${tempo}`,
body: `LEGANCY`,
thumbnailUrl: logoslink.logo,
sourceUrl: `https://chat.whatsapp.com/CNXRvatRcDaLmUP8EyynN9`,
mediaType: 1,
renderLargerThumbnail: true
}
}
}, {quoted: info}).catch(e => {
return reply(mess.error())
reagir(from, "❌")
})
break 

case 'configurar-bot':
anna.sendMessage(from, {text: getInfo.configbot(prefix)}, {quoted: sasah})
break



///FIM DA ÁREA DE MENUS\\\


case 'verificado-global': 
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isVerificado) {
nescessario.verificado = true
setNes(nescessario)
reply("O verificado foi desativado com sucesso, ou seja, o selo foi retirado de todos os meus comandos! *Para reativar é só digitar o comando novamente.*")
} else if(isVerificado) {
nescessario.verificado = false
setNes(nescessario)
reply(`O verificado foi ativado, ou seja, o selo foi colocado em todos os meus comandos! *Para remover o verificado dos comandos, use o comando novamente.*`) 
}
break

case "botoes":
if(!SoDono) return reply(enviar.msg.donosmt);
if(botoes_) {
botoes_ = false
nescessario.botoes_ = false
setNes(nescessario)
reply("Botões desativado com sucesso, para ativar novamente só digitar o comando denovo.");
} else if(!botoes_) {
botoes_ = true
nescessario.botoes_ = true
setNes(nescessario)
reply("Botões ativado com sucesso, para desativar novamente só digitar o comando denovo.");
}
break;

case 'audio-menu': 
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAudioMenu) {
nescessario.menu_audio = true
setNes(nescessario)
reply(`O áudio foi ativado para o menu com sucesso, se quiser desativar é só digitar o comando novamente...`)
} else if(isAudioMenu) {
nescessario.menu_audio = false
setNes(nescessario)
reply(`O áudio foi desativado para o menu com sucesso, se quiser ativar é só digitar o comando novamente...`)
}
break

case 'console':   
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isConsole) {
nescessario.consoleoff = true
setNes(nescessario)
reply(`- O comando de tirar o console foi ativado com sucesso. Agora não verá mais os comandos nem mensagem dadas no console, mas funcionará perfeitamente, ok?, é bom para evitar banimento de spam no heroku.\n\nSe quiser desativar - Só digitar o comando novamente`)
} else if(isConsole) {
nescessario.consoleoff = false
setNes(nescessario)
reply(`- O comando de tirar o console foi desativado com sucesso. Agora verá os comandos e mensagens dadas no console, mas se for utilizar no heroku, recomendo ativar. é bom para evitar banimento de spam no heroku.\n\nSe quiser ativar - Só digitar o comando novamente`) 
}
break


case 'destrava':
if(!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
anna.sendMessage(from, {text: destrava(prefix)}, {quoted: sasah})
break 

case 'perfil':
try {
ppimg = await anna.profilePictureUrl(`${sender.split('@')[0]}@c.us`, 'image')
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}
try {
var conselho = palavrasc[Math.floor(Math.random() * palavrasc.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
anna.sendMessage(from, {image: {url: ppimg}, caption: mess.profileInformation(pushname, sender, info, putar, putar2, gostosurar, gostosurar2, nivelgador, nivelgado2r, programa, conselho), mentions: [sender]}, {quoted: sasah})
} catch (e) {
console.log(e)
}
break

case 'conselhobiblico':
case 'conselhosbiblico':  
case 'conselhosb':   
case 'conselhob':  
var conselhosb = conselhob[Math.floor(Math.random() * conselhob.length)]
anna.sendMessage(from, {text: mess.conselhoBiblico(tempo, pushname, conselhosb, NomeDoBot, groupName)}, {quoted: sasah, contextInfo: {"mentionedJid": mess.conselhoBiblico(tempo, pushname, conselhosb, NomeDoBot, groupName)}})
break

case 'cantadas': case 'cantada':  
cantadasbb = randomCantadas[Math.floor(Math.random() * randomCantadas.length)]   
let cantadasText = `*${cantadasbb}*`
anna.sendMessage(from, {text: cantadasText}, {quoted: sasah, contextInfo: {"mentionedJid": cantadasText}})
break

case 'fatos': case 'curiosidades':  
fatoskk = fatos[Math.floor(Math.random() * fatos.length)]   
let fatosText = `*${fatoskk}*`
anna.sendMessage(from, {text: fatosText}, {quoted: sasah, contextInfo: {"mentionedJid": fatosText}})
break

case 'tabela':
anna.sendMessage(from, {text: tabela(prefix, NomeDoBot)}, {quoted: sasah})
break 

case 'destrava2':
if(!isPremium && !isGroupAdmins) return reply(enviar.msg.premium)
anna.sendMessage(from, {text: destrava2 (prefix)}, {quoted: sasah})
break 

case 'tradutor': case 'traduzir':
try {
if(!q) return reply(`Exemplo: ${prefix}tradutor pt|Dog`)
txt = q.replace(" |", "|").replace("| ", "|").replace(" | ", "|")
var [idioma, texto] = txt.split("|")
if(!q.includes("|")) return reply(`Está faltando a |, *use como exemplo:* ${prefix}tradutor pt|Dog`)
bla = await fetchJson(APIs.Site1 + `/api/info/translate?texto=${encodeURI(texto)}&ling=${encodeURI(idioma)}&apikey=` + apikey_kita)
reply(mess.translator(bla)).catch(e => {
reply("Ocorreu um erro ao realizar a tradução do texto.")
})
} catch (e) {
if(String(e).includes(API_KEY_anna)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar.")   
}
}
break

case 'idiomas':
case 'idioma':
anna.sendMessage(from, {text: getInfo.listLanguages(prefix)}, {quoted: sasah})
break

case 'infobv':
case 'infowelcome':
case 'infobemvindo':
anna.sendMessage(from, {text: getInfo.bemvindo(prefix)}, {quoted: sasah})
break

case 'getquoted':
case 'getinfo':  
case 'get':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'get-txt':  
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation, null, 2))
break

case 'gerarcpf':
cp1 = `${Math.floor(Math.random() * 300) + 600}`
cp2 = `${Math.floor(Math.random() * 300) + 600}`
cp3 = `${Math.floor(Math.random() * 300) + 600}`
cp4 = `${Math.floor(Math.random() * 30) + 60}`
cpf = `${cp1}.${cp2}.${cp3}-${cp4}`
anna.sendMessage(from, {text: `CPF gerado com sucesso : ${cpf}`}, {quoted: sasah})
break

case 'ddd':
if(args.length < 1) return reply(`Use ${prefix + command} 81`)
ddd = body.slice(5)
ddds = await axios.get(`https://brasilapi.com.br/api/ddd/v1/${ddd}`)
dddlist = `Lista de Cidades de ${ddds.data.state} com este DDD ${q}>\n\n`
for (let i = 0; i < ddds.data.cities.length; i++) { dddlist += `${i + 1} ⪧ *${ddds.data.cities[i]}*\n` }
anna.sendMessage(from, {text: dddlist}, {quoted: sasah})	
break

//===========(ADMS-FUNÇÕES-AKI)=========\\

case 'calculadora':
case 'calcular':  
case 'calc':
rsp = q.replace("x", "*").replace('"', ":").replace(new RegExp("[()abcdefghijklmnopqrstwuvxyz]", "gi"), "").replace("÷", "/")
return reply(JSON.stringify(eval(rsp, null,'\t')))
break 

case 'nomegp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
blat = args.join(" ")
anna.groupUpdateSubject(from, `${blat}`)
anna.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: sasah})
break

case 'descgp':
case 'descriçãogp':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.adm)
blabla = args.join(" ")
anna.groupUpdateDescription(from, `${blabla}`)
anna.sendMessage(from, {text: 'Sucesso, alterou a descrição do grupo'}, {quoted: sasah})
break

case 'requestgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q) return reply(mess.syntaxRequestProhibited(prefix))
const req = await anna.groupRequestParticipantsList(from)
if (args[0] === '-r') {
await anna.groupRequestParticipantsUpdate(from, [args[1].split(' ')[0]+"@s.whatsapp.net"], "reject")
} else if (args[0] === '-a') {
mentionSemQuoted(`Seja bem-vindo(a) ao grupo @${args[1].split(' ')[0]}, sua aprovação foi aceita pelo administrador(a).`)
await anna.groupRequestParticipantsUpdate(from, [args[1].split(' ')[0]+"@s.whatsapp.net"], "approve")
} else if (args[0] === '-list') {
let totalRequest = req.length
if (req == 0) return reply(`Não encontrei nenhuma solicitação pendente no grupo.`)
ABC = `( Total: ${totalRequest} ) - Lista de pessoas que desejam entrar no grupo:\n-\n`
for (var i of req) {
ABC += `Sujeito: @${i.jid.replace("@s.whatsapp.net", "")}\nNúmero solicitante: ${i.jid.replace("@s.whatsapp.net", "")}\n`;
ABC += `-\n`
}
mention(ABC)
}
break;

case 'setfotogp':
case 'fotogp':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!isQuotedImage) return reply(`Use: ${prefix + command} <Marque uma foto>`)
ftgp = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
rane = getRandom('.'+await getExtension(ftgp.mimetype))
buffimg = await getFileBuffer(ftgp, 'image')
fs.writeFileSync(rane, buffimg)
medipp = rane 
anna.updateProfilePicture(from, {url: medipp})
reply(`Foto do grupo alterada com sucesso`) 
break

case 'linkgp':
case 'linkgroup':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isGroup) return reply(enviar.msg.grupo)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
linkgc = await anna.groupInviteCode(from)
reply('https://chat.whatsapp.com/'+linkgc)
break

case 'recrutar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q) return reply("Cadê o número do usuário que você deseja convidar.")
rcrt = q.replace(new RegExp("[()+-/ +/]", "gi"), "") + `@s.whatsapp.net`
linkgc = await anna.groupInviteCode(from)
anna.sendMessage(rcrt, {text: "*Olá, tudo bem?* Você foi convidado(a) pelo(a) adminstrador(a) do grupo.\nPara entrar no grupo, clique acima!", contextInfo: {externalAdReply: {title: "Clique aqui para participar do grupo.", mediaType: 1, sourceUrl: "https://chat.whatsapp.com/"+linkgc}}})
reply("Convite de recrutamento do usuário, foi enviado para o privado dele com sucesso...")
break

case 'listatm':
if(!SoDono) return reply(enviar.msg.donosmt)
rgp = JSON.parse(fs.readFileSync("./bunker/database/func/tmgroup.json"))
if(rgp.length == 0) return reply(`Não contém nenhum registro de transmissão, utilize ${prefix}rgtm no grupo que deseja que ele receba as transmissões do bot..`)
bl = "";
for ( i = 0; i < rgp.length; i++) {
bl += `( ${i+1} ) - ID: ${rgp[i].id}\n- Nome do Usuário(a) ou Grupo: ${rgp[i].infonome}\n-\n`
}
reply(bl)
break

case 'rgtm':
if(!SoDono) return reply(enviar.msg.donosmt)
rgp = JSON.parse(fs.readFileSync("./bunker/database/func/tmgroup.json"))
if(JSON.stringify(rgp).includes(from)) return reply("Este grupo ja está registrado na lista de transmissão") 
rgp.push({id: from, infonome: `${isGroup ? groupName: pushname}`})
fs.writeFileSync("./bunker/database/func/tmgroup.json", JSON.stringify(rgp))
reply("Registrado com sucesso, quando for realizada as transmissões, esse grupo/usuário estará na lista.")
break

case 'tirardatm':
if(!SoDono) return reply(enviar.msg.donosmt)
rgp = JSON.parse(fs.readFileSync("./bunker/database/func/tmgroup.json"))
if(!JSON.stringify(rgp).includes(from)) return reply("Este grupo não está registrado para ser tirado da lista de transmissão") 
if(q.trim().length > 4) {
var ustm = rgp.map(i => i.id).indexOf(q.trim())
} else {
var ustm = rgp.map(i => i.id).indexOf(from)
}
rgp.splice(ustm, 1)
fs.writeFileSync("./bunker/database/func/tmgroup.json", JSON.stringify(rgp))
reply("Grupo/Usuário tirado da lista de transmissão com sucesso")
break

case 'fazertm':
if(!SoDono) return reply(enviar.msg.donosmt)
var rgp = JSON.parse(fs.readFileSync("./bunker/database/func/tmgroup.json"))
if(rgp.lengh == 0) return reply("Não contém nenhum grupo registrado para realizar transmissão") 
await sleep(1000);
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var red = isQuotedMsg ? rsm?.textMessage: info.message?.textMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d &&!figu_d && !pink && !blue&& !purple && !yellow? "Transmissão do Proprietário: "+rsm.conversation: info.message?.conversation
var green = isQuotedMsg2 && !aud_d &&!figu_d && !red && !pink && !blue && !purple && !yellow ? "Transmissão do Proprietário: "+rsm.extendedTextMessage?.text : info?.message?.extendedTextMessage?.text
if(pink) {
var DFC = pink
pink.caption = q.length > 1 ? "Transmissão do Proprietário: "+q : pink.caption.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
pink.image = {url: pink.url}
} else if(blue) {
var DFC = blue  
blue.caption = q.length > 1 ? "Transmissão do Proprietário: "+q : blue.caption.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
blue.video = {url: blue.url}
} else if(red) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
var DFC = black
} else if(!aud_d && !figu_d && green) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url} 
} else if(yellow) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Transmissão do Proprietário: "+q : yellow.caption.replace(new RegExp(prefix+command, "gi"), `Transmissão do Proprietário: ${NickDono}\n\n`)
yellow.document = {url: yellow.url}  
} else if(figu_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
}
for (i = 0; i < rgp.length; i++) {
anna.sendMessage(rgp[i].id, DFC)}
break

case 'grupo': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args[0] === 'a') {
reply(`- Como pedido senhor(a), o grupo foi aberto com sucesso..`)
anna.groupSettingUpdate(from, 'not_announcement')
} else if(args[0] === 'f') {
reply(`- Como pedido senhor(a), o grupo foi fechado com sucesso..`)
anna.groupSettingUpdate(from, 'announcement')
}				 
break 

case 'grupoinfo':
case 'infogrupo':
case 'infogp':  
case 'gpinfo':  
case 'regras':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins)return reply(enviar.msg.adm)
try {
var ppUrl = await anna.profilePictureUrl(from, 'image')
} catch {
var ppUrl = `https://telegra.ph/file/6ca032835ed7a16748b6f.jpg`
}
var puxarInfo = await anna.groupMetadata(from)
var ANC_INFO = puxarInfo.announce
var returnAnnounce = ANC_INFO === false ? "Não." : ANC_INFO === true ? "Sim." : undefined
var RST_INFO = puxarInfo.restrict 
var returnRestrict = RST_INFO === false ? "Sim." : RST_INFO === true ? "Não." : undefined
var infoCreator = puxarInfo.subjectOwner
infoGroup = `• Nome do Grupo: *${puxarInfo.subject}*\n• ID: *${puxarInfo.id}*\n-\n• Este grupo foi criado por: *@${infoCreator.replace("@s.whatsapp.net", "")}*\n• Data/hora de criação do grupo: *${moment(`${puxarInfo.creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}*\n• Horário e data da última alteração no grupo: *${moment(`${puxarInfo.subjectTime}` * 1000).format('DD/MM/YYYY HH:mm:ss')}*\n-\n• Quantidade de adminstradores: *${groupAdmins.length}*\n• Quantidade de membros: *${somembros.length}*\n• Soma total de membros e admins do grupo: *${puxarInfo.participants.length} participantes*\n-\n• Este grupo está fechado no momento? *${returnAnnounce}*\n• As informações do grupo podem ser alteradas por membros? *${returnRestrict}*\n-\n• Para ver as atividades dos participantes, use: *${prefix}atividade*\n• Para ver os membros inativos no grupo, use: *${prefix}inativos [quantidade de mensagens]*, ex: ${prefix}inativos 10`
anna.sendMessage(from, {image: {url: ppUrl}, caption: infoGroup, mentions: [infoCreator]}, {quoted: sasah})
break 

case 'totag':
case 'cita':
case 'hidetag':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
var DFC = "";
var rsm = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var pink = isQuotedImage ? rsm?.imageMessage: info.message?.imageMessage
var blue = isQuotedVideo ? rsm?.videoMessage: info.message?.videoMessage
var purple = isQuotedDocument ? rsm?.documentMessage: info.message?.documentMessage
var yellow = isQuotedDocW ? rsm?.documentWithCaptionMessage?.message?.documentMessage: info.message?.documentWithCaptionMessage?.message?.documentMessage
var aud_d = isQuotedAudio ? rsm.audioMessage : ""
var figu_d = isQuotedSticker ? rsm.stickerMessage : ""
var red = isQuotedMsg && !aud_d && !figu_d && !pink && !blue&& !purple && !yellow? rsm.conversation: info.message?.conversation
var green = rsm?.extendedTextMessage?.text || info?.message?.extendedTextMessage?.text
var MRC_TD = groupMembers.map(i => i.id)
if(pink && !aud_d && !purple) {
var DFC = pink
pink.caption = q.length > 1 ? "Marcação do(a) Adm: "+q :pink.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`)
pink.image = {url: pink.url}
pink.mentions = MRC_TD
} else if(blue && !aud_d && !purple) {
var DFC = blue  
blue.caption = q.length > 1 ? "Marcação do(a) Adm: "+q.trim() :blue.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
blue.video = {url: blue.url}
blue.mentions = MRC_TD
} else if(red && !aud_d && !purple) {
black = {}
black.text = red.replace(new RegExp(prefix+command, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
black.mentions = MRC_TD
var DFC = black
} else if(!aud_d && !figu_d && green && !purple && !purple) {
brown = {}
brown.text = green.replace(new RegExp(prefix+command, "gi"), `Marcação do(a) Adm: ${NickDono}\n\n`).trim()
brown.mentions = MRC_TD
var DFC = brown
} else if(purple) {
var DFC = purple
purple.document = {url: purple.url}
purple.mentions = MRC_TD
} else if(yellow && !aud_d) {
var DFC = yellow 
yellow.caption = q.length > 1 ? "Marcação do(a) Adm: "+q.trim() :yellow.caption.replace(new RegExp(prefix+command, "gi"), `Marcação do(a) Adm: ${pushname}\n\n`).trim()
yellow.document = {url: yellow.url}
yellow.mentions = MRC_TD
} else if(figu_d && !aud_d) {
var DFC = figu_d
figu_d.sticker = {url: figu_d.url}
figu_d.mentions = MRC_TD
} else if(aud_d) {
var DFC = aud_d
aud_d.audio = {url: aud_d.url}
aud_d.mentions = MRC_TD
aud_d.ptt = true
}
anna.sendMessage(from, DFC).catch(e => {
console.log(e)
})
break

case 'marcar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
async function marcac() {
bla = []
blad = `• Mencionando os membros comuns do grupo ou de uma comunidade. ${!q ? "" : `\n*Mensagem:* ${q}`}\n\n`
for( let i of somembros ) {
blad += `» @${i.split("@")[0]}\n`
bla.push(i)
}
blam = JSON.stringify(somembros)
if(blam.length == 2) return reply(`❌️ Olá *${pushname}* - Não contém nenhum membro comum no grupo, é sim apenas administradores. `)
mentions(blad, bla, true)  
}
marcac().catch(e => {
console.log(e)
})
break

case 'marcar2':
try {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando.")
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += ''
for (let mem of groupMembers) {
teks += `╠➥ @${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
reply(teks)
} catch {
reply('Erro ao mencionar.')
}
break

case 'marcarwa':
try {
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)  
if(q.includes(`${prefix}`)) return reply("Não pode utilizar comandos nesse comando")
members_id = []
teks = (args.length > 1) ? body.slice(10).trim() : ''
teks += ''
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.id.split('@')[0]}\n`
members_id.push(mem.id)
}
anna.sendMessage(from, {text: teks}, {quoted: sasah})
} catch {
reply('Erro ao mencionar.')
}
break

case 'reviverqr':
if(!SoDono && !isnit) return 
exec(`cd ${folderUserAuth} && rm -rf pre-key* sender* session*`)
setTimeout(async () => {
reply("Reiniciando..")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'ptvmsg':
if (!isQuotedVideo && !info.message.videoMessage) {
return reply('Marque um vídeo/gif que você deseja converter para mensagem de vídeo.')}
anna.relayMessage(from, {ptvMessage: isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage }, {})
break

case 'reviver':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque uma mensagem do alvo!')
sleep(5000)
response2 = await anna.groupParticipantsUpdate(from, [menc_prt], "add" )
reply('Usuario adicionado de volta ao grupo.')
break

case 'sairgp':
if(isGroup && !SoDono && !info.key.fromMe) return reply("Este comando só o bot ou o dono pode executar..")
try {
anna.groupLeave(from)
} catch(erro) {
reply(String(erro))
}
break

case 'seradm':
if(!SoDono && !isnit) return reply("Só dono pode executar este comando.")
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um administrador..`, [sender], true)
anna.groupParticipantsUpdate(from, [sender], "promote")
break

case 'sermembro':
if(!SoDono && !isnit) return reply("Só dono pode executar este comando.")
mentions(`@${sender.split("@")[0]} Pronto - Agora você é um membro comum novamente..`, [sender], true)
anna.groupParticipantsUpdate(from, [sender], "demote")
break

case 'advertir':
case 'adverter': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(menc_os2 == botNumber) return reply("Não pode advertir o próprio bot.");
if(menc_os2 == nmrdn) return reply("Não pode advertir o próprio dono do bot.");
if(groupAdmins.includes(menc_os2)) return reply("Não é possível advertir adminstrador do grupo.");
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Não tem como advertir um usuário que não se encontra mais no grupo.")
ADVT.push(menc_os2); setGp(dataGp)  
setTimeout(async() => {
var dfqn = ADVT.filter(x => x == menc_os2).length
var dfntxt = mess.warningAdvertencia(menc_os2, dfqn)
if(!dfntxt.includes("3/3")) {
if(!JSON.stringify(ADVT).includes(sender)) {
await sleep(1500); mentions(dfntxt, [menc_os2])
} else if(dfqn == 2) {
await sleep(1500); mentions(dfntxt, [menc_os2])
}} else {anna.sendMessage(from, {text: mess.finishAdvertencia(menc_os2), mentions: [menc_os2]})
await sleep(1500)
anna.groupParticipantsUpdate(from, [menc_os2], "remove")
var i = ADVT.indexOf(menc_os2); ADVT.splice(i, 3); setGp(dataGp)}}, 3000)
break

//======≠(INFOS/EXECUÇÃO/DONO)≠=========\\

case 'sairdogp':
if(!SoDono)return reply(enviar.msg.donosmt)  
if(!q) return reply(`Você deve visualizar o comando ${prefix}listagp e olhar de qual o grupo quer sair, e veja a numeração dele, e só digitar\nExemplo: ${prefix}sairdogp 0\nesse comando é para o bot sair do grupo que deseja..`)
var getGroups = await anna.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
try {
anna.sendMessage(ingfoo[q].id, {text: "Irei sair do grupo, por ordem do meu dono, adeus..."}) 
setTimeout(() => {
anna.groupLeave(ingfoo[q].id)
}, 5000)
} catch(erro) {
reply(String(erro))
}
reply("Pronto meu dono, sair do grupo que você queria, em caso de dúvidas acione o comando listagp pra verificar..")
break

case 'listagp':
if(!SoDono && !isnit && !info.key.fromMe) return reply('```SOMENTE MEU DONO LINDÃO```')
var getGroups = await anna.groupFetchAllParticipating()
var groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
var ingfoo = groups.map(v => v)
ingfoo.sort((a, b) => (a[0] < b.length))
teks1 = `LISTA DE GRUPOS / COMUNIDADES\n*Total de Grupos:* ${ingfoo.length}\n-\n`
for (let i = 0; i < ingfoo.length; i++){
var metadt = await anna.groupMetadata(ingfoo[i].id) 
try {
var linkdogp = await anna.groupInviteCode(ingfoo[i].id)
} catch {
var linkdogp = "Não foi possivel puxar o link."
}
teks1 += `( ${i} ) - Nome do Grupo: ${ingfoo[i].subject}\nID: ${ingfoo[i].id}\nLink do Grupo: https://chat.whatsapp.com/${linkdogp}\nCriado por: ${metadt.subjectOwner}\nCriado em: ${moment(`${ingfoo[i].creation}` * 1000).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss')}\nTotal de Participantes: ${ingfoo[i].participants.length}\n-\n`
}
reply(teks1)
break

case 'atividade':
case 'atividades':
try{
if(!isGroupAdmins && !issupre && !ischyt) return reply(enviar.msg.adm)
if(isGroup && JSON.stringify(countMessage).includes(from)) {
var i6 = countMessage.map(i => i.groupId).indexOf(from)
if(countMessage[i6].numbers.length == 0) return
teks = `*Atividade dos membros do grupo:*\n-\n`
for(i = 0; i < countMessage[i6].numbers.length; i++) {
var i8 = countMessage[i6].numbers.map(i => i.id).indexOf(countMessage[i6].numbers[i].id)  
var uscnt = countMessage[i6].numbers[i]
teks += `Participante: @${uscnt.id.split('@')[0]}\nComandos usados: ${uscnt.cmd_messages}\nMensagens enviadas: ${uscnt.messages}\nUsuário conectado em: ${uscnt.aparelho}\nFigurinhas enviadas: ${uscnt.figus}\n-\n`
}
mention(teks)
} else return reply('*Nada foi encontrado*')
} catch (e){
console.log(e)
}
break

case 'inativos':
case 'inativo':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(q.match(/[a-z]/i) || !q) return reply(`Exemplo: ${prefix+command} 0\nIsso mostrará quantas pessoas tem 0 mensagens no grupo, e se usar 5, vai mostrar quantos usuários tem 5 mensagens ou menos..`)
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= q.trim())
if(i.figus <= q.trim())
if(i.cmd_messages <= q.trim())
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Não tem pessoas com ${q} mensagens..`)
bli = `Usuários com ${q.trim()} mensagem(ns) pra baixo..\n-\n`
for (ac = 0; ac < blue.length; ac++) {
bli += `( ${ac +1} ) - Usuário: @${blue[ac].split("@")[0]}\n-\n`
}
mention(bli)
break

case 'banghost':
if(!isGroup) return reply(enviar.msg.grupo)  
if(!SoDono) return reply(enviar.msg.donosmt)
if(q.match(/[a-z]/i) || !q || q.length > 3) return reply(`Digite a partir de quantas mensagens pra baixo você deseja remover (que não interaje no grupo).\nExemplo: ${prefix+command} 0`)
var i2 = countMessage?.map(x => x.groupId)?.indexOf(from)
blue = []; for (i of countMessage[i2].numbers) {
if(i.messages <= Number(q.trim()))
if(i.figus <= Number(q.trim()))
if(i.cmd_messages <= Number(q.trim()))
if(!groupAdmins.includes(i.id))
if(!numerodono.includes(i.id))
if(i.id != botNumber)
if(groupMembers.map(i => i.id).includes(i.id))
blue.push(i.id)}; for ( i of countMessage[i2].numbers) {
if(!groupMembers.map(i => i.id).includes(i.id))
if(i.id.length > 5)
blue.push(i.id)}
if(blue.length == 0) return reply(`Não tem mais pessoas com ${q.trim()} mensagem(ns) para eu remover..`)
for ( i = 0; i < blue.length; i++) {
await sleep(1000)
anna.groupParticipantsUpdate(from, [blue[i]], "remove")}
break

case 'correio':
{
txt = args.join(" ")
if(!txt) return reply(mess.syntaxAnonymousMail(prefix))
let txt1 = txt.split("/")[0].replace(/\D/g,'');
let txt2 = txt.split("/")[1];
if(!txt1) return reply('*Cadê o número do destinatário?*')
if(!txt2) return reply('*Cadê a mensagem para ser enviada ao destinatário?*')
let [result] = await anna.onWhatsApp(txt1)
if(!result) return reply(`O número fornecido está indisponível no WhatsApp! Verifique por favor.`)
sendMsg = await anna.sendMessage(from, {react: {text: `💌`, key: info.key}})
reply(mess.sucessAnonymousMail())
anna.sendMessage(result.jid, {text: mess.anonymousMail(txt2)})
}
break

case 'nome-bot':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
NomeDoBot = q.trim()
setting.NomeDoBot = q.trim()
fs.writeFileSync('./configs/settings.json', JSON.stringify(setting, null, 2))
reply(`O nome do bot foi alterado com sucesso para: ${q}`)
break

case 'nick-dono':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt) 
setting.NickDono = q.trim()
NickDono = setting.NickDono
fs.writeFileSync('./configs/settings.json', JSON.stringify(setting, null, 2))
reply(`O nick do dono foi configurado para: ${q}`)
break

case 'numero-dono':
if(!SoDono && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)  
if(q.match(/[a-z]/i)) return reply("É apenas números..")
reply(`O número dono foi configurado com sucesso para: ${q}`)
setting.numerodono = q.trim().replace(new RegExp("[()+-/ +/]", "gi"), "");
numerodono = setting.numerodono
numerodn = setting.numerodono
numerodono_ofc = setting.numerodono
fs.writeFileSync('./configs/settings.json', JSON.stringify(setting, null, 2))
break

case 'prefixo-bot': case 'setprefix':
if(args.length < 1) return
if(!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
setting.prefix = q
fs.writeFileSync('./configs/settings.json', JSON.stringify(setting, null, 2))
reply(`O prefixo foi alterado com sucesso para: ${setting.prefix}`)
break

case 'fotomenu':
case 'fundomenu':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(`- Calma ae amigo(a), já estou trocando a foto do menu para você..`)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
logoslink.logo.splice([])
fs.writeFileSync('./configs/logos.json', JSON.stringify(logoslink, null, 2))
setTimeout(() => {
logoslink.logo.push(res)
fs.writeFileSync('./configs/logos.json', JSON.stringify(logoslink, null, 2))
reply(`A foto do menu foi alterada com sucesso para: ${logoslink.logo}`)
}, 1000)
} else {
reply(`Mande uma imagem com o comando ${prefix + command} para trocar a foto de todos menu..`)
}
break

case 'privphotobot': {
if(!SoDono) return reply(enviar.msg.donosmt)
if (!q) return reply(mess.syntaxPrivatePhotoBot(prefix))
if (args[0] === 'all') {
reply(`- A minha foto do perfil agora está visível à todos.`)
await anna.updateProfilePicturePrivacy('all')
} else if (args[0] === 'cntt') {
reply(`- A minha foto do perfil agora está visível somente aos meus contatos.`)
await anna.updateProfilePicturePrivacy('contacts')
} else if (args[0] === 'ngm') {
reply(`- A foto do meu perfil está privada a todos, até mesmo ao senhor mestre.`)
await anna.updateProfilePicturePrivacy('none')
}
}
break

case 'privaddgroup': {
if(!SoDono) return reply(enviar.msg.donosmt)
if (!q) return reply(mess.syntaxPrivAddGroup(prefix))
if (args[0] === 'all') {
reply(`- Pronto, agora todos pode me adicionar em grupo normalmente.`)
await anna.updateGroupsAddPrivacy(`all`)
} else if (args[0] === 'cntt') {
reply(`- Agora somente meus contatos, pode me adicionar em grupo.`)
await anna.updateGroupsAddPrivacy(`contacts`)
} else if (args[0] === 'ngm') {
reply(`- Agora ninguém pode ousar me adicionar em grupo, pois será negado.`)
await anna.updateGroupsAddPrivacy('none')
}
}
break

case 'setprefix':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
prefix = args[0]
setting.prefix = prefix
fs.writeFileSync('./configs/settings.json', JSON.stringify(setting, null, 2))
reply(`O prefixo foi alterado com sucesso para: ${prefix}`)
break

case 'nomegp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
anna.groupUpdateSubject(from, `${body.slice(9)}`)
anna.sendMessage(from, {text: 'Sucesso, alterou o nome do grupo'}, {quoted: sasah})
break

case 'envmsg':
if(!SoDono && !isnit) return
var [tx1, tx2] = q.split("/")
anna.sendMessage(tx1, {text: tx2})
break

case 'bcgp':
case 'bcgc':  
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!q) return reply('Cade o texto?')
var nomor = info.participant
if(isMedia && !info.message.videoMessage || isQuotedImage) {
encmedia = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage, 'image')
for (i = 0; i < groupMembers.length; i++) {
await sleep(2000)  
anna.sendMessage(groupMembers[i].id, {image: buff}, {caption: `*「 TRANSMISSÃO 」*\n-\nGrupo: ${groupName}\n• Número: wa.me/${sender.split('@')[0]}\n• Mensagem: ${body.slice(6)}`})
}
reply('A transmissão foi enviada com êxito.')
} else {
for (i = 0; i < groupMembers.length; i++) {
await sleep(2000)
sendMess(groupMembers[i].id, `*「 TRANSMISSÃO 」*\n-\n• Grupo: ${groupName}\n• Número: wa.me/${sender.split('@')[0]}\n• Mensagem: ${body.slice(6)}`)
}
reply('Grupo de transmissão bem-sucedido.')
} 
break

case 'dono1':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.dono1 = q.trim()
dono1 = nescessario.dono1
setNes(nescessario)
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${q}`)
break

case 'dono2':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.dono2 = q.trim()
dono2 = nescessario.dono2
setNes(nescessario)
reply(`Agora contem um segundo dono(a) alterado com sucesso para: ${dono2}`)
break

case 'dono3':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.dono3 = q.trim()
dono3 = nescessario.dono3
setNes(nescessario)
reply(`Agora contem um terceiro dono(a) alterado com sucesso para: ${dono3}`)
break

case 'dono4':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.dono4 = q.trim()
dono4 = nescessario.dono4
setNes(nescessario)
reply(`Agora contem um quarto dono(a) alterado com sucesso para: ${dono4}`)
break

case 'dono5':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.dono5 = q.trim()
dono5 = nescessario.dono5
setNes(nescessario)
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono5}`)
break

case 'dono6':
if(args.length < 1) return
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
nescessario.dono6 = q.trim()
dono6 = nescessario.dono6
setNes(nescessario)
reply(`Agora contem um quinto dono(a) alterado com sucesso para: ${dono6}`)
break

case 'getquoted':
reply(JSON.stringify(info.message.extendedTextMessage.contextInfo, null, 3))
break

case 'donos':
reply(mess.ownersList(NomeDoBot, numerodono_ofc, dono1, dono2, dono3, dono4, dono5, dono6))
break

case 'admins':
case 'listadmins':  
case 'listaadmins':   
if(!isGroup) return reply(enviar.msg.grupo)
ytb = `Lista de admins do grupo *${groupMetadata.subject}*\n*Total de Adminstradores:* ${groupAdmins.length}\n-\n`
no = 0
for (let admon of groupAdmins) {
no += 1
ytb += `( ${no.toString()} ) - @${admon.split('@')[0]}\n`
}
mentions(ytb, groupAdmins, true)
break

case 'criartabela': case 'criartbl': case 'criartab':
if(!isGroupAdmins && !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
if(!q.trim()) return reply("Digite o que deseja colocar na tabela do grupo..")
msgz = args.join(" ")
msgtmpol = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
datinhaofc = moment.tz('America/Sao_Paulo').format('DD/MM/YY');
fs.writeFileSync(`./bunker/database/func/tabela/tabela-${from}.json`,
JSON.stringify({Horario: msgtmpol, Data: datinhaofc, Tabela: msgz}, null, 2));
reply(`Tabela do grupo foi criada com sucesso..`)
break

case 'tabelagp': case 'tabeladogp': case 'tabelinha': 
if(!fs.existsSync(`./bunker/database/func/tabela/tabela-${from}.json`)) {
reply(`Cade a tabela, cria ela com o comando\nExemplo: ${prefix}criartabela lindas do grupo : e etc ..`)
}
const tabelagpofc = JSON.parse(fs.readFileSync(`./bunker/database/func/tabela/tabela-${from}.json`)); 
mention(tabelaGrupo(groupName, tabelagpofc))
break

case 'ativo': case 'on': case 'voltei':
if(!isGroupAdmins && !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
if(DonoOficial) {
if(fs.existsSync("./bunker/database/func/afk/afk-@" + numerodono_ofc + ".json")) {  
DLT_FL("./bunker/database/func/afk/afk-@" + numerodono_ofc + ".json");
reply("Bem vindo de volta, agora você está online 🙂")
} else {
reply("Você não registrou nenhuma mensagem de ausência...")
}
} else if(isGroupAdmins) {
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) return reply("Não há nenhum registro de ausência sua..")
dataGp[0].ausentes.splice(dataGp[0].ausentes.map(x => x.id).indexOf(sender), 1)
setGp(dataGp)
reply("Registro de ausência tirada com sucesso...")
}
break

case 'ausente': case 'off': case 'afk':
if(!isGroupAdmins && !SoDono) return reply("Só adm ou dono pode utilizar este comando.")
if(DonoOficial) {
msgtmp = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
fs.writeFileSync(`./bunker/database/func/afk/afk-@${setting.numerodono.replace(new RegExp("[()+-/ +/]", "gi"), "")}.json`,
JSON.stringify({
Ausente_Desde: msgtmp, 
Motivo_Da_Ausência: q
}, null, 2));
reply(`Mensagem de ausência criada com sucesso...`)
} else if(isGroupAdmins) {
if(!q.trim()) return reply(`Digite a mensagem de ausência, Exemplo: ${prefix+command} Estou tomando banho`)
if(!JSON.stringify(dataGp[0].ausentes).includes(sender)) {
dataGp[0].ausentes.push({id: sender, msg: q.trim()})
setGp(dataGp)
reply("Mensagem de ausência criada com sucesso..\n\nSe deseja Desativar a mensagem de ausência use o comando ativo")
} else {
dataGp[0].ausentes[dataGp[0].ausentes.map(i => i.id).indexOf(sender)].msg = q.trim()
setGp(dataGp)
reply("Mensagem de ausência alterada com sucesso..\n\nSe deseja desativar a mensagem de ausência use o comando ativo")
}
} else {
return reply("Comando apenas para administradores e dono do bot..")
}
break

case 'serpremium':
case 'serprem':  
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
premium.push(nmrdn)
fs.writeFileSync('./configs/media/premium.json', JSON.stringify(premium))
mention(`Pronto @${numerodono_ofc} você foi adicionado na lista premium.`)
break

case 'addpremium':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!marc_tds) return reply("Marque o usuário do grupo ou digite o número do usuário ou marque a mensagem dele..")
bla = premium.includes(marc_tds)
if(bla) return reply("*Este número já está incluso..*")  
premium.push(marc_tds)
fs.writeFileSync('./configs/media/premium.json', JSON.stringify(premium))
anna.sendMessage(from, {text: mess.addPremiumMessage(marc_tds), mentions: [marc_tds]}, {quoted: sasah})  
break 

case 'delpremium':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!marc_tds) return reply("Marque o usuário do grupo ou digite o número do usuário ou marque a mensagem dele..")
if(!premium.includes(marc_tds)) return reply("*Este número não está incluso na lista premium..*")  
pesquisar = marc_tds
processo = premium.indexOf(pesquisar)
while(processo >= 0){
premium.splice(processo, 1)
processo = premium.indexOf(pesquisar)
}
fs.writeFileSync('./configs/media/premium.json', JSON.stringify(premium))
anna.sendMessage(from, {text: mess.delPremiumMessage(marc_tds), mentions: []}, {quoted: sasah})
break

case 'limpar':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
clear = `🗑️\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪ́ᴅᴀ* ✅`
anna.sendMessage(from, {text: clear}, {quoted: sasah, contextInfo : { forwardingScore: 500, isForwarded:true}})
break

case 'd_':
if(!isPremium) return reply("Apenas premium..")
anna.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.buttonsResponseMessage.contextInfo.stanzaId, participant: botNumber}})
break

case 'doc':
case 'docfake':
try {
sprd = "|"
if(!q) return reply(`${prefix + command} exemplo${sprd}500${sprd}apk\n-\nOs tipos aceitos por enquanto são: pdf > xml > zip > jpg > ppt > apk > txt > aac > pptx > aac > m4a > mp4 > mp3 > svg > png`)
kls = args.join(' ')
let nomedoc = kls.split(sprd)[0] || `${setting.NomeDoBot}`
let peso = kls.split(sprd)[1] * 1000000 || '1000000'
let mimetyp = kls.split(sprd)[2].replace(" ", "") || 'gif'
let thumbc = kls.split(sprd)[3] || 'https://google.com/'
if(mimetyp.toLowerCase() == 'pdf') mimetyp = 'application/pdf'
if(mimetyp.toLowerCase() == 'apk') mimetyp = 'application/vnd.android.package-archive'
if(mimetyp.toLowerCase() == 'aac') mimetyp = 'audio/aac'
if(mimetyp.toLowerCase() == 'xml') mimetyp = 'application/xml'
if(mimetyp.toLowerCase() == 'zip') mimetyp = 'application/zip'
if(mimetyp.toLowerCase() == 'jpg') mimetyp = 'image/jpeg'
if(mimetyp.toLowerCase() == 'ppt') mimetyp = 'application/vnd.ms-powerpoint'
if(mimetyp.toLowerCase() == 'pptx') mimetyp = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
if(mimetyp.toLowerCase() == 'mp4') mimetyp = 'video/mp4'
if(mimetyp.toLowerCase() == 'm4a') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'mp3') mimetyp = 'audio/mpeg'
if(mimetyp.toLowerCase() == 'gif') mimetyp = 'image/gif'
if(mimetyp.toLowerCase() == 'png') mimetyp = 'image/png'
if(mimetyp.toLowerCase() == 'svg') mimetyp = 'image/svg+xml'
if(mimetyp.toLowerCase() == 'txt') mimetyp = 'text/plain'
let Messagemdoc = {
document: fs.readFileSync('./bunker/database/data/tmp/docf.txt'),
mimetype: mimetyp,
jpegThumbnail: await getBuffer(thumbc),
fileName: nomedoc,
fileLength: peso,
headerType: 4,
contextInfo:{
forwardingScore:999,
isForwarded:true,
}
}
anna.sendMessage(from, Messagemdoc, {quoted: sasah})
} catch (err) {
console.log(err)
reply(`Ops ocorreu um erro`)
}
break

case 'deletar': case 'delete': case 'del':  case 'd':
if(!isGroupAdmins && !isPremium) return reply(enviar.msg.adm)
if(!menc_prt) return reply("Marque a mensagem do usuário que deseja apagar, do bot ou de alguém..")
anna.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.message.extendedTextMessage.contextInfo.stanzaId, participant: menc_prt}})
break

case 'fundobemvindo':
case 'fundobv':  
if(!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo1 = res
nescessario.fundo1 = fundo1
setNes(nescessario)
reply(`A imagem de bem vindo foi alterado com sucesso para: ${fundo1}`)
}
break

case 'fundosaiu':
if(!SoDono  && !isnit && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!isQuotedImage) return reply("Marque uma imagem")
reply('Você deve marcar uma imagem com esse comando, se não for de primeira, tente novamente, ok? ')
if((isMedia && !info.message.videoMessage || isQuotedImage || isQuotedVideo ) && !q.length <= 1) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
fundo2 = res
nescessario.fundo2 = fundo2
setNes(nescessario)
reply(`A imagem de saiu foi alterado com sucesso para: ${fundo2}`)
}
break

case 'antiligar':
case 'antiligacao':  
case 'antiligação':  
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAnticall) {
nescessario.anticall = true
setNes(nescessario)
reply(`O anti ligação foi ativado com sucesso. Caso alguém efetue uma ligação para o bot será bloqueado.`)
} else if(isAnticall) {
nescessario.anticall = false
setNes(nescessario)
reply('O anti ligação foi desativado com sucesso.')
}
break

case 'antipv':  
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAntiPv) {
nescessario.antipv = true
setNes(nescessario)
reply(`O anti privado foi ativado com sucesso. Caso alguém envie mensagem para o bot, será bloqueado!`)
} else if(isAntiPv) {
nescessario.antipv = false
setNes(nescessario)
reply('O anti privado foi desativado com sucesso.')
}
break

case 'antipv2':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isAntiPv2) {
nescessario.banChats = true
setNes(nescessario)
reply("Sucesso! Foi alterado para modo antipv, pv não poderá ser utilizado, mas não bloquearei o usuário, só flodarei mensagem a cada mensagem dele.")
} else if(isAntiPv2) {
nescessario.banChats = false
setNes(nescessario)
reply("Modo anti privado que não bloqueia foi desligado, pv liberado com scuesso.")
}
break

case 'block':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja bloquear de ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numblc = ban.indexOf(blcp)
if(numblc >= 0) return reply('*Esse número já esta incluso na lista de bloqueio.*')
ban.push(blcp)
fs.writeFileSync('./bunker/database/usuarios/banned.json', JSON.stringify(ban))
anna.sendMessage(from, {text: mess.bannedMessage(blcp), mentions: [blcp]})
break

case 'unblock':
if(!SoDono  && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q.length > 6) return reply("Marque o @ do usuário que deseja desbloquear pra ele utilizar os comandos, ou o número da fórma que copiar...")
var blcp = q.replace(new RegExp("[()+-/ @+/]", "gi"), "")+"@s.whatsapp.net"
var numbl = ban.indexOf(blcp)
if(numbl < 0) return reply('*Esse número não está incluso na lista de bloqueados.*')
pesquisar = blcp
processo = ban.indexOf(pesquisar)
while(processo >= 0){
ban.splice(processo, 1)
processo = ban.indexOf(pesquisar)
}
fs.writeFileSync('./bunker/database/usuarios/banned.json', JSON.stringify(ban))
anna.sendMessage(from, {text: mess.unbannedMessage(blcp), mentions: [blcp]})
break

case 'blocklist':
jrc = `[Total: *${ban.length}*] - Usuários bloqueados:\n-\n`
for (let benn of ban) {
jrc += `  Usuário: @${benn.split('@')[0]}\n-\n`
}
anna.sendMessage(from, {text: jrc.trim(), mentions: ban}, {quoted: sasah})
break


case 'acess':
if(!SoDono && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
teks = body.slice(7)
exec(teks, (err, stdout) => {
if(err) return anna.sendMessage(from, {text: `root@annaOficial:~ ${err}`}, {quoted: sasah})
if(stdout) {
anna.sendMessage(from, {text: stdout})
}
})
break

case 'execut':
if(!SoDono  && !isnit && !issupre && !ischyt) return reply(enviar.msg.donosmt)
try{
return eval(`(async() => { ${args.join(' ')}})()`)
} catch (e) {
anna.sendMessage(from, {text:`${e}`})
}
break

case 'exec':
if(!SoDono  && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
break

case 'sender':
bla = isGroup ? info.key.participant : info.key.remoteJid
reply(bla)
break

case 'ping': {
anna.sendMessage(from, { react: { text: `🏃🏻‍♀️`, key: info.key }})
r = (Date.now() / 1000) - info.messageTimestamp
uptime = process.uptime()
hora1 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
await anna.sendMessage(from, { image: { url: `https://eruakorl.sirv.com/Bot%20dudinha/ping.jpeg?text.0.text=VELOCIDADE%20DA%20ANNA&text.0.position.gravity=north&text.0.position.y=15%25&text.0.size=40&text.0.font.family=Teko&text.0.font.weight=800&text.0.background.opacity=100&text.0.outline.blur=100&text.1.text=${String(r.toFixed(3))}&text.1.position.gravity=center&text.1.size=30&text.1.color=ffffff&text.1.font.family=Teko&text.1.font.weight=800&text.1.background.opacity=100&text.1.outline.blur=100` }, caption: mess.speedanna(tempo, sender, r, kyun, uptime, infoSystem), mentions: [sender]}, {quoted: sasah}) 
}
break                 
                  
case 'gtts':
try {
if (args.length < 1) return anna.sendMessage(from,{text: `Cade o texto?, digite algo Exemplo:\n${prefix}gtts PT Oi`}, {quoted: sasah})
const gtts = require('./bunker/armor/funcoes/gtts')(args[0])
if (args.length < 2) return anna.sendMessage(from, {text: 'Falta colocar o código do idioma!'}, {quoted: sasah})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
if(dtt.length > 200) return reply('Para reduzir spam o máximo de letras permitidas são 200!')
gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
anna.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mpeg"}, {quoted: sasah}).catch(e => {
return reply(mess.error())
})
DLT_FL(ranm)
DLT_FL(rano)
})
})
} catch {
return reply(mess.error())
}
break


case 'tagme':
const tagme = `@${sender.split("@")[0]} ✔️`
await mentions(tagme, [sender], true)
break

case 'blockcmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd blockcmd") || (tp.includes("blockcmd  blockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de bloquear comando?`)
if(getComandoBlock(from).includes(args[0]))return reply('Este comando já está bloqueado.')
addComandos(from, args[0])
reply(`O comando ${args[0]} foi bloqueado.`)
break

case 'unblockcmd':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono  && !isnit) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("blockcmd unblockcmd") || (tp.includes("blockcmd  unblockcmd"))) return reply(`Tá louco maluco?, Quer banir o comando de desbloquear comando?`)  
if(!getComandoBlock(from).includes(args[0]))return reply('Este comando já está desbloqueado.')
deleteComandos(from, args[0])
reply(`O comando ${args[0]} foi desbloqueado.`)
break

case 'listacomandos':
tkks = `[Total: *${getComandoBlock(from).length}*] - Comandos bloqueados:\n-\n`
for (ac = 0; ac < getComandoBlock(from).length; ac++) {
tkks += `  [ *${ac+1}* ] Comando: ${prefix + getComandoBlock(from)[ac]}\n-\n`
}
anna.sendMessage(from, {text: tkks.trim()}, {quoted: sasah})
break

case 'modoaluguel':
case 'aluguel':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donomt)
if(args.length < 1) return reply('1 para ativar, 0 para desativar este recurso.')
if(Number(args[0]) === 1) {
if(isModoAluguel) return reply('O modo aluguel já está ativado neste grupo mestre!')
dataGp[0].aluguel = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de modo aluguel neste grupo, agora ninguém pode usar meus comandos aqui somente você mestre.')
} else if(Number(args[0]) === 0) {
if(!isModoAluguel) return reply('O modo aluguel não está ativado neste grupo mestre!')
dataGp[0].aluguel = false
setGp(dataGp)
reply('O modo aluguel foi desativado, agora o grupo pode usar meus comandos sem nenhuma restrição.')
} else {
reply('1 para ativar, 0 para desativar este recurso.')
}
break

case 'addcmdprem':
if(!SoDono) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("addcmdprem addcmdprem") || (tp.includes("addcmdprem  addcmdprem"))) return reply(`Tá louco maluco? Não tem como adicionar o mesmo comando.`)
if(isCmdPremium.includes(args[0]))return reply('Este comando já está incluso na lista de comandos premium, verifique.')
isCmdPremium.push(args[0])
fs.writeFileSync('./configs/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`O comando ${args[0]} foi adicionado na lista de comandos premium.`)
break

case 'delcmdprem':
if(!SoDono) return reply(enviar.msg.donosmt)
tp = args.join(" ")
if(tp.includes("delcmdprem delcmdprem") || (tp.includes("delcmdprem  delcmdprem"))) return reply(`Tá louco maluco? Não tem como deletar o mesmo comando.`)  
if(!isCmdPremium.includes(args[0]))return reply('Este comando já está excluído da lista de comandos premium.')
var i = isCmdPremium.indexOf(args[0])
isCmdPremium.splice(i, 1)
fs.writeFileSync('./configs/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`O comando ${args[0]} foi tirado da lista de comandos premium.`)
break

case 'listacmdprem':
tkks = `[Total: *${isCmdPremium.length}*] - Comandos premium:\n-\n`
for (ac = 0; ac < isCmdPremium.length; ac++) {
tkks += `  [ *${ac+1}°* ] Comando: ${prefix + isCmdPremium[ac]}\n-\n`
}
anna.sendMessage(from, {text: tkks.trim()}, {quoted: sasah})
break

case 'blocklist':
jrc = `[Total: *${ban.length}*] - Usuários bloqueados:\n-\n`
for (let benn of ban) {
jrc += `  Usuário: @${benn.split('@')[0]}\n-\n`
}
anna.sendMessage(from, {text: jrc.trim(), mentions: ban}, {quoted: sasah})
break

case 'premiumlist':
tkks = `[Total: *${premium.length}*] - Usuários premium:\n-\n`
for (let id of premium) {
tkks += `  Usuário: @${id.split('@')[0]}\n-\n`
}
mention(tkks.trim())
break

case 'avalie':
const avalie = body.slice(8)
if(args.length <= 1) return reply(`Exemplo: ${prefix}avalie "Bot muito bom, parabéns. "`)
if(args.length >= 400) return anna.sendMessage(from, {text: 'Máximo 400 caracteres'}, {quoted: sasah})
var nomor = info.participant
tdptls = `[ Avaliação ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\n: ${avalie}`
anna.sendMessage(nmrdn, {text: tdptls}, {quoted: sasah})
reply("Mensagem enviada ao meu dono, obrigado pela avaliação, iremos melhorar a cada dia.")
break

case 'bug':
const bug = body.slice(5)
if(args.length <= 1) return reply(`Exemplo: ${prefix}bug "ocorreu um erro no comando sticker"`)
if(args.length >= 800) return anna.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: sasah})
var nomor = info.participant
teks1 = `[ Problema ]\nDe: wa.me/${sender.split("@s.whatsapp.net")[0]}\nErro ou bug: ${bug}`
anna.sendMessage(nmrdn, {text: teks1}, {quoted: sasah})
reply("Mensagem enviada ao meu dono, se enviar muitas mensagens repetida por zoueiras, você sera banido de utilizar os comandos do bot.")
break

case 'sugestão':
case 'sugestao':
const sugestao = body.slice(10)
if(args.length <= 1) return reply(`Exemplo: ${prefix}sugestao "Opa, crie um comando tal, que ele funcione de tal maneira, isso será muito bom, não só pra mim, mas pra vários fazer isso.."`)
if(args.length >= 800) return anna.sendMessage(from, {text: 'Máximo 800 caracteres'}, {quoted: sasah})
sug = `[ Sugestões de Novos Comandos ]\n@${sender.split("@s.whatsapp.net")[0]}\n${sugestao}`
anna.sendMessage(nmrdn, {text: sug, mentions: sender}, {quoted: sasah})
reply("Mensagem enviada ao meu dono, obrigado pela sugestão, tentar ouvir o máximo possível de sugestões.")
break

//==========(BAIXAR/PESQUISAS)==========\\

case 'gimage':
try {
if(!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} cat`)
reply(enviar.espere)
ABC = await fetchJson(APIs.Site1 + `/api/gimage?txt=${q}&apikey=` + apikey_kita);
anna.sendMessage(from, {image: {url: ABC.result[Math.floor(Math.random() * ABC.result.length)].url}}, {quoted: sasah}).catch(() => {
return reply(mess.error());
})
} catch (e) {
return reply(mess.error());
}
break;

case 'google': case 'googlesrc': 
if(!q) return reply(`Exemplo: ${prefix+command} Mc Pipoquinha`)
reply(enviar.espere);
try {
ABC = await fetchJson(APIs.Site1 + `/api/googlesrc?query=${q}&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.result.map(v =>  `• *Título:* ${v.title}\n• *Imagem:* ${v.url}\n• *Link:* ${v.originalUrl}`).join('\n-\n')}`
reply(RST)
} catch(e) {
return reply(mess.error())
}
break;

case 'screenshotweb': case 'printsite': case 'ssweb':
reply('Aguarde um pouco, entrando no site solicitado...')
if(!q) return reply(`Cadê o link do site o qual você deseja visualizar?`)
try {
img = await getBuffer(APIs.Site1 + `/api/ssweb?link=${q}&apikey=` + apikey_kita)
anna.sendMessage(from, {image: img, caption: `• *Site:* ${q}`}, {quoted: sasah})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('❌️️ Erro ao entrar no site desejado. Tente novamente mais tarde!')
}
}
break

case 'memes': case 'memedroid':
try {
reply(enviar.espere)
res = await axios.get(APIs.Site1 + `/api/memes?apikey=` + apikey_kita);
teks = pickRandom(res.data.pesquisa.resultado)
await anna.sendMessage(from, {image: await getBuffer(teks.imagem), caption: mess.memesImages(teks)}, {quoted: sasah}).catch(() => {
return reply(mess.error());
})
} catch (e) {
return reply(mess.error());
}
break;

case 'memesvid': case 'ifunnyvideo':
try {
reply(enviar.espere)
res = await axios.get(APIs.Site1 + `/api/memesvid?apikey=` + apikey_kita);
teks = pickRandom(res.data.videos)
await anna.sendMessage(from, {video: await getBuffer(teks.video), caption: mess.iFunnyVideo(teks)}, {quoted: sasah}).catch(() => {
return reply(mess.error());
})
} catch (e) {
return reply(mess.error());
}
break;

case 'globo': case 'poder360': case 'jovempan': case 'uol': case 'cnnbrasil':
try {
res = await axios.get(APIs.Site1 + `/api/noticias/${command}?apikey=` + apikey_kita);
teks = pickRandom(res.data.pesquisa.resultado)
await anna.sendMessage(from, {image: await getBuffer(teks.imagem), caption: mess.newsMiscellaneous(teks)}, {quoted: sasah}).catch(() => {
return reply(mess.error());
})
} catch (e) {
return reply(mess.error());
}
break;

case 'noticias': case 'getnoticias':
try {
if (!q) return reply(`Informe um tema para realizar a pesquisa de suas notícias!`)
theNews = await axios.get(`https://newsapi.org/v2/everything?q=${encodeURIComponent(q)}&sortBy=publishedAt&language=pt&apiKey=9dc1dde158804756ae9b33dd8d71f7a1`);
newsSends = theNews.data.articles.map(d => `${d.publishedAt.split('T').join(' - ').split('Z')[0]}\n\n${d.title} - ${d.author} [${d.source.name}]\n\n${d.description}\n\n${d.url}\n\n${d.content}\n\n--------------------------- * ---------------------------\n\n`).join('');
msgSemQuoted(newsSends).catch(() => {
return console.log(e)
})
} catch (e) {
return console.log(e)
}
break

case 'cases':
if(!SoDono) return reply("Você não é dono para utilizar este comando...")
try {
const listCases = () => {
const fileContent = fs.readFileSync("index.js").toString();
const caseNames = fileContent.match(/case\s+'(.+?)'/g);
if (caseNames) {
return caseNames.map((caseName, index) => `${index + 1}. ${caseName.match(/'(.+?)'/)[1]}`).join('\n');
} else {
reply("Nenhuma case encontrada.") } }
anna.sendMessage(from, { text: listCases() }, { quoted: sasah });
} catch (e) {
console.log(e)
reply('Ocorreu um erro ao obter as cases.') }
break

case 'pinterest': 
try {
if(!q) return reply(`Digite o nome da imagem que vc quer buscar\nExemplo: ${prefix + command} cat`)
reply(enviar.espere)
blap = await getBuffer(APIs.Site1 + `/api/pinterest?text=${q}&apikey=` + apikey_kita)
await anna.sendMessage(from, {image: blap, thumbnail: null}, {quoted: sasah}).catch(e => {
reply('❌️ *Erro ao fornecer o resultado da sua pesquisa.* Tente novamente mais tarde!')
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('❌️ *Erro ao fornecer o resultado da sua pesquisa.* Tente novamente mais tarde!')
}
}
break;

case 'akinator': // Créditos: @Liedson
reply("Aguarde... Estou iniciando o jogo!")
var region = 'pt'
var childMode = false;
var proxy = undefined;
if (q === "resetaki"){
if (!isGroupAdmins && !SoDono) {
jogo.now = true
}
}
let startAki = async () => {
global.aki = new Aki({ region, childMode, proxy });
await aki.start()
}
if (jogo.now) {
await startAki()
jogo.now = false
jogo.jogador = sender
} else return reply("Alguém já está jogando, aguarde a partida atual terminar!")
reply(`• *Pergunta:* ${aki.question}\n–\n• Para responder como *"sim"*, use o comando: *${prefix}respaki 0*\n• Para responder como *"não"*, use o comando: *${prefix}respaki 1*\n• Para responder como *"não sei"*, use o comando: *${prefix}respaki 2*\n• Para responder como *"provavelmente sim"*, use o comando: *${prefix}respaki 3*\n• Para responder como *"provavelmente não"*, use o comando: *${prefix}respaki 4*`);
break

case 'respaki': // Créditos: @Liedson
if(!q) return reply("Cadê a resposta?")
if (jogo.jogador !== sender) return anna.sendMessage(from, { text: 'Não é você que está jogando.'}, {quoted: info})
await aki.step(args)
if (aki.progress >= 90 || aki.currentStep >= 90) {
await aki.win()
jogo.now = true
anna.sendMessage(from, { image: { url: aki.answers[0].absolute_picture_path },
caption: aki.answers[0].name + " - " + aki.answers[0].description + `\nPor acaso este é o seu personagem?\n–\nSe sim responda: *${prefix}finaki sim*\nCaso não seja, responda: *${prefix}finaki não*`})
} else {
anna.sendMessage(from, {text: aki.question + "\n• Progresso: " + aki.progress.toFixed(0) + '%'+`\n–\n• Para responder como *"sim"*, use o comando: *${prefix}respaki 0*\n• Para responder como *"não"*, use o comando: *${prefix}respaki 1*\n• Para responder como *"não sei"*, use o comando: *${prefix}respaki 2*\n• Para responder como *"provavelmente sim"*, use o comando: *${prefix}respaki 3*\n• Para responder como *"provavelmente não"*, use o comando: *${prefix}respaki 4*`})
}
break

case 'finaki': // Créditos: @Liedson
if (q === 'não' || q === 'Não' || q === 'Sim' || q === "sim") return reply('Puxa não foi desta vez. Parabéns!') 
reply('Eu annaia, eu venci!')
break

case 'resetaki': // Créditos: @Liedson
if (!isGroupAdmins && !SoDono) {
jogo.now = true
reply("O akinator foi resetado com sucesso!")
} else {
reply("Somente admin(s) do grupo ou dono podem usar este comando.")
}
break

case 'videourl':
case 'gerarlink':
case 'videopralink':
case 'imgpralink':
try {
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) { 
reply(enviar.espere)
boij = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
owgi = await getFileBuffer(boij, 'image')
res = await upload(owgi)
reply(res) 
} else if((isMedia && info.message.videoMessage.seconds < 30 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 30) && !q.length <= 1) { 
reply(enviar.espere)
boij = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.videoMessage : info.message.videoMessage
owgi = await getFileBuffer(boij, 'video')
res = await upload(owgi)
reply(res)
} else {
reply("Você deve marcar uma imagem, ou um vídeo de até 30 segundos..")
}
} catch {
reply(mess.errorUploadImage())
}
break

// LOGOS 

case 'shadow':
case 'angelwing':
case 'efeitoneon':
case 'cemiterio':
case 'metalgold':
case 'narutologo':
case 'fire':
case 'romantic':
case 'smoke':  
case 'papel':
case 'lovemsg':
case 'lovemsg2':
case 'lovemsg3':
case 'coffecup':
case 'coffecup2':  
case 'cup':
case 'florwooden':
case 'madeira':
case 'neon2':
case 'lobometal':
case 'harryp':
case 'txtborboleta':
case 'blackpink':
case 'girlmascote': 
case 'logogame':
case 'equipemascote':
case 'fpsmascote':
case 'hackneon':
case 'ffavatar':
case 'mascotegame':
case 'wingeffect':
case 'angelglx':
case 'gizquadro':
case 'txtquadrinhos':
case 'starballons':
case 'frozen':
case '3dsilver':
case 'goldtext':
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await fetchJson(APIs.Site1 + `/api/${command}?texto=${textin}&apikey=` + apikey_kita)
blabla = await getBuffer(bla.resultado.imageUrl)
anna.sendMessage(from, {image: blabla}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break  

case 'gameplay':
case 'ffbanner':
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
if(!textin) return reply(mess.syntaxLogos())
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play`)
reply(enviar.espere)
bla = await fetchJson(APIs.Site1 + `/api/${command}?texto=${txt1}&texto2=${txt2}&apikey=` + apikey_kita)
blabla = await getBuffer(bla.resultado.imageUrl)
anna.sendMessage(from, {image: blabla}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case 'cria': 
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_api.jpg?text.0.text=${teks}&text.0.color=000000&text.0.font.family=Pacifico&text.0.font.weight=600&text.0.background.color=ffffff&text.0.outline.color=ffffff&text.0.outline.width=10&text.0.outline.blur=17`)
anna.sendMessage(from, { image: venomk }, { quoted: sasah })
break

case 'anime1':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis2.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=16%25&text.0.size=80&text.0.color=ff2772&text.0.opacity=67&text.0.font.family=Bangers&text.0.font.style=italic&text.0.background.opacity=50&text.0.outline.width=6`)
anna.sendMessage(from, { image: venomk }, { quoted: sasah })
break

case 'ff1':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis3.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=59%25&text.0.size=89&text.0.color=000000&text.0.opacity=71&text.0.font.family=Changa%20One&text.0.font.style=italic&text.0.background.opacity=10&text.0.outline.color=ffffff&text.0.outline.width=3`)
anna.sendMessage(from, { image: venomk }, {quoted: sasah })
break	

case 'game':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis5.jpg?text.0.text=${teks}&text.0.position.gravity=center&text.0.position.x=1%25&text.0.position.y=22%25&text.0.align=left&text.0.size=59&text.0.font.family=Permanent%20Marker&text.0.outline.color=df00ff&text.0.outline.width=2&text.0.outline.blur=18`)
anna.sendMessage(from, { image: venomk }, { quoted: sasah })
break

case 'ff2':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis6.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=50%25&text.0.size=68&text.0.color=464646&text.0.opacity=51&text.0.font.family=Sigmar%20One&text.0.background.opacity=2&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.opacity=61`)
anna.sendMessage(from, { image: venomk }, { quoted: sasah })
break	

case 'anime2':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis7.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.x=1%25&text.0.position.y=58%25&text.0.size=69&text.0.color=00ffea&text.0.opacity=37&text.0.font.family=Bangers&text.0.background.opacity=77&text.0.outline.color=ffffff&text.0.outline.width=2&text.0.outline.blur=20`)
anna.sendMessage(from, { image: venomk }, { quoted: sasah })
break

case 'entardecer':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis9.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=50%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=61&text.0.font.family=Tangerine&text.0.font.style=italic&text.0.background.opacity=61&text.0.outline.color=ff6f00&text.0.outline.width=9`)
anna.sendMessage(from, { image: venomk }, { quoted: sasah })
break

case 'indian':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis10.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=004124&text.0.opacity=99&text.0.font.family=Permanent%20Marker&text.0.font.style=italic&text.0.background.color=feff00&text.0.outline.color=ffe8a3&text.0.outline.width=9&text.0.outline.blur=21`)
anna.sendMessage(from, { image: venomk }, { quoted: sasah })
break 

case 'ffrose':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis12.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=65%25&text.0.size=61&text.0.color=ff00e6&text.0.opacity=32&text.0.font.family=Chewy&text.0.font.style=italic&text.0.outline.width=6`)
anna.sendMessage(from, { image: venomk }, { quoted: sasah })
break	

case 'ffgren':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis13.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=63%25&text.0.size=68&text.0.color=ffffff&text.0.opacity=92&text.0.font.family=Permanent%20Marker&text.0.font.weight=800&text.0.outline.color=5dff00&text.0.outline.width=13&text.0.outline.blur=21`)
anna.sendMessage(from, { image: venomk }, { quoted: sasah })
break		

case 'chufuyu':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis14.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=68%25&text.0.size=60&text.0.color=ffffff&text.0.font.family=Sigmar%20One&text.0.font.style=italic&text.0.background.opacity=17&text.0.outline.color=a99cff&text.0.outline.width=9&text.0.outline.blur=16`)
anna.sendMessage(from, { image: venomk }, { quoted: sasah })
break	

case 'wolf':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis15.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=62%25&text.0.size=63&text.0.color=000000&text.0.font.family=Audiowide&text.0.font.style=italic&text.0.background.opacity=15&text.0.outline.color=ffffff&text.0.outline.width=9&text.0.outline.blur=33`)
anna.sendMessage(from, { image: venomk }, { quoted: sasah })
break	

case 'dragonred':
if (args.length < 1) return reply(mess.syntaxLogos())
teks = body.slice(7)
if (teks.length > 10) return reply('O texto é longo, até 10 caracteres')
reply(enviar.espere)
venomk = await getBuffer(`https://lollityp.sirv.com/venom_apis16.jpg?text.0.text=${teks}&text.0.position.gravity=north&text.0.position.y=58%25&text.0.size=99&text.0.color=fffefe&text.0.font.family=Permanent%20Marker&text.0.background.color=000000&text.0.outline.color=000000&text.0.outline.width=19&text.0.outline.blur=66`)
anna.sendMessage(from, { image: venomk }, { quoted: sasah })
break	

case 'purple':              
if (args.length < 1) return reply(mess.syntaxLogos())
teks = `${body.slice(8)}`
if (teks.length > 10) return anna.sendMessage(from, 'Teksnya kepanjangan Bambank', text, {quoted: sasah})
reply(enviar.espere)
venomk = await getBuffer(`https://docs-jojo.herokuapp.com/api/text3d?text=${teks}`, {method: 'get'})
anna.sendMessage(from, { image: venomk }, {quoted: sasah, caption: `${teks}`})			     	
break


case 'avatar':  
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
if(!textin) return reply(mess.syntaxLogos())
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play`)
reply(enviar.espere)
bla = await fetchJson(APIs.Site1 + `/api/mascoteavatar?texto=${txt1}&texto2=${txt2}&apikey=` + apikey_kita)
blabla = await getBuffer(bla.resultado.imageUrl)
anna.sendMessage(from, {image: blabla}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case 'googlesg':
textin = args.join(" ")
txt1 = textin.split("/")[0];
txt2 = textin.split("/")[1];
txt3 = textin.split("/")[2];
if(!textin) return reply(mess.syntaxLogos())
if(!textin.includes("/")) return reply(`Cade a / precisa dela para a separação..\nExemplo: ${prefix + command} Game/Play/Sad`)
reply(enviar.espere)
bla = await fetchJson(APIs.Site1 + `/api/${command}?texto=${txt1}&texto2=${txt2}&texto3=${txt3}&apikey=` + apikey_kita)
blabla = await getBuffer(bla.resultado.imageUrl)
anna.sendMessage(from, {image: blabla}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break  

case 'marvel': 
case 'glitch':   
case 'stone':   
case 'space':
case 'pornhub':
case 'america':   
case 'steel':  
case 'grafity':  
case 'glitch3':
case 'thorstyle':  
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} sad/sad`)
reply(enviar.espere)
bla = await fetchJson(APIs.Site1 + `/api/${command}?texto=${texto1}&texto2=${texto2}&apikey=` + apikey_kita)
blabla = await getBuffer(bla.resultado)
anna.sendMessage(from, {image: blabla}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case 'videogame':  
try {
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} sad/sad`)
reply(enviar.espere)
bla = await fetchJson(APIs.Site1 + `/api/textpro/video-game-classic?texto=${texto1}&texto2=${texto2}&apikey=` + apikey_kita)
dllink = await getBuffer(bla.resultado)
anna.sendMessage(from, {image: dllink}, {quoted: sasah})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
}
}
break

case 'pubg':  
try {
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} sad/sad`)
reply(enviar.espere)
bla = await getBuffer(APIs.Site1 + `/api/photooxy/pubg?texto=${texto1}&texto2=${texto2}&apikey=` + apikey_kita)
anna.sendMessage(from, {image: bla}, {quoted: sasah})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
}
}
break

case 'glitchtiktok':  
try {
texto = args.join(' ')
texto1 = texto.split('/')[0] || 'Indefinido'
texto2 = texto.split('/')[1] || 'Indefinido'
if(!texto.includes("/")) return reply(`Cade a /\nExemplo: ${prefix + command} sad/sad`)
reply(enviar.espere)
bla = await fetchJson(APIs.Site1 + `/api/textpro/glitchtiktok?texto=${texto1}&texto2=${texto2}gleyson`)
dllink = await getBuffer(bla.resultado)
anna.sendMessage(from, {image: dllink}, {quoted: sasah})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
}
}
break

case 'lava':
case 'toxic':  
case 'thunder': 
case 'thunderv2':  
case 'neongreen':	
case 'neon':  
case 'neon1':  
case 'neon3d':  
case 'demongreen':   
case 'metalfire':  
case 'rainbow':	  
case 'gelo':
case 'halloween':  
case 'lapis':  
case 'glitch':  
case 'glitch2':   
case '3dgold': 
case 'neon3d':   
case 'transformer':  
case '3dstone':
case 'fiction':
case 'cattxt':
case 'neondevil':
case 'demonfire':
case 'colaq':
case 'luxury':
case 'berry':
case 'matrix':
case 'horror':
case 'nuvem':
case 'neon3':
case 'neve':
case 'areia':
case 'vidro':
case 'style':
case 'blood':
case 'pink':
case 'carbon':
case 'metalblue': 
case 'jeans':  
case 'jokerlogo':   
case 'natal': 
case 'ossos':  
case 'asfalto':	
case '3ddragon':
case 'esmeralda':
case 'break':  
case 'hologram':  
case 'deepsea':
case 'narutologo2':
try {
reply(enviar.espere)
texto = args.join(" ")
if(!texto) return reply(mess.syntaxLogos())
bla = await fetchJson(APIs.Site1 + `/api/${command}?texto=${texto}&apikey=` + apikey_kita)
blabla = await getBuffer(bla.resultado)
anna.sendMessage(from, {image: blabla}, {quoted: sasah})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
}
}
break

case "watercolor":
case "1917":
case "multicolor":
case "generator":
case "naturalleaves":
case "candycane":
case "christmas":
case "merrychristmas":
case "3ddeep":
case "drug":
case "americanflag":
case "scifi":
case "wonderful":
case "holiday":
case "technology":
case "winter":
case "sandsummer":
case "sandwriting":
case "sandengraved":
case "summerysand":
case "glue":
case "dark":
case "galaxystyle":
case "minion":
case "horrorgift":
case "holographic":
case "deluxe":
case "glossyblue":
case "deluxegold":
case "glossycarbon":
case "fabric":
case "neontext":
case "halloweenfire":
case "metaldark":
case "darkgold":
case "joker":
case "wicker":
case "firework":
case "steeltext":
case "goldfoil":
case "ultragloss":
case "denimtext":
case "stargreen":
case "captain":
case "toxic":
case "ninjalogo":
case "rainbowequalizer":
case "peridot":
case "rock":
case "purpleshiny":
case "robotr2":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await fetchJson(APIs.Site1 + `/api/textpro/${command}?texto=${textin}&apikey=` + apikey_kita)
dllink = await getBuffer(bla.resultado)
anna.sendMessage(from, {image: dllink}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "logoneon":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await fetchJson(APIs.Site1 + `/api/textpro/neon?texto=${textin}&apikey=` + apikey_kita)
dllink = await getBuffer(bla.resultado)
anna.sendMessage(from, {image: dllink}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "green-horror":
case "chocolate-cake":
case "3dboxtext":
case "strawberry":
case "sweet-candy":
case "flower-typography":
case "berry":
case "shadow-sky":
case "magma":
case "logobear":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await fetchJson(APIs.Site1 + `/api/textpro/${command}?texto=${textin}gleyson`)
dllink = await getBuffer(bla.resultado)
anna.sendMessage(from, {image: bla}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "illuminated-metallic":
case "metallic":
case "harry-potter":
case "butterfly":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await getBuffer(APIs.Site1 + `/api/photooxy/${command}?texto=${textin}&apikey=` + apikey_kita)
anna.sendMessage(from, {image: bla}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "carved-wood":
case "flaming":
case "night-sky":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await getBuffer(APIs.Site1 + `/api/photooxy/${command}?texto=${textin}&apikey=` + apikey_kita)
anna.sendMessage(from, {image: bla}, {quoted: sasah}).catch(e => {
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "orangejuice":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await fetchJson(APIs.Site1 + `/api/textpro/3d-orange-juice?texto=${textin}&apikey=` + apikey_kita)
dllink = await getBuffer(bla.resultado)
anna.sendMessage(from, {image: dllink}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")   
})
break

case "neonlight":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await fetchJson(APIs.Site1 + `/api/textpro/3d-neon-light?texto=${textin}&apikey=` + apikey_kita)
dllink = await getBuffer(bla.resultado)
anna.sendMessage(from, {image: dllink}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "brilhante":
case "vietnam":
case "seta":
case "grafite":
case "goldt":
case "tela":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await getBuffer(APIs.Site1 + `/api/ephoto/${command}?texto=${textin}&apikey=` + apikey_kita)
anna.sendMessage(from, {image: bla}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case "desfocado":
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await getBuffer(APIs.Site1 + `/api/ephoto/blur?texto=${textin}&apikey=` + apikey_kita)
anna.sendMessage(from, {image: bla}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo! Tente novamente mais tarde.")  
})
break

case 'pubgv': case 'natalmsg': case 'anonovo': case 'trigrev':
textin = args.join(" ")
if(!textin) return reply(mess.syntaxLogos())
reply(enviar.espere)
bla = await getBuffer(APIs.Site1 + `/api/ephoto/${command}?texto=${textin}&apikey=` + apikey_kita)
anna.sendMessage(from, {video: bla}, {quoted: sasah}).catch(e =>{
reply("Erro ao criar sua logo em vídeo! Tente novamente mais tarde.")  
})
break

case 'qc':
if(!q) return reply(`Exemplo de uso deste comando:\n • ${prefix}qc Olá, você é gay?`)
reply(enviar.espere)
const text = `${q}`
const username = `${pushname}`
try {
ppimg = await anna.profilePictureUrl(sender, 'image')
} catch {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg'
}
const { writeExifImg } = require('./bunker/armor/sticker/exif')
anna.sendImageAsSticker = async (jid, path, options = {}) => {
        let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
        let buffer
        if (options && (options.packname || options.author)) {
            buffer = await writeExifImg(buff, options)
        } else {
            buffer = await imageToWebp(buff)
        }

        await anna.sendMessage(jid, { sticker: { url: buffer }, ...options})
        return buffer
    }
const avatar = `${ppimg}`
const json = {
  "type": "quote",
  "format": "png",
  "backgroundColor": "#FFFFFF",
  "width": 512,
  "height": 768,
  "scale": 2,
  "messages": [
    {
      "entities": [],
      "avatar": true,
      "from": {
        "id": 1,
        "name": username,
        "photo": {
          "url": avatar
        }
      },
      "text": text,
      "replyMessage": {}
    }
  ]
};
 response = axios.post('https://bot.lyo.su/quote/generate', json, {
        headers: {'Content-Type': 'application/json'}
}).then(res => {
    const buffer = Buffer.from(res.data.result.image, 'base64')
        anna.sendImageAsSticker(from, buffer, { packname: `${NomeDoBot}`, author: `${pushname}` })
        })
 break
 
case 'amazon': case 'amazonsearch':
if(q.trim().length < 4) return reply(`Exemplo: ${prefix+command} fone redmi airdots 2`)
reply(enviar.espere);
try {
ABC = await fetchJson(APIs.Site1 + `/api/amazon?nome=${q}&apikey=` + apikey_kita);
RST = "Amazon Store - Pesquisa:\n-\n"
RST += `${ABC.resultado.map(v => `• *Produto:* ${v.titulo}\n• *Valor do Produto:* ${v.valor}\n• *Link:* ${v.link}`).join('\n-\n')}`
reply(RST)
} catch(e) {
return reply(mess.error())
}
break;

case 'americanas': case 'amsearch':
if(q.trim().length < 4) return reply(`Exemplo: ${prefix+command} fone redmi airdots 2`)
try {
ABC = await fetchJson(APIs.Site1 + `/api/americanas?nome=${q}&apikey=` + apikey_kita);
RST = "Lojas Americanas - Pesquisa:\n-\n"
RST += `${ABC.resultado.map(v => `• *Produto:* ${v.produto}\n• *Valor do Produto:* ${v.valor}\n• *Link:* ${v.link}`).join('\n-\n')}`
reply(RST)
} catch(e) {
return reply(mess.error())
}
break;

case 'brasileirao':
try {
ABC = await fetchJson(APIs.Site1 + `/api/brasileirao?apikey=` + apikey_kita);
RST = "⚽️📊 *Tabela Brasileirão - Série [A]:*\n–\n"
for ( i = 0; i < ABC.resultado.length; i++) {
RST +=  `[ ${i+1}° ] Time: *${ABC.resultado[i].equipe}*\n• Pontos alcançados pelo time: *${ABC.resultado[i].pontos}*\n• Jogos jogados pelo time: *${ABC.resultado[i].jogosJogados}*\n–\n`
}
reply(RST)
} catch(e) {
return reply(mess.error())
}
break;

case 'rastrear':
if (!q) return reply(mess.syntaxTrackParcels(prefix))
if (q.length < 13 || q.length > 13) return reply(mess.invalidCodeRastrear())
data = await fetchJson(APIs.Site1 + `/api/rastreio?code=${q}&apikey=` + apikey_kita)
anna.sendMessage(from, {text: mess.rastrearEncomenda(data, q)}, {quoted:info}).catch(e => {
return reply(mess.error())
})
break

case 'e-sportnews': case 'gamesnews': case 'gamenews':
if(!q) return reply(mess.syntaxNewsGame(prefix))
if (args[0] === '-cod') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/e-sports_noticias?query=cod&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-csgo') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/e-sports_noticias?query=csgo&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-fifa') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/e-sports_noticias?query=fifa&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-fortnite') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/e-sports_noticias?query=fortnite&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-gamexp') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/e-sports_noticias?query=gamexp&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-pes') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/e-sports_noticias?query=pes&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-lol') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/e-sports_noticias?query=lol&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-pokemon') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/e-sports_noticias?query=pokemon&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-rainbow-6') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/e-sports_noticias?query=rainbow-6&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-valorant') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/e-sports_noticias?query=valorant&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-tcg') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/e-sports_noticias?query=tcg&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
}
break

case 'esporte_news': case 'esportenoticias': case 'esportenews':
if(!q) return reply(mess.syntaxNewsEsportes(prefix))
if (args[0] === '-all') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/esporte_noticias?esporte=&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-futebol') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/esporte_noticias?esporte=futebol&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-futsal') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/esporte_noticias?esporte=futsal&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-skate') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/esporte_noticias?esporte=skate&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-surfe') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/esporte_noticias?esporte=surfe&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-basquete') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/esporte_noticias?esporte=basquete&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-volei') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/esporte_noticias?esporte=volei&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-tenis') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/esporte_noticias?esporte=tenis&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-atletismo') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/esporte_noticias?esporte=atletismo&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-natacao') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/esporte_noticias?esporte=natacao&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-ciclismo') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/esporte_noticias?esporte=ciclismo&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-boxe') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/esporte_noticias?esporte=boxe&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-beisebol') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/esporte_noticias?esporte=beisebol&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-futebol-eua') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/esporte_noticias?esporte=futebol-americano&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
} 
} else if (args[0] === '-judo') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/esporte_noticias?esporte=judo&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
}
} else if (args[0] === '-ginastica') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/esporte_noticias?esporte=ginastica-artistica&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
} 
} else if (args[0] === '-golfe') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/esporte_noticias?esporte=golfe&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
} 
} else if (args[0] === '-formula-1') {
try {
ABC = await fetchJson(APIs.Site1 + `/api/esporte_noticias?esporte=formula-1&apikey=` + apikey_kita);
RST = ""
RST += `${ABC.resultado.map(v => `*${v.titulo}*\n• ${v.trechoManchete}`).join('\n-\n')}`
anna.sendMessage(from,{image: {url: ABC.resultado[0].linkImagem}, caption: RST}, {quoted:info})
} catch(e) {
return reply(mess.error())
} 
}
break

case 'playstore':
if(!q) return reply(mess.noArgsSearch()+`Exemplo: *${prefix+command} Lolis*`);
AB = await fetchJson(APIs.Site1 + `/api/playstore?nome=${q}&apikey=` + apikey_kita)
ABC = `*Total de resultados encontrados:* ${AB.pesquisa.resultado.length}\n-\n`
ABC += `${AB.pesquisa.resultado.map(v =>  `• *Aplicativo:* ${v.nome}\n• *Desenvolvedor do Aplicativo:* ${v.desenvolvedor}\n• *Avaliação do Aplicativo:* ${v.estrelas}\n• *Link:* ${v.link}`).join('\n-\n')}`
reply(ABC).catch(e => {
return reply(mess.error())
})
break;

case 'imdb':
if (!q) return reply(`• Para realizar a pesquisa do filme no *IMDb* é necessário conter pelo menos um gênero ou nome do filme.\n      • Exemplo: *${prefix}imdb Ação*\n–\n🔍 annaer mais informações sobre o filme pesquisado? Use: *${prefix}imdbinfo [link]*\n      • Lembrando que o *link do filme* para ser usado ele é apresentado na pesquisa, *se obter sucesso.*\n          • Exemplo: *https://m.imdb.com/title/tt6495770/?ref_=fn_al_tt_5*`)
AB = await fetchJson(APIs.Site1 + `/api/search/imdb?query=${q}&apikey=` + apikey_kita)
ABC = `• 𝐈𝐌𝐃𝐛 𝐏𝐄𝐒𝐐𝐔𝐈𝐒𝐀 - *( ${date} ${hora} )*\n     • *Nota:* Para ver as informações do filme de uma forma detalhada, use o comando: *${prefix}imdbinfo [link do filme]*\n         Exemplo: *${prefix}imdbinfo ${AB.resultado[0].url}*\n–\n`
ABC += `${AB.resultado.map(v => `• Título: *${v.title}*\n• Ano de Lançamento: *${v.release}*\n• Créditos principais: *${v.topCredits[0]} e ${v.topCredits[1]}*\n• Link: *${v.url}*`).join('\n–\n')}`
reply(ABC).catch(e => {
return reply(mess.error())
})
break;

case 'imdbinfo':
if(!q.includes("m.imdb.com")) return reply("Coloque o link do filme que você deseja puxar informações.")
try {
RST = await fetchJson(APIs.Site1 + `/api/search/imdb_info?url=${q}&apikey=` + apikey_kita)
ABC = `• 𝐈𝐌𝐃𝐛 𝐈𝐍𝐅𝐎 - *( ${date} ${hora} )*\n–\n• Título em Português: *${RST.resultado.titulo}*\n• Título Original: *${RST.resultado.tituloOriginal}*\n–\n• Trama/Sinopse: *${RST.resultado.trama}*\n–\n• Status do filme: *${RST.resultado.status}*\n• Data de lançamento: *${RST.resultado.dataLancamento.dia}.${RST.resultado.dataLancamento.mes}.${RST.resultado.dataLancamento.ano}*\n• Duração do filme: *${RST.resultado.duracao}*\n• Números de certificados: *${RST.resultado.certificado}*\n–\n• Avaliação total de usuários: *${RST.resultado.avaliacaoTotalUsers}*\n• Total de críticas: *${RST.resultado.criticaTotal}*\n–\n• Valor orçamentário: *$ ${RST.resultado.dinheiro.orcamento.valor}*\n• Valor bruto por países: *$ ${RST.resultado.dinheiro.brutoPaises.valor}*\n• Valor semanal: *$ ${RST.resultado.dinheiro.semana.valor}*\n• Valor bruto pelo mundo: *$ ${RST.resultado.dinheiro.brutoMundial.valor}*\n–\n• Prêmios: *${RST.resultado.avaliado.vitorias} vitória(s) e ${RST.resultado.avaliado.indicacoes} indicação(s)*\n• Disputando no rank em: *${RST.resultado.avaliado.rank}° lugar*\n–`
ABC += `\n• Mixagens: *${RST.resultado.mixagens.map(v => `${v}`).join(', ')}*\n`
ABC += `• Produção: *${RST.resultado.producao.map(v => `${v}`).join(', ')}*\n–\n`
ABC += `• Gênero(s): *${RST.resultado.genero.map(v => `${v}`).join(', ')}*\n–\n`
ABC += `• *Elenco* - Atrizes e atores participantes do elenco principal do filme:\n–\n${RST.resultado.elencoPrincipal.map(v => `     • Nome: ${v.nome} - ( ${v.categoria} )\n     • Personagem(ns): *${v.personagem}*`).join('\n–\n')}\n–\n`
ABC += `• *Créditos principais:*\n${RST.resultado.creditosPrincipais.map(v => `     • ${v.categoria}: *${v.creditos}*`).join('\n')}`
reply(ABC)
} catch(e) {
return reply(mess.error())
}
break;

case 'movie2':
if(!q) return reply("Coloque o nome do filme que você deseja puxar informações.")
try {
AB = await fetchJson(APIs.Site1 + `/api/search/imdb?query=${q}&apikey=` + apikey_kita)
RST = await fetchJson(APIs.Site1 + `/api/search/imdb_info?url=${AB.resultado[0].url}&apikey=` + apikey_kita)
ABC = `• 𝐈𝐌𝐃𝐛 𝐈𝐍𝐅𝐎 - *( ${date} ${hora} )*\n–\n• Título em Português: *${RST.resultado.titulo}*\n• Título Original: *${RST.resultado.tituloOriginal}*\n–\n• Trama/Sinopse: *${RST.resultado.trama}*\n–\n• Status do filme: *${RST.resultado.status}*\n• Data de lançamento: *${RST.resultado.dataLancamento.dia}.${RST.resultado.dataLancamento.mes}.${RST.resultado.dataLancamento.ano}*\n• Duração do filme: *${RST.resultado.duracao}*\n• Números de certificados: *${RST.resultado.certificado}*\n–\n• Avaliação total de usuários: *${RST.resultado.avaliacaoTotalUsers}*\n• Total de críticas: *${RST.resultado.criticaTotal}*\n–\n• Valor orçamentário: *$ ${RST.resultado.dinheiro.orcamento.valor}*\n• Valor bruto por países: *$ ${RST.resultado.dinheiro.brutoPaises.valor}*\n• Valor semanal: *$ ${RST.resultado.dinheiro.semana.valor}*\n• Valor bruto pelo mundo: *$ ${RST.resultado.dinheiro.brutoMundial.valor}*\n–\n• Prêmios: *${RST.resultado.avaliado.vitorias} vitória(s) e ${RST.resultado.avaliado.indicacoes} indicação(s)*\n• Disputando no rank em: *${RST.resultado.avaliado.rank}° lugar*\n–`
ABC += `\n• Mixagens: *${RST.resultado.mixagens.map(v => `${v}`).join(', ')}*\n`
ABC += `• Produção: *${RST.resultado.producao.map(v => `${v}`).join(', ')}*\n–\n`
ABC += `• Gênero(s): *${RST.resultado.genero.map(v => `${v}`).join(', ')}*\n–\n`
ABC += `• *Elenco* - Atrizes e atores participantes do elenco principal do filme:\n–\n${RST.resultado.elencoPrincipal.map(v => `     • Nome: ${v.nome} - ( ${v.categoria} )\n     • Personagem(ns): *${v.personagem}*`).join('\n–\n')}\n–\n`
ABC += `• *Créditos principais:*\n${RST.resultado.creditosPrincipais.map(v => `     • ${v.categoria}: *${v.creditos}*`).join('\n')}`
reply(ABC)
} catch(e) {
return reply(mess.error())
}
break;

case 'sanime': case 'animetv':
if(!q) return reply("Você não digitou nenhuma palavra ao lado do comando.")
try {
RST = await fetchJson(APIs.Site1 + `/api/animetv_search?query=${q}&apikey=` + apikey_kita)
ABC = `${RST.resultado.map(v => `• Título: *${v.title}* | *${v.type}*\n• Imagem: *${v.thumb}*\n• Link: *${v.url}*`).join('\n–\n')}`
reply(ABC)
} catch(e) {
return reply(mess.error())
}
break;

case 'frases': case 'pensador':
if(!q) return reply(mess.noArgsSearch()+`Exemplo: *${prefix+command} Amor`);
AB = await fetchJson(APIs.Site1 + `/search/pensador?query=${q}&apikey=` + apikey_kita)
ABC = ""
ABC += `${AB.resultado.map(v => `“${v.frase}”`).join('\n–\n')}`
reply(ABC).catch(e => {
return reply(mess.error())
})
break;

case 'dicionario': 
if (!q) return reply(mess.noArgsSearch()+`Exemplo: *${prefix+command} [palavra]*`)
ABC = await fetchJson(APIs.Site1 + `/api/dicionario?q=${q}&apikey=` + apikey_kita)
reply(`${ABC.significado}`).catch(e => {
reply(mess.error());
})
break;

case 'encurtalink': case 'tinyurl':
if(args.length < 1) return reply(`❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/annabot.wpp`)
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${q}`)
reply(`*Link encurtado com sucesso, aqui está:* ${anu.data}`).catch(e => {
reply(mess.error())
})
break

case 'encurtarlink2': case 'cuttly':
if(args.length < 1) return reply(`❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/annabot.wpp`)
anu = await axios.get(APIs.Site1 + `/api/linkshort/cuttly?link=${q}&apikey=` + apikey_kita)
reply(`*Link encurtado com sucesso, aqui está:* ${anu.data.result}`).catch(e => {
emror = String(e)
reply(mess.error())
})
break

case 'encurtarlink3': case 'bitly':
if(args.length < 1) return reply(`❌️ *Forma incorreta, use está como exemplo:* ${prefix + command} https://instagram.com/annabot.wpp`)
anu = await axios.get(APIs.Site1 + `/api/linkshort/bitly?link=${q}&apikey=` + apikey_kita)
reply(`*Link encurtado com sucesso, aqui está:* ${anu.data.result}`).catch(e => {
reply(mess.error())
})
break

case 'jogo': case 'jogos': case 'game': case 'games': 
// @Darkzy7
if (!q) return reply(`Você esqueceu de colocar o nome do jogo após o comando.`)
const gamesearch = await axios.get(`https://api.rawg.io/api/games?key=34e936a681924c8cba8711d2dacb999e&search=${q}&page_size=1`)
let searchapi = gamesearch.data.results[0]
if (gamesearch.data.results.length == 0) return await reply("Sem resultados para sua pesquisa, tente novamente mais tarde...");
titulo = searchapi.name
let genero = '';
for (let i = 0; i < searchapi.genres.length; i++) {
genero += `${searchapi.genres[i].name}, `;}
genero += `${searchapi.genres[searchapi.genres.length - 1].name}`;
let plataforma = '';
for (let i = 0; i < searchapi.platforms.length; i++) {
plataforma += `${searchapi.platforms[i].platform.name}, `;}
plataforma += `${searchapi.platforms[searchapi.platforms.length - 1].platform.name}`;
let compreaqui = '';
if (searchapi.stores !== null) {
for (let i = 0; i < searchapi.stores.length; i++) {
compreaqui += `${searchapi.stores[i].store.name}, `;}
compreaqui += `${searchapi.stores[searchapi.stores.length - 1].store.name}`;
let tempodejogatina = searchapi.playtime
let datadelancamento = searchapi.released
let avaliacaodojogo = searchapi.rating
let rating_top = searchapi.rating_top
let esrb = gamesearch.data.results[0].esrb_rating === null ? '' : gamesearch.data.results[0].esrb_rating.name;
anna.sendMessage(from, {image: await getBuffer(searchapi.background_image), caption: mess.gamesResult(titulo, genero, plataforma, compreaqui, tempodejogatina, datadelancamento, avaliacaodojogo, rating_top, esrb)}, {quoted: info})
}
break;

case 'celular': 
if (!q) return reply(`Qual celular você deseja pesquisar as informações sobre?`)
smartInfo = await fetchJson(APIs.Site1 + `/api/info_celular?celular=${q}&apikey=` + apikey_kita)
msgSemQuoted(mess.smartphoneInfo(smartInfo)).catch(e => {
reply(mess.error());
})
break;

case 'threads':
if(!q.includes("threads.net")) return reply("Por favor, adicione um link válido do threads. (foto ou vídeo)");
try {
data = await fetchJson(APIs.Site1 + `/api/dl/threads?url=${q}&apikey=` + apikey_kita);
for (let i = 0; i < data.resultado.image_urls.length; i++) {
photos = await fetch(data.resultado.image_urls[i]).then(v => v.buffer())
anna.sendMessage(from, {image: photos})
}
} finally {
for (let i = 0; i < data.resultado.video_urls.length; i++) {
videoUrl = await fetch(data.resultado.video_urls[i].download_url).then(v => v.buffer())
anna.sendMessage(from, {video: videoUrl})
}
}
break

case 'spotify':
if(!q) return reply(mess.syntaxDownloadMusic())
try {
data = await fetchJson(APIs.Site1 + `/api/spotifysearch?query=${q}&apikey=` + apikey_kita)
dataUrl = await fetchJson(APIs.Site1 + `/api/dl/spotify?url=${data.resultado.tracksArray[0].url}&apikey=` + apikey_kita)
getPreview = await axios.get(`https://tinyurl.com/api-create.php?url=https://open.spotify.com/embed/track/${data.resultado.tracksArray[0].id}?utm_source=generator&theme=0`)
anna.sendMessage(from, {text: mess.spotifyResult(data, dataUrl, getPreview), contextInfo: {externalAdReply: {title: `Escute ${data.resultado.tracksArray[0].title} em seu aplicativo do Spotify.`, body: `Song • Duração: ${dataUrl.resultado.duration}`, thumbnail: await getBuffer(data.resultado.tracksArray[0].thumb), mediaType: 1, sourceUrl: data.resultado.tracksArray[0].url}}}) 
anna.sendMessage(from, {audio: {url: dataUrl.resultado.url}, fileName: data.resultado.tracksArray[0].title+'.mp3', mimetype: "audio/mpeg"}, {quoted: info})
} catch(e) {
return reply(mess.error())
}
break

case 'ytsearch': case 'pesquisa-ytb':
if(q.trim().length < 4) return reply(`Exemplo: ${prefix+command} Mc Cabelinho`)
try {
ABC = await fetchJson(APIs.Site1 + `/api/ytsrc/videos?q=${q}&apikey=` + apikey_kita);
RST = `🎥 [Total: ${ABC.resultado.length}] – *Pesquisa YouTube:*\n    • Deseja realizar o download do áudio? Use o comando: *${prefix}ytmp3 [link]*\n    • Fazer download do vídeo? É fácil! Só usar o comando: *${prefix}ytmp4 [link]*\n–\n`
RST += `${ABC.resultado.map(v => `• Link: *${v.url}*\n• Título: *${v.title}*\n• Duração: *${v.duration.timestamp} | ${v.duration.seconds} segundos.*`).join('\n–\n')}`
reply(RST)
} catch(e) {
return reply(mess.error())
}
break;

case 'playlist': case 'ytplaylist':
if(!q.includes("youtube.com/playlist")) return reply("Faltando o link da playlist para realizar a busca...");
try {
ABC = await fetchJson(APIs.Site1 + `/api/ytplaylist?url=${q}&apikey=` + apikey_kita);
RST = `📂 [Total: ${ABC.resultado.length}] – *Playlist YouTube:*\n    • Deseja realizar o download do áudio? Use o comando: *${prefix}ytmp3 [link]*\n    • Fazer download do vídeo? É fácil! Só usar o comando: *${prefix}ytmp4 [link]*\n–\n`
RST += `${ABC.resultado.map(v => `• Link: *${v.url}*\n• Título: *${v.title}*\n• Tempo | Duração: *${v.duration}*\n• Nome do Canal: *${v.channelName}*`).join('\n–\n')}*`
reply(RST)
} catch(e) {
return reply(mess.error())
}
break;

 case 'play':
    case 'p':
      if (!q) return reply(`> Cade o nome da musica?`);
      reply(mess.espere);
      try {
        qp = args.join(" ");
        res = await yts(qp);
        blaimg = await getBuffer(res.all[0].image);
        blalink = await getBuffer(res.all[0].url);
        TheDown = `ㅤㅤㅤ    ꔷ㆒⸼݇҉ֻ᠂⃟🎵 𓂀 𝕂𝕚𝕥𝕒𝕘𝕒𝕨𝕒-𝕧𝟠 𓂀 ⸵░⃟🎵\n\n💫⃤ 𝚃í𝚝𝚞𝚕𝚘: ${res.all[0].title}\n⏰⃤ 𝚃𝚎𝚖𝚙𝚘: ${res.all[0].timestamp}\n👁️⃤ 𝚅𝚒𝚜𝚞𝚊𝚕𝚒𝚣𝚊çõ𝚎𝚜: ${res.all[0].views}\n🎞️⃤ 𝙲𝚊𝚗𝚊𝚕: ${res.all[0].author.name}\n📹⃤ 𝙿𝚘𝚜𝚝𝚊𝚍𝚘: ${res.all[0].ago}\n🔗⃤ 𝚄𝚛𝚕: ${res.all[0].url}\n💬⃤ 𝙳𝚎𝚜𝚌𝚛𝚒çã𝚘: ${res.all[0].description}`;
        await btncomfoto(from, " ", TheDown, " ", "Selecione a opção de Download desejada", { url: res.all[0].image }, "image", info, {}, [
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "versao musica",
                    id: `${prefixo}playaudio ${res.all[0].url}`
                })
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "versao video",
                    id: `${prefixo}playvideo ${res.all[0].url}`
                })
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "ADICIONAR PLAYLIST",
                    id: `${prefixo}adicionarmusica ${q}`
                })
            }
        ]);

      } catch(e) {
        return reply(mess.error())
      }
break


case 'playaudio':
if (!q) return reply(`exemplo: ${prefix + command} dj arana`)
    try {
reply('> Aguarde um instante...')
play = await getBuffer(APIs.Site1 + '/api/dl/' + `ytaudio?url=${q}&apikey=` + apikey_kita)
await anna.sendMessage(from, { audio: play, mimetype: 'audio/mpeg', ptt: false}, { quoted: info }) 
}catch(err){
reply("erro no comando, verifique sua apikey no site, talvez seu limit tenha acabado")
console.log(err)
}
break
case 'playvideo':
if (!q) return reply(`exemplo: ${prefix + command} edit anime 30 segundos`)
    try {
reply('> Aguarde um instante...')
play = (APIs.Site1 + '/api/dl/' + 'ytvideo' + `?url=${q}&apikey=` + apikey_kita)
await anna.sendMessage(from, { video: { url: play }}, { quoted: info })  
}catch(err){
reply("erro no comando, verifique sua apikey no site, talvez seu limit tenha acabado")
console.log(err)
}
break


case 'play2':
if (!q) return reply(`exemplo: ${prefix + command} dj arana`)
    try {
reply("aguarde")
qp = args.join(" ");
busca = await fetchJson(APIs.Site1 + '/api/ytsrc' + `?q=${qp}&apikey=` + apikey_kita)
play = await getBuffer(APIs.Site1 + '/api/dl/' + `ytaudio?url=${busca.resultado[0].url}&apikey=` + apikey_kita)
await anna.sendMessage(from, { audio: play, mimetype: 'audio/mpeg', ptt: false}, { quoted: info }) 
}catch(err){
reply("erro no comando, verifique sua apikey no site, talvez seu limit tenha acabado")
console.log(err)
}
break

case 'playv':
if (!q) return reply(`exemplo: ${prefix + command} edit anime 30 segundos`)
    try {
reply("aguarde")
busca = await fetchJson(APIs.Site1 + '/api/ytsrc' + `?q=${q}&apikey=` + apikey_kita)
play = (APIs.Site1 + '/api/dl/' + 'ytvideo' + `?url=${busca.resultado[0].url}&apikey=` + apikey_kita)
await anna.sendMessage(from, { video: { url: play }}, { quoted: info })  
}catch(err){
reply("erro no comando, verifique sua apikey no site, talvez seu limit tenha acabado")
console.log(err)
}
break



/*
case 'play': {
    if (!q) return reply(`Cade o nome?`);
    reply("aguarde o resultado.");
    try {
        qp = args.join(" ");
        res = await yts(qp);
        blaimg = await getBuffer(res.all[0].image);
        blalink = await getBuffer(res.all[0].url);
        TheDown = `ㅤㅤㅤ    ꔷ㆒⸼݇҉ֻ᠂⃟🎵 𓂀 𝕂𝕚𝕥𝕒𝕘𝕒𝕨𝕒-𝕧𝟠 𓂀 ⸵░⃟🎵\n\n💫⃤ 𝚃í𝚝𝚞𝚕𝚘: ${res.all[0].title}\n⏰⃤ 𝚃𝚎𝚖𝚙𝚘: ${res.all[0].timestamp}\n👁️⃤ 𝚅𝚒𝚜𝚞𝚊𝚕𝚒𝚣𝚊çõ𝚎𝚜: ${res.all[0].views}\n🎞️⃤ 𝙲𝚊𝚗𝚊𝚕: ${res.all[0].author.name}\n📹⃤ 𝙿𝚘𝚜𝚝𝚊𝚍𝚘: ${res.all[0].ago}\n🔗⃤ 𝚄𝚛𝚕: ${res.all[0].url}\n💬⃤ 𝙳𝚎𝚜𝚌𝚛𝚒çã𝚘: ${res.all[0].description}`;
        await btncomfoto(from, " ", TheDown, " ", "Selecione a opção de Download desejada", { url: res.all[0].image }, "image", info, {}, [
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "versao musica",
                    id: `${prefixo}playaudio ${res.all[0].url}`
                })
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "versao video",
                    id: `${prefixo}playvideo ${res.all[0].url}`
                })
            },
            {
                name: "quick_reply",
                buttonParamsJson: JSON.stringify({
                    display_text: "ADICIONAR PLAYLIST",
                    id: `${prefixo}adicionarmusica ${q}`
                })
            }
        ]);
    } catch (e) {
        console.log(e);
        return reply(`⟬❗⟭  ${pushname}, algum erro foi encontrado no servidor interno, que tal pedir mais tarde? Fica tranquilx, esse erro já foi relatado a meu(minha) criador(a).`);
        await anna.sendMessage(`${numerodono}@s.whatsapp.net`, { text: `⟬❗⟭ Sr/Sra, foi encontrado um erro no servidor interno do sistema de Play de Módulos/Scraper.` });
    }
    break;
} 



case "tiktok":  
case "tiktokvideo": {
    if (q.length < 1) return reply("Por favor, coloque o link do vídeo após o comando.");
    const url = q;
    const apiUrl = `https://anikit-apis.onrender.com/download/tiktok?url=${url}&key=918463&username=Nunu`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.videoSemWt) {
                anna.sendMessage(from, {
                    video: { url: data.videoSemWt },
                    mimetype: 'video/mp4'
                });
            } else {
                reply("Não foi possível obter o vídeo. Verifique o link e tente novamente.");
            }
        })
        .catch(error => {
            console.error(error);
            reply("A primeira API falhou, tentando a segunda...");

            const fallbackApiUrl = `https://tohka.tech/api/dl/tiktok?link=${url}&apikey=ZVWBS`;
            fetch(fallbackApiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.resultado && data.resultado.videoSemWt) {
                        anna.sendMessage(from, {
                            video: { url: data.resultado.videoSemWt },
                            mimetype: 'video/mp4'
                        });
                    } else {
                        reply("Não foi possível obter o vídeo. Verifique o link e tente novamente.");
                    }
                })
                .catch(error => {
                    console.error(error);
                    reply("Ocorreu um erro ao processar o pedido. Tente novamente mais tarde.");
                });
        });
    break;
}

case "tiktokaudio": {
    if (q.length < 1) return reply("Por favor, coloque o link do vídeo após o comando.");
    const url = q;
    const apiUrl = `https://anikit-apis.onrender.com/download/tiktok?url=${url}&key=Comunidade&username=Comunidadedebot`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.audio) {
                anna.sendMessage(from, {
                    audio: { url: data.audio },
                    mimetype: 'audio/mpeg'
                });
            } else {
                reply("Não foi possível obter o áudio. Verifique o link e tente novamente.");
            }
        })
        .catch(error => {
            console.error(error);
            reply("A primeira API falhou, tentando a segunda...");

            const fallbackApiUrl = `https://tohka.tech/api/dl/tiktok?link=${url}&apikey=ZVWBS`;
            fetch(fallbackApiUrl)
                .then(response => response.json())
                .then(data => {
                    if (data.resultado && data.resultado.audio) {
                        anna.sendMessage(from, {
                            audio: { url: data.resultado.audio },
                            mimetype: 'audio/mpeg'
                        });
                    } else {
                        reply("Não foi possível obter o áudio. Verifique o link e tente novamente.");
                    }
                })
                .catch(error => {
                    console.error(error);
                    reply("Ocorreu um erro ao processar o pedido. Tente novamente mais tarde.");
                });
        });
    break;
}


case "playvideo":
case 'playvd': 
  if (!q) return reply('Coloque o nome da musica também');
  reply("🧺 aguarde irei mandar");       
      fetch(`https://tohka.tech/api/dl/playv2?nome=${q}&qualidade=360p&apikey=ZVWBS`)
        .then(videoBuffer => {
          anna.sendMessage(from, { video: videoBuffer, mimetype: 'video/mp4', seconds: 10000000,
          contextInfo: {
forwardingScore: 100000, isForwarded: true, forwardedNewsletterMessageInfo: {newsletterJid: "120363144038483540@newsletter"}} }, { quoted: verificado });
        })
        .catch(err => {
          console.error(err);
          reply('Ambas as APIs falharam, tente novamente mais tarde.');
        });
  break;
  
  
  
  case 'playclover':
                if (!q) return reply('Coloque o nome da musica também')
                reply("「🍉」𝙲𝚊𝚕𝚖𝚘 𝙰𝚛𝚛𝚘𝚖𝚋𝚊𝚍𝚘, 𝙹𝚊 𝚃𝚘 𝙴𝚗𝚟𝚒𝚊𝚗𝚍𝚘...")
                fetch(`https://clover-t-bot-r0wt.onrender.com/yt/playmp4?query=${q}&key=Lady-Bot&username=Lady-Bot`).then(response => response.json()).then(ytbr => {

                    anna.sendMessage(from, { image: { url: `https://anikit-apis.onrender.com/music-card4?key=Lady-Bot&username=Lady-Bot&thumbnail=${ytbr.thumb}&backgroundcolor=070707` }, caption: `「👤」𝙽𝚘𝚖𝚎  ҂ ${ytbr.title}\n「📺」𝙲𝚊𝚗𝚊𝚕  ҂ ${ytbr.channel}\n「📈」𝚅𝚒𝚎𝚠𝚜  ҂ ${ytbr.views}` }, { quoted: info })

                    anna.sendMessage(from, { audio: { url: ytbr.url }, mimetype: 'audio/mpeg' }, { quoted: info })

                })

                break
  
case 'play':
case 'playaudio':
  if (!q) return reply('Coloque o nome da música também');
  reply("🗡 consegue esperar 2 minutos? mandando...");
      fetch(`https://tohka.tech/api/dl/play2?nome=${q}&apikey=ZVWBS`)
        .then(response => {
          if (!response.ok) throw new Error('Network response was not ok');
          return response.buffer();
        })
        .then(audioBuffer => {
          anna.sendMessage(from, { audio: audioBuffer, mimetype: 'audio/mpeg'
            }, { quoted: info });
        })
        .catch(err => {
          console.error(err);
          reply('Ambas as APIs falharam, tente novamente mais tarde.');
        });
  break;


*/

case 'yt3':
sendMsg = await anna.sendMessage(from, {react: {text: `⏳`, key: info.key}})
try{
await sleep(100)
res = await yts(`${mscsoli.msc}`).catch(e => {
reply('_[ ! ] O erro de consulta inserido não existe_')
})
reply(`•🎶•🎶• *Tocando ${res.all[0].title}* •🎶•🎶•.`)
fototeta = await getBuffer(res.all[0].image),
await anna.sendMessage(from, {audio: {url: APIs.Site1 + `/api/dl/ytaudio?url=${res.all[0].url}&apikey=` + apikey_kita}, mimetype: 'audio/mpeg', fileName: `${res.all[0].title}`, contextInfo: {externalAdReply : {title : `${res.all[0].title}`, renderLargerThumbnail:false, showAdAttribution: false, body: `@GleysonDevs`, mediaUrl: `${res.all[0].url}`, mediaType: 2, thumbnail: fototeta }}}, {quoted: info})
} catch(e) {
console.log(e)
reply('Error')
}
break

case 'play2': case 'p2':
if(!q) return reply(mess.syntaxDownloadMusic())
reply(enviar.espere)
data = await fetchJson(APIs.Site1 + `/api/ytsrc/videos?q=${q}&apikey=` + apikey_kita)
anna.sendMessage(from, {audio: {url: APIs.Site1 + `/api/dl/ytaudio2?url=${data.resultado[0].url}&apikey=` + apikey_kita}, fileName: data.resultado[0].title+'.mp3', mimetype: "audio/mpeg", headerType: 4, contextInfo: { externalAdReply: { title: data.resultado[0].title, body: data.resultado[0].description, showAdAttribution: true, thumbnail: await getBuffer(data.resultado[0].image), mediaType: 2, mediaUrl: data.resultado[0].url, sourceUrl: data.resultado[0].url}}}).catch(e => {
return reply(mess.error())
})
break

case 'shazam': {
if (!isQuotedAudio) return reply('Envie o áudio para eu detectar o nome da música!')
let music = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage, 'audio')
let mime = (quoted.info || quoted).mimetype || ""
let m = mime.split('/')[1]
fs.writeFileSync('./bunker/database/data/tmp/' + sender + '.' + m, music)
let base64 = fs.readFileSync('./bunker/database/data/tmp/' + sender + '.' + m, { encoding: "base64" })
try {
let hasil = await arcloud(base64)
data = await fetchJson(APIs.Site1 + `/api/ytsrc/videos?q=${hasil[0].titulo}&apikey=` + apikey_kita)
} catch (e) {
reply ('Desculpe, não consegui identificar a música. Por favor, tente novamente!️')
}
shzi = await getBuffer(data.resultado[0].image)
anna.sendMessage(from, {image: shzi, caption: mess.shazamResult(data)}, {quoted: sasah})
audioShz = await getBuffer(APIs.Site1 + `/api/dl/ytaudio?url=${data.resultado[0].url}&apikey=` + apikey_kita)
anna.sendMessage(from, {audio: audioShz, mimetype: 'audio/mpeg'})
}
break

case 'playdoc': case 'pdoc':
if(!q) return reply(mess.syntaxDownloadMusic())
data = await fetchJson(APIs.Site1 + `/api/ytsrc/videos?q=${q}&apikey=` + apikey_kita)
anna.sendMessage(from,{image: {url: `${data.resultado[0].image}`}, caption: mess.playDocumentResult(data)},{quoted:info})
anna.sendMessage(from, {document: {url: APIs.Site1 + `/api/dl/ytaudio?url=${data.resultado[0].url}&apikey=` + apikey_kita}, fileName: data.resultado[0].title+'.mp3', mimetype: "audio/mpeg"}, {quoted: info}).catch(e => {
return reply(mess.error())
})
break

case 'playdoc2': case 'pdoc2':
if(!q) return reply(mess.syntaxDownloadMusic())
reply(enviar.espere)
data = await fetchJson(APIs.Site1 + `/api/ytsrc/videos?q=${q}&apikey=` + apikey_kita)
anna.sendMessage(from, {document: {url: APIs.Site1 + `/api/dl/ytaudio2?url=${data.resultado[0].url}&apikey=` + apikey_kita}, fileName: data.resultado[0].title+'.mp3', mimetype: "audio/mpeg", headerType: 4, contextInfo: { externalAdReply: { title: data.resultado[0].title, body: data.resultado[0].description, showAdAttribution: true, thumbnail: await getBuffer(data.resultado[0].image), mediaType: 2, mediaUrl: data.resultado[0].url, sourceUrl: data.resultado[0].url}}}).catch(e => {
return reply(mess.error())
})
break

case 'playmix': case 'pmix':
if(!q) return reply(mess.syntaxPlayMix())
data = await fetchJson(APIs.Site1 + `/api/ytsrc/videos?q=${q}&apikey=` + apikey_kita)
// Enviar a thumbnail + nomes das músicas. 
anna.sendMessage(from,{image: {url: `${data.resultado[0].image}`}, caption: 'enviando os resultados abaixo'})
// Enviar os áudios. 
anna.sendMessage(from, {audio: {url: APIs.Site1 + `/api/dl/ytaudio?url=${data.resultado[0].url}&apikey=` + apikey_kita}, mimetype: "audio/mpeg"})
anna.sendMessage(from, {audio: {url: APIs.Site1 + `/api/dl/ytaudio?url=${data.resultado[1].url}&apikey=` + apikey_kita}, mimetype: "audio/mpeg"})
anna.sendMessage(from, {audio: {url: APIs.Site1 + `/api/dl/ytaudio?url=${data.resultado[2].url}&apikey=` + apikey_kita}, mimetype: "audio/mpeg"})
anna.sendMessage(from, {audio: {url: APIs.Site1 + `/api/dl/ytaudio?url=${data.resultado[3].url}&apikey=` + apikey_kita}, mimetype: "audio/mpeg"})
anna.sendMessage(from, {audio: {url: APIs.Site1 + `/api/dl/ytaudio?url=${data.resultado[4].url}&apikey=` + apikey_kita}, mimetype: "audio/mpeg"}).catch(e => {
return reply(mess.error())
})
break

case 'playvid': case 'pvid': case 'playmp4':
if(!q) return reply(mess.syntaxDownloadMusic())
data = await fetchJson(APIs.Site1 + `/api/ytsrc/videos?q=${q}&apikey=` + apikey_kita)
videoUrl = await getBuffer(APIs.Site1 + `/api/dl/ytvideo?url=${data.resultado[0].url}&apikey=` + apikey_kita)
anna.sendMessage(from, {video: videoUrl, caption: mess.playVideoResult(data)}, {quoted: sasah}).catch(e => {
return reply(mess.error())
})
break

case 'playvid2': case 'pvid2': case 'playmp4-2':
if(!q) return reply(mess.syntaxDownloadMusic())
reply(enviar.espere)
data = await fetchJson(APIs.Site1 + `/api/ytsrc/videos?q=${q}&apikey=` + apikey_kita)
videoUrl = await getBuffer(APIs.Site1 + `/api/dl/ytvideo2?url=${data.resultado[0].url}&apikey=` + apikey_kita)
anna.sendMessage(from, {video: videoUrl, caption: mess.playVideoResult2(data)}, {quoted: sasah}).catch(e => {
return reply(mess.error())
})
break;

case 'ytall':
if(!q) return reply(`Por favor, insira um link de um *vídeo do YouTube* após o comando.\n   • Exemplo: *${prefix+command} https://youtube.com/watch?v=JXGpTLg7qoQ*`)
reagir(from, "🆙")
try {
anna.sendMessage(from, {audio: {url: APIs.Site1 + `/api/dl/ytaudio2?url=${q}&apikey=` + apikey_kita}, mimetype: "audio/mpeg"}, {quoted: sasah})
anna.sendMessage(from, {video: {url: APIs.Site1 + `/api/dl/ytvideo2?url=${q}&apikey=` + apikey_kita}, mimetype: "video/mp4"})
} catch(e) {
return console.log(e)
}
break

case 'ytaudio': case 'ytmp3':
if(!q) return reply(`Por favor, insira um link de um *vídeo do YouTube* após o comando.\n   • Exemplo: *${prefix+command} https://youtube.com/watch?v=JXGpTLg7qoQ*`)
reagir(from, "🆙")
reply(enviar.espere)
anna.sendMessage(from, {audio: {url: APIs.Site1 + `/api/dl/ytaudio2?url=${q}&apikey=` + apikey_kita}, mimetype: "audio/mpeg"}).catch(err => {
return reply(mess.error())
})
break 

case 'ytmp4': case 'ytvideo':
if(!q) return reply(`Por favor, insira um link de um *vídeo do YouTube* após o comando.\n   • Exemplo: *${prefix+command} https://youtube.com/watch?v=JXGpTLg7qoQ*`)
reagir(from, "🆙")
reply(enviar.espere)
anna.sendMessage(from, {video: {url: APIs.Site1 + `/api/dl/ytvideo2?url=${q}&apikey=` + apikey_kita}, mimetype: "video/mp4"}, {quoted: info}).catch(e => {
return reply(mess.error())
})
break

case 'audiomeme': case 'playmeme':
if(!q) return reply(`NaN, você não digitou nada... Exemplo: *${prefix+command} Lula*`);
reagir(from, "😸")
bla = await fetchJson(APIs.Site1 + `/api/audiomeme?query=${q}&apikey=` + apikey_kita)
teks = pickRandom(bla.resultado)
anna.sendMessage(from, {audio: {url: teks}, mimetype: "audio/mpeg", ptt:true}, {quoted: sasah}).catch(e => {
return reply(mess.error())
})
break;

case 'ringtone': case 'meloboom': case 'toque':
if(!q) return reply(`NaN, você não digitou nada... Exemplo: *${prefix+command} iPhone*`);
setTimeout(() => {reagir(from, "🫨")}, 100)
try {
bla = await fetchJson(APIs.Site1 + `/api/ringtone?query=${q}&apikey=` + apikey_kita)
teks = pickRandom(bla.resultado.resultado);
mention(`Olá @${sender.split("@")[0]}, o toque está intitulado como: *${teks.titulo}*.\n• Deseja mais? É só pedir, que eu tô enviando! Você manda e eu obedeço.`)
anna.sendMessage(from, {audio: {url: teks.audio}, mimetype: "audio/mpeg", ptt:true})
} catch(e) {
return reply(mess.error())
}
break;

case 'imgpraanime': case 'animeia': case 'toanime':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(`Criando seu avatar, aguarde! Não vai demorar muito amiguinho(a)...️`)
link = await upload(base64)
data = await fetchJson(APIs.Site1 + `/api/ia/toanime?link=${link}&apikey=` + apikey_kita)
anna.sendMessage(from, {image: {url: data.resultado.image_data}}, {quoted: sasah}).catch(e => {
return reply(mess.error())
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
break

case 'tohd': case 'hd':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(`Alterando a qualidade da foto para *HD*, aguarde um pouco!`)
link = await upload(base64)
data = await fetchJson(APIs.Site1 + `/api/ia/remini?link=${link}&apikey=` + apikey_kita)
anna.sendMessage(from, {image: {url: data.resultado.image_data}}, {quoted: sasah}).catch(e => {
return reply(mess.error())
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
break

case 'zombieia': case 'tozombie':
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(`Transformando, aguarde! Não vai demorar muito amiguinho(a)...️`)
link = await upload(base64)
data = await fetchJson(APIs.Site1 + `/api/ia/tozombie?link=${link}&apikey=` + apikey_kita)
anna.sendMessage(from, {image: {url: data.resultado.image_data}}, {quoted: sasah}).catch(e => {
return reply(mess.error())
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
break

case 'ler': case 'ocr': case 'lerfoto':  
if(!isPremium && !SoDono) return reply(enviar.msg.premium)
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(enviar.espere)
link = await upload(base64)
data = await fetchJson(APIs.Site1 + `/api/ia/ocr?img=${link}&apikey=` + apikey_kita)
reply(data.resultado).catch(e => {
return reply(mess.error())
})
} else {
reply("Mencione uma imagem, por favor!")
}
break

case 'deezer':
if(!q) return reply(`Exemplo: ${prefix+command} Ela não é santa`)
musicFind = (await axios.get(`https://api.deezer.com/search?q=${encodeURIComponent(q)}`)).data;
if (musicFind.length == 0) return reply(mess.noresult())
anna.sendMessage(from, { text: mess.deezerMusic(musicFind.data[0], prefix)})
anna.sendMessage(from, {audio: {url: musicFind.data[0].preview}, mimetype: 'audio/mpeg'}, {quoted: sasah}).catch(e => {
return reply(mess.error())
})
break

case 'movie':
if (args.length == 0) return await reply(`Cadê o nome do filme o qual você deseja ver informações?`)
movieInfo = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`);
if (movieInfo.data.total_results == 0) return reply(mess.noresult())
var ImageMovieLink = `https://image.tmdb.org/t/p/original${movieInfo.data.results[0].backdrop_path}`;
var fotoFilme = await getBuffer(ImageMovieLink)

await btncomfoto(from, " ", mess.movies(movieInfo), " ", "Abaixo contem um player com o filme", { url: ImageMovieLink }, "image", info, {}, [
  {
      name: "cta_url",
      buttonParamsJson: JSON.stringify({
          display_text: "Canal 1",
          url: `https://embedder.net/e/movie?tmdb=${movieInfo.data.results[0].id}`,
          merchant_url: `https://embedder.net/e/movie?tmdb=${movieInfo.data.results[0].id}`
      })
  },
  {
    name: "cta_url",
    buttonParamsJson: JSON.stringify({
        display_text: "Canal 2",
        url: `https://superflixapi.dev/filme/${movieInfo.data.results[0].id}`,
        merchant_url: `https://superflixapi.dev/filme/${movieInfo.data.results[0].id}`
    })
}
]).catch(e => {
return reply(mess.error())
})
break

case 'serie':
if (args.length == 0) return await reply(`Cadê o nome da serie o qual você deseja ver informações?`)
serieInfo = await axios.get(`https://api.themoviedb.org/3/search/tv?api_key=ddfcb99fae93e4723232e4de755d2423&query=${encodeURIComponent(q)}&language=pt`);
if (serieInfo.data.total_results == 0) return reply(mess.noresult())
var ImageSerieLink = `https://image.tmdb.org/t/p/original${serieInfo.data.results[0].backdrop_path}`;
var fotoSerie = await getBuffer(ImageSerieLink)

await btncomfoto(from, " ", mess.movies(serieInfo), " ", "Abaixo contem um player com o filme", { url: ImageSerieLink }, "image", info, {}, [
  {
      name: "cta_url",
      buttonParamsJson: JSON.stringify({
          display_text: "Canal 1",
          url: `https://embedder.net/e/series?tmdb=${serieInfo.data.results[0].id}`,
          merchant_url: `https://embedder.net/e/seriee?tmdb=${serieInfo.data.results[0].id}`
      })
  },
  {
    name: "cta_url",
    buttonParamsJson: JSON.stringify({
        display_text: "Canal 2",
        url: `https://superflixapi.dev/serie/${serieInfo.data.results[0].id}`,
        merchant_url: `https://superflixapi.dev/serie/${serieInfo.data.results[0].id}`
    })
}
]).catch(e => {
return reply(mess.error())
})
break

case 'aptoide':
if (args.length == 0) return reply(`Cadê o nome do app? *Use como exemplo:* ${prefix+command} WhatsApp`)
const aptoide = await axios.get(`https://ws75.aptoide.com/api/7/apps/search?query=${encodeURIComponent(q)}&trusted=true`);
if (aptoide.data.datalist.total == 0) return reply(mess.noresult());
phAptoide = await(await fetch(aptoide.data.datalist.list[0].graphic)).buffer(),
anna.sendMessage(from, {image: phAptoide, caption: mess.aptoide(aptoide.data.datalist.list[0], (aptoide.data.datalist.list[0].size / 1048576).toFixed(1))}).catch(e => {
return reply(mess.error())
})
break;

case 'soundcloud': case 'scdl':
if(!q) return reply(`Tá faltando aí! Cadê o link da música no SoundCloud hein?`)
data = await fetchJson(APIs.Site1 + `/api/soundcloud?url=${q}&apikey=` + apikey_kita) 
tinyUrl = await axios.get(`https://tinyurl.com/api-create.php?url=${data.resultado.link_dl}`)
anna.sendMessage(from, {image: {url: data.resultado.capa}, caption: mess.soundcloud(data, tinyUrl)}, {quoted: sasah})
anna.sendMessage(from, {audio: {url: APIs.Site1 + `/api/dl/scdl?url=${q}&apikey=` + apikey_kita }, mimetype: 'audio/mpeg'}, {quoted: sasah}).catch(e => {
return reply(mess.error())
})
break 

case 'tiktok': case 'tiktokvideo':
if(!q) return reply('Por favor, adicione um link do tiktok (vídeo).')
reagir(from, "😉")
reply(enviar.espere)
try {
data = await fetchJson(APIs.Site1 + `/download/tiktok2?url=${q}&apikey=` + apikey_kita) 
videoByTiktok = await getBuffer(data.resultado.videoSemWt)
anna.sendMessage(from, {video: videoByTiktok, caption: mess.tiktokDownload(data)}, {quoted: sasah})
} catch(e) {
reply(mess.error())
}
break

case 'tiktokaudio':
if(!q) return reply('Por favor, adicione um link do tiktok (vídeo).')
reagir(from, "😉")
reply(enviar.espere)
try {
data = await fetchJson(APIs.Site1 + `/download/tiktok2?url=${q}&apikey=` + apikey_kita) 
audioDl = await getBuffer(data.resultado.videoSemWt)
anna.sendMessage(from, {audio: audioDl, mimetype: 'audio/mpeg'}, {quoted: sasah})
} catch(e) {
reply(mess.error())
}
break

case 'tiktokimg': case 'tiktokimage':
if(!q) return reply('Por favor, adicione um link do tiktok (imagens).')
reagir(from, "😉")
reply(`Aguarde, irei enviar as fotos e ainda irei incluir o áudio da sequência de fotos.`)
try {
data = await fetchJson(APIs.Site1 + `/download/tiktok?url=${q}&apikey=` + apikey_kita) 
audioDl = await getBuffer(data.resultado.audio)
anna.sendMessage(from, {audio: audioDl, mimetype: 'audio/mpeg'}, {quoted: sasah})
for (let i = 0; i < data.resultado.photo.length; i++) {
photos = await fetch(data.resultado.photo[i].url).then(v => v.buffer())
anna.sendMessage(from, {image: photos})
} 
} catch(e) {
reply(mess.error())
}
break

case 'instagram': case 'igdl':
if(q.length < 5) return reply('Por favor, adicione um link do Instagram post/reel.');
try {
reagir(from, "😉")
reply(enviar.espere)
data = await fetchJson(APIs.Site1 + `/api/v2/instagram?url=${q}&apikey=` + apikey_kita)
for (let i = 0; i < data.resultado.length; i++) {
let dmt = data.resultado[i].type
mimety = dmt === "video" ? "video/mp4" : dmt === "webp" ? "image/webp" : dmt === "image" ? "image/jpeg" : dmt === "audio" ? "audio/mpeg" : "video/mp4"
anna.sendMessage(from, {[mimety.split("/")[0]]: {url: data.resultado[i].url}, mimetype: mimety}, {quoted: info})
}
} catch (e) {
return reply(mess.error())
}
break

case 'multidl': case 'pocbi':
if(q.length < 5) return reply('Por favor, adicione um link de uma rede social de mídia. (Ex.: Tiktok, insta, threads, etc...)');
try {
setTimeout(() => {reagir(from, "😉")}, 100)
data = await MultiDownload(q)
for (let i = 0; i < data.medias.length; i++) {
let dmt = data.medias[i].extension
mimety = dmt === "mp4" ? "video/mp4" : dmt === "webp" ? "image/webp" : dmt === "jpg" ? "image/jpeg" : dmt === "mp3" ? "audio/mpeg" : "video/mp4"
anna.sendMessage(from, {[mimety.split("/")[0]]: {url: data.medias[i].url}, mimetype: mimety}, {quoted: info})
}
} catch(e) {
return reply(mess.error())
}
break

case 'igstory':
case 'instastorys':
case 'instastory':
if (!q) return reply(`Cadê o *usuário da pessoa* que você deseja baixar os storys?\n     • Exemplo: *${prefix+command} @jaoferreira*`);
if (!q.includes("@")) return reply(`Coloque o *@* na frente do usuário para obter um resultado positivo.\n📌 Exemplo: *${prefix+command} @jaoferreira*\n     • *Não use links de perfil*, coloque o @. Caso apresente um link o resultado será negativo.\n     • Este comando só baixa storys, *para baixar reels ou entre outras variedades*, use: *${prefix}igdl [link do post/reels]*`);
await reagir(from, "😸");
try {
reply(`Buscando stories do usuário: *${q}*, aguarde o retorno...`)
data = await fetchJson(APIs.Site1 + `/api/dl/igstory?usuario=${q.replace("@", "")}&apikey=` + apikey_kita)
for (let i = 0; i < data.resultado.length; i++) {
let dmt = data.resultado[i].extension
mimety = dmt === ".mp4" ? "video/mp4" : dmt === ".webp" ? "image/webp" : dmt === ".jpg" ? "image/jpeg" : dmt === ".mp3" ? "audio/mpeg" : "video/mp4"
anna.sendMessage(from, {[mimety.split("/")[0]]: {url: data.resultado[i].url}, mimetype: mimety}, {quoted: info})
}
} catch (e) {
return reply(mess.error())
}
break

case 'twitter': case 'twtdl':
if(!q.includes("twitter.com")) return reply(`Faltando o link válido do twitter para download do(a) video ou foto.`);
await reagir(from, "😸");
try {
data = await fetchJson(APIs.Site1 + `/api/dl/twitter2?url=${q}&apikey=` + apikey_kita);
if (data.status !== true) throw new Error(data.message);
for (let i = 0; i < data.resultado.media.length; i++) {
await sleep(1000) // Pausa de 1 segundo(s).
let mytype;
if (data.resultado.media[i].url.includes("https://video.twimg.com/ext_tw_video/")) {
mytype = "video/mp4";
} else if (data.resultado.media[i].url.includes("https://pbs.twimg.com/media/")) {
mytype = "image/jpeg";
} else {
type = "video/mp4";
}
anna.sendMessage(from, {[type.split("/")[0]]: {url: data.resultado.media[i].url}, mimetype: type}, {quoted: info}).catch(e => {
return reply(`Falha ao encaminhar uma da(s) mídia(s). Error: *${e.toString()}*`);
});
}
} catch (e) {
console.log(e)
reply(mess.error());
}
break

case 'igstalk': case 'instastalk':
if (!q) return reply(`Cadê o *usuário da pessoa* que você deseja stalkear?\n     • Exemplo: *${prefix+command} @inp7turco*`);
if (!q.includes("@")) return reply(`Coloque o *@* na frente do usuário para obter um resultado positivo.\n📌 Exemplo: *${prefix+command} @inp7turco*\n     • *Não use links de perfil*, coloque o @. Caso apresente um link o resultado será negativo.`)
try {
reagir(from, "😸")
reply(`Buscando informações sobre o usuário: *${q}* no Instagram.`)
data = await fetchJson(APIs.Site1 + `/api/igstalk?usuario=${q.replace("@", "")}&apikey=` + apikey_kita)
anna.sendMessage(from, {text: mess.igstalk(data), contextInfo: {externalAdReply: {title: "Dê um clique aqui e visualize o perfil stalkeado.", thumbnail: await getBuffer(data.resultado.profile_photo), mediaType: 1, sourceUrl: "http://instagram.com/"+data.resultado.username}}}) 
} catch(e) {
return reply(mess.error())
}
break

case 'instaaudio': case 'igaudio':
if(q.length < 5) return reply('Por favor, forneça o link de um *reels/video* do Instagram.')
reply(enviar.espere)
try {
setTimeout(() => {reagir(from, "😉")}, 100)
data = await fetchJson(APIs.Site1 + `/api/instagram?url=${q}&apikey=` + apikey_kita) 
audioInsta = await fetch(data.resultado[0]).then(v => v.buffer())
anna.sendMessage(from, {audio: audioInsta, mimetype: 'audio/mpeg'}, {quoted: sasah})
} catch(e) {
reply(mess.error())
}
break

case 'igreels': case 'instareels':
if (!q) return reply('Por favor, forneça o link do vídeo de um *reels do Instagram*.');
reply(enviar.espere);
try {
setTimeout(() => {reagir(from, "😸")}, 100)
result = await fetchJson(APIs.Site1 + `/api/instareels?url=${q}&apikey=` + apikey_kita);
anna.sendMessage(from, {video: {url: result.url}}, {quoted: sasah})
} catch(e) {
reply(mess.error())
}
break;

case 'operadora':
if(!q) return reply(mess.syntaxOperadora(prefix))
reagir(from, "🔍")
try {
data = await fetchJson(APIs.Site1 + `/api/operadora?numero=55${q}&apikey=` + apikey_kita)
anna.sendMessage(from, {text: mess.qualOperadora(data), contextInfo: {externalAdReply: {title: "Qual Operadora - Descubra qual é a operadora antes de ligar.", thumbnail: await getBuffer("https://telegra.ph/file/d22b8f916d880564f26ed.jpg"), mediaType: 1, sourceUrl: `https://www.qualoperadora.net`}}}) 
} catch(e) {
return console.log(e)
}
break

case 'kwaivideo':
if (!q) return reply('Por favor, forneça o link do vídeo do Kwai.');
reply(enviar.espere);
result = await fetchJson(APIs.Site1 + `/download/kwai?url=${q}&apikey=` + apikey_kita);
anna.sendMessage(from, {video: {url: result[0].video}, caption: mess.kwaiDownload(result)}, {quoted: sasah}).catch(e => {
return reply(mess.error())
})
break;

case 'mediafire':
if(!q.includes("mediafire.com")) return reply("Faltando o link do mediafire para download do arquivo, cade?");
ABC = await fetchJson(APIs.Site1 + `/api/mediafire?url=${q}&apikey=` + apikey_kita)
encurt = await axios.get(`https://tinyurl.com/api-create.php?url=${ABC.resultado[0].link}`)
reply(mess.mediafireDownload(ABC, encurt))
anna.sendMessage(from, {document: {url: ABC.resultado[0].link}, mimetype: "application/"+ABC.resultado[0].mime, fileName: ABC.resultado[0].nama}).catch(e => {
return reply(mess.error())  
})
break;

case 'gdrive': case 'googledrive':
if(!q.includes("drive.google.com")) return reply("Faltando o link do google drive para download do arquivo, cade?");
ABC = await fetchJson(APIs.Site1 + `/api/dl/gdrive?url=${q}&apikey=` + apikey_kita)
reply("Aguarde, estou encaminhando o arquivo. Pode demorar até *2min* para enviar!")
anna.sendMessage(from, {document: {url: ABC.resultado.downloadUrl}, mimetype: ABC.resultado.mimetype, fileName: ABC.resultado.fileName}).catch(e => {
return reply(mess.error())  
})
break;

case 'letra': case 'lyrics': case 'letramusic':
if (!q) return reply(`É o nome da música? Exemplo: ${prefix + command} the perfect girl`)
letrakk = await fetchJson(APIs.Site1 + `/api/letramusic?apikey=${API_KEY_anna}&query=${q}`)
letra = `${letrakk.resultado.letraDaMusica}`
anna.sendMessage(from, {image:{url: `${letrakk.resultado.imagemMusic}`}, caption:letra}).catch(e => {
return reply(mess.error())  
})
break

case 'gitclone':
let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!q) return reply(`Exemplo: ${prefix}gitclone https://github.com/YajiirDev/avatar`)
if (!args[0]) reply(`Exemplo: ${prefix}gitclone https://github.com/YajiirDev/avatar`)
reply(enviar.espere)
if (!regex1.test(args[0])) return reply('Aguarde...')
let [, user, repo] = args[0].match(regex1) || []
repo = repo.replace(/.git$/, '')
let url = `https://api.github.com/repos/${user}/${repo}/zipball`
let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
anna.sendMessage(from, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: sasah }).catch(e => {
return reply(mess.error())  
})
break

case 'editanime':
if(!q) return reply(mess.exeAnimeEdit(prefix))
if (args[0] === '-random') {
reply(enviar.aguarde)
anna.sendMessage(from, {video: {url:APIs.Site1 + `/api/editsvideo?categoria=aleatorios&apikey=` + apikey_kita}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-bleach') {
reply(enviar.aguarde)
anna.sendMessage(from, {video: {url:APIs.Site1 + `/api/editsvideo?categoria=bleach&apikey=` + apikey_kita}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-chainsaw') {
reply(enviar.aguarde)
anna.sendMessage(from, {video: {url:APIs.Site1 + `/api/editsvideo?categoria=chainsaw&apikey=` + apikey_kita}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-kimetsu') {
reply(enviar.aguarde)
anna.sendMessage(from, {video: {url:APIs.Site1 + `/api/editsvideo?categoria=demon_slayer&apikey=` + apikey_kita}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-dragonball') {
reply(enviar.aguarde)
anna.sendMessage(from, {video: {url:APIs.Site1 + `/api/editsvideo?categoria=dragonball&apikey=` + apikey_kita}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-jujutsu') {
reply(enviar.aguarde)
anna.sendMessage(from, {video: {url:APIs.Site1 + `/api/editsvideo?categoria=jujutsu_kaisen&apikey=` + apikey_kita}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-naruto') {
reply(enviar.aguarde)
anna.sendMessage(from, {video: {url:APIs.Site1 + `/api/editsvideo?categoria=naruto&apikey=` + apikey_kita}, mimetype: "video/mp4"}).catch(e => {
return reply(mess.error())
})
}
break

case 'animesimg': case 'animeimg': case 'animeimage':
if(!q) return reply(mess.exeAnimeImage(prefix))
if (args[0] === '-cosplay') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/cosplay?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-waifu') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/waifu?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-loli') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/loli?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-shota') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/shota?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-yotsuba') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/yotsuba?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-shinomiya') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/shinomiya?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-yumeko') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/yumeko?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-tejina') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/tejina?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-chiho') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/chiho?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-boruto') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/boruto?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-kaori') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/kaori?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-shizuka') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/shizuka?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-kaga') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/kaga?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-kotori') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/kotori?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-mikasa') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/mikasa?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-akiyama') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/akiyama?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-gremory') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/gremory?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-izuku') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/izuku?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-shina') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/shina?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-kagura') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/kagura?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-shinka') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/shinka?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-eba') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/eba?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-yuri') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/yuri?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-erza') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/erza?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-elaina') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/elaina?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-hinata') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/hinata?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-naruto') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/naruto?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-minato') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/minato?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-sagari') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/sagari?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-nezuko') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/nezuko?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-rize') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/rize?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-anna') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/anna?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-deidara') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/deidara?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-asuna') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/asuna?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-ayuzawa') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/ayuzawa?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-emilia') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/emilia?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-chitoge') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/chitoge?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-hestia') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/hestia?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-inori') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/inori?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-itachi') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/itachi?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-madara') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/madara?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-sakura') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/sakura?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-sasuke') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/sasuke?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-tsunade') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/tsunade?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-onepiece') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/onepiece?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-mobil') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/mobil?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-montor') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/montor?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-keneki') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/keneki?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-megumin') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/megumin?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
} else if (args[0] === '-toukachan') {
reply(enviar.aguarde)
photos = await getBuffer(APIs.Site1 + `/random/toukachan?apikey=` + apikey_kita)
anna.sendMessage(from, {image: photos}).catch(e => {
return reply(mess.error())
})
}
break

case 'bc': case 'bcgroup': case 'transmitir': case 'transmissão': {
if(!SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.donosmt)
if(!q) return reply( `Texto onde? Exemplo : ${prefix + command} Hasta la vista baby`)
let getGroups = await anna.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
for (i = 0; i < anu.length; i++) {
await sleep(1500)
let txt = `「 TRANSMISSÃO DO BOT 」\n\n ${q}`
anna.sendMessage(anu[i], {text: txt})
}
reply(`Enviado com sucesso...`)
}
break

case 'join': case 'entrar':
if(!SoDono) return reply(enviar.msg.donosmt)
string = args.join(' ')
if(!string) return reply('Insira um link de convite ao lado do comando.')
if(string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
anna.groupAcceptInvite(`${link}`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if(String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break

case 'antiimg':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiImg) return reply('O recurso de anti imagem já está ativado.')
dataGp[0].antiimg = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti imagem neste grupo.️')
} else if(Number(args[0]) === 0) {
if(!isAntiImg) return reply('O recurso de anti imagem já está desativado.')
dataGp[0].antiimg = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti imagem neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antivideo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiVid) return reply('O recurso de anti vídeo já está ativado.')
dataGp[0].antivideo = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti video neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiVid) return reply('O recurso de anti vídeo já está desativado.')
dataGp[0].antivideo = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti video neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiaudio':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiAudio) return reply('O recurso de anti áudio já está ativado.')
dataGp[0].antiaudio = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti audio neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiAudio) return reply('O recurso de anti áudio já está desativado.')  
dataGp[0].antiaudio = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti audio neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antisticker':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiSticker) return reply('O recurso de anti sticker já está ativado.')
dataGp[0].antisticker = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti sticker neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiSticker) return reply('O recurso de anti sticker já está desativado.')
dataGp[0].antisticker = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti sticker neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antidocumento':
case 'antidoc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(Antidoc) return reply('O recurso de anti documento já está ativado.')
dataGp[0].antidoc = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti documento neste grupo.')
} else if(Number(args[0]) === 0) {
if(!Antidoc) return reply('O recurso de anti documento já está desativado.')
dataGp[0].antidoc = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti documento neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antictt':
case 'anticontato':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiCtt) return reply('O recurso de anti contato já está ativado.')
dataGp[0].antictt = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti contato neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiCtt) return reply('O recurso de anti contato já está desativado.')
dataGp[0].antictt = false
setGp(dataGp)
reply('️Desativou com sucesso o recurso de anticontato neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antiloc':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {									
if(args.length < 1) return reply('1 pra ativar, 0 pra desligar')
if(Number(args[0]) === 1) {
if(Antiloc) return reply('O recurso de anti loc já está ativado.')
dataGp[0].antiloc = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti loc neste grupo.')
} else if(Number(args[0]) === 0) {
if(!Antiloc) return reply('O recurso de anti loc já está desativado.')
dataGp[0].antiloc = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti loc neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antilinkgp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntilinkgp) return reply('O recurso de antilink de grupo já está ativado.')
dataGp[0].antilinkgp = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de antilink de grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntilinkgp) return reply('O recurso de antilink de grupo já está desativado.')
dataGp[0].antilinkgp = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de antilink de grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antilinkhard':
case 'antilink':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntiLinkHard) return reply('O recurso de antilink hardcore já está ativado.')
dataGp[0].antilinkhard = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de antilink hardcore neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAntiLinkHard) return reply('O recurso de antilink hardcore já está desativado.')
dataGp[0].antilinkhard = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de antilink harcore neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'x9':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isx9) return reply('O recurso de x9 já está ativado.')
dataGp[0].x9 = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de x9 neste grupo, irei notificar quando alguém for rebaixado ou promovido a adm 😏..')
} else if(Number(args[0]) === 0) {
if(!isx9) return reply('O recurso de x9 já está desativado.')
dataGp[0].x9 = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de x9 neste grupo, não irei mais notificar promoção de adm nem rebaixamento.. ️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'visualizarmsg':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isVisualizar) {
nescessario.visualizarmsg = true
setNes(nescessario)
reply('Ativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado.')
} else if(isVisualizar) {
nescessario.visualizarmsg = false
setNes(nescessario)
reply('Desativou com sucesso o recurso de visualizar todas as mensagens enviada em grupos e privado.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'x9visuunica':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isX9VisuUnica) return reply('O recurso de revelar visu única já está ativado.')
dataGp[0].visuUnica = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de revelar visu única neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isX9VisuUnica) return reply('O recurso de revelar visu única já está desativado.')
dataGp[0].visuUnica = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de revelar visu única neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'so_adm':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(So_Adm) return reply('Ja esta ativo')
dataGp[0].soadm = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de só adm utilizar comandos neste grupo.')
} else if(Number(args[0]) === 0) {
if(!So_Adm) return reply('Ja esta Desativado')
dataGp[0].soadm = false
setGp(dataGp)
reply('Desativou o recurso de só adm utilizar comandos neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'odelete':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(IS_DELETE) return reply('O recurso de delete já está ativado.')
nescessario.Odelete = true
setNes(nescessario)
reply('Ativou com sucesso o recurso de delete nos grupos.')
} else if(Number(args[0]) === 0) {
if(IS_DELETE) return reply('O recurso de delete já está desativado.')
nescessario.Odelete = false
setNes(nescessario)
reply('️Desativou com sucesso o recurso de delete nos grupos.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'antifake':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAntifake) return reply('O recurso de antifake já está ativado.')
dataGp[0].antifake = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de antifake neste grupo.')
} else if(Number(args[0]) === 0) {
if(isAntifake) return reply('O recurso de antifake já está desativado.')
dataGp[0].antifake = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de antifake neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'prefixos':
if(!isGroup) return reply(enviar.msg.grupo)
if(dataGp[0].prefixos.length < 1) return reply("Não contem nenhum prefixo a + adicionado neste grupo.")
bla = `Lista de prefixos para uso do bot, no Grupo: ${groupName} - [`
for ( i of dataGp[0].prefixos) {
bla += ` ${i} ]`
}
reply(bla)
break

case 'figurinhas':
try {
if(!Number(q)) return reply(`Digite a quantidade de figurinhas\nExemplo: ${prefix+command} 7`)
if(q >= 100) return reply("Coloque abaixo de 100...")
if (isGroup) reply(`As figurinhas estão sendo enviadas no pv, por motivo de segurança e flood em grupos, aguarde um pouco.`)
reply(enviar.espere)
async function figus() {
bala = await getBuffer(APIs.Site1 + `/figu?apikey=` + apikey_kita)
bass64 = `data:image/jpeg;base64,${bala.toString('base64')}`
mantap = await convertSticker(bass64, `${pushname}`, `${NomeDoBot}`)
imageBuffer = new Buffer.from(mantap, 'base64');
anna.sendMessage(sender, {sticker: imageBuffer})
}
for ( i = 0; i < q; i++) {
await sleep(2000)
figus()
}
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar") 
} else {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply("Erro ao enviar as figurinhas!")  
}
}
break

case 'figaleatoria':
reply(`- Estou gerando sua figurinha, aguarde um pouco amigo(a)...`)
try {
bla = await getBuffer(APIs.Site1 + `/figu?apikey=` + apikey_kita)
anna.sendMessage(from, {sticker: bla})
} catch(e) {
reply(mess.error())
}
break

case 'add_prefixo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo 1`)
if(ANT_LTR_MD_EMJ(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o novo prefixo, não pode espaço vazio...")
if(q.trim() > 1) return reply(`Calma, o prefixo só pode ser um\nExemplo: ${prefix+command} _\nAe o bot vai passar á responder _ como prefixo do bot..`)
if(dataGp[0].prefixos.indexOf(q.trim()) >= 0) return reply(`Esse prefixo já se encontra incluso, procure ver na lista dos prefixos\nExemplo: ${prefix}prefixos`)
dataGp[0].prefixos.push(q.trim())
setGp(dataGp)
reply(`Prefixo ${q.trim()} foi adicionado com sucesso na lista de prefixos para uso do bot, neste grupo...`)
break

case 'tirar_prefixo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isMultiP) return reply(`Para usar este comando, você deve ativar o comando, multiprefix\nExemplo: ${prefix}multiprefixo 1`)  
if(ANT_LTR_MD_EMJ(q)) return reply("Não pode letra modificada, nem emoji..")
if(!q.trim()) return reply("Determine o prefixo que deseja tirar, não pode espaço vazio...")
if(q.trim() > 1) return reply(`Calma, o prefixo só pode ser tirado um por vez..\nExemplo: ${prefix+command} _\nAe o bot não vai responder mais com _`)
if(dataGp[0].prefixos.indexOf(q.trim()) < 0) return reply(`Esse prefixo não está incluso, procure ver na lista dos prefixos. Veja: ${prefix}prefixos`)
if(dataGp[0].prefixos.length == 1) return reply("Adicione um prefixo para pode tirar este, tem que ter pelo menos 1 prefixo já incluso dentro do sistema para tirar outro.")
dataGp[0].prefixos.splice(dataGp[0].prefixos.indexOf(q.trim()), 1)
setGp(dataGp)
reply(`Prefixo ${q.trim()} tirado com sucesso da lista de prefixos de uso deste grupo..`)
break

case 'multiprefixo': case 'multiprefix':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isMultiP) {
dataGp[0].multiprefix = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de multi prefixos neste grupo.')
}
if(isMultiP) {
dataGp[0].multiprefix = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de multi prefixos neste grupo.')
}
break

case 'gethtml':
res = await axios.get(url)
reply(res.data)
break

case 'ephemeral': case 'msgtemp': { 
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (!q) return reply(`Insira os valores de ativação/desativação`)
if (args[0] === '1') {
reply(`✅️ As mensagens temporárias ativada com sucesso.`)
await anna.sendMessage(from, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL })
} else if (args[0] === '0') {
reply(`❌️ As mensagens temporárias desativada com sucesso.`)
await anna.sendMessage(from, { disappearingMessagesInChat: false })
}
}
break

case 'changegroup': case 'config_gp': case 'config-group': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (!q) return reply(`Insira all / adms para escolher quem pode atualizar os dados do grupo. A decisão é sua, adm! `)
if (args[0] === 'adms') {
reply(`🔐 Sucesso! - Agora somente os adm poderá editar os dados do grupo.`)
await anna.groupSettingUpdate(from, 'locked')
} else if (args[0] === 'all') {
reply(`🔓 Sucesso! - Agora todos os participantes pode alterar os dados do grupo.`)
await anna.groupSettingUpdate(from, 'unlocked')
}
}
break

case 'rmphotogp': case 'rmfotogroup': {
if (!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
reply(`A foto do grupo foi removida com sucesso.`)
await anna.removeProfilePicture(from)
}
break

case 'antinotas':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isAntiNotas) return reply('Já Esta ativo')
dataGp[0].antinotas = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti notas neste grupo.️')
} else if(Number(args[0]) === 0) {
if(!isAntiNotas) return reply('Ja esta Desativado.')
dataGp[0].antinotas = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti notas neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'anticatalogo':
case 'anticatalg':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAnticatalogo) return reply('Ja esta ativo')
dataGp[0].anticatalogo = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anticatalogo neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAnticatalogo) return reply('Já está desativado.')
dataGp[0].anticatalogo = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anticatalogo neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo':
case 'welcome':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isWelkom) return reply('Ja esta ativo')
dataGp[0].wellcome[0].bemvindo1 = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de bem vindo neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isWelkom) return reply('Ja esta Desativado')
dataGp[0].wellcome[0].bemvindo1 = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de bemvindo neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'bemvindo2':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!SoDono) return reply(enviar.msg.donosmt)
if(args.length < 1) return reply(`Digite da forma correta:\nComando: ${prefix + command} 1 para ativar `)
if(Number(args[0]) === 1) {
if(isWelkom2) return reply('O recurso já está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = true
setGp(dataGp)
reply('O recurso foi ativado.')
} else if(Number(args[0]) === 0) {
if(!isWelkom2) return reply('O recurso não está ativado no grupo.')
dataGp[0].wellcome[1].bemvindo2 = false
setGp(dataGp)
reply('O recurso foi desativado.')
} else {
reply(`Digite da forma correta, ${prefix + command} 1, para ativar e 0 para desativar`)
}
break

case 'infocmd': 
case 'info': 
if(!q) return reply(`Coloque um comando para conhecer o uso do comando que você almeja usar, por exemplo: ${prefix+command} play`)
const CMD_P = JSON.parse(fs.readFileSync("./configs/media/infocmd.json")); 
const searchCmds = CMD_P.map(i => i.command).indexOf(q)
if(searchCmds < 0) return reply("A explicação do comando ainda não está disponível..")
const returnMessage = CMD_P[searchCmds].info.replace(/#prefixo#/g, prefix)
reply(returnMessage)
break

case 'infocmd_add': case 'add_infocmd':
if(!SoDono) return reply(enviar.msg.donosmt)
const CMD_S = JSON.parse(fs.readFileSync("./configs/media/infocmd.json")); 
dirInfoCmd = "./configs/media/infocmd.json"
var [y, x] = q.split('|')
if(!q.includes("|")) return reply(`Faltando a primeira |\nExemplo: ${prefix+command} comando|info`)
if(q.lastIndexOf("|") < 0) return reply(`Faltando a segunda |\nExemplo: ${prefix+command} comando|info`)
kirv = []
for (i of CMD_S) {kirv.push(i.command)}
if(kirv.indexOf(y) >= 0) return reply("A informação sobre este comando já foi adicionada, ou seja, já é existente...")
CMD_S.push({command: y, info: x})
fs.writeFileSync(dirInfoCmd, JSON.stringify(CMD_S, null, 2))
reply(`Informação sobre o comando ${y} foi atribuida a ele com sucesso...`)
break 

case 'infocmd_del': case 'del_infocmd':
if(!SoDono) return reply(enviar.msg.donosmt) 
const CMD_D = JSON.parse(fs.readFileSync("./configs/media/infocmd.json")); 
var i7 = CMD_D.map(i => i.command).indexOf(q.trim())
dirInfoCmd = "./configs/media/infocmd.json"
CMD_D.splice(i7, 1)
fs.writeFileSync(dirInfoCmd, JSON.stringify(CMD_D, null, 2))
reply(`A informação sobre o comando ${q} foi removida com sucesso...`)
break

case 'legendabv':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(11)
if(isWelkom) {
dataGp[0].wellcome[0].legendabv = teks
setGp(dataGp)
reply('*Mensagem de boas vindas definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`)
}
break

case 'legendasaiu':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(13)
if(isWelkom) {
dataGp[0].wellcome[0].legendasaiu = teks
setGp(dataGp)
reply('*Mensagem de saída definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo 1`
)
}
break

case 'legendabv2':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de boas-vindas*')
teks = body.slice(12)
if(isWelkom2) {
dataGp[0].wellcome[1].legendabv = teks
setGp(dataGp)
reply('*Mensagem de boas vindas2 definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo2 1`)
}
break

case 'legendasaiu2':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de saída*')
teks = body.slice(14)
if(isWelkom2) {
dataGp[0].wellcome[1].legendasaiu = teks
setGp(dataGp)
reply('*Mensagem de saída2 definida com sucesso!*')
} else {
reply(`Ative o ${prefix}bemvindo2 1`)
}
break

case 'legenda_estrangeiro':
case 'legenda_estrangeiros': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
if(isAntifake) {
dataGp[0].legenda_estrangeiro = q
setGp(dataGp)
reply('*Mensagem de remoção de estrangeiros definida com sucesso!*')
} else {
reply(`Ative o antifake primeiro com ${prefix}antifake 1`)
}
break

case 'legenda_video': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_video = q
setGp(dataGp)
reply('*Mensagem de remoção de video definida com sucesso!*')
break

case 'legenda_imagem': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_imagem = q
setGp(dataGp)
reply('*Mensagem de remoção de imagem definida com sucesso!*')
break

case 'legenda_documento': 
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('*Escreva a mensagem de remoção de estrangeiros*')
dataGp[0].legenda_documento = q
setGp(dataGp)
reply('*Mensagem de remoção de documento definida com sucesso!*')
break

case 'addautorm':
case 'addautoban':
case 'listanegra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply('Precisa ser Dono ou Adm')
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra..")
if(dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Esse Número ja esta incluso*')
dataGp[0].listanegra.push(mrc_ou_numero)
setGp(dataGp)
reply(`*Número adicionado a lista de autoban*`)
break

case 'autobang':
case 'listanegrag':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja adicionar na lista negra Global..")
if(listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número ja esta incluso*')
listanegraG.push(mrc_ou_numero)
fs.writeFileSync('./configs/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`*Número adicionado a lista de autoban*`)
break

case 'tirardalistag':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!listanegraG.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
var i = listanegraG.indexOf(mrc_ou_numero)
listanegraG.splice(i, 1)
fs.writeFileSync('./configs/nescessario.json', JSON.stringify(nescessario, null, '\t'))
reply(`*Número foi removido da lista negra*`)
break

case 'delremover':
case 'delautorm':  
case 'delautoban': 
case 'tirardalista':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!mrc_ou_numero) return reply("Marque a mensagem do usuário com o comando ou utilize o comando com o número do usuário que deseja tirar da lista negra..")
if(!dataGp[0].listanegra.includes(mrc_ou_numero)) return reply('*Esse Número não esta incluso*')
var i = dataGp[0].listanegra.indexOf(mrc_ou_numero)
dataGp[0].listanegra.splice(i, 1)
setGp(dataGp)
reply(`*Número foi removido da lista de autoban*`)
break

case 'listban':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(dataGp[0].listanegra.length < 1) return reply('*Nenhum Número não foi adicionado*')
teks = '*Números que vou moer na porrada se voltar:*\n'
for(i=0;i<dataGp[0].listanegra.length;++i) {
teks += `➤ *${dataGp[0].listanegra[i].split('@')[0]}*\n`
}
teks += '*Esses ai vou descer meu martelo do ban.*'
reply(teks)
break

case 'mute':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply('O bot precisa ser adm pra executar essa ação.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja mutar.')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if(isMuted) {
var ind = GroupsMutedActived.indexOf(from)
for (let _ of mentioned) {
teks = `Olá *@${_.split('@')[0]}*, você acaba de ser mutado, ação realizada pelo(a) adm: *@${sender.split('@')[0]}*.`
muted[ind].numbers.push(_)
}
fs.writeFileSync('./bunker/database/usuarios/muted.json', JSON.stringify(muted, null, 2))
teks += '\n–\n• Caso você dar um piu, sua(s) mensagem(ns) vai ser apagada.'
mentions(teks, [mentioned, sender], true)
} else {
 const data = {
jid: from,
numbers: mentioned
}
muted.push(data)
fs.writeFileSync('./bunker/database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `Olá *@${_.split('@')[0]}*, você acaba de ser mutado, ação realizada pelo(a) adm: *@${sender.split('@')[0]}*.`
}
teks += '\n–\n• Caso você dar um piu, sua(s) mensagem(ns) vai ser apagada.'
mentions(teks, [mentioned, sender], true)
}
break

case 'desmute':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply('O bot precisa ser adm pra executar essa ação.')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o número que deseja desmutar.')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
var ind = GroupsMutedActived.indexOf(from)
if(isMuted) {
for(let _ of mentioned) {
if(muted[ind].numbers.indexOf(_) >= 0) {
var rmind = muted[ind].numbers.indexOf(_)
muted[ind].numbers.splice(rmind, 1)
}
}
fs.writeFileSync('./bunker/database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `Olá usuário *@${_.split('@')[0]}* você acaba de ser desmutado pelo(a) adm *@${sender.split('@')[0]}*.`
}
teks += '\n–\n• Agora você pode falar a vontade no grupo, sem interrupções.'
mentions(teks, [mentioned, sender], true)
} else {
const data = {
jid: from,
numbers: []
}
muted.push(data)
fs.writeFileSync('./bunker/database/usuarios/muted.json', JSON.stringify(muted, null, 2) + '\n')
for (let _ of mentioned) {
teks = `Olá usuário @${_.split('@')[0]} você acaba de ser desmutado pelo(a) adm @${sender.split('@')[0]}.`
}
teks += '\n–\n• Agora você pode falar a vontade no grupo, sem interrupções.'
mentions(teks, [mentioned, sender], true)
}
break

case 'roletarussa':
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
jds = []
A2 = groupMembers; B2 = groupMembers
TAMBOR = ["na perna.","na cabeça.","no pescoço.","no peito.","no olho.","no estômago.","na boca.","na perna.","na testa.","no braço."]
C2 = A2[Math.floor(Math.random() * A2.length)]
if(C2 === sender || C2 === botNumber+"@s.whatsapp.net") {
return reply(`*Escolhi* @${C2.id.split('@')[0]} mas infelizmente correu de covardia...*`)
}
tpa = TAMBOR[Math.floor(Math.random() * (TAMBOR.length))]	 		
reply(`*A escolha é minha! 1 membro irá morrer, que os jogos comecem...*`)
setTimeout( () => {
D1 = `*Que pena... você não sobreviveu ao meu jogo* @${C2.id.split('@')[0]}, *hora de enterrar o cadáver, infelizmente morreu com tiro* *${tpa}*`             			
mentions(D1, jds, true)
}, 5000)
jds.push(C2.id)				  
setTimeout( () => {
jds.push(C2.id)
anna.groupParticipantsUpdate(from, [C2.id], "remove")
}, 6000) 
break

case 'gptimg': case 'crimg': case 'superimg':
try {
if (!q) return reply("O que você deseja criar amiguinho?")
reply("Criando uma imagem a partir de seu questionamento, aguarde...");
anna.sendMessage(from, {image: {url:APIs.Site1 + `/api/open-ai_img?TOKEN_GPT=${TOKEN_GPT}&q=${q}`}}, {quoted: sasah}).catch(() => {
return reply(mess.error())
})
} catch {
reply(mess.error())
}
break

case 'imagine': 
try {
if (!q) return reply("O que você deseja criar amiguinho?")
reply("Criando uma imagem a partir de seu questionamento, aguarde...");
anna.sendMessage(from, {image: {url:APIs.Site1 + `/api/ia/midjourney?query=${q}&apikey=` + apikey_kita}}, {quoted: sasah}).catch(() => {
return reply(mess.error())
})
} catch {
reply(mess.error())
}
break

case 'pergunta': case 'openai': case 'gpt':
try {
if(!q) return reply("Você esqueceu de perguntar ao lado do comando.")
let { key } = await anna.sendMessage(from, {text: `Estou processando sua pergunta, isso pode levar alguns segundos...`}, {quoted: info})
anu1 = await fetchJson(APIs.Site1 + `/api/ia/gpt?query=${q}&apikey=` + apikey_kita)
await anna.sendMessage(from, {text: mess.respostaChatGPT(anu1), edit: key});
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
reply(mess.error())
} else {
reply(mess.error())
}
}
break

case 'totext': 
// @VictorGabriel
if (!isQuotedAudio) return reply("Por favor, mencione um áudio para realizar a leitura do áudio.")
if(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage.fileLength > 2100000) return reply("Só realizo a transcrição de áudio de até *2MB*, envie um arquivo menor.")
try {
let getBufferAudio = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage, 'audio')
let { key } = await anna.sendMessage(from, {text: `Estou realizando a transcrição do áudio para texto, aguarde...`}, {quoted: info})
fs.writeFileSync(`./bunker/database/data/tmp/totext-${sender}.mp3`, getBufferAudio)
client = new AssemblyAI({apiKey: "11d7fb1a4e8f4e4fac85d3b9be844b4a"})
data = await client.transcripts.create({audio_url: `./bunker/database/data/tmp/totext-${sender}.mp3`, language_code: "pt"})
if (data.words.length == 0) return reply("Não foi possível transcrever seu áudio. Por favor tente com outro.")
await anna.sendMessage(from, {text: `• *Transcrição* - Quantidade de palavra(s) detectada(s) no texto: *${data.words.length}*\n—\n• ${data.text}`, edit: key});
DLT_FL(`./bunker/database/data/tmp/totext-${sender}.mp3`)
} catch(e) {
reply(mess.error())
}
break

case 'bard':
try {
if(!q) return reply("Você esqueceu de perguntar ao lado do comando.")
let { key } = await anna.sendMessage(from, {text: `Estou processando sua pergunta, isso pode levar alguns segundos...`}, {quoted: info})
r = await fetchJson(APIs.Site1 + `/api/ia/gbard?query=${q}&apikey=` + apikey_kita)
await anna.sendMessage(from, {text: mess.respostaBard(r), edit: key});
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
reply(mess.error())
} else {
reply(mess.error())
}
}
break

case 'wikipedia': case 'wiki':
try {
  if(!q) return reply(`Exemplo: ${prefix+command} JavaScript`)
reply(`Aguarde, pesquisando sobre o que está perguntando..`)
wikip = await axios.get(`https://pt.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=${encodeURIComponent(q)}&prop=info&inprop=url`);
wikis = await axios.get(`https://pt.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&pageids=${wikip.data.query.search[0].pageid}`);
msgSemQuoted(mess.wikiResposta(wikis))
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
reply('Nada foi encontrado, com base em sua pergunta.. Especifique um pouco!')
} else {
reply('Nada foi encontrado, com base em sua pergunta.. Especifique um pouco!')
}
}
break

case 'gptvoz':
if(!q) return reply("Você esqueceu de perguntar ao lado do comando.")
reply(`Estou processando sua pergunta. Isso pode levar alguns segundos...`)
nznk = await fetch(APIs.Site1 + `/api/open-ai_txt?TOKEN_GPT=${TOKEN_GPT}&q=${q}`).then(response => response.json())
const gpts = require('./bunker/armor/funcoes/gtts')('pt')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gpts.save(ranm, `${nznk.resultado}`, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
anna.sendMessage(from, {audio: fs.readFileSync(ranm), ptt:true, mimetype: "audio/mpeg"}, {quoted: sasah})
DLT_FL(ranm)
DLT_FL(rano)
})
})
break

case 'corretor':
if(!q) return reply(`Parece que você esqueceu de adicionar sua frase, *use-o de forma correta*, siga o exemplo:\n— ${prefix+command} `+"```Eu te mamo```")
try {
let { key } = await anna.sendMessage(from, {text: `Verificando os erros ortográficos em seu texto ou palavra... *Aguarde!*`}, {quoted: info})
promptUser = `Corrija gramaticalmente uma frase para o português brasileiro tradicional: ${q}`
anu1 = await fetchJson(APIs.Site1 + `/api/ia/gpt?query=${promptUser}&apikey=` + apikey_kita)
await anna.sendMessage(from, {text: mess.corretorOrtografico(anu1), edit: key});
} catch(e) {
return reply(mess.error())
}
break

case 'redacao':
if(!q) return reply(`Você esqueceu de colocar o tema de sua redação ao lado do comando.`)
try {
let { key } = await anna.sendMessage(from, {text: `Estou processando sua solicitação. Isso pode levar alguns segundos...`}, {quoted: info})
promptUser = `Crie um texto dissertativo-argumentativo com o tema: ${q}`
anu1 = await fetchJson(APIs.Site1 + `/api/ia/gpt?query=${promptUser}&apikey=` + apikey_kita)
await anna.sendMessage(from, {text: mess.respostaRedacao(anu1), edit: key});
} catch(e) {
return reply(mess.error())
}
break

case 'summerize':
if(!q) return reply(`Você esqueceu de colocar o que você deseja resumir ao lado do comando.`)
try {
let { key } = await anna.sendMessage(from, {text: `Estou resumindo o texto solicitado. Isso pode levar alguns segundos...`}, {quoted: info})
promptUser = `Faça um resumo básico do texto apresentado: ${q}`
anu1 = await fetchJson(APIs.Site1 + `/api/ia/gpt?query=${promptUser}&apikey=` + apikey_kita)
await anna.sendMessage(from, {text: mess.respostaResumida(anu1), edit: key})
} catch(e) {
return reply(mess.error())
}
break

case 'nasa':
try {
if (!q) return reply(`*Exemplo:* ${prefix}${command} 19-10-2007`)
dataanna = await fetchJson(APIs.Site1 + `/api/nasaphoto?data=${q}&apikey=` + apikey_kita)
resultExp = await fetchJson(APIs.Site1 + `/api/info/translate?texto=${dataanna.nasa.explanation}&ling=pt&apikey=` + apikey_kita)
anna.sendMessage(from, {image: {url: dataanna.nasa.hdurl }, caption: mess.result_APOD(dataanna, resultExp)})
} catch (e) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply(mess.error());
}
break;

case 'book':
if (args.length == 0) return reply(`*Exemplo:* ${prefix+command} Nome do Livro`)
try {
const takeBook = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(q)}&langRestrict=pt`);
const getBook = await axios.get(`${takeBook.data.items[0].selfLink}`);
var bookImage = await getBuffer(getBook.data.volumeInfo.imageLinks.thumbnail)
anna.sendMessage(from, {image: bookImage, caption: mess.searchBooks(getBook)}).catch(e => {
reply(mess.error())
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply(mess.error())
}
}
break

case 'cotacao': {
if (!isPremium) return reply(enviar.msg.premium)
moedas = ["dolar", "euro", "bitcoin", "libra", "ethereum"]
if(!moedas.includes(q_2)) return reply("A moeda está inexistente em meu banco de dados!\n*Disponíveis:* dolar, euro, bitcoin, libra, ethereum\n*Observação:* Use letras minúsculas para não ocorrer erros!")
if (encodeURIComponent(q) == "dolar") {
var money = "USD-BRL";
} else if (encodeURIComponent(q) == "euro") {
var money = "EUR-BRL";
} else if (encodeURIComponent(q) == "bitcoin") {
var money = "BTC-BRL";
} else if (encodeURIComponent(q) == "libra") {
var money = "GBP-BRL";
} else if (encodeURIComponent(q) == "ethereum") {
var money = "ETH-BRL";
}
axios.get(`https://economia.awesomeapi.com.br/last/${money}`)
.then((response) => {
if (encodeURIComponent(q) == "dolar") {
var resposta = response.data.USDBRL;
} else if (encodeURIComponent(q) == "euro") {
var resposta = response.data.EURBRL;
} else if (encodeURIComponent(q) == "bitcoin") {
var resposta = response.data.BTCBRL;
} else if (encodeURIComponent(q) == "ethereum") {
var resposta = response.data.ETHBRL;
} else if (encodeURIComponent(q) == "libra") {
var resposta = response.data.GBPBRL;
}
reply(mess.quoteCurrencies(resposta));
}).catch((response) => {
reply("Erro ao obter informações!️");
});
}
break;

case 'clima':
if (args.length == 0) return reply(`*Exemplo:* ${prefix}Clima Maceió`)
try {
const wttrin = (await axios.get(`https://pt.wttr.in/${encodeURIComponent(q)}?format=j1`)).data;
var wttrImage = await getBuffer(`https://wttr.in/${encodeURIComponent(q)}.png`)
anna.sendMessage(from, {image: wttrImage, caption: mess.clima(wttrin)}).catch(e => {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")
reply(mess.error())
}
}
break

case 'simi':
if(!isGroup) return reply(enviar.msg.grupo)
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+q+"&lc=pt"})
return reply(datasimi.message)
} catch (e){
return reply("Resposta não encontrada..")
}
break

case 'simih':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isSimi) return reply('O modo simi está ativo')
dataGp[0].simi1 = true
setGp(dataGp)
reply('Ativado com sucesso o modo simi neste grupo..')
} else if(Number(args[0]) === 0) {
if(!isSimi) return reply('Já está Desativado.')
dataGp[0].simi1 = false
setGp(dataGp)
reply('Desativando o modo simi com sucesso neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc emkkkk')
}
break

case 'simih2':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isSimi2) return reply('O modo Simi está ativo')
dataGp[0].simi2 = true
setGp(dataGp)
reply('Ativado com sucesso o modo simi neste grupo..')
} else if(Number(args[0]) === 0) {
if(!isSimi2) return reply('Já está Desativado.')
dataGp[0].simi2 = false
setGp(dataGp)
reply('Desativando o modo simi com sucesso neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar, lerdao vc emkkkk')
}
break

case 'autofigu': case 'autosticker':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAutofigu) return reply('Ja esta ativo')
dataGp[0].autosticker = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de auto figurinhas neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAutofigu) return reply('Ja esta Desativado')
dataGp[0].autosticker = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de auto figurinhas neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'autorepo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar')
if(Number(args[0]) === 1) {
if(isAutorepo) return reply('Ja esta ativo')
dataGp[0].autoresposta = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de auto resposta neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isAutorepo) return reply('Ja esta Desativado')
dataGp[0].autoresposta = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de auto resposta neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'modobrincadeira':
case 'modobrincadeiras':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply('1 pra ligar / 0 pra desligar.')
if(Number(args[0]) === 1) {
if(isModobn) return reply('O modo brincadeira já está ativo.')
dataGp[0].jogos = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de Modo brincadeira neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isModobn) return reply('O modo brincadeira já está desativado.')
dataGp[0].jogos = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de Modo brincadeira neste grupo.')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'patente':
case 'level':
if(!isGroup) return reply(enviar.msg.grupo)
anna.sendMessage(from, {text: mess.infoPatente(tempo, sender, patente, level_up), mentions: [sender]}, {quoted: sasah})
break

case 'leveling':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('Ative pressione 1, Desativar pressione 0')
if(Number(args[0]) === 1) {
if(isLevelingOn) return reply('*O recurso de nível já estava ativo antes*')
dataGp[0].level = true
setGp(dataGp)
reply(enviar.levelon) 
} else if(Number(args[0]) === 0) {
if(!isLevelingOn) return reply(`O recurso de level já está Desativado neste grupo.`)
dataGp[0].level = false
setGp(dataGp)
reply(enviar.leveloff)
} else {
reply('Adicionar parâmetro 1 ou 0 ')
}
break

case 'bangp':
case 'unbangp':
if(!isGroup) return reply(enviar.msg.grupo)
if(!SoDono) return reply(enviar.msg.donosmt)
if(command == 'bangp'){
if(isBanchat) return reply(`Este grupo já está banido.`)
dataGp[0].bangp = true
setGp(dataGp)
reply(`Grupo banido com sucesso`)
} else {
if(!isBanchat) return reply(`Este grupo não está mais banido.`)
dataGp[0].bangp = false
setGp(dataGp)
reply(`Grupo desbanido...`)
}
break

case 'boton':
case 'botoff':
if(!SoDono) return reply(enviar.msg.donosmt)
if(!isBotoff) {
nescessario.botoff = true
setNes(nescessario)
reply('Desativando funções e parando a execução de comandos por membros com sucesso...')
} else if(isBotoff) {
nescessario.botoff = false
setNes(nescessario)
reply(`Ativando todos os funcionamentos do bot novamente...`)
}
break

case 'modonsfw':
case 'nsfw':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(args.length < 1) return reply('Hmmmm')
if(Number(args[0]) === 1) {
if(isNsfw) return reply('O modo nsfw já está ativo.')
dataGp[0].nsfw = true
setGp(dataGp)
reply(`✓ Ativado com sucesso o modo nsfw +18 no grupo: *${groupMetadata.subject}*`)
} else if(Number(args[0]) === 0) {
if(!isNsfw) return reply('O modo nsfw já está desativado.')  
dataGp[0].nsfw = false
setGp(dataGp)
reply(`✓ Modo Nsfw +18 desativado com sucesso no grupo: *${groupMetadata.subject}*`)
} else {
reply('1 para ativar, 0 para desligar')
}
break

case 'antipalavrão':
case 'antipalavrao':  
case 'antipalavra':    
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`1/0, Exemplo: ${prefix + command} 1`)
if(Number(args[0]) === 1) {
if(isPalavrao) return reply('Ja esta ativo.')
dataGp[0].antipalavrao.active = true
setGp(dataGp)
reply('Ativou com sucesso o recurso de anti palavras hardcore neste grupo.')
} else if(Number(args[0]) === 0) {
if(!isPalavrao) return reply('Ja esta Desativado')
dataGp[0].antipalavrao.active = false
setGp(dataGp)
reply('Desativou com sucesso o recurso de anti palavra harcore neste grupo.️')
} else {
reply('1 para ativar, 0 para desativar')
}
break

case 'addpalavra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(args.length < 1) return reply( `Use assim : ${prefix + command} [palavrão]. exemplo ${prefix + command} puta`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(isPalavras.includes(texto)) return reply('Já foi adicionada')
dataGp[0].antipalavrao.palavras.push(texto)
setGp(dataGp)
reply('Palavrão adicionado com sucesso!')
break

case 'delpalavra':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isPalavrao) return reply('Anti palavrão desativado!')
if(args.length < 1) return reply(`Use assim: ${prefix + command} [palavrão]. Exemplo: ${prefix + command} Rapariga`)
texto = args.join(' ').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")
if(!isPalavras.includes(texto)) return reply('Já foi removida')
var i = dataGp[0].antipalavrao.palavras.indexOf(texto)
dataGp[0].antipalavrao.palavras.splice(i, 1)
setGp(dataGp)
reply('Palavrão removido da lista com sucesso!')
break

case 'listapalavrão': case 'listapalavra':
case 'listpalavra':
if(!isPalavrao) return reply('Anti palavrão desativado!')
let lbw = `Esta é a lista de palavrão\nTotal: ${isPalavras.length}\n`
for (let i of isPalavras) {
lbw += `➸ ${i}\n`
}
await reply(lbw)
break

case 'limitecaracteres':
case 'limiteflood':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(args.length < 1) return reply(`Digite ${prefix + command} 1 para ativar`)
if(Number(args[0]) === 1) {
if(isAntiFlood) return reply(`O recurso limite de caracteres já está ativo no grupo.`)
dataGp[0].limitec.active = true
setGp(dataGp)
reply(`O recurso limite de caracteres foi ativado nesse grupo.`)
} else if(Number(args[0]) === 0) {
 if(!isAntiFlood) return reply('O recurso limite de caracteres não está ativado no grupo.')
dataGp[0].limitec.active = false
setGp(dataGp)
reply('O recurso limite de caracteres foi desativado nesse grupo.️')
} else {
reply(`Digite ${prefix + command} 1 para ativar, 0 para desativar o recurso`)
}
break

case 'limitec_global':
case 'limitec':
if(!SoDono && !isnit && !ischyt) return reply(enviar.msg.donosmt)
if(!isAntiFlood) return reply(`Ative este recurso primeiro ${prefix}limiteflood 1`)
if(!q) return reply(`Cade a quantidade? Ex: ${prefix + command} 5000`)
if(isNaN(q) == true) return reply('Digite apenas números')
if(command == 'limitec'){
dataGp[0].limitec.quantidade = q
setGp(dataGp)
reply(`Foi alterado o limite de caracteres para: ${q}`)
} else {
var data = { limitefl: q }
fs.writeFileSync('./bunker/database/usuarios/flood.json', JSON.stringify(data, null, '\t'))
reply(`Foi adicionado um limite global de caracteres de: ${q}`)
}
break

case 'status':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins && !SoDono && !isnit && !issupre && !ischyt && !info.key.fromMe) return reply(enviar.msg.adm)
reply(mess.statusBot(isAnticall, isAntiPv, isAntiImg, isAntiVid, isAntiAudio, isAntiSticker, isNsfw, Antidoc, isAntiCtt, Antiloc, isAntilinkgp, isAntiLinkHard, isAntifake, isAntiNotas, isAnticatalogo, isPalavrao, isAntiFlood, isWelkom, isWelkom2, isSimi, isSimi2, isAutofigu, isAutorepo, isModobn, isModoAluguel, isLevelingOn))
break

case 'reiniciar':
if(!SoDono) return reply(enviar.msg.donosmt)
setTimeout(async () => {
reply("Reiniciando..")
setTimeout(async () => {
process.exit()
}, 1200)
}, 1000)
break

case 'novoqr':
if(!SoDono) return reply(enviar.msg.donosmt);
reply("Será apagado o qrcode, e irá gerar um novo, fique atento no terminal para ler novamente..");
setTimeout(() => {
fs.rmdirSync(folderUserAuth, { recursive: true}); }, 1500)
break;

//==========(Sticker-Stickers)===========\\

case 'emoji': case 'semoji':
if(!q) return reply(`*Exemplo:* ${prefix}emoji ☹️/whatsapp`)
emot = q.split('/')[0]
jemot = q.split('/')[1]
if(jemot == 'apple'){ idemot = 0 }
else if(jemot == 'google'){ idemot = 1 }
else if(jemot == 'samsung'){ idemot = 2 }
else if(jemot == 'microsoft'){ idemot = 3 }
else if(jemot == 'whatsapp'){ idemot = 4 }
else if(jemot == 'twitter'){ idemot = 5 }
else if(jemot == 'facebook'){ idemot = 6 }
else if(jemot == 'joypixels'){ idemot = 7 }
else if(jemot == 'openmoji'){ idemot = 8 }
else if(jemot == 'emojidex'){ idemot = 9 }
else if(jemot == 'lg'){ idemot = 10 }
else if(jemot == 'htc'){ idemot = 11 }
else if(!jemot){ idemot = 4 }
else{
return reply(`Exemplo: ${prefix}emoji ☹️/whatsapp`)
}
reply(enviar.espere)
if(idemot == undefined) return
emoji.get(emot)
.then(emoji => {
sendStickerFromUrl(from, emoji.images[idemot].url)
}).catch(e => {
reply("Emoji não encontrado.. Tente com outro emoji para ver está funcionando..")
})
break

case 'emoji-mix':
case 'emojimix':
txt = q.replace(" +", "+").replace("+ ", "+").replace(" + ", "+")
var [emj1, emj2] = txt.split("+")
if(!q.includes("+")) return reply(`Olá, está faltando o +\nExemplo: ${prefix+command} 😪+🤣`)
try {
reply(enviar.espere)
sendStickerFromUrl(from, APIs.Site1 + `/api/emojimix?emoji1=${encodeURI(emj1)}&emoji2=${encodeURI(emj2)}&apikey=` + apikey_kita)
} catch (e) {
if(String(e).includes(API_KEY_anna)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply('Ops não foi possivel fazer esse mix de emoji ou pode ter ocorrido algum problema no sistema..')
}
}
break

case 'figfundo':
case 'figvideo':
case 'figusemfundo': 
case 'sfundo':  
if((isMedia && !info.message.videoMessage || isQuotedImage) && !q.length <= 1) {
rafa = isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage
reply(enviar.espere)
buff = await getFileBuffer(rafa, 'image')
bas64 = `data:image/jpeg;base64,${buff.toString('base64')}`
anu = args.join(' ').split('|')
satu = anu[0] !== '' ? anu[0] : `Usuário: ${pushname}`
sd = `📍Criado por: ${NomeDoBot}`
dua = typeof anu[1] !== 'undefined' ? anu[1] : `${sd}`
var mantap = await convertSticker(bas64, `${dua}`, `${satu}`)
var sti = new Buffer.from(mantap, 'base64');
anna.sendMessage(from, {sticker: sti}, {quoted: sasah})
} else {
return reply(`So imagem amigo(a)!`)
}
break

case 'rbale':  
if(!isQuotedSticker) return reply('Marque uma figurinha...')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply(enviar.espere)
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `📍Criado por: ${NomeDoBot}`, `Usuário: ${pushname}`)
var sti = new Buffer.from(mantap, 'base64');
anna.sendMessage(from, { sticker: sti }, {quoted: sasah})
.catch((err) => {
reply(`❎ Erro, tenta mais tarde`); 
})
break

case 'rename':
case 'roubar':  
if(!isQuotedSticker) return reply('Marque uma figurinha...')
encmediats = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
var kls = q
var pack = kls.split("/")[0];
var author2 = kls.split("/")[1];
if(!q) return reply('*E o autor e o nome do pacote?*')
if(!pack) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/bla*`)
if(!author2) return reply(`*por favor escreve o formato certo: ${prefix + command} sad/dms*`)
reply(enviar.espere)
bas64 = `data:image/jpeg;base64,${encmediats.toString('base64')}`
var mantap = await convertSticker(bas64, `${author2}`, `${pack}`)
var sti = new Buffer.from(mantap, 'base64');
anna.sendMessage(from, { sticker: sti }, {quoted: sasah})
.catch((err) => {
reply(`❎ Erro, tenta mais tarde`); 
})
break

case 'fstiker':
case 'fsticker':
case 'f':
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij2 = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage  
if(boij) {
var pack = `👑 ⃟ᴄʀɪᴀᴅᴀ ᴘᴏʀ\n↳ ${NomeDoBot}\n\n↧ ☁️ ⃟ғɪɢᴜʀɪɴʜᴀ \n↳ ᴛᴏᴘ ᴅᴇᴍᴀɪs!`
var author2 = `↧ 🥀 ⃟ɴɪᴄᴋ ᴅᴏɴᴏ\n↳ ${NickDono}\n\n↧ 💻 ⃟ғᴇɪᴛᴀ ᴘᴏʀ:\n↳ ${pushname}`
reply(enviar.espere)
owgi = await getFileBuffer(boij, 'image')
let encmediaa = await sendImageAsSticker(anna, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij2 && boij2?.seconds < 11) {
var pack = `👑 ⃟ᴄʀɪᴀᴅᴀ ᴘᴏʀ\n↳ ${NomeDoBot}\n\n↧ ☁️ ⃟ғɪɢᴜʀɪɴʜᴀ \n↳ ᴛᴏᴘ ᴅᴇᴍᴀɪs!`
var author2 = `↧ 🥀 ⃟ɴɪᴄᴋ ᴅᴏɴᴏ\n↳ ${NickDono}\n\n↧ 💻 ⃟ғᴇɪᴛᴀ ᴘᴏʀ:\n↳ ${pushname}`
reply(enviar.espere)
owgi = await getFileBuffer(boij2, 'video')
let encmedia = await sendVideoAsSticker(anna, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
reply(`Enviar imagem / vídeo / gif com legenda \n${prefix}sticker (duração do adesivo de vídeo de 1 a 10 segundos)`)
}
break

case 'figu':
if(fs.existsSync(DF_TJ)) return reply("Aguarde um momento, e realize o pedido novamente, não seja tão rápido...")
var DF_TJ = "./bunker/database/data/CVF.json"
fs.writeFileSync(DF_TJ, JSON.stringify([isQuotedImage ? info.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage : info.message.imageMessage || isQuotedVideo ?  info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage]))
var PUXJ = JSON.parse(fs.readFileSync(DF_TJ))
var DFN = PUXJ[0]
DFN.sticker = {url: DFN.url}
await delay(1200)
DLT_FL(DF_TJ)
anna.sendMessage(from, DFN)
break

case 'st':
case 'stk':
case 'sticker':
case 's':
var RSM = info.message?.extendedTextMessage?.contextInfo?.quotedMessage
var boij2 = RSM?.imageMessage || info.message?.imageMessage || RSM?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessageV2?.message?.imageMessage || info.message?.viewOnceMessage?.message?.imageMessage || RSM?.viewOnceMessage?.message?.imageMessage
var boij = RSM?.videoMessage || info.message?.videoMessage || RSM?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessageV2?.message?.videoMessage || info.message?.viewOnceMessage?.message?.videoMessage || RSM?.viewOnceMessage?.message?.videoMessage
if(boij2){
var pack = `👑 ⃟ᴄʀɪᴀᴅᴀ ᴘᴏʀ\n↳ ${NomeDoBot}\n\n↧ ☁️ ⃟ғɪɢᴜʀɪɴʜᴀ \n↳ ᴛᴏᴘ ᴅᴇᴍᴀɪs!`
var author2 = `↧ 🥀 ⃟ɴɪᴄᴋ ᴅᴏɴᴏ\n↳ ${NickDono}\n\n↧ 💻 ⃟ғᴇɪᴛᴀ ᴘᴏʀ:\n↳ ${pushname}`
owgi = await getFileBuffer(boij2, 'image')
let encmediaa = await sendImageAsSticker2(anna, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmediaa)
} else if(boij && boij.seconds < 11){
var pack = `👑 ⃟ᴄʀɪᴀᴅᴀ ᴘᴏʀ\n↳ ${NomeDoBot}\n\n↧ ☁️ ⃟ғɪɢᴜʀɪɴʜᴀ \n↳ ᴛᴏᴘ ᴅᴇᴍᴀɪs!`
var author2 = `↧ 🥀 ⃟ɴɪᴄᴋ ᴅᴏɴᴏ\n↳ ${NickDono}\n\n↧ 💻 ⃟ғᴇɪᴛᴀ ᴘᴏʀ:\n↳ ${pushname}`
owgi = await getFileBuffer(boij, 'video')
let encmedia = await sendVideoAsSticker2(anna, from, owgi, info, { packname:pack, author:author2})
await DLT_FL(encmedia)
} else {
return reply(`Marque uma imagem, ou um vídeo de ate 9.9 segundos, ou uma visualização única, para fazer figurinha, com o comando ${prefix+command}`)
}
break

case 'toimg':
if(!isQuotedSticker) return reply('Por favor, *mencione um sticker* para executar o comando.')
try {
reply(enviar.espere)
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
anna.sendMessage(from, {image: buff}, {quoted: sasah}).catch(e => {
console.log(e);
reply('Ocorreu um erro ao converter o *sticker para imagem.*')
})
} catch {
reply(mess.error())
}
break

//=====================================\\

case 'metadinha': {
sendMsg = await anna.sendMessage(from, {react: {text: `👫`, key: info.key}})
reply(enviar.espere)
let anu = await fetchJson('https://raw.githubusercontent.com/iamriz7/kopel_/main/kopel.json')
let random = anu[Math.floor(Math.random() * anu.length)]
anna.sendMessage(from, { image: { url: random.male }, caption: `Perfil Masculino 🤵` }, {quoted: sasah})
anna.sendMessage(from, { image: { url: random.female }, caption: `Perfil Feminino 👰` }, { quoted: sasah})
}
break

case 'comunismo':
case 'bolsonaro':
case 'bnw':
case 'beautiful':
case 'blur':
case 'affect':
case 'del':
case 'circle':
case 'dither':
case 'facepalm':
case 'invert':
case 'magik':
case 'rotate':
case 'rip':
case 'jail':
case 'trash':
case 'pixelate':
case 'sepia':
case 'wanted':
case 'wasted':
case 'lgbt':
case 'karaba':
try {
setTimeout(() => {reagir(from, `✅️`)}, 100)
if((isMedia && !info.message.videoMessage || isQuotedImage)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.imageMessage
imagem = await downloadContentFromMessage(post, 'image')
base64 = Buffer.from([])
for await(const send of imagem) { base64 = Buffer.concat( [ base64, send ] ) }
reply(`> `+enviar.espere)
link = await upload(base64)
anna.sendMessage(from, {image: {url:APIs.Site1 + `/api/canvas/${command}?link=${link}&apikey=` + apikey_kita}}, {quoted: selo}).catch(e => {
return reply(`> `+mess.error())
})
} else {
reply('Mencione uma imagem para atribuir o efeito a foto.')
}
} catch (e) {
if(JSON.stringify(e).includes(API_KEY_KITAZINHA)) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Ocorreu um erro ao adicionar o *efeito na imagem. Tente novamente!")  
}
}
break

//========(SORTEIO-VOTAR-CASES)=========\\

case 'substituir':
if(!SoDono && !isnit) return reply("Só dono..")
 if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync(q, doc)
anna.sendMessage(from, {text:'O arquivo foi substituído para outro local com sucesso.'},{quoted: sasah})
} else {
reply('Marque o documento ou arquivo..')
}
break

case 'index-bot':
if(!SoDono)return reply(enviar.msg.donosmt)
if(isMedia && !info.message.videoMessage || isQuotedDocument) {
media = isQuotedDocument ? info.message.extendedTextMessage.contextInfo.quotedMessage.documentMessage : info.message.documentMessage
rane = getRandom('.'+await getExtension(media.mimetype))
doc = await getFileBuffer(media, 'document')
fs.writeFileSync('./index.js', doc)
anna.sendMessage(from, {text: "O arquivo './index.js' foi atualizado com sucesso."},{quoted: sasah})
} else {
reply('Marque o documento ou o arquivo que deseja enviar pra determinar pasta ou substituir..')
}
break

case 'getcase':
case 'puxarcase':
try{
if (!SoDono) return reply(enviar.msg.donosmt)
reply('- Calma ae amigo(a), já estou enviando o comando / case para você..')
const getCase = (cases) => {
return 'case '+`'${cases}'`+fs.readFileSync("./index.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
await sleep(500)
msgSemQuoted(`${getCase(q)}`)
} catch(e) {
console.log("[GETCASE] - ❌️ Comando não encontrado! ❌")
reply('❌️ Comando não encontrado! ❌️')
}
break

case 'comandos':
const pr = '!'
sendPoll(from, `TODOS OS MENUS DO BOT`,
[pr + `menu`, pr + `ping`, pr + `minerar`])
break

case 'figuemoji':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function figufigun() {
anna.sendMessage(from, { sticker: { url: APIs.Site1 + `/sticker/figu_emoji?apikey=` + apikey_kita } })}
for (i = 0; i < q; i++) {
await sleep(680)
figufigun()
}
break

case 'figuflork':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function figsupup() {
anna.sendMessage(from, { sticker: { url: APIs.Site1 + `/sticker/figu_flork?apikey=` + apikey_kita } })}
for (i = 0; i < q; i++) {
await sleep(680)
figsupup()
}
break

case 'figumemes':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function nometoque() {
anna.sendMessage(from, { sticker: { url: APIs.Site1 + `/sticker/figu_memes?apikey=` + apikey_kita } })}
for (i = 0; i < q; i++) {
await sleep(680)
nometoque()
}
break

case 'figubebe':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function lovepartidolovepartido() {
anna.sendMessage(from, { sticker: { url: APIs.Site1 + `/sticker/figu_bebe?apikey=` + apikey_kita } })}
for (i = 0; i < q; i++) {
await sleep(680)
lovepartidolovepartido()
}
break

case 'figucoreana':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function lovepartidoee() {
anna.sendMessage(from, { sticker: { url: APIs.Site1 + `/sticker/figu_coreana?apikey=` + apikey_kita } })}
for (i = 0; i < q; i++) {
await sleep(680)
lovepartidoee()
}
break

case 'figuanime':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function lovepartidoeelovepartidoeeu() {
anna.sendMessage(from, { sticker: { url: APIs.Site1 + `/sticker/figu_anime?apikey=` + apikey_kita } })}
for (i = 0; i < q; i++) {
await sleep(680)
lovepartidoeelovepartidoeeu()
}
break

case 'figufunny':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundobom() {
anna.sendMessage(from, { sticker: { url: APIs.Site1 + `/sticker/figu_engracada?apikey=` + apikey_kita } })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundobom()
}
break

case 'figuanimais':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundoruim() {
anna.sendMessage(from, { sticker: { url: APIs.Site1 + `/sticker/figu_animais?apikey=` + apikey_kita } })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundoruim()
}
break

case 'figudesenho':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundoruimeitamundoruim() {
anna.sendMessage(from, { sticker: { url: APIs.Site1 + `/sticker/figu_desenho?apikey=` + apikey_kita } })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundoruimeitamundoruim()
}
break

case 'figuraiva':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundorm() {
anna.sendMessage(from, { sticker: { url: APIs.Site1 + `/sticker/figu_raiva?apikey=` + apikey_kita } })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundorm()
}
break

case 'figuroblox':
if (!q) return reply("Insira a quantidade de figurinhas que deseja que eu envie!")
if (!Number(args[0]) || Number(q.trim()) > 10) return reply("Digite a quantidade de figurinhas que deseja que eu envie.. não pode mais de 10..")
async function eitamundom() {
anna.sendMessage(from, { sticker: { url: APIs.Site1 + `/sticker/figu_roblox?apikey=` + apikey_kita } })}
for (i = 0; i < q; i++) {
await sleep(680)
eitamundom()
}
break

case 'bann':
if(!isPremium && !SoDono) return reply("Só usuário premium pode utilizar este comando..") 
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário já foi removido ou saiu do grupo.")
if(premium.includes(menc_os2)) return mentions(`@${menc_os2.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [menc_os2], true)
if(groupAdmins.includes(menc_os2)) return mentions(`@${menc_os2.split("@")[0]} a(o) @${sender.split("@")[0]} está querendo banir você, visualiza esse problema ae 😶`, [menc_os2], true)
if(botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(menc_os2)) return reply('Não posso remover meu dono 🤧')
anna.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos ainda não esclarecidos) -`, mentions: [menc_os2]})
anna.groupParticipantsUpdate(from, [menc_os2], "remove")  
break

case 'band':
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(IS_DELETE) {
setTimeout(() => {
anna.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify().includes(menc_os2)) return reply("Este usuário já foi removido do grupo.")
if(botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(numerodono.includes(menc_os2)) return reply('Não posso remover meu dono 🤧')
anna.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`, mentions: [menc_os2]})
anna.groupParticipantsUpdate(from, [menc_os2], "remove")  
} catch (e) {
console.log(e)
}
break

case 'add': case 'unkick':
if(!SoDono) return reply(`Somente meu proprietário pode utilizar esse comando!`);
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!q && info.message.extendedTextMessage === null) return reply('Marque a mensagem ou coloque o número de quem você quer adicionar no grupo.')
try {
useradd = `${args.join(" ").replace(/\D/g,'')}` ? `${args.join(" ").replace(/\D/g,'')}` : info.message.extendedTextMessage.contextInfo.participant
let id = `${useradd.replace(/\D/g,'')}`
if(!id) return reply(`Número inválido.`)
let [result] = await anna.onWhatsApp(id)
if(!result) return reply(`Esse número não está registrado no WhatsApp.`)
let response = await anna.groupParticipantsUpdate(from, [result.jid], "add")
if(response[0].status == "409") {
anna.sendMessage(from, {text: `Ele já está no grupo, como eu vou adicionar?`, mentions: [result.jid, sender]})
} else if(response[0].status == "403") {
anna.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele privou a conta.`, mentions: [result.jid, sender]})
} else if(response[0].status == "408") {
anna.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele saiu recentemente do grupo.`, mentions: [result.jid, sender]})
} else if(response[0].status == "401") {
anna.sendMessage(from, {text: `Não consegui adicionar o @${result.jid.split("@")[0]} porque ele bloqueou o bot.`, mentions: [result.jid, sender]})
} else if(response[0].status == "200") {
anna.sendMessage(from, {text: `Prontinho fiz o que você pediu.`, mentions: [result.jid, sender]})
} else {
reply("Vish acho que algo deu errado")
}
} catch(e) {
console.log("[ERROR]:"+ e)
}
break

case 'ban': case 'banir': case 'kick': case 'avadakedavra':
if(!isGroupAdmins && !SoDono) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
try {
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário já foi removido do grupo ou saiu.")
if(botNumber.includes(menc_os2)) return reply('Não sou besta de remover eu mesmo né 🙁, mas estou decepcionado com você')
if(JSON.stringify(numerodono).indexOf(menc_os2) >= 0) return reply('Não posso remover meu dono 🤧')
anna.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi [ REMOVIDO(A) COM SUCESSO ] - (Por motivos justos.) -`, mentions: [menc_os2]})
anna.groupParticipantsUpdate(from, [menc_os2], "remove")  
} catch (e) {
console.log(e)
}
break

case 'promover': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível promover..")
anna.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi promovido(a) para adm com sucesso.`, mentions: [menc_os2]})
anna.groupParticipantsUpdate(from, [menc_os2], "promote")  
break

case 'rebaixar': 
if(!isGroupAdmins) return reply(enviar.msg.adm)
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(!menc_os2 || menc_jid2[1]) return reply("Marque a mensagem do usuário ou marque o @ dele.., lembre de só marcar um usuário...")
if(!JSON.stringify(groupMembers).includes(menc_os2)) return reply("Este usuário foi removido do grupo ou saiu, não será possível rebaixar..")
anna.sendMessage(from, {text: `@${menc_os2.split("@")[0]} Foi rebaixado para [ MEMBRO COMUM ] com sucesso.`, mentions: [menc_os2]})
anna.groupParticipantsUpdate(from, [menc_os2], "demote")  
break

case 'sorteio':
if(!isGroupAdmins) return reply(enviar.msg.adm)
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteio de 100 R$`)
d = []
teks = `🎉 Meus parabéns ao vencedor do sorteio: ${q}\n-\n`
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `• *Mencionando o vencedor:*  @${groupMembers[r].id.split('@')[0]}`
d.push(groupMembers[r].id)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

case 'nuke': case 'arquivargp':
if(!SoDono && !isnit) return reply("Só dono pode utilizar este comando...")
if(!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if(info.key.fromMe) return 
blup = []
for ( i of groupMembers) {
if(!numerodono.includes(i.id)) blup.push(i.id)
}
blup.splice(blup.indexOf(botNumber), 1)
for ( i = 0; i < blup.length; i++) {
await sleep(500)
anna.groupParticipantsUpdate(from, [blup[i]], 'remove')
} 
break

case 'sorteionumero':
case 'sorteionumeros':  
if(!isGroupAdmins) return reply(enviar.msg.adm)
try{
if(!isGroup) return reply(enviar.msg.grupo)
if(!q) return reply(`Coloque algo, após o comando sorteio, por exemplo, ${prefix}sorteionumero de 100 R$`)
var numerossrt = sortear[Math.floor(Math.random() * sortear.length)] 
d = []
teks =  `🎉 Parabéns ao número do sortudo, por ganhar o sorteio ${q}:\n-\n`
for(i = 0; i < 1; i++) {
teks += `• O número sorteado foi: ${numerossrt}`
d.push(numerossrt)
}
mentions(teks, d, true)
} catch (e) {
console.log(e)
reply('Deu erro, tente novamente :/')
}
break

//==========(TTPS/ATTP)============\\

case 'ttp':
if (!q) return reply(`Coloque o texto que você quiser!\n- *Por exemplo:* ${prefix + command} Eu me amo`)
reply(enviar.espere)
string = args.join(' ') || 'Texto indefinido'
post = APIs.Site1 + `/api/ttp?texto=${string}&apikey=` + apikey_kita
sendStickerFromUrl(from, post, {quoted: sasah}).catch(e => {
reply(mess.error())  
})
break

case 'attp':
if(!q.trim()) return reply(`Coloque o texto que você quiser!\n- *Por exemplo:* ${prefix + command} Eu me amo`);
reply(enviar.espere)
anna.sendMessage(from, {sticker: {url: APIs.Site1 + `/api/attp?texto=${q}&apikey=` + apikey_kita}}, {quoted: info}).catch(e => {
return reply(mess.error());
})
break;

//======================================\\


//===(ZOUEIRAS/BRINCADEIRAS/HUMOR)===\\

case 'nick': case 'gerarnick': case 'fazernick': case 'estilizar':
try {
nick = args.join(' ')
if(ANT_LTR_MD_EMJ(q)) return reply("Ao realizar a solicitação de criação foi detectada letras modificadas ou emojis, ou seja, não se pode conter emojis e letras modificadas.");
if(!q) return reply(`Escreva um texto para eu enviar ele com letras modificadas.\n• *Exemplo:* ${prefix+command} anna`);
axios.get(APIs.Site1 + `/api/fazernick?nome=${nick}&apikey=` + apikey_kita).then(dados => {
nicks = dados.data
txt = `• Estilos aplicados ao texto: ${q}\n–\n`
for (let i = 0; i < nicks.length; i++) {
txt += `*${i+1}.* ${nicks[i]}\n–\n`
}
reply(`${txt.trim()}`)
}).catch(e => {
reply("Erro ao gerar as fontes modificadas ou estilizar seu texto...") 
})
} catch (e) {
if(String(e).includes("invalid json response body at")) {
console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else {
reply("Erro ao gerar as fontes modificadas ou estilizar seu texto...") 
}
}
break

case 'chance':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)  
var avb = body.slice(7)
if(args.length < 1) return anna.sendMessage(from, {text: `Você precisa digitar da forma correta\nExemplo: ${prefix}chance do luuck ser gay`}, {quoted: sasah})
random = `${Math.floor(Math.random() * 100)}`
hasil = `A chance ${body.slice(8)} é de... ${random}%`
anna.sendMessage(from, {text: hasil, mentions: [sender]}, {quoted: sasah})
break

case 'namorar': case 'pediremnamoro': 
// @Matheus
setTimeout(() => {reagir(from, "💍")}, 300)
if(!isGroup) return reply(enviar.msg.grupo)
if(!menc_os2) return reply('Marque a mensagem ou o @ que queira pedir ela em namoro. Se você tomar um fora, juízo!')
if(botNumber.includes(menc_os2)) return reply("Não é possível pedir o bot em namoro, seu baitola.🙄")
if(JSON.stringify(namoro2).includes(menc_os2)) return reply(`Este usuário já foi pedido em namoro...`)
if(JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == false) return reply(`Essa pessoa já pediu alguém em namoro... Sinto muito ${pushname} 😕`)
if(JSON.stringify(namoro1).includes(menc_os2) && namoro1[namoro1.map(i => i.usu1).indexOf(menc_os2)].namorados == true) return reply(`Não será possível pedir essa pessoa em namoro, pois a mesma já está com outro(a). 🌚`)
if(JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == false) return mention(`Você já pediu para namorar com o (a) @${namoro1[namoro1.map(i => i.usu1).indexOf(sender)].usu2}. Não brinque com os sentimentos dos outros! Se decida logo ou digite: ${prefix}cancelarpedido`)
if(JSON.stringify(namoro1).includes(sender) && namoro1[namoro1.map(i => i.usu1).indexOf(sender)].namorados == true) return mention(`Você já está namorando com o (a) @${namoro1[namoro1.map(i => i.usu1).indexOf(sender)].usu2}...`)
namoro1.push({usu1: sender, usu2: menc_os2.split('@')[0], namorados: false, idgp: from, hora: hora, data: date})
fs.writeFileSync("./bunker/database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.push({id: menc_os2, pedido: sender.split('@')[0], idgp: from})
fs.writeFileSync("./bunker/database/func/namoro2.json", JSON.stringify(namoro2))
anna.sendMessage(from, {video: {url: `https://telegra.ph/file/cc313adcf306bf602c695.mp4`}, gifPlayback: true, caption: `Querido *@${menc_os2.split('@')[0]}*, o(a) *@${sender.split('@')[0]}* deixou uma *cartinha* para você!\n–\n“annaer que você é parte da minha vida me faz sentir abençoado. Desde o primeiro dia em que me aproximei de você, annaia que havia algo especial ali. Agora, depois de tanto tempo, quero declarar oficialmente nosso amor.”\n–\nEai você aceita namorar com *@${sender.split('@')[0]}* e viver um felizes para sempre?\n• Para aceitar o pedido, digite: “Sim”\n• Para recusar o pedido, digite: “Não”.`, mentions: [menc_os2, sender]})
break

case 'cancelarpedido':
// @Matheus
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(namoro1).includes(sender)) return reply("Não há pedido de namoro para cancelar.")
C13 = namoro1.map(i => i.usu1).indexOf(sender)
C15 = namoro2.map(i => i.id).indexOf(namoro1[C13].usu2 + "@s.whatsapp.net")
if(namoro1[C13].namorados == true) return reply("Não é possível cancelar o pedido de namoro depois de aceito.")
namoro1.splice(C13, 1)
fs.writeFileSync("./bunker/database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro2.splice(C15, 1)
fs.writeFileSync("./bunker/database/func/namoro2.json", JSON.stringify(namoro2))
reply("Pedido de namoro cancelado com sucesso.")
break

case 'terminar':
// @Matheus
if(!JSON.stringify(namoro1).includes(sender)) return reply(`Você não está namorando com ninguém. Sinto muito!`)
D1 = namoro1.map(i => i.usu1).indexOf(sender)
D2 = namoro1.map(a => a.usu1).indexOf(`${namoro1[D1].usu2}@s.whatsapp.net`)
namoro1[D2].namorados = false
reply(`Agora você está totalmente solteiro, notifiquei a(o) sua/seu parceiro sobre o término.`)
anna.sendMessage(`${namoro1[D1].usu2}@s.whatsapp.net`, {text: `Tenho uma notícia ruim sobre seu namoro, ele(a) acaba de terminar.\n–\n• Seja feliz e lembre dos todos os bons momentos que vocês tiveram juntos.`}, {quoted: info})
namoro1.splice(D2, 1)
fs.writeFileSync("./bunker/database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
namoro1.splice(D1, 1)
fs.writeFileSync("./bunker/database/func/namoro1.json", JSON.stringify(namoro1, null, 2))
break

case 'minhadupla': case 'dupla':
// @Matheus
if(!isGroup) return reply(enviar.msg.grupo)
if(!JSON.stringify(namoro1).includes(sender)) return reply(`Você não está namorando com ninguém. Sinto muito!`)
reagir(from, "❤️‍🩹")
D1 = namoro1.map(i => i.usu1).indexOf(sender)
if(namoro1[D1].namorados == false) return reply(`A pessoa que você pediu em namoro não aceitou o pedido ainda. Portanto, não é possível consultar os dados da dupla.️`)
txt = `@${namoro1[D1].usu1.split('@')[0]} namora com @${namoro1[D1].usu2}\n–\n• O pedido de namoro ocorreu às ${namoro1[D1].hora} do dia ${namoro1[D1].data}.\n–\n• Para realizar o término do namoro, use: *${prefix}terminar*`
mencionarIMG(txt, "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyJluVC6ZnBV7rVqpwPPO2TDK8wnFVBO9Vzg&usqp=CAU")
break

case 'nazista':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
anna.sendMessage(from, {text: `❰ Pesquisando a sua ficha de nazista : @${sender_ou_n.split("@")[0]} aguarde... ❱`, mentions: [sender_ou_n]})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
anna.sendMessage(from, {image: {url: imgnazista}, caption: `O quanto você é nazista? \n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱  nazista 卐`, mentions: [sender_ou_n]}, {quoted: sasah})
}, 7000)
break 

case 'gay':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
anna.sendMessage(from, {text: `❰ Pesquisando a sua ficha de gay : @${sender_ou_n.split("@")[0]} aguarde... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
boiola = random
if(boiola < 20 ) {var bo = 'hmm... você é hetero😔'} else if(boiola == 21 ) {var bo = '+/- boiola'} else if(boiola == 23 ) {var bo = '+/- boiola'} else if(boiola == 24 ) {var bo = '+/- boiola'} else if(boiola == 25 ) {var bo = '+/- boiola'} else if(boiola == 26 ) {var bo = '+/- boiola'} else if(boiola == 27 ) {var bo = '+/- boiola'} else if(boiola == 2 ) {var bo = '+/- boiola'} else if(boiola == 29 ) {var bo = '+/- boiola'} else if(boiola == 30 ) {var bo = '+/- boiola'} else if(boiola == 31 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 32 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 33 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 34 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 35 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 36 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 37 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 3 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 39 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 40 ) {var bo = 'tenho minha desconfiança...😑'} else if(boiola == 41 ) {var bo = 'você é né?😏'} else if(boiola == 42 ) {var bo = 'você é né?😏'} else if(boiola == 43 ) {var bo = 'você é né?😏'} else if(boiola == 44 ) {var bo = 'você é né?😏'} else if(boiola == 45 ) {var bo = 'você é né?😏'} else if(boiola == 46 ) {var bo = 'você é né?😏'} else if(boiola == 47 ) {var bo = 'você é né?😏'} else if(boiola == 4 ) {var bo = 'você é né?😏'} else if(boiola == 49 ) {var bo = 'você é né?😏'} else if(boiola == 50 ) {var bo = 'você é ou não?🧐'} else if(boiola > 51) {var bo = 'você é gay🙈'
}
anna.sendMessage(from, {image: {url: imggay}, caption: `  O quanto você é gay? \n\n 「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱ gay 🏳️‍🌈\n\n${bo}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: sasah})
}, 7000)
break

case 'feio':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
anna.sendMessage(from, {text: `❰ Pesquisando a sua ficha de feio : @${sender_ou_n.split("@")[0]} aguarde... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
feio = random
if(feio < 20 ) {var bo = 'É não é feio'} else if(feio == 21 ) {var bo = '+/- feio'} else if(feio == 23 ) {var bo = '+/- feio'} else if(feio == 24 ) {var bo = '+/- feio'} else if(feio == 25 ) {var bo = '+/- feio'} else if(feio == 26 ) {var bo = '+/- feio'} else if(feio == 27 ) {var bo = '+/- feio'} else if(feio == 2 ) {var bo = '+/- feio'} else if(feio == 29 ) {var bo = '+/- feio'} else if(feio == 30 ) {var bo = '+/- feio'} else if(feio == 31 ) {var bo = 'Ainda tá na média'} else if(feio == 32 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if(feio == 33 ) {var bo = 'Da pra pegar umas(ns) novinha(o) ainda'} else if(feio == 34 ) {var bo = 'É fein, mas tem baum coração'} else if(feio == 35 ) {var bo = 'Tá na média, mas não deixa de ser feii'} else if(feio == 36 ) {var bo = 'Bonitin mas é feio com orgulho'} else if(feio == 37 ) {var bo = 'Feio e preguiçoso(a), vai se arrumar praga feia'} else if(feio == 3 ) {var bo = 'tenho '} else if(feio == 39 ) {var bo = 'Feio, mas um banho E se arrumar, deve resolver'} else if(feio == 40 ) {var bo = 'FeiN,  mas não existe gente feia, existe gente que não conhece os produtos jequity'} else if(feio == 41 ) {var bo = 'você é Feio, mas é legal, continue assim'} else if(feio == 42 ) {var bo = 'Nada que uma maquiagem e se arrumar, que não resolva 🥴'} else if(feio == 43 ) {var bo = 'Feio que dói de ver, compra uma máscara que melhora'} else if(feio == 44 ) {var bo = 'Feio mas nada que um saco na cabeça não resolva né!?'} else if(feio == 45 ) {var bo = 'você é feio, mas tem bom gosto'} else if(feio == 46 ) {var bo = 'Feio mas tem muitos amigos'} else if(feio == 47 ) {var bo = 'Feio mas tem lábia pra pegar várias novinha'} else if(feio == 4 ) {var bo = 'Feio e ainda não annae se vestir, vixi'} else if(feio == 49 ) {var bo = 'Feiooo'} else if(feio == 50 ) {var bo = 'você é Feio, mas não se encherga 🧐'} else if(feio > 51) {var bo = 'você é Feio demais 🙈'} 

anna.sendMessage(from, {image: {url: imgfeio}, caption: `  O quanto você é feio? \n\n 「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱ feio 🙉\n\n${bo}`, mentions: [sender_ou_n], thumbnail:null}, {quoted: sasah})
}, 7000)
break 

case 'corno':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
anna.sendMessage(from, {text:` ❰ Pesquisando a ficha de corno : @${sender_ou_n.split("@")[0]}, aguarde... ❱`, mentions: [sender_ou_n]})
setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
anna.sendMessage(from, {image: {url: imgcorno}, caption: ` O quanto você é corno? \n\n 「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱  corno 🐃`, mentions: [sender_ou_n]}, {quoted: sasah})
}, 7000)
break

case 'vesgo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
anna.sendMessage(from, {text:`❰ Pesquisando a ficha de vesgo : @${sender_ou_n.split("@")[0]}, aguarde... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
anna.sendMessage(from, {image: {url: imgvesgo}, caption: `O quanto você é vesgo? \n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱  Vesgo 🙄😆`, mentions: [sender_ou_n]}, {quoted: sasah})
}, 7000)
break 

case 'bebado':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
anna.sendMessage(from, {text:`❰ Pesquisando a ficha de bebado : @${sender_ou_n.split("@")[0]} , aguarde... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
anna.sendMessage(from, {image: {url: imgbebado}, caption:`O quanto você é bebado? \n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱ Bêbado 🤢🥵🥴`, mentions: [sender_ou_n]}, {quoted: sasah})
}, 7000)
break 

case 'gado':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
anna.sendMessage(from, {text:`❰ Pesquisando a ficha de gado : @${sender_ou_n.split("@")[0]}, aguarde... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
anna.sendMessage(from, {image: {url: imggado}, caption: `O quanto você é gado? \n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱  gado 🐂`, mentions: [sender_ou_n]}, {quoted: sasah})
}, 7000)
break 

case 'gostoso':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
anna.sendMessage(from, {text:` ❰ Pesquisando a sua ficha de gostoso : @${sender_ou_n.split("@")[0]} aguarde... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
anna.sendMessage(from, {image: {url: imggostoso}, caption: `O quanto você é gostoso? 😏\n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱ gostoso 😝`, gifPlayback: true, mentions: [sender_ou_n]}, {quoted: sasah})
}, 7000)
break 

case 'gostosa':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
anna.sendMessage(from, {text:`❰ Pesquisando a sua ficha de gostosa : @${sender_ou_n.split("@")[0]} aguarde... ❱`, mentions: [sender_ou_n]})
 setTimeout(async() => {
random = `${Math.floor(Math.random() * 110)}`
anna.sendMessage(from, {image: {url: imggostosa}, caption: `O quanto você é gostosa? 😏\n\n「 @${sender_ou_n.split("@")[0]} 」Você é: ❰ ${random}% ❱ gostosa 😳`, mentions: [sender_ou_n]}, {quoted: sasah})
}, 7000)
break

case 'morte':
case 'death':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
if (args.length == 0) return await reply(`Está faltando o nome da pessoa! Por exemplo: ${prefix+command} Victor`)
const predea = await axios.get(`https://api.agify.io/?name=${encodeURIComponent(args[0])}`);
if (predea.data.age == null) return await reply(`Você inseriu um nome invalido, certifique-se de inserir um sem acentos, emojis, números e outros.`);
death = `@${sender.split('@')[0]} — Pessoas com este nome citado “${predea.data.name}” tendem a morrer aos ${predea.data.age} anos de idade.`;
anna.sendMessage(from, {video: {url: deathcmd}, gifPlayback: true, caption: death, mentions: [sender]}, {quoted: sasah})
break;				
				
				
case 'matar':
case 'mata':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer matar, a mensagem ou o @')
anna.sendMessage(from, {video: {url: matarcmd}, gifPlayback: true, caption: `Você Acabou de matar o(a) @${menc_os2.split('@')[0]} 😈👹`, mentions: [menc_os2]}, {quoted: sasah})
break 

case 'beijo':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
if(!menc_os2 || menc_jid2[1]) return reply('marque a pessoa que você quer beijar, a mensagem ou o @')
anna.sendMessage(from, {video: {url: beijocmd}, gifPlayback: true, caption: `Você deu um beijo gostoso na(o) @${menc_os2.split('@')[0]} 😁👉👈❤` , mentions: [menc_os2]}, {quoted: sasah})
break

case 'vab':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
psycatgames().then(async (array) => {
setTimeout(() => {reagir(from, "🤔")}, 100)
const { nsfw, questions } = array[Math.floor(Math.random() * array.length)]
const { pergunta1, pergunta2 } = questions[Math.floor(Math.random() * questions.length)]
sendPoll(anna, from, "Você prefere..", [pergunta1, pergunta2])
}).catch(console.error);
break

case 'eununca':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
setTimeout(() => {reagir(from, "🙈")}, 100)
const pergunta_ = JSON.parse(fs.readFileSync('./bunker/armor/funcoes/eununca.json'));
const getRandomINever = pergunta_[Math.floor(Math.random() * pergunta_.length)]
sendPoll(anna, from, getRandomINever, ["Eu nunca", "Eu já"]).catch(console.error);
break

case 'biografia':
try {
var status = await anna.fetchStatus()  
} catch {
var status = "Privado ou inexistente."
}
reply(status)
break

case 'tapa':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
if(!menc_os2 || menc_jid2[1]) return reply('Marque o alvo que você quer da um tapa, a mensagem ou o @')
anna.sendMessage(from, {video: {url: tapacmd}, gifPlayback: true, caption: `Você Acabou de da um tapa na raba da😏 @${menc_os2.split('@')[0]} 🔥`, mentions: [menc_os2]}, {quoted: sasah})
break

case 'chute':
case 'chutar':  
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
if(!menc_os2 || menc_jid2[1]) return reply('marque o alvo que você quer da um chute, a mensagem ou o @')
anna.sendMessage(from, {video: {url: chutecmd}, gifPlayback: true, caption: `Você Acabou de da um chute em @${menc_os2.split('@')[0]} 🤡`, mentions: [menc_os2]}, {quoted: sasah})
break 

case 'dogolpe':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
if(!menc_os2 || menc_jid2[1]) return reply('Marque a mensagem com o comando ou marque o @ do usuário..')
random = `${Math.floor(Math.random() * 100)}`
anna.sendMessage(from, {text:`🚨 Golpista localizado: *@${menc_os2.split("@")[0]}*\n— *Porcentagem de golpe:* ${random}%\n*Aviso:* _Ele(a) gosta de ferir sentimentos.._`, mentions: [menc_os2]})
break

case 'shipo':
if(!menc_jid2) return reply('Marque uma pessoa do grupo para encontrar o par dela')
mention(`*anna's cupida em ação!* - Ihh senti uma *química* bem forte entre eles.. 😅💘\n-\n1️⃣ • @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}\n2️⃣ • O encalhado: ${menc_jid2.split("@")[0]}\n\nEu shippo eles 2 com uma porcentagem de: ${Math.floor(Math.random() * 100)+"%"}`)
break

case 'casal':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(enviar.msg.modobn)
mention(`Tô sentindo que 2 membros *casou no sigilo..* _Vou soltar meus palpites!_️‍ 🙈\nAos 2 indivíduos marcados, *é verdade?*\n-\n1️⃣ *—* @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}\n2️⃣ *—* @${groupMembers[Math.floor(Math.random() * groupMembers.length)].id.split('@')[0]}\n‐\nNão tenho certeza, então tenho que dá a minha *porcentagem de chance:* ${Math.floor(Math.random() * 100)+"%"}`)
break

case 'ranklevel':
case 'rankpatente':
var i3 = countMessage.map(i => i.groupId).indexOf(from)
var blue = countMessage[i3].numbers.map(i => i)
blue.sort((a, b) => ((a.figus == undefined ? a.figus = 0 : a.figus + a.messages + a.cmd_messages + a.figus) < (b.figus == undefined ? b.figus = 0 : b.figus + b.cmd_messages + b.messages + b.figus)) ? 0 : -1)
menc = [] 
blad = `
*🏆 Rank de level e patentes no grupo:* ${groupName}\n`
for ( i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
var i5 = patentes.map(i => i.grupoID).indexOf(from)
var i6 = patentes[i5].usus.map(i => i.id).indexOf(blue[i].id)
if (i != null) blad += `
*🏅 ${i + 1}º Lugar:* @${blue[i].id.split('@')[0]}
Level do usuário atualmente: ${patentes[i5].usus[i6].level_usu}\nPatente atual do usuário: ${patentes[i5].usus[i6].patente_usu}\n`
menc.push(blue[i].id)
}
mentions(blad, menc, true)
break

case 'rankativos': 
case 'rankativo':   
if(!isGroup) return reply(enviar.msg.grupo)
var i3 = countMessage.map(i => i.groupId).indexOf(from)
var blue = countMessage[i3].numbers.map(i => i)
blue.sort((a, b) => ((a.figus == undefined ? a.figus = 0 : a.figus + a.messages + a.cmd_messages) < (b.figus == undefined ? b.figus = 0 : b.figus + b.cmd_messages + b.messages)) ? 0 : -1)
menc = [] 
blad = `
*🏆 Rank dos mais ativos no grupo:* ${groupName}\n`
for ( i = 0; i < (blue.length < 5 ? blue.length : 5); i++) {
var i5 = patentes.map(i => i.grupoID).indexOf(from)
var i6 = patentes[i5].usus.map(i => i.id).indexOf(blue[i].id)
if (i != null) blad += `
*🏅 ${i + 1}º Lugar:* @${blue[i].id.split('@')[0]}
• Mensagens encaminhadas: *${blue[i].messages}*
• Comandos executados: *${blue[i].cmd_messages}*
• Patente do usuário: *${patentes[i5].usus[i6].patente_usu}*
• Usuário conectado em: *${blue[i].aparelho}*
• Figurinhas enviadas: *${blue[i].figus}*\n`
menc.push(blue[i].id)
}
mentions(blad, menc, true)
break

case 'rankinativo':
case 'rankinativos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isGroupAdmins) return reply(enviar.msg.adm)
bule = [];
bule2 = []
mentioned_jid = []
for(cag of countMessage[ind].numbers){
bule2.push(cag.id)
if(cag.messages <= 1){bule.push(cag)}}
bule.sort((a, b) => ((a.messages + a.cmd_messages) < (b.cmd_messages + b.messages)) ? 0 : -1)
boardi = `🗑 *Rank dos mais inativos do grupo:* ${groupName}\n-\n`
if(bule.length == 0)boardi += '❌ Nenhum usuário inativo foi encontrado neste grupo.️'
for ( i = 0; i < (bule.length < 5 ? bule.length : 5); i++) {
if (i != null) boardi += `*🏅 ${i + 1}º Lugar:* @${bule[i].id.split('@')[0]}\n• Mensagens enviadas: *${bule[i].messages}*\n• Comandos executados: *${bule[i].cmd_messages}*\n• Usuário conectado em: *${bule[i].aparelho}*\n\n`
mentioned_jid.push(bule[i].id)
} 
mentions(boardi, mentioned_jid, true)
break

case 'checkativo':
if(!isGroup) return reply(enviar.msg.grupo)
if(groupIdscount.indexOf(from) < 0) return reply('O bot não tem ainda dados sobre o grupo')
var ind = groupIdscount.indexOf(from)
if(!menc_os2 || menc_jid2[1]) return reply('Marque o @ de quem deseja puxar a atividade / Só pode um por vez..')
if(numbersIds.indexOf(menc_os2) >= 0) {
var indnum = numbersIds.indexOf(menc_os2)
var RSM_CN = countMessage[ind].numbers[indnum]
mentions(`Consulta individual da atividade do usuário @${menc_os2.split('@')[0]} no grupo: ${groupName}\n-\n• Mensagens encaminhadas: *${RSM_CN.messages}*\n• Comandos executados: *${RSM_CN.cmd_messages}*\n• Usuário conectado em: *${RSM_CN.aparelho}*\n• Figurinhas encaminhadas: *${RSM_CN.figus}*`, [menc_os2], true)
} else {
mentions(`Consulta individual da atividade do usuário @${menc_os2.split('@')[0]} no grupo: ${groupName}\n-\n• Mensagens enviadas no grupo: *0*\n• Comandos executados no grupo: 0\n• Usuário conectado em: *Sem info.*\nFigurinhas enviadas no grupo: *0*`, [menc_os2], true)
}
break

case 'rankgay': case 'rankgays':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este comando so pode ser utilizado com o comando ${prefix}modobrincadeira 1 ativado, para desativar só basta utilizar ${prefix}modobrincadeira 0`)
ABC = `*🤖RANK DOS 5 MAIS GAYS DO GRUPO [ ${groupName} ]🏳‍🌈*\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkgay)
break;

case 'rankgado': case 'rankgados':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este comando so pode ser utilizado com o comando ${prefix}modobrincadeira 1 ativado, para desativar só basta utilizar ${prefix}modobrincadeira 0`)
ABC = `RANK DOS 5 MAIS GADO DO GRUPO 🐂🐃\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkgado);
break;

case 'rankcorno': case 'rankcornos':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este comando so pode ser utilizado com o comando ${prefix}modobrincadeira 1 ativado, para desativar só basta utilizar ${prefix}modobrincadeira 0`)
ABC = `RANK DOS 5 MAIS CORNO DO GRUPO 🐂\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkcorno);
break;

case 'surubao': case 'suruba':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este comando so pode ser utilizado com o comando ${prefix}modobrincadeira 1 ativado, para desativar só basta utilizar ${prefix}modobrincadeira 0`)
const quantidadeSafados = args.join(' ')
if(!quantidadeSafados) return reply(`Informe por favor a quantidade de pessoas você deseja em sua suruba... *Exemplo:* ${prefix+command} 4`)
emojiskk = ["🥵", "😈", "🫣", "😏"]
emojis = emojiskk[Math.floor(Math.random() * emojiskk.length)]  
frasekk = [`tá querendo relações sexuais a ${quantidadeSafados}, topa?`, `quer que *${quantidadeSafados}* pessoas venham de *chicote, algema e corda de alpinista*.`, `quer que ${quantidadeSafados} pessoas der tapa na cara, lhe chame de cachorra e fud3r bem gostosinho...`]
context = frasekk[Math.floor(Math.random() * frasekk.length)]  
ABC = `${emojis} @${sender.split('@')[0]} ${context}\n\n`
for (var i = 0; i < quantidadeSafados; i++) {
ABC += `@${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n`
}
mencionarIMG(ABC, suruba);
break;

case 'rankgostosos': case 'rankgostoso':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este comando so pode ser utilizado com o comando ${prefix}modobrincadeira 1 ativado, para desativar só basta utilizar ${prefix}modobrincadeira 0`)
ABC = `RANK DOS 5 MAIS GOSTOSOS DO GRUPO 😏🔥\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkgostoso);
break;

case 'ranknazista': case 'ranknazistas':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este comando so pode ser utilizado com o comando ${prefix}modobrincadeira 1 ativado, para desativar só basta utilizar ${prefix}modobrincadeira 0`)
ABC = `*💂‍♂RANK DOS 5 MAIS NAZISTAS DO GRUPO 卐🤡*\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnknazista);
break;

case 'rankotaku': case 'rankotakus':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este comando so pode ser utilizado com o comando ${prefix}modobrincadeira 1 ativado, para desativar só basta utilizar ${prefix}modobrincadeira 0`)
ABC = `*㊙ RANK DOS 5 MAIS OTAKU DO GRUPO ( ˶•̀ _•́ ˶)*\n\n`
for (var i = 0; i < 5; i++) {
ABC += `${Math.floor(Math.random() * 100)}% @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkotaku);
break;

case 'rankpau':
if(!isGroup) return reply(enviar.msg.grupo)
if(!isModobn) return reply(`Este comando so pode ser utilizado com o comando ${prefix}modobrincadeira 1 ativado, para desativar só basta utilizar ${prefix}modobrincadeira 0`)
ABC = `*RANK DOS 5 PAU MAIOR DO GRUPO 📏*\n\n`
TMPAU = ["Pequeno pra cact, se mata maluco 🥴", `Pequenininho chega ser até fofo 🥺`, `Menor que meu dedo mindinho pequeno demais 😑`, `Até que dá sentir, tá na média 😌`, `Grandinho 🥵`, `Grande até `, `Gigantesco igual meu braço 😖`, `Enorme quase chega no útero 🤧`, `Grandão demais em, e uii 🤯`, `Vara de pegar manga, grande demais, como sai na rua assim??`, "Que grandão em, nasceu metade animal 😳"]
for (var i = 0; i < 5; i++) {
ABC += `${TMPAU[Math.floor(Math.random() * TMPAU.length)]} _- @${somembros[Math.floor(Math.random() * somembros.length)].split("@")[0]}\n\n`
}
mencionarIMG(ABC, rnkpau);
break;

case 'mencionar':
if (!q) return reply(`Você usou o comando de forma incorreta, use a correta: ${prefix}mencionar corno`)
if (!isGroup) return reply(`Esta brincadeira só funciona em grupos.`)
if(!isModobn) return reply(enviar.msg.modobn)
d = []
teks = `- Estou mencionando o *${q}* do grupo: `
for(i = 0; i < 1; i++) {
r = Math.floor(Math.random() * groupMetadata.participants.length + 0)
teks += `@${groupMembers[r].id.split('@')[0]}`
d.push(groupMembers[r].id)
}
await mentions(teks, d, true)
break;

case 'jogodavelha':
if(!isGroup) return reply(enviar.msg.grupo)
if(!menc_jid2) return reply("Marque junto com o comando, o @ do usuário que deseja desafiar..")
joguinhodavelhajs.push(sender)
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.push(from)
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
if(fs.existsSync(`./bunker/armor/tictactoe/db/${from}.json`)) {
const boardnow = setGame(`${from}`);
const matrix = boardnow._matrix;
const chatMove = `『 *🎮 Ꮐ̸Ꭺ̸Ꮇ̸Ꭼ̸ Ꭰ̸Ꭺ̸ Ꮩ̸Ꭼ̸Ꮮ̸Ꮋ̸Ꭺ̸ 🕹️* 』\n-\n💢 Alguém está jogando o *jogo da velha* no momento! Por favor, aguarde o término da partida para iniciar a próxima.\n-\n• @${boardnow.X} VS @${boardnow.O}\n-\nSua vez: @${boardnow.turn == "X" ? boardnow.X : boardnow.O}\n-\n${matrix[0][0]}  ${matrix[0][1]}  ${matrix[0][2]}\n${matrix[1][0]}  ${matrix[1][1]}  ${matrix[1][2]}\n${matrix[2][0]}  ${matrix[2][1]}  ${matrix[2][2]}`;
anna.sendMessage(from, {text: chatMove}, {quoted: sasah,
mentions: [
boardnow.X + "@s.whatsapp.net",
boardnow.O + "@s.whatsapp.net",
]});
return;
}
if(argss.length === 1)
return reply(`Jogue com alguém, para inicar a partida : ${prefix + command} @membro.`);
const boardnow = setGame(`${from}`);
console.log(colors.red(time, "red"), colors.magenta("[ JOGO DA VELHA ]"), colors.red(`Iniciado - Sessão: ${boardnow.session}`));
boardnow.status = false;
boardnow.X = sender.replace("@s.whatsapp.net", "");
boardnow.O = argss[1].replace("@", "");
var blabord = [`${boardnow.X}`, `${boardnow.O}`]
fs.writeFileSync(`./bunker/armor/tictactoe/db/${from}.json`,
JSON.stringify(boardnow, null, 2)
);
const strChat = `『 *📌 ᎬՏᏢᎬᎡᎪΝᎠϴ ϴ ϴᏢϴΝᎬΝͲᎬ ⚔️* 』\n-\n@${sender.replace("@s.whatsapp.net", "")} _está te desafiando para uma partida de jogo da velha..._\n_[ ${argss[1]} ] Use *『S』* para aceitar ou *『N』* para não aceitar..._\n-\nEm caso de problemas, marque algum administrador para resetar o jogo com o comando ${prefix}rv`;
b = [sender, menc_jid]
mentions(strChat, b, true)
break

case 'resetarvelha':
case 'resetavelha':  
case 'resetarv':
case 'resetav': 
case 'resetvelha':
case 'rv': 
if(!isJoguin && !isGroupAdmins) return reply(`Fale com quem iniciou o jogo, só ele pode resetar, ou então algum admin.`)
if(fs.existsSync("./bunker/armor/tictactoe/db/" + from + ".json")) {
DLT_FL("./bunker/armor/tictactoe/db/" + from + ".json");
reply(`Jogo da velha resetado com sucesso nesse grupo!`);
joguinhodavelhajs.splice([])
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha.json', JSON.stringify(joguinhodavelhajs))
joguinhodavelhajs2.splice([])
fs.writeFileSync('./bunker/database/usuarios/joguinhodavelha2.json', JSON.stringify(joguinhodavelhajs2))
} else {
reply(`Não a nenhuma sessão em andamento...`);
}
break

case "ppt":
if(args.length < 1) return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
ppt = ["pedra", "papel", "tesoura"]
ppy = ppt[Math.floor(Math.random() * ppt.length)]
ppg = Math.floor(Math.random() * 1) + 10
pptb = ppy
if((pptb == "pedra" && args == "papel") ||
(pptb == "papel" && args == "tesoura") ||
(pptb == "tesoura" && args == "pedra")) {
var vit = "vitoria"
} else if((pptb == "pedra" && args == "tesoura") ||
(pptb == "papel" && args == "pedra") ||
(pptb == "tesoura" && args == "papel")) {
var vit = "derrota"
} else if((pptb == "pedra" && args == "pedra") ||
(pptb == "papel" && args == "papel") ||
(pptb == "tesoura" && args == "tesoura")) {
var vit = "empate"
} else if(vit = "undefined") {
return reply(`Você deve digitar ${prefix}ppt pedra, ${prefix}ppt papel ou ${prefix}ppt tesoura`)
}
if(vit == "vitoria") {
var tes = "Vitória do jogador"
}
if(vit == "derrota") {
var tes = "A vitória é do BOT"
}
if(vit == "empate") {
var tes = "O jogo terminou em empate"
}
reply(`${NomeDoBot} jogou: ${pptb}\nO jogador jogou: ${args}\n-\n${tes}`)
break

case 'anagrama':
if (!isGroup) return reply(enviar.msg.grupo) 
if (!isGroupAdmins) return reply('Somente adms!')
if(!isModobn) return reply(enviar.msg.modobn)
const anaaleatorio = Math.floor(Math.random() * palavrasANA.length)
if(args.length == 0) return reply('Use 1 para ativar o jogo do anagrama, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./bunker/armor/games/anagrama/${from}.json`)) {
let dataAnagrama2 = JSON.parse(fs.readFileSync(`./bunker/armor/games/anagrama/${from}.json`))
reply(`O jogo já foi iniciado neste grupo:
Anagrama: ${dataAnagrama2.embaralhada}
Uma dica: ${dataAnagrama2.dica}
`)} else {
fs.writeFileSync(`./bunker/armor/games/anagrama/${from}.json`, `${JSON.stringify(palavrasANA[anaaleatorio])}`)
anna.sendMessage(from, {text: `╭━━ ⪩「 Descubra a palavra 」
▢ ⌁ ⚠︎ Anagrama: ${palavrasANA[anaaleatorio].embaralhada}
▢ ⌁ ⚠︎ Dica: ${palavrasANA[anaaleatorio].dica}
╰━━━ ⪨`})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./bunker/armor/games/anagrama/${from}.json`)) return reply('Não tem como desativar o jogo do anagrama pôs ele não foi ativado')
fs.unlinkSync(`./bunker/armor/games/anagrama/${from}.json`)
reply("Desativado com sucesso.")
}
break

case 'quizanimais':
if (!isGroup) return reply(enviar.msg.grupo) 
if (!isGroupAdmins) return reply('Somente adms!')
if(!isModobn) return reply(enviar.msg.modobn)
const animaisquiz = Math.floor(Math.random() * quizanimais.length)
if(args.length == 0) return reply('Use 1 para ativar o quiz animais, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./bunker/armor/games/quiz-animais/${from}.json`)) {
superrttrr = JSON.parse(fs.readFileSync(`./bunker/armor/games/quiz-animais/${from}.json`))
imagemtexto = `╭━━ ⪩ 「 Descubra o animal 」
▢ ⌁ ⚠︎ *Jogador:* ${pushname}
╰━━━ ⪨`
wew = await getBuffer(`${superrttrr.foto}`)   
await anna.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: sasah})
} else {
fs.writeFileSync(`./bunker/armor/games/quiz-animais/${from}.json`, `${JSON.stringify(quizanimais[animaisquiz])}`)
imagemtexto = `╭━━ ⪩ 「 Descubra o animal 」
▢ ⌁ ⚠︎ *Jogador:* ${pushname}
╰━━━ ⪨`
wew = await getBuffer(`${quizanimais[animaisquiz].foto}`)  
await anna.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: sasah})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./bunker/armor/games/quiz-animais/${from}.json`)) return reply('Não tem como desativar o jogo pôs ele não foi ativado')
fs.unlinkSync(`./bunker/armor/games/quiz-animais/${from}.json`)
reply("Desativado com sucesso.")
}
break

case 'gartic': // Victor Developer - anna
if (!isGroup) return reply(enviar.msg.grupo) 
if (!isGroupAdmins) return reply('Somente adms!')
if(!isModobn) return reply(enviar.msg.modobn)
const garticquiz = Math.floor(Math.random() * garticArchives.length)
if(args.length == 0) return reply('Use 1 para ativar o gartic, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./bunker/armor/games/gartic/${from}.json`)) {
dataGartic2 = JSON.parse(fs.readFileSync(`./bunker/armor/games/gartic/${from}.json`))
imagemtexto = `👩🏼‍🏫 - A resposta é representada por um(a): ${dataGartic2.pergunta}
📜 - A resposta supostamente começa com a(s) letra(s): "${dataGartic2.letra_inicial}"
🤔 - Hmmm, contém traços? ${dataGartic2.contem_traços}

❓️ - *Não annae a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}Revelar_resposta* para revelar a resposta correta da afirmação._`
wew = await getBuffer(`${dataGartic2.imagem}`)  
await anna.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: sasah})
} else {
fs.writeFileSync(`./bunker/armor/games/gartic/${from}.json`, `${JSON.stringify(garticArchives[garticquiz])}`)
imagemtexto = `👩🏼‍🏫 - A resposta é representada por um(a): ${garticArchives[garticquiz].pergunta}
📜 - A resposta supostamente começa com a(s) letra(s): "${garticArchives[garticquiz].letra_inicial}"
🤔 - Hmmm, contém traços? ${garticArchives[garticquiz].contem_traços}

❓️ - *Não annae a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}Revelar_resposta* para revelar a resposta correta da afirmação._`
wew = await getBuffer(`${garticArchives[garticquiz].imagem}`)  
await anna.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: sasah})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./bunker/armor/games/gartic/${from}.json`)) return reply('Não tem como desativar o gartic pôs ele não foi ativado.')
fs.unlinkSync(`./bunker/armor/games/gartic/${from}.json`)
reply("Desativado com sucesso.")
}
break

case 'enigma': // Victor Developer - anna
if (!isGroup) return reply(enviar.msg.grupo) 
if (!isGroupAdmins) return reply('Somente adms!')
if(!isModobn) return reply(enviar.msg.modobn)
const engimaSolu = Math.floor(Math.random() * enigmaArchive.length)
if(args.length == 0) return reply('Use 1 para ativar o enigma, ou seja, para desativar utilize o valor numérico 0')
if (args.join(' ') === '1') {
if(fs.existsSync(`./bunker/armor/games/enigma/${from}.json`)) {
anna_anna_ENI = JSON.parse(fs.readFileSync(`./bunker/armor/games/enigma/${from}.json`))
imagemtexto = `📜 - Resolva o seguinte enigma abaixo:

${anna_anna_ENI.charada}

❓️ - *Não annae a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}Revelar_enigma* para revelar a resposta correta da enigma._`
wew = await getBuffer(`https://telegra.ph/file/15be608763684b3e3af38.jpg`)  
await anna.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: sasah})
} else {
fs.writeFileSync(`./bunker/armor/games/enigma/${from}.json`, `${JSON.stringify(enigmaArchive[engimaSolu])}`)
imagemtexto = `📜 - Resolva o seguinte enigma abaixo:

${enigmaArchive[engimaSolu].charada}

❓️ - *Não annae a resposta?* _Peça ao adm do grupo para usar o comando *${prefix}Revelar_enigma* para revelar a resposta correta da enigma._`
wew = await getBuffer(`https://telegra.ph/file/15be608763684b3e3af38.jpg`)  
await anna.sendMessage(from, {image: wew, caption: imagemtexto, thumbnail: wew}, {quoted: sasah})
}
} else if (args.join(' ') ==='0') {
if(!fs.existsSync(`./bunker/armor/games/enigma/${from}.json`)) return reply('Não tem como desativar o enigma pôs ele não foi ativado.')
fs.unlinkSync(`./bunker/armor/games/enigma/${from}.json`)
reply("Desativado com sucesso.")
}
break

case 'revelarresposta': 
case 'revelar_resposta':  
if (!isGroupAdmins) return reply('Somente adms!')
let dataAnagramaa = JSON.parse(fs.readFileSync(`./bunker/armor/games/gartic/${from}.json`))
reply(`👤 Olá *${pushname}*, a resposta correta da afirmação era: ${dataAnagramaa.resposta}\n📍 Envie a resposta apresentada acima para passar a próxima..`)
break

case 'revelarenigma':
case 'revelar_enigma':  
if (!isGroupAdmins) return reply('Somente adms!')
let enifmaaaaaa = JSON.parse(fs.readFileSync(`./bunker/armor/games/enigma/${from}.json`))
reply(`👤 Olá *${pushname}*, a resposta correta do enigma era: ${enifmaaaaaa.respostaEne}\n📍 Envie a resposta apresentada acima para passar a próxima..`)
break

case 'icms':
txt = q.replace(" |", "|").replace("| ", "|").replace(" | ", "|")
var [result1, result2] = txt.split("|")
if(!q.includes("|")) return reply(mess.syntaxIcms(prefix))
await fetchJson(APIs.Site1 + `/api/icms?valor=${encodeURIComponent(result1)}&ddd=${encodeURIComponent(result2)}&apikey=` + apikey_kita).then(data => {
anna.sendMessage(from, {text: mess.icmsResult(data)}, {quoted: sasah})
}).catch(e => {
return reply(mess.error())
})
break

case 'cassino':
reply(`Olá ${pushname} - Aguarde 9 segundos para sair o resultado da roleta..`)
const soto = ['🍊 : 🍒 : 🍐', '🍒 : 🔔 : 🍊', '🍇 : 🍇 : 🍇', '🍊 : 🍋 : 🔔', '🔔 : 🍒 : 🍐', '🔔 : 🍒 : 🍊', '🍊 : 🍋 : 🍊', '🍐 : 🍒 : 🍋', '🍐 : 🍐 : 🍐', '🍊 : 🍒 : 🍒', '🔔 : 🔔 : 🍇', '🍌 : 🍒 : 🔔', '🍐 : 🔔 : 🔔', '🍊 : 🍋 : 🍒', '🍋 : 🍋 : 🍌', '🔔 : 🔔 : 🍇', '🔔 : 🍐 : 🍇', '🔔 : 🔔 : 🔔', '🍒 : 🍒 : 🍒', '🍌 : 🍌 : 🍌']		  
const somtoy2 = sotoy[Math.floor(Math.random() * sotoy.length)]
if((somtoy2 == '🥑 : 🥑 : 🥑') ||(somtoy2 == '🍉 : 🍉 : 🍉') ||(somtoy2 == '🍓 : 🍓 : 🍓') ||(somtoy2 == '🍎 : 🍎 : 🍎') ||(somtoy2 == '🍍 : 🍍 : 🍍') ||(somtoy2 == '🥝 : 🥝 : 🥝') ||(somtoy2 == '🍑 : 🍑 : 🍑') ||(somtoy2 == '🥥 : 🥥 : 🥥') ||(somtoy2 == '🍋 : 🍋 : 🍋') ||(somtoy2 == '🍐 : 🍐 : 🍐') ||(somtoy2 == '🍌 : 🍌 : 🍌') ||(somtoy2 == '🍒 : 🍒 : 🍒') ||(somtoy2 == '🔔 : 🔔 : 🔔') ||(somtoy2 == '🍊 : 🍊 : 🍊') ||(somtoy2 == '🍇 : 🍇 : 🍇')) {
var Vitória = "Canta comigo é o brazzino... *Você ganhou! Parabéns amigo!*"
} else {
var Vitória = "*Você perdeu..* Que pena! Não desista, tente novamente."
}
setTimeout(async function () {
const cassino = `Depois de 9 segundos passados, aqui está o resultado da roleta, vamos ver?
*➬ Resultado da Roleta -* ${somtoy2}

${Vitória}`
msgSemQuoted(cassino)
}, 9000)
break

//==(AUDIOS/DE-MUSICA/ZOUEIRA/ETC..)===\\

case 'bot':
const soundft = await fetch(qviado).then(v => v.buffer())
anna.sendMessage(from, {audio: soundft, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
break

//=======================================\\

//=====(ALTERADOR-DE-AUDIO/VIDEO)=======\\

case 'videocontrario':
case 'reversevid':
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) { 
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
anna.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break 

case 'videolento':
case 'slowvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(enviar.espere) 
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=2*PTS[v];[0:a]atempo=0.5[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
anna.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: sasah })
DLT_FL(ran)
})
} else {
reply("Marque um vídeo..")
}
break

case 'videorapido':
case 'fastvid':  
if((isMedia && info.message.videoMessage || !isQuotedImage) && !q.length <= 1) {
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
DLT_FL(media)
if(err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
anna.sendMessage(from, {video: buffer453, mimetype: 'video/mp4'}, {quoted: sasah })
DLT_FL(ran)
})	
} else {
reply("Marque o vídeo..")
}
break

case 'grave2':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
anna.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'grave':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
anna.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'adolesc':
case 'vozmenino':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
anna.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break  

case 'tomp3':
if((isMedia && !info.message.imageMessage || isQuotedVideo)) {
post = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo.message.imageMessage : info.message.videoMessage
reply(enviar.espere)
encmedia = isQuotedVideo ? info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage : info.message.videoMessage
rane = getRandom('.'+await getExtension(encmedia.mimetype))
buffimg = await getFileBuffer(encmedia, 'video')
fs.writeFileSync(rane, buffimg)
media = rane 
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => { 
DLT_FL(media)
if(err) return reply('Ocorreu uma falha ao fazer a conversão do vídeo para mp3.')
buffer = fs.readFileSync(ran)
anna.sendMessage(from, {audio: buffer, mimetype: 'audio/mpeg'}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o vídeo para transformar em áudio por favor..")
}
break

case 'bass3':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
anna.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=20:width_type=o:width=2:g=15 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
anna.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'bass2': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
anna.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'estourar': 
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -af equalizer=f=90:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
anna.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break

case 'fast':
case 'audiorapido':  
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Erro')
hah = fs.readFileSync(ran)
anna.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'esquilo':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.7,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
anna.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio...")
}
break

case 'audiolento': 
case 'slow':
if((isMedia && !info.message.imageMessage && !info.message.videoMessage || isQuotedAudio)) {
reply(enviar.espere)
muk = isQuotedAudio ? info.message.extendedTextMessage.contextInfo.quotedMessage.audioMessage : info.message.audioMessage
rane = getRandom('.'+await getExtension(muk.mimetype))
buffimg = await getFileBuffer(muk, 'audio')
fs.writeFileSync(rane, buffimg)
gem = rane
ran = getRandom('.mp3')
exec(`ffmpeg -i ${gem} -filter:a "atempo=0.9,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
DLT_FL(gem)
if(err) return reply('Ocorreu um erro ao adicionar o *efeito sonoro* no áudio.')
hah = fs.readFileSync(ran)
anna.sendMessage(from, {audio: hah, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
DLT_FL(ran)
})
} else {
reply("Marque o áudio..")
}
break



//==========(EFEITOS-MARCAR)==========\\

case 'togif':
if(!isQuotedSticker) return reply('Marque a figurinha animada!')
try {
if((isMedia && !info.message.videoMessage || isQuotedSticker) && !q.length <= 1) {
buff = await getFileBuffer(info.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage, 'sticker')
reply('Aguarde, estou convertendo a figurinha para o formato gif.')
a = await webp_mp4(buff)
anna.sendMessage(from, {video: {url: a}, gifPlayback: true, fileName: `stick.gif`}, {quoted: sasah}).catch(e => {
reply("Erro ao realizar o envio do sticker!") 
})
DLT_FL(buff)
}
} catch {
reply(mess.error())
}
break

case 'convite':
if(!budy.includes("chat.whatsapp.com")) return reply("Cadê o link do grupo que você deseja que eu entre?")  
cnvt = args.join(" ")
reply(`O convite para o bot entrar em seu grupo, foi enviado, espere o dono aceitar..`)
anna.sendMessage(nmrdn, {text: mess.groupInvitation(sender, cnvt, prefix)}, {quoted: info})
break

case 'recusar':
if(!SoDono) return reply(enviar.msg.donosmt)
anna.sendMessage(`${q}@s.whatsapp.net`, {text: `Olá amigo(a), sinto muito dizer, mas seu convite foi recusado.`})
break

case 'join': case 'entrar':
if(!SoDono) return reply(enviar.msg.donosmt)
string = args.join(' ')
if(!string) return reply('Insira um link de convite ao lado do comando.')
if(string.includes('chat.whatsapp.com/') || reply('Ops, verifique o link que você inseriu.') ) {
link = string.split('app.com/')[1]
try {
anna.groupAcceptInvite(`${link}`)
} catch(erro) {
if(String(erro).includes('resource-limit') ) {
reply('O grupo já está com o alcance de 257 membros.')
}
if(String(erro).includes('not-authorized') ) {
reply('Não foi possível entrar no grupo.\nMotivo: Banimento.')
}
}
}
break

case 'sip': case 'ip': 
if (!q) return reply(`Informe o ip que você deseja! *Exemplo:* ${prefix+command} 8.8.8.8`)
try {
ip = await axios.get(`https://ipwhois.app/json/${encodeURIComponent(q)}`);
anna.sendMessage(from, {image: {url: `https://maps.googleapis.com/maps/api/streetview?size=1400x1400&location=${ip.data.latitude},%20${ip.data.longitude}&sensor=false&key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg`}, caption: mess.searchIpAdress(ip)})
anna.sendMessage(from, {location: {degreesLatitude: ip.data.latitude,degreesLongitude: ip.data.longitude, addrees: ''}})
} catch {
reply(mess.error())
}
break

case 'cep': case 'scep': 
var query = args.join(" ")
if (!query) return reply(`Cadê o cep?`)
try {
res = await fetchJson(APIs.Site1 + `/api/cep?code=${query}&apikey=` + apikey_kita)
reply(mess.searchCep(res))
} catch {
reply(`❌️ Erro ao consultar! ❌`)
}
break

case 'bins-db':
var textinho = args.join(" ")
if (!textinho) return reply(`> CADE A BIN PRA CONSULTAR??, 🤷‍`)
const binSearch = textinho;
const list = fs.readFileSync('./library/bins.csv', 'utf8').split('\n');
    let found = false;

    for (const string of list) {
        const [bin, bandeira, banco, nivel, pais, tipo] = string.split('|');

        reply(`bin: ${bin}`)
        }
    

    if (!found) {
        return reply('Bin Não Encontrada')
    }
    break

case "cpf":
case "cpf1":
case "cpf2":
case "cpf3":
case "cpf4":
case 'score':
case 'vacina': try {
if(!q) return reply(`Digite um cpf para realizar a consulta`)
var comandinhoconsulta = command == "cpf" ? "cpf1" : command
var requestconsulta = q.replaceAll(".", "").replaceAll("-", "")
regex = /^\d{11}$/;
if(!regex.test(requestconsulta)) return reply(`Digite um cpf valido para realizar a consulta`)
await reply(`Estou realizando a consulta, aguarde um momento...`)
await consulta(comandinhoconsulta, requestconsulta)
} catch(e) {
await reply(`Ocorreu um erro ao realizar a consulta de cpf\n\nErro: ${String(e)}`)
}async function consulta(comando, request) {
try {
zzz = await fetch(`https://hh-consultas2.onrender.com/api/all?tipo=${comando}&q=${request}`);
bbb = await zzz.json();
        let arrayResultados = [];
        let lines = bbb.resultado.trim().split("\n");
        
        lines.forEach(line => {
            let [key, value] = line.split(":");
            if (key && value) {
                arrayResultados.push({ a: key.trim(), b: value.trim() });
            }
        });
if(arrayResultados.length > 1) {
let textconsulta = `🔍 *CONSULTA DE ${comando.toUpperCase()}* 🔎\n`;
textconsulta += bbb.resultado
textconsulta += `\n\nBot: Kitagawa Consultas\nUsuario: ${pushname}`;
reply(textconsulta)
} else {
reply(`⚠️ *NAO ENCONTRADO* ⚠️`)
}
} catch(e) {
return String(e)
}
}
break

case 'nome':
case 'nome2':
case 'nome1': try {
if(!q) return reply(`Digite um nome para realizar a consulta`)
var comandinhoconsulta = command == "nome1" ? "nome" : command
if(!q.includes(" ")) return reply(`Digite pelo menos o primeiro sobrenome`)
await reply(`Estou realizando a consulta, aguarde um momento`)
await consulta(comandinhoconsulta, q.normalize('NFD').replace(/[\u0300-\u036f]/g, ""))
} catch(e) {
await reply(`Ocorreu um erro ao realizar a consulta de nome\n\nErro: ${String(e)}`)
}
break

case "tel":
case "tel1":
case "tel2":
case "tel3": try {
if(!q) return reply(`Digite um numero para realizar a consulta`)
var comandinhoconsulta = command == "tel" ? "tel1" : command
var requestconsulta = q.replaceAll(" ", "").replaceAll("-", "").replaceAll("+", "")
regex = /^\d{11}$/;
if(!regex.test(requestconsulta)) return reply(`Digite um numero valido para realizar a consulta`)
await reply(`Estou realizando a consulta, aguarde um momento...`)
await consulta(comandinhoconsulta, requestconsulta)
} catch(e) {
await reply(`Ocorreu um erro ao realizar a consulta de telefone\n\nErro: ${String(e)}`)
}
break

case 'placa':
case 'placa2':
case 'placa1': try {
if(!q) return reply(`Digite uma placa`)
var comandinhoconsulta = command == "placa1" ? "placa" : command
var requestconsulta = q.replaceAll(" ", "").replaceAll("-", "").replaceAll(".", "")
regex = /^\d{7}$/;
if(!regex.test(requestconsulta)) return reply(`Digite uma placa valida para realizar a consulta`)
await reply(`Estou realizando a consulta, aguarde um momento...`)
await consulta(comandinhoconsulta, requestconsulta)
} catch(e) {
await reply(`Ocorreu um erro ao realizar a consulta de placa\n\nErro: ${String(e)}`)
}
break

case 'cnpj':
case 'cnpj1':
case 'cnpj2': try {
if(!q) return reply(`Digite um cnpj para realizar a consulta`)
var comandinhoconsulta = command == "cnpj2" ? "cnpj1" : command
var requestconsulta = q.replaceAll("/", "").replaceAll("-", "").replaceAll(".", "")
regex = /^\d{14}$/;
if(!regex.test(requestconsulta)) return reply(`Digite um cnpj valido para realizar a consulta`)
await reply(`Estou realizando a consulta, aguarde um momento...`)
await consulta(comandinhoconsulta, requestconsulta)
} catch(e) {
await reply(`Ocorreu um erro ao realizar a consulta de cnpj\n\nErro: ${String(e)}`)
}
break 


case 'email': 
if (!q) return reply(`*Exemplo:* ${prefix+command} anna@gmail.com`)
reply(`Consultando... Aguarde *5s* para ser enviado o resultado!`)
anu = await fetchJson(`http://consultas.annaapis.tech/puxar?type=api_email&q=${q}&apikey=`+TOKEN_CONSULTAS)
anna.sendMessage(from, {text: anu.resultado}, {quoted: sasah}).catch(e => {
reply(mess.error()) 
})
break

case 'site': 
if (!q) return reply(`*Exemplo:* ${prefix+command} annaapis.tech`)
reply(`Consultando... Aguarde *5s* para ser enviado o resultado!`)
anu = await fetchJson(`http://consultas.annaapis.tech/puxar?type=cnslt-site&q=${q}&apikey=`+TOKEN_CONSULTAS)
anna.sendMessage(from, {text: anu.resultado}, {quoted: sasah}).catch(e => {
reply(mess.error()) 
})
break

case 'rg': 
if (!q) return reply(`*Exemplo:* ${prefix+command} número do rg`)
reply(`Consultando... Aguarde *5s* para ser enviado o resultado!`)
anu = await fetchJson(`http://gleysonapi.store:2045/gleysonApis/${command}/${q}`)
anna.sendMessage(from, {text: anu.resultado}, {quoted: sasah}).catch(e => {
reply(mess.error()) 
})
break

case 'bin': 
if (q.length < 6 || q.length > 6) return reply(`O bin informado está inválido, insira um com o máximo de 6 dígitos.`)
if (!q) return reply(`*Exemplo:* ${prefix+command} 000000`)
reply(`Consultando... Aguarde *5s* para ser enviado o resultado!`)
anu = await fetchJson(`http://consultas.annaapis.tech/puxar?type=api_bin&q=${q}&apikey=`+TOKEN_CONSULTAS)
await anna.sendMessage(from, {text: anu.resultado}, {quoted: sasah}).catch(e => {
reply(mess.error()) 
})
break

case 'gbuzon':
textobuzon = "• ```Números gerados com sucesso:```\n*Obs:* Os números são gerados de forma aleatória, então alguns não podem estar disponíveis no WhatsApp.\n-\n"
for (let i = 0; i < args[1]; i++) {
const numerobuzon = args[0].replace(/x/g, () => Math.floor(Math.random() * 10));
textobuzon += "   ```Número:``` wa.me/"+numerobuzon+"\n-\n"
}
await reply(textobuzon)
break

case 'add_key': 
if (!SoDono) return reply(enviar.msg.donosmt)
txt = q.replace(" |", "|").replace("| ", "|").replace(" | ", "|")
var [akey, limit] = txt.split("|")
if(!q.includes("|")) return reply(`Olá chefinho, parece que você está usando o comando de forma errada!\n  • Exemplo: *${prefix}add_key [apikey|limite]*`)
try {
sb_ = await fetchJson(APIs.Site1 + `/db/adicionar-apikey?apikey=${encodeURI(akey)}&request=${Number(limit)}&senha=G_D_V`)
reply(sb_.message)
} catch(e) {
console.error(e)
}
break

case 'rm_key': 
if (!SoDono) return reply(enviar.msg.donosmt)
if (!q) return reply(`Me fale qual é a apikey que você deseja remover?\n  • Exemplo: *${prefix}rm_key [apikey desejada]*`)
try {
sb_ = await fetchJson(APIs.Site1 + `/db/remover-apikey?apikey=${encodeURI(q)}&senha=G_D_V`)
reply(sb_.message)
} catch(e) {
console.error(e)
}
break

case 'list_key':
if (!SoDono) return reply(enviar.msg.donosmt)
ABC = await fetchJson(APIs.Site1 + `/db/lista-apikeys?senha=G_D_V`)
RST = `• Total de apikeys armazenadas na dabatase: *${ABC.length}*\n• Aqui está a lista detalhadas sobre as apikey criadas pelo meu proprietário.\n—\n`
RST += `${ABC.map(v => `• Apikey: *${v?.apikey}*\n• Limite de Requisições: *${v?.request}*`).join('\n—\n')}`
await anna.sendMessage(sender, {text: RST}, {quoted: sasah})
break

case 'list_ip':
if (!SoDono) return reply(enviar.msg.donosmt)
ABC = await fetchJson(APIs.Site1 + `/db/lista-ip?senha=G_D_V`)
RST = `• Total de apikeys armazenadas na dabatase de ip(s): *${ABC.length}*\n• Aqui está a lista detalhadas sobre os ip acessado(s) pelo usuários destinados de cada apikey.\n—\n`
RST += `${ABC.map(v => `• Apikey: *${v?.key}*\n• Endereço(s) IP: *${v.IP}*`).join('\n—\n')}`
await anna.sendMessage(sender, {text: RST}, {quoted: sasah})
break

//=======(FIM-EFEITOS-MARCAR)=========\\

default:

//===(CRÉDITOS : anna CONTEÚDOS)==\\

if(isGroup && isBotGroupAdmins && !isGroupAdmins) {
if(isAntiCtt || Antiloc || isAnticatalogo) {
if(type === 'contactMessage' || type === 'contactsArrayMessage' || type === 'locationMessage' || type === 'productMessage') {
if(isGroupAdmins) return anna.sendMessage(from, {text: mess.antisRandomMessage()}, {quoted: info})
if(IS_DELETE) {
setTimeout(() => {
anna.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return
anna.groupParticipantsUpdate(from, [sender], 'remove')
clear = `🗑${"\n".repeat(255)}🗑️\n❲❗❳ *Lɪᴍᴘᴇᴢᴀ ᴅᴇ Cʜᴀᴛ Cᴏɴᴄʟᴜɪᴅᴀ* ✅`
anna.sendMessage(from, {text: clear, contextInfo : { forwardingScore: 500, isForwarded:true}})
anna.sendMessage(from, {text: 'Reporte aos adminstradores do grupo sobre o ocorrido.', mentions: groupAdmins})
}}}

if(isGroup && isAntiFlood && !SoDono && !isPremium && !isnit && isBotGroupAdmins && !isGroupAdmins && !isBot) { 
if(isLimitec == null){
var limitefl = limitefll.limitefl
} else {
var limitefl = isLimitec
}
if(budy.length >= limitefl){
setTimeout( () => {
return reply(mess.charactersAnti())
console.log(colors.red('Deram spam de caracteres..'))
}, 100)
setTimeout(async () => {
if(IS_DELETE) {
setTimeout(() => {
anna.sendMessage(from, { delete: { remoteJid: from, fromMe: false, id: info.key.id, participant: sender}})
}, 500)
}
if(!JSON.stringify(groupMembers).includes(sender)) return  
anna.groupParticipantsUpdate(from, [sender], 'remove')
}, 1000)
}
}

//INICIO DE COMANDOS SEM PREFIXO
switch(testat){
}

const EnvAudio_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
anna.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mpeg", ptt:true})
}}}

const EnvAudio2_SMP = async (direcao, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
anna.sendMessage(from, {audio: {url: direcao}, mimetype: "audio/mpeg", ptt:true})
}}}

const EnvTXT_SMP = async (texto, nome1, nome2, nome3, nome4, nome5) => {
bla = [nome1, nome2, nome3, nome4, nome5]
for ( i of bla) {
if(i == undefined) return  
if(messagesC.includes(i)) {
anna.sendMessage(from, {text: texto})
}}}

const EnvAudio2_GTTS = async (lingua, texto, txt1, txt2, txt3, txt4, txt5) => {
bla = [txt1, txt2, txt3, txt4, txt5]
for ( i of bla) {
if(i == undefined) return
if(budy2.includes(i)) {
var gtt = require('./bunker/armor/funcoes/gtts')(lingua)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
gtt.save(ranm, texto, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
DLT_FL(ranm)
buffer = fs.readFileSync(rano)
anna.sendMessage(from, {audio: buffer, ptt:true}, {quoted: sasah})
DLT_FL(rano)
})
})
}}}

var hora_sla = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

EnvAudio2_GTTS("pt", `São ${hora_sla} da ${tempo.split(" ")[1]}`, "que horas sao?")
/*
if(budy2.includes("prefixo")) {
reply(mess.thinkingPrefix(pushname, prefix))  
}
*/

if(isAutorepo) {
if(budy2 === "bot") {
reply(mess.chamandoBot(pushname, tempo))  
}
 
if(budy2.includes("bot corno")){
if(info.key.fromMe) return 
reply("Corno é você, seu animal")
}

if(budy2.includes("adivinha meu celular") || budy2.includes("bot qual meu celular")){
anna.sendMessage(from, {text: adivinha}, {quoted: sasah})
}

if(budy2.includes("boa noite")){
tujuh = await fetch(boa_noite).then(v => v.buffer())
await anna.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
}

if(budy2.includes("boa tarde")){
tujuh = await fetch(boa_tarde).then(v => v.buffer())
await anna.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
}

if(budy2.includes("bom dia")){
tujuh = await fetch(bom_dia).then(v => v.buffer())
await anna.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
}

if(budy2.includes("corno")){
tujuh = await fetch(corno).then(v => v.buffer())
await anna.sendMessage(from, {audio: tujuh, mimetype: 'audio/mpeg', ptt:true}, {quoted: sasah})
}
}

if(messagesC.includes('exec')) {
if(!SoDono && !isnit && !issupre && !ischyt) return
try{
paramsQuoted = info.message.extendedTextMessage.contextInfo.quotedMessage.conversation || info.message.extendedTextMessage.contextInfo.quotedMessage.extendedTextMessage.text;	
return eval(`${paramsQuoted}`)
console.log(`[EXEC]~> ${paramsQuoted}`)
}catch(e){
reply(e)
}
}

//=========[--ANTI PALAVRÃO --]==========\\
if(isGroup && isPalavrao && isBotGroupAdmins) {
if(dataGp[0].antipalavrao.palavras.indexOf(budy2) >= 0) {
if(!isGroupAdmins) {
 anna.sendMessage(from, {text: `Sem palavrão ou palavras ofensivas aqui!`}, {quoted: info})       
setTimeout( () => {
if(!JSON.stringify(groupMembers).includes(sender)) return  
anna.groupParticipantsUpdate(from, [sender], 'remove')
}, 2000)
setTimeout( () => {
anna.sendMessage(from, {text: mess.removeUserAntiPlvr()}, {quoted : info}).catch(e => {
anna.sendMessage(from, {text: mess.permissionDenied_rUser()}, {quoted : info})
})       							
}, 200)
} else {
return reply(`Você tem permissão, por causa você é adm ${pushname}.`)
}
}
}

 //===============(SIMIH-1)===============\\
    
if (isGroup && isSimi && budy != undefined) {
if(type == 'imageMessage') return 
if(type == 'audioMessage') return 
if(type == 'stickerMessage') return   
if(info.key.fromMe) return 
muehe = await simih(budy)
anna.sendMessage(from, {text: muehe}, {quoted: info}).catch(e => {
reply("Não entendi! Por favor, me explique!") 
})
}


if (isSimi2 && !isCmd && isGroup) {
if (type == 'conversation' || type == 'extendedTextMessage') {
if (info.key.fromMe) return
if (type == 'extendedTextMessage' && prefix.includes(info.message.extendedTextMessage.contextInfo.quotedMessage.conversation[0])) return
insert(type, info)
const sami = await response(budy)
if (sami) anna.sendMessage(from, {text: sami}, {quoted: info})
}
}

//========================================\\

hora2 = moment.tz('America/Sao_Paulo').format('HH:mm:ss');

if(isCmd) {
uptime = process.uptime() 
anna.sendMessage(from, {text: mess.commandNotFound(tempo, prefix), contextInfo: {externalAdReply: {title: `Bot: ${NomeDoBot}`, body: `Olá ${pushname}, comando não existente no sistema.`, thumbnail: await getBuffer(thumbnail), mediaType: 1, sourceUrl: APIs.Site1 + ``}}, mentions: [sender]}, {quoted: info}) 
}
//========================================\\
}


}
}
msgupsrt().catch(async(e) => {
if(JSON.stringify(e).includes(API_KEY_anna)) {
return console.log("A api caiu ou não foi possivel executar esta ação., espere retornar")   
} else if(String(e).includes("Erro: aborted")) {
file = require.resolve("./anna-call.js")  
delete require.cache[file]
require(file)
} else {
return console.log(e)
}
})
}
}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(colors.red(`Alterações salvas - '${__filename}'`))
delete require.cache[file]
require(file)
})

iniciaranna().catch(async(e) => {
console.log(colors.red("Erro apresentado no arquivo: './index.js' - Error: "+e))
})