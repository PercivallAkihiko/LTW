function proviamoci(){
 const {Client} = require('pg')

    const client = new Client({
        user: "postgres",
        password: "ciaomondo",
        host: "localhost",
        port: 5432,
        database: "progetto"
    })

execute()

async function execute() {
    try{
    
    await client.connect()
    const {rows} = await client.query("select * from users where username = $1", ["michele"])
    console.log(rows[0].highscore)
    }
    catch (ex)
    {
        console.log(`Something wrong happend ${ex}`)
    }
    finally
    {
        await client.end()
    }
    
}
}
