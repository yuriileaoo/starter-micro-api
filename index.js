var http = require('http');
http.createServer(function (req, res) {
    console.log(`Just got a request at ${req.url}!`)
    
    let url = "https://copel.nexenergy.com.br/api/massive-sender";

      try {
          // fetch is available with Node.js 18
          const res = await fetch(url);
          if (res.ok) {
            const data = await res.json();
            console.log(data);
          }
          console.info("status", res.status, res, res.json);
          return res.json;
      }
      catch (e) {
          console.error(e);
          return 500;
      }

    
    res.write('Yo!');
    res.end();
}).listen(process.env.PORT || 3000);
