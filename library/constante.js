/*//ESSA BASE FOI CONSTRUÍDA, NO INTUITO DE OBTER A MELHOR PERFORMANCE DE SEUS BOT, NÃO UMA BASE PÚBLICA ENTT NAO VAZEM E NEM VENDAM SEM A MINHA AUTORIZAÇÃO
 ® COPYRIGHT BY GLEYSON BOTS*/
const { 
'default': makeWASocket,downloadContentFromMessage, fetchLatestBaileysVersion, useMultiFileAuthState, makeInMemoryStore, DisconnectReason, WAGroupMetadata, relayWAMessage, MediaPathMap, mentionedJid, processTime, MediaType, Browser, MessageType, Presence, Mimetype, Browsers, delay, MessageRetryMap } = require('@whiskeysockets/baileys');

// Módulos:
const { Boom }  = require('@hapi/boom');
const axios = require('axios');
const fs = require('fs-extra');
const cheerio = require('cheerio');
const crypto = require('crypto');
const util = require('util');
const PhoneNumber = require('awesome-phonenumber');
const { randomBytes } = require("crypto");
const P = require('pino');
const NodeCache = require("node-cache");
const linkfy = require('linkifyjs');
const request = require('request');
const ms = require('ms');
const os = require('os');
const ffmpeg = require('fluent-ffmpeg');
const fetch = require('node-fetch');
const qrterminal = require('qrcode-terminal');
const { exec, spawn, execSync } = require('child_process');
const moment = require('moment-timezone');
const colors = require("colors");
const yts = require('yt-search');
const infoSystem = require('os')
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();

// Hora:
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss');
const date = moment.tz('America/Sao_Paulo').format('DD/MM/YYYY');

// Funções:
const webp_mp4 = require("../bunker/armor/js/webp_mp4.js");
const { sendVideoAsSticker, sendImageAsSticker } = require('../bunker/armor/sticker/rename.js');
const { sendVideoAsSticker2, sendImageAsSticker2 } = require('../bunker/armor/sticker/rename2.js');
const { arcloud } = require('../bunker/armor/js/arcc.js') 
const { addLimit, getLimit } = require('../bunker/armor/js/limit.js');
const { addBanned, unBanned, BannedExpired, cekBannedUser } = require("../bunker/armor/js/banned.js");
const { validmove, setGame } = require('../bunker/armor/tictactoe');
const { addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos } =  require('../bunker/armor/js/addcmd.js');
const { palavrasANA, quizanimais } = require('../bunker/armor/games/jogos.js');
const { garticArchives } = require('../bunker/armor/games/advinhar.js');
const { enigmaArchive } = require('../bunker/armor/games/enigma.js');
const { wait, getExtension, generateMessageID, getMembros, getGroupAdmins, getRandom, banner, banner2, banner3, temporizador, chyt, getBuffer, fetchJson, fetchText, createExif, getBase64, convertSticker, upload, nit, getpc, supre, recognize } = require('../bunker/armor/funcoes/functions.js'); // É necessário para algumas funções funcionar perfeitamente.
const { addVote, delVote } = require('../bunker/armor/js/vote');
const { infoClima } = require('../bunker/armor/funcoes/infoclima.js')
const { isFiltered, addFilter } = require('../bunker/armor/funcoes/functions.js');
const ytdl = require("../bunker/armor/funcoes/ytdl.js");
const { MultiDownload } = require("../bunker/armor/funcoes/multidl.js");

// [JSON] - Funções Abaixo >>> :
const voting = JSON.parse(fs.readFileSync('./bunker/armor/funcoes/voting.json'));
const sotoy = JSON.parse(fs.readFileSync('./bunker/armor/funcoes/sotoy.json'));
const rg_aluguel = JSON.parse(fs.readFileSync("./configs/media/rg_aluguel.json"));
const countMessage = JSON.parse(fs.readFileSync('./configs/media/countmsg.json'));
const comandos = JSON.parse(fs.readFileSync('./configs/media/comandos.json'));
const daily = JSON.parse(fs.readFileSync('./bunker/database/usuarios/diario.json'));
const nescessario = JSON.parse(fs.readFileSync('./configs/nescessario.json'));
const premium = JSON.parse(fs.readFileSync('./configs/media/premium.json'));
const ban = JSON.parse(fs.readFileSync('./bunker/database/usuarios/banned.json'));
const muted = JSON.parse(fs.readFileSync('./bunker/database/usuarios/muted.json'))
const limitefll = JSON.parse(fs.readFileSync('./bunker/database/usuarios/flood.json'));
const joguinhodavelhajs = JSON.parse(fs.readFileSync('./bunker/database/usuarios/joguinhodavelha.json'));
const { insert, response } = require('../bunker/armor/funcoes/simi.js');
const { randomCantadas } = require('../bunker/armor/js/cantadas.js');
const joguinhodavelhajs2 = JSON.parse(fs.readFileSync('./bunker/database/usuarios/joguinhodavelha2.json'));
const patentes = JSON.parse(fs.readFileSync("./configs/media/patentes.json"));
const sabrpg = JSON.parse(fs.readFileSync("./configs/media/dinheiro.json"));
const bcbet = JSON.parse(fs.readFileSync("./bunker/database/usuarios/1xbcbet.json"))
const antispam = JSON.parse(fs.readFileSync('./configs/media/antispam.json'));
const anotar = JSON.parse(fs.readFileSync("./bunker/database/func/tabela/anotar.json"));
const setting = JSON.parse(fs.readFileSync('./configs/settings.json'));
const logoslink = JSON.parse(fs.readFileSync('./configs/logos.json'));
const black_ = JSON.parse(fs.readFileSync("./bunker/database/grupos/avisos.json"));
const { psycatgames } = require('../bunker/armor/funcoes/psycatgames.js')

// Arquivos - JS - Menus / Informações:
const { linguagem, mess, getInfo } = require('../configs/lib');
const { destrava, destrava2 } = require('../bunker/armor/funcoes/destrava.js');
const { tabela } = require('../bunker/armor/js/tabela.js');
const { conselhob } = require('../bunker/armor/js/conselhob.js');
const { fatos } = require('../bunker/armor/js/fatos.js');
const { palavrasc } = require('../bunker/armor/js/conselhos.js');

const { getMinesPositions, MinesHelp } = require('../bunker/armor/js/mines.js')
const mines = JSON.parse(fs.readFileSync('./bunker/armor/games/mines.json'))

// Deletar Arquivos:
function DLT_FL(file) {
try {
fs.unlinkSync(file);
} catch (error) {
}
}

// Template - Definição para o uso do botões:
if(!nescessario.botoes_) {
var EnvBotao = async (id, MR, anna, text1, desc1, X) => {
if(X.split("|")[1] != "0") {
anna.sendMessage(id, {image: {url: X.split("|")[1]}, caption: text1, mentions: [MR]})} else {anna.sendMessage(id, {text: text1, mentions: [MR]})}}
} else {
var EnvBotao = async(id, MR, anna, text1, desc1, X, TXT = [], vr) => {
var DMN_ = X.split("|")[0].charAt(0);
var QNT_B = DMN_ == "1" ? [{buttonId: TXT[0], buttonText: {displayText: TXT[1]}, type: 1}] : DMN_ == "2" ? [{buttonId: TXT[0], buttonText: {displayText: TXT[1]}, type: 1}, {buttonId: TXT[2], buttonText: {displayText: TXT[3]}, type: 1}] : DMN_ == "3" ? [{buttonId: TXT[0], buttonText: {displayText: TXT[1]}, type: 1}, {buttonId: TXT[2], buttonText: {displayText: TXT[3]}, type: 1}, {buttonId: TXT[4], buttonText: {displayText: TXT[5]}, type: 1}]: "";
if(X.split("|")[1] == "0" && !X.split("|")[0].includes("v")) {
var buttonMessage = {
text: text1, footer: desc1,
buttons: QNT_B, headerType: 1, mentions: [MR]};
} else if(X.split("|")[1] != "0" && !X.split("|")[0].includes("v")) {
var buttonMessage = {
image: {url: X.split("|")[1]},
caption: text1, footer: desc1, buttons: QNT_B, 
headerType: 1, mentions: [MR]};
} else if(X.split("|")[1] != "0" && X.split("|")[0].includes("v")) {
var buttonMessage = {
video: {url: X.split("|")[1]},
caption: text1, footer: desc1,
buttons: QNT_B, headerType: 1, mentions: [ME]}}
anna.sendMessage(id, buttonMessage, {quoted: vr}).catch(e => {
return console.log("Erro no botão, Tente novamente ou avalie o que pode está errando.. "+e);
})}}

// CONVERTER BYTES EM KB / MB / GB / TB
const convertBytes = function(bytes) {
const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
if(bytes == 0) {
return "n/a";
}
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
if(i == 0) {
return bytes + " " + sizes[i];
}
return (bytes / Math.pow(1024, i)).toFixed(1) + " " + sizes[i];
};

// ANTI NOME MODIFICADA / EMOJI
function ANT_LTR_MD_EMJ(str) {
for (let i = 0, n = str.length; i < n; i++) {
if(str.charCodeAt(i) > 255) {
return true;
}
}
return false;
}

// Transformar segundos em hora/minutos
function kyun(seconds){
function pad(s){
return (s < 10 ? '0' : '') + s;
}
var hours = Math.floor(seconds / (60*60));
var minutes = Math.floor(seconds % (60*60) / 60);
var seconds = Math.floor(seconds % 60);
return `${pad(hours)} horas, ${pad(minutes)} minutos e ${pad(seconds)} segundos.`;
}

// FUNÇÃO DO BAILEYS PRA PUXAR MÍDIA ENVIADA, E EXECUTAR AÇÃO..
const getFileBuffer = async (mediakey, MediaType) => {
const stream = await downloadContentFromMessage(mediakey, MediaType);
let buffer = Buffer.from([]);
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk]);
}
return buffer;
};

// Tudo abaixo await sleep(1000) vai demorar 1 segundo pra funcionar, 1000 é igual 1 segundo..
const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms));
};

// ENVIAR FIGU EM URL
const enviarfiguUrl = async (anna, from, link, mr) => {
ranp = getRandom('.gif');
rano = getRandom('.webp');
ini_buffer = `${link}`;
exec(`wget ${ini_buffer} -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 320:320 ${rano}`, (err) => {
DLT_FL(ranp);
buff = fs.readFileSync(rano);
anna.sendMessage(from, {sticker: buff}, {quoted: mr}).catch(() => {
return console.log("Erro..");
});
DLT_FL(rano);
});
};

const sendPoll = (anna, id, name = '', values = [], selectableCount = 1) => { 
return anna.sendMessage(id, {poll: {name, values, selectableCount}, messageContextInfo: { messageSecret: randomBytes(32)}}, {id, options: {userJid: anna?.user?.id}}).catch(() => {
return console.log(console.error);
});
}


const RSM_FUNC = async(anna, nmrdn_dono2, hora120, upsert) => {
switch(hora120) {
case '07:00:00': case '12:00:00': case '18:00:00': case '00:00:00':
exec("cd bunker/database/qr-code && rm -rf pre-key* sender* session*");
setTimeout(async () => {
file = require.resolve("../connect.js");
delete require.cache[file];
require(file);
}, 1200);
console.log(colors.blue("Reiniciando para diminuir o peso do qrcode.."))
break;
}
if(upsert?.messages == undefined) return
if(JSON.stringify(rg_aluguel).includes(upsert?.messages[0]?.key?.remoteJid)) {
dat_rg = moment.tz('America/Sao_Paulo').format('DD/MM');
for (var i of rg_aluguel) {
var rg_alg_ofc = i;
}

if(dat_rg == rg_alg_ofc.data.split("/")[0]-1+"/"+rg_alg_ofc.data.split("/")[1]) {
rg_alg_ofc.cobrou = false;
fs.writeFileSync("../configs/media/rg_aluguel.json", JSON.stringify(rg_aluguel));
}

if(dat_rg >= rg_alg_ofc.data) {
if(rg_alg_ofc.cobrou == false) {
txt = `Olá proprietário vim avisar que o grupo: ${rg_alg_ofc.nome_do_gp} encerrou o aluguel hoje, corre logo pra cobrar o indivíduo, texto detalhando sobre o dono: ${rg_alg_ofc.texto}`;
horadd = parseInt(dat_rg.split("/")[1])+1;
anna.sendMessage(nmrdn_dono2, {text: txt});
rg_alg_ofc.cobrou = true;
rg_alg_ofc.data = parseInt(rg_alg_ofc.data.split("/")[0])+"/"+horadd;
fs.writeFileSync("../configs/media/rg_aluguel.json", JSON.stringify(rg_aluguel))
}}}}

const comand = (anna, info, prefix, isGroup, Res_SoGrupo, sender, pushname, command, reply, args, from, mentions, Res_SoAdm, Res_BotADM, isGroupAdmins, isBotGroupAdmins, upsert) => {

async function comandos_que_nao_usa_muito() {

switch(command) {
}
}

comandos_que_nao_usa_muito().catch(e => {
console.log(e+" - CSFJ")
})

}

// Simih:
const simih = async (text) => {
try {
datasimi = await fetchJson(`https://api.simsimi.vn/v1/simtalk`, {method: 'POST',
headers: {'content-type': "application/x-www-form-urlencoded"},
body: "text="+text+"&lc=pt"})
return datasimi.message
} catch (e){
return
}}

module.exports = { PhoneNumber, P, fs, util, Boom, axios, linkfy, request, ms, ffmpeg, fetch, qrterminal, exec, spawn, yts, execSync, limitefll, moment, time, hora, date, infoSystem, RSM_FUNC, comand, addVote, delVote, getBuffer, convertSticker, fetchJson, fetchText, getBase64, createExif, addLimit, getLimit, upload, nit, addBanned, unBanned, BannedExpired, cekBannedUser, validmove, setGame, addComandosId, deleteComandos, getComandoBlock, getComandos, addComandos, palavrasANA, quizanimais, getpc, supre, wait, getExtension, generateMessageID, getGroupAdmins, getMembros, getRandom, banner, banner2, banner3, temporizador, chyt, webp_mp4, simih, patentes, antispam, anotar, rg_aluguel, voting, sotoy, addVote, delVote, countMessage, comandos, daily, muted, nescessario, premium, ban, black_, joguinhodavelhajs, joguinhodavelhajs2, setting, logoslink, linguagem, getInfo, mess, destrava, destrava2, tabela, conselhob, fatos, palavrasc, recognize, colors, cheerio, NodeCache, kyun, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2,sendImageAsSticker2, enviarfiguUrl, sendPoll, getFileBuffer, DLT_FL, sleep, ANT_LTR_MD_EMJ, convertBytes, EnvBotao, arcloud, EmojiAPI, emoji, infoClima, os, garticArchives, enigmaArchive, insert, response, randomCantadas, isFiltered, addFilter, mines, getMinesPositions, MinesHelp, ytdl, psycatgames, MultiDownload, sabrpg, bcbet }