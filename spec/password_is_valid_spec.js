let myTest = require("../password_checker/src/password_checker")

let passwordIsValid = myTest.passwordIsValid


describe("passwordIsValid", function(){

    it("password should exist", function(){
        expect(passwordIsValid("")).toBe(false)
    })

    it("password should have more than 8 characters", function(){
        expect(passwordIsValid("fGou5i*")).toBe(false)
    })
    
    it("password should have lowercase characters", function(){
        expect(passwordIsValid("P25HGYUTD")).toBe(false)
    })

    it("password should have uppercase characters", function(){
        expect(passwordIsValid("date45#p0")).toBe(false)
    })

    it("password should have digits", function(){
        expect(passwordIsValid("QHU#npOH&")).toBe(false)
    })
        
    it("password should special characters", function(){
        expect(passwordIsValid("238PEOles")).toBe(false)
    })
})