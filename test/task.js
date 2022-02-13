let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../bin/www');


chai.should();

chai.use(chaiHttp);

describe('Users Task Api', () => {
    // Test the Get route

    describe('/user Login', () => {
        it('Test Login API', (done) => {
            var userLogin = {
                "email": "",
                "password": ""
            }

            chai.request(server)
                .get('users/login')
                .end((err, res) => {
                    // res.body.have.status(200);
                    // res.body.should.be.a('object');
                    // res.should.have.property('message');
                    // res.should.have.property('response');
                    done();
                });
            
            });
    });


    // Test the get by Id route

    // Test the POSt route

    // Test the put route

    // Test the Patch route

    // Test the delete route

    // Test the delete by Id route


});
