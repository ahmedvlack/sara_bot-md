const handler = async (m, {conn, isROwner, text}) => {
  if (!process.send) throw 'Dont: node main.js\nDo: node index.js';
  //if (conn.user.jid == conn.user.jid) {
    // conn.readMessages([m.key])
    await m.reply('*[ ⚠ ] Reiniciando el Bot...*\n\n*—◉ Espere un momento, puede tomar unos minutos.*');
    process.send('reset');
  //} else throw 'eh';
};
handler.help = ['restart'];
handler.tags = ['owner'];
handler.command = ['restart', 'reiniciar'];
handler.rowner = true;
export default handler;
