const controller = require('./Controllers/maincontroller');

controller.app.use('/', controller.router);
controller.app.set('view engine', 'jade');
controller.app.use(controller.express.static('./scripts'));

controller.app.listen(8080, () => {
    console.log('Node server is running...');
});