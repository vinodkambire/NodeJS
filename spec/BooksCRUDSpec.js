var request = require("express");
var app = request();
var base_url = "http://localhost:8080/"

describe("Hello Books Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      app.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns Hello Books", function(done) {
      app.get(base_url, function(error, response, body) {
        expect(body).toBe("Hello Books!!");
        done();
      });
    });
  });
});