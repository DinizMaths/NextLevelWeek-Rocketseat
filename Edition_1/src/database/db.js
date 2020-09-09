const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('./src/database/database.db')

module.exports = db

/*db.serialize(() => {
  //Com SQL eu vou:

  //1 - Criar uma tabela
  db.run(`
    CREATE TABLE IF NOT EXISTS places (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      image TEXT,
      name TEXT,
      address TEXT,
      address2 TEXT,
      state TEXT,
      city TEXT,
      items TEXT
    );
  `)

  //2 - Inserir dados na tabela
  const query = `
      INSERT INTO places (
        image,
        name,
        address,
        address2,
        state,
        city,
        items
      ) VALUES ( ?,?,?,?,?,?,? );
    `
    const values = [
      "https://images.unsplash.com/photo-1576834975354-ee694be1f0d1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
      "Colectoria",
      "Guilherme Gemballa, Jardim América",
      "N° 260",
      "Santa Catarina",
      "Rio do Sul",
      "Resíduos Eletrônicos, Lâmpadas"
    ]

    function afterInsertData(err) {
        if(err) {
          return console.log(err)
        }
    
        console.log('Cadastrado com sucesso')
        console.log(this)
    }
  db.run(query, values, afterInsertData)

  //3 - Consultar dados na tabela
    db.all(`SELECT * FROM places`, function(err, rows) {
      if(err) {
        return console.log(err)
      }

      console.log('Cadastrado com sucesso')
      console.log(this)
    })

  //4 - Deletar um dado da tabela
    db.run(`DELETE FROM places WHERE  id = ?`, [1], function(err){
      if(err) {
        return console.log(err)
      }

      console.log('Deletado com sucesso')
    })
    
})*/