import SailsSocket from 'sails-socket';


export default io = () => {
    let io = {}
    if (process.BROWSER_BUILD) {
      io = SailsSocket(SailsSocket)
      io.sails.url = 'http://10.33.2.216:1337/'
    }

    
    const initializeParams = {url: 'http://10.33.2.216:1337/'}
    io.connect(initializeParams)
    console.log(socket)
    io.get('/message').then(function(jwr) {
        console.log(jwr.body);
      }).catch(function(jwr) {
        console.log(jwr.error);
      })
};