import SailsSocket from 'sails-socket';


export default io = () => {



    const initializeParams = { url: 'http://10.33.2.216:1337/', jsonp: 'false' }
    const sailsSocket = SailsSocket.connect(initializeParams)
    sailSocket.sails.useCORSRouteToGetCookie = false

    SailsSocket.get('/message')
};