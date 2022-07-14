//by AsuKidal

let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    let res = await fetch('https://api.zacros.my.id/randomtext/quotesanime')
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendButtonImg(m.chat, json.result.img, `*Kata Kata hari ini*\n\n_${json.result.quotes}_   *By   ${json.result.char_name}*\nDari anime : ${json.result.anime}\nDi episode : ${json.result.episode}\n\n\nLink : ${json.result.url}\n        `, `Tgl rilis ${json.result.date}`, 'Lagi', `${usedPrefix}quoteanime`, m)
}

handler.help = ['quoteanime']
handler.tags = ['anime', 'fun']
handler.command = /^(quoteanime)$/i

handler.limit = true

module.exports = handler