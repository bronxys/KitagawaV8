/*//ESSA BASE FOI CONSTRUÍDA, NO INTUITO DE OBTER A MELHOR PERFORMANCE DE SEUS BOT, NÃO UMA BASE PÚBLICA ENTT NAO VAZEM E NEM VENDAM SEM A MINHA AUTORIZAÇÃO
 ® COPYRIGHT BY GLEYSON BOTS*/
 
const { 'default': makeWASocket, 
useMultiFileAuthState, 
makeInMemoryStore, 
DisconnectReason, 
WAGroupMetadata, 
relayWAMessage,	
MediaPathMap, 
mentionedJid, 
processTime, 
MediaType, 
Browser, 
MessageType, 
Presence, 
Mimetype, 
Browsers, 
delay, 
fetchLatestBaileysVersion, 
MessageRetryMap, 
extractGroupMetadata, 
generateWAMessageFromContent, 
proto, 
otherOpts, 
makeCacheableSignalKeyStore } = require('@whiskeysockets/baileys');

const { fs, Boom, axios, crypto, util, P, linkfy, request, cheerio, ms, exec, moment, time, hora, date, getBuffer, fetchJson, getBase64, upload, banner2, banner3, colors, getGroupAdmins } = require('./library/constante.js');

const { NomeDoBot, NickDono, prefix } = require("./configs/settings.json");

var { fundo1, fundo2 } = require("./configs/links_img.json");


const { menu, anotacao, menudono, adms, menulogos, efeitos, menuprem, brincadeiras, infodono, alteradores, destrava, destrava2, tabela, conselhob, palavrasc, ban, joguinhodavelhajs, joguinhodavelhajs2, nescessario, setting, logoslink, premium, countMessage, sendVideoAsSticker, sendImageAsSticker, sendVideoAsSticker2, sendImageAsSticker2, sotoy, daily, comandos, limitefll, addVote, delVote, patentes, antispam, anotar, getRandom, NodeCache,insert, response } = require('./library/constante.js');

const sleep = async (ms) => {return new Promise(resolve => setTimeout(resolve, ms))};

function DLT_FL(file) {
try { fs.unlinkSync(file) } catch (error) {}
}

const kontol_info2 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Closing session: SessionEntry")){ 
return kontol_info2(...arguments); 
}};

const kontol_info1 = console.info;
console.info = function() { 
if(!util.format(...arguments).includes("Removing old closed session: SessionEntry {}")){
return kontol_info1(...arguments);
}};

const msgRetryCounterCache = new NodeCache();

const readline = require("readline");

const pairingCode = process.argv.includes("--code");
const rl = readline.createInterface({input: process.stdin, output: process.stdout,});
const question = (text) => new Promise((resolve) => rl.question(text, resolve));

async function iniciaranna() {
var folderUserAuth = "./bunker/database/qr-code";

const { state, saveCreds } = await useMultiFileAuthState(folderUserAuth);

const { version, isLatest } = await fetchLatestBaileysVersion();

const anna = makeWASocket({
version,
auth: state,
syncFullHistory: true,
printQRInTerminal: !pairingCode,
qrTimeout: 180000,
logger: P({ level: 'silent' }),
browser: ["Chrome (Linux)", "", ""],
msgRetryCounterCache,
connectTimeoutMs: 60000,
defaultQueryTimeoutMs: 0,
keepAliveIntervalMs: 10000,
emitOwnEvents: true,
fireInitQueries: true,
generateHighQualityLinkPreview: true,
syncFullHistory: true,
markOnlineOnConnect: true,
patchMessageBeforeSending: (message) => {
const requiresPatch = !!(message?.interactiveMessage);
if (requiresPatch) {
message = {viewOnceMessage: {
message: {messageContextInfo: {
deviceListMetadataVersion: 2,
deviceListMetadata: {},
},...message }}}}
return message;
}});

const PhoneNumber = require('awesome-phonenumber')

if (pairingCode && !anna.authState.creds.registered) {
console.log('E X E M P L O: +55 11 91234-5678\nA D D - E L E - D E S S A - F O R M A: 551191234/678')
let phoneNumber = await question(`${colors.white("- ")}${colors.red("C O L O Q U E - O - N U M B E R:")} `);
phoneNumber = phoneNumber.replace(/[^0-9]/g, "");
let code = await anna.requestPairingCode(phoneNumber);
code = code?.match(/.{1,4}/g)?.join("-") || code;
console.log(`${colors.white("- ")}${colors.red("S E U - C O D I G O:")} ${code}`);
rl.close();
}

anna.ev.process(async(events) => {
if(events["group-participants.update"]){
try {
var gley2 = events["group-participants.update"];
if(!fs.existsSync(`./bunker/database/grupos/activation_gp/${gley2.id}.json`)) return;
var jsonGp = JSON.parse(fs.readFileSync(`./bunker/database/grupos/activation_gp/${gley2.id}.json`));

if(gley2.participants[0].startsWith(anna.user.id.split(':')[0])) return;

try { var grpmdt = await anna.groupMetadata(gley2.id) } catch (e) { return }

const isGroup2 = grpmdt.id.endsWith('@g.us');

try {
var GroupMetadata_ = isGroup2 ? await anna.groupMetadata(gley2.id): ""} catch (e) {return}

const membros_ = isGroup2 ? GroupMetadata_.participants : '';
const groupAdmins_ = isGroup2 ? getGroupAdmins(membros_) : '';

if(gley2.action == 'add'){
num = gley2.participants[0];
if(nescessario.listanegraG.includes(num)){
await anna.sendMessage(GroupMetadata_.id,{text: '> Olha quem deu as cara por aqui, sente o poder do ban.'});
anna.groupParticipantsUpdate(GroupMetadata_.id, [gley2.participants[0]], 'remove');
return;
}}
if(gley2.action == 'remove'){
num = gley2.participants[0];
var i2 = countMessage.map(i => i.groupId).indexOf(GroupMetadata_.id);
var i = countMessage[i2].numbers.map(i => i.id).indexOf(num); 
if(JSON.stringify(countMessage[i2].numbers).includes(num)) {
countMessage[i2].numbers.splice(i,1);
fs.writeFileSync("./configs/media/countmsg.json", JSON.stringify(countMessage));
}
}
if(gley2.action == 'add' && jsonGp[0].listanegra.includes(gley2.participants[0])){
await anna.sendMessage(GroupMetadata_.id,{text: '> Olha quem deu as cara por aqui, sente o poder do ban cabaço'});
anna.groupParticipantsUpdate(GroupMetadata_.id, [gley2.participants[0]], 'remove');
}
if(jsonGp[0].antifake && gley2.action === 'add' && !gley2.participants[0].startsWith(55)){
if(jsonGp[0].legenda_estrangeiro != "0") {
await anna.sendMessage(GroupMetadata_.id, {text: jsonGp[0].legenda_estrangeiro});
}
setTimeout(async() => {
anna.groupParticipantsUpdate(GroupMetadata_.id, [gley2.participants[0]], 'remove');
}, 1000);
}

// BEM VINDO 
if(!jsonGp[0].wellcome[1].bemvindo2 && !jsonGp[0].wellcome[0].bemvindo1) return;
try {
var mdata_2 = isGroup2 ? await anna.groupMetadata(gley2.id): "";
} catch (e) {
return;
}
const isWelcomed = jsonGp[0].wellcome[0].legendabv != null ? true : false;
const isByed = jsonGp[0].wellcome[0].legendasaiu != 0 ? true : false;
const isWelcomed2 = jsonGp[0].wellcome[1].legendabv != null ? true : false;
const isByed2 = jsonGp[0].wellcome[1].legendasaiu != 0 ? true : false;
const groupDesc = await mdata_2.desc;
if(jsonGp[0].antifake == true && !gley2.participants[0].startsWith(55)) return;
if(jsonGp[0].wellcome[0].bemvindo1 == true){
// PEGAR DESCRIÇÃO DO GRUPO. 
try {
ppimg = await anna.profilePictureUrl(gley2.participants[0]);
} catch(e) {
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}
try {
ppgp = await anna.profilePictureUrl(mdata_2.id);
} catch(e) {
ppgp = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}
shortpc = await axios.get(`https://tinyurl.com/api-create.php?url=${ppimg}`);

if(gley2.action === 'add') {
if(isWelcomed) {
teks = jsonGp[0].wellcome[0].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+gley2.participants[0].split('@')[0])
.replace('#numerobot#', anna.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = welcome(gley2.participants[0].split('@')[0], mdata_2.subject);
}
let buff = await getBuffer(ppimg);
ran = getRandom('.jpg');
await fs.writeFileSync(ran, buff);
anna.sendMessage(mdata_2.id, {image: {url:`https://gleysonapi.store/welcome?titulo=BEM%20VINDO(A)&nome=${gley2.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo1}&grupo=BEM VINDO AO GRUPO ${encodeURI(mdata_2.subject)}`},
mentions: gley2.participants, caption: teks});
DLT_FL(ran);
} else if(gley2.action === 'remove') {
mem = gley2.participants[0];

try {
ppimg = await anna.profilePictureUrl(`${mem.split('@')[0]}@c.us`);
} catch (e){
ppimg = 'https://telegra.ph/file/b5427ea4b8701bc47e751.jpg';
}

if(isByed) {
teks = jsonGp[0].wellcome[0].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+gley2.participants[0].split('@')[0])
.replace('#numerobot#', anna.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc);
} else {
teks = bye(gley2.participants[0].split('@')[0]);
}

let buff = await getBuffer(ppimg)
ran = getRandom('.jpg')
fs.writeFileSync(ran, buff)
anna.sendMessage(mdata_2.id, {image: {url:`https://gleysonapi.store/welcome?titulo=Adeus&nome=${gley2.participants[0].split('@')[0]}&perfil=${shortpc.data}&fundo=${fundo2}&grupo=SAIU DE ${encodeURI(mdata_2.subject)}`}, caption: teks, 
mentions: gley2.participants})
DLT_FL(ran)
}
}
  
if(jsonGp[0].wellcome[1].bemvindo2 == true){
if(gley2.action === 'add') {
if(isWelcomed2) {
teks = jsonGp[0].wellcome[1].legendabv
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#', '@'+gley2.participants[0].split('@')[0])
.replace('#numerobot#', anna.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = welcome2(gley2.participants[0].split('@')[0], mdata_2.subject)
}
anna.sendMessage(mdata_2.id, {text: teks, mentions: gley2.participants})
} else if(gley2.action === 'remove') {
var mem = gley2.participants[0]

if(isByed2) {
teks = jsonGp[0].wellcome[1].legendasaiu
.replace('#hora#', time)
.replace('#nomedogp#', mdata_2.subject)
.replace('#numerodele#',  '@'+mem.split('@')[0])
.replace('#numerobot#', anna.user.id)
.replace('#prefixo#', jsonGp[0].multiprefix == true ? jsonGp[0].prefixos[0] : setting.prefix)
.replace('#descrição#', groupDesc)
} else {
teks = bye2(mem.split('@')[0])
}
anna.sendMessage(mdata_2.id, {text: teks, mentions: gley2.participants})
}
}

} catch (e) {
console.log(e)
}
}

if(events["messages.upsert"]) {
var upsert = events["messages.upsert"]
require("./anna.js")(upsert, anna)
}

if(events["connection.update"]) {
const update = events["connection.update"]
const { connection, lastDisconnect, qr, isNewLogin, receivedPendingNotifications } = update  
if(qr) {console.log(colors.green("Você precisará de um segundo celular, para tirar foto do qr-code, para depois escanear a foto que tirou.."))}  

const shouldReconnect = new Boom(lastDisconnect?.error)?.output.statusCode
//----------------------------------
switch (connection) {
case 'close':
if(shouldReconnect) {
if(shouldReconnect == 428) {
console.log(colors.yellow("Conexão caiu, irei ligar novamente, se continuar com este erro, provavelmente sua internet está caindo constantemente.."));
} else if(shouldReconnect == 401) {
console.log(colors.red("O QRCODE DO BOT FOI DESCONECTADO, RE-LEIA O QRCODE DENOVO PARA CONECTAR."))
exec("cd bunker/database && rm -rf qr-code")
} else if(shouldReconnect == 515) {
console.log(colors.gray("\nA autenticação foi bem sucedida! Restart necessário para estabilizar a conexão."))
} else if(shouldReconnect == 440) {
return console.log(colors.gray("Está tendo um pequeno conflito, se isso aparecer mais de 4 vez, creio que há uma outra sessão aberta, ou o bot ligado em outro lugar, caso contrário ignore.."))
} else if(shouldReconnect == 503) {
console.log(colors.grey("Erro desconhecido, code: 503"));
} else if(shouldReconnect == 502) {
console.log(colors.grey("CONEXÃO TA QUERENDO CAIR, É A INTERNET..."))
} else if(shouldReconnect == 408) {
console.log(colors.gray("C O N E X Ã O - E S T A R - M U I T O - F R A C A..."))
} else {
console.log('Conexão Fechada _- POR: ', lastDisconnect?.error);
}
iniciaranna()
}
break;

case 'connecting':
console.log(colors.yellow(`E S T O U - T E N T A N D O - A B R I R - U M A - C O N E X Ã O`))
break;

case 'open':
console.log(banner3.string)   
console.log(banner2.string)  
console.log(colors.green(`K I T A G A W A - L E G A N C Y - CONECTADA 👍`))
await anna.sendPresenceUpdate("available")
await anna.updateProfileStatus(`Eu Já Me Conectei Mestre Sistema pronto para o uso.`)
break;

default:
break;
}
}


if(events["creds.update"]) {
await saveCreds();
}

require("./anna.js")(anna, folderUserAuth)

})
}
iniciaranna().catch(async(e) => {
console.log(colors.red("ERRO NO ARQUIVO ANNA-CALL.JS ERRO:"+e))
})