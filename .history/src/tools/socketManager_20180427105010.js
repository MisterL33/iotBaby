import SailsSocket from 'sails-socket';


export default io = () => {


    
    const initializeParams = {url: 'http://10.33.2.216:1337/'}
    SailsSocket.connect(initializeParams).then(
        io.get('/message').then(function(jwr) {
            console.log(jwr.body);
          }).catch(function(jwr) {
            console.log(jwr.error);
          })
    )

};