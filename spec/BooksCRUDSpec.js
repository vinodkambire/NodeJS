var request = require("request");
var app = require("../BooksCRUD.js");
var base_url = "http://localhost:8080/"

describe("Hello Books Server", function() {
  describe("GET /", function() {
    it("returns status code 200", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it("returns Hello Books", function(done) {
      request.get(base_url, function(error, response, body) {
        expect(body).toBe("Hello Books!!");
        done();
      });
    });
  });
});