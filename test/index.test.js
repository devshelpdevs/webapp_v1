const { app } = require("../index");
const chai = require("chai");
const chaiHttp = require("chai-http");

const should = chai.should();
const { expect } =  chai;

chai.use(chaiHttp);

describe("tests for all devshelpdevs functionality and pages", () => {
    it("Should load the index page successfully", (done) => {
        chai.request(app)
        .get('/')
        .end((err,resp) => {
            expect(resp).to.have.status(200);
            done();
        });
    });
});