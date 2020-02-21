let myTest = require("../password_checker/src/password_checker");
let passwordIsOk = myTest.passwordIsOk

describe("passwordIsOk", function() {

    it("password should exist", function(){
        expect(passwordIsOk("")).toBe(false)
    })

    it("password should be longer than 8 digits", function(){
        expect(passwordIsOk("SIn@sX3")).toBe(false)
    })

    it("password should have special characters", function(){
        expect(passwordIsOk("misTAK3n7")).toBe(true)
    })
    
    it("password should have uppercase characters",function(){
        expect(passwordIsOk("aw@k53mi")).toBe(false)
    })

    it("password should have lowercase characters", function(){
        expect(passwordIsOk("G0K24&#")).toBe(false)
    })

    it("password should have atleast one digit", function(){
        expect(passwordIsOk("K@rAbo*t")).toBe(false)
    })


})