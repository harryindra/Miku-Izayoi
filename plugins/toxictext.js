let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ')
  if (!args) throw 'Masukkan Parameter'
  m.reply('*[❗] Wait,Tunggu Bentar Kak Sedang Dalam Proses...*')
  let res = `https://lolhuman.herokuapp.com/api/textprome/toxic?apikey=31caf10e4a64e86c1a92bcba&text=${response}`
  conn.sendFile(m.chat, res, 'tectprome.jpg', `Nih Kak`, m, false)
}
handler.help = ['toxictext'].map(v => v + ' <teks>')
handler.tags = ['sticker']
handler.command = /^(toxictext)$/i
handler.limit = true
handler.register = true

module.exports = handler

//31caf10e4a64e86c1a92bcba
