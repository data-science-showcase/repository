const sql = require('mssql');

const config = {
    user: 'SA',
    password: 'super_duper_password1!',
    server: 'localhost',
    database: 'testdb',
    options: {
        trustedConnection: true,
        encrypt: true,
        enableArithAbort: true,
        trustServerCertificate: true
    }
}

const run = async() => {
    let pool;
    try {
        console.log('Connection Opening...');
        pool = await sql.connect(config);
        const { recordset } = await sql.query`select * from users;`;

        console.log(recordset)
    } catch (err) {
        console.log(err)
    } finally {
        await pool.close();
        console.log('Connection closed');
    }

}

run();
