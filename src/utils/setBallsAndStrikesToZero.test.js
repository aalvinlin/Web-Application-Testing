import * as rtl from "@testing-library/react";
import { render } from '@testing-library/react';

import setBallsAndStrikesToZero from "./setBallsAndStrikesToZero";

let gameStatus = {
    strikes: 0,
    balls: 0,
    fouls: 0,
    hits: 0
}

test("Function returns an array", () => {

    setBallsAndStrikesToZero();
    
    expect(Array.isArray(setBallsAndStrikesToZero()).toBe(true));
  });
  
test("Returned array has 2 elements", () => {

    setBallsAndStrikesToZero();
    
    expect(setBallsAndStrikesToZero().length.toBe(2));
  });

test("Ball count is set to zero", () => {

    let expectedBalls = 0;
    let expectedStrikes = 0;

    let [balls, strikes] = setBallsAndStrikesToZero();
    
    expect(balls.toBe(expectedBalls));
  });
  
test("Strike count is set to zero", () => {

    let expectedBalls = 0;
    let expectedStrikes = 0;
    
    let [balls, strikes] = setBallsAndStrikesToZero();
    
    expect(strikes.toBe(expectedStrikes));
  });
  