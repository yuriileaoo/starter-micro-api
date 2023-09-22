var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    
    let url = "https://copel.nexenergy.com.br/api/massive-sender";

    let body = { "username":"serasa@nexenergy.com.br", "password": "Nenex2019@", 
        "client_id": "QGsj6vlnsWcGNUCoxv5fNkL2KXmfafhr","client_secret": "4xf8KE0Pb52hK04y" }
        
        const headers = { 
            'Content-Type': 'application/json',
            'X-User-Domain': 'nexenergy.com.br',
            'X-Correlation-Id': ''
        };

        await axios.post('https://api.serasaexperian.com.br/oauth2/experianone/v1/token', body, { headers })
        .then(async (response) => {
            console.log(response)
        })
        .catch((error) => {
            return res.status(400).json({result: error})
        })
    

    
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);
