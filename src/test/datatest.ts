import {  isVowel } from "../lib/printer";

import { assert } from "chai";

describe("isVowel", function(){
  it("should find out if char is a vowel", function(){
    assert.equal(isVowel("a"), true);
    assert.equal(isVowel("b"), false);
    assert.equal(isVowel("u"), true);
  });
})
