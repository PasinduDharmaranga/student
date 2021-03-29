let supertest = require("supertest");
let should = require("should");
let server = supertest.agent("http://localhost:3000");

describe("Unit test-1",function(){
  it("Should return data filtered by studebt id",function(done){

    server
    .get("/id/S10")
    .expect("Content-type",/json/)
    .expect(200) 
    .end(function(err,res){
      res.status.should.equal(200);
      done();
    });
  });

});

describe("Unit test-2",function(){
    it("Should return data filtered by grade",function(done){
  
      server
      .get("/grade/2")
      .expect("Content-type",/json/)
      .expect(200) 
      .end(function(err,res){
        res.status.should.equal(200);
        done();
      });
    });
  
  });

  describe("Unit test-3",function(){
    it("Should return data filtered by academic year",function(done){
  
      server
      .get("/year/2008")
      .expect("Content-type",/json/)
      .expect(200) 
      .end(function(err,res){
        res.status.should.equal(200);
        done();
      });
    });
  
  });

  describe("Unit test-4",function(){
    it("Should return data filtered by subject name",function(done){
  
      server
      .get("/subject/English")
      .expect("Content-type",/json/)
      .expect(200) 
      .end(function(err,res){
        res.status.should.equal(200);
        done();
      });
    });
  
  });

  describe("Unit test-5",function(){
    it("Should return data for complete course filtered by student id",function(done){
  
      server
      .get("/complete/S10")
      .expect("Content-type",/json/)
      .expect(200) 
      .end(function(err,res){
        res.status.should.equal(200);
        done();
      });
    });
  
  });