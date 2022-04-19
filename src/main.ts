import getPort from 'get-port' ;

(async () => { const port = await getPort({port: 13604}); console.log(port);})();

