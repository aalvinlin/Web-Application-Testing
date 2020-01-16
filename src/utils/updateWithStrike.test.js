import * as rtl from "@testing-library/react";
import { render } from '@testing-library/react';

import updateWithStrike from "./updateWithStrike";

test("updateWithStrike returns an object", () => {

    let gameStatus = { strikes: 0, balls: 0, fouls: 0, hits: 0 }
    let result = updateWithStrike(gameStatus);
    
    expect((result !== null && typeof result === "object" && !Array.isArray(result)).toBe(true));
  });
  
test("updateWithStrike returns an object with 4 keys set to 'strikes', 'balls', 'fouls', and 'hits'", () => {

    let gameStatus = { strikes: 0, balls: 0, fouls: 0, hits: 0 }
    let result = updateWithStrike(gameStatus);
    
    expect(Object.keys(gameStatus).length.toBe(4));
    expect(gameStatus.strikes).toBe(true);
    expect(gameStatus.balls).toBe(true);
    expect(gameStatus.fouls).toBe(true);
    expect(gameStatus.hits).toBe(true);
  });

  test("updateWithStrike returns an object with 4 integer values", () => {

    let gameStatus = { strikes: 0, balls: 0, fouls: 0, hits: 0 }
    let result = updateWithStrike(gameStatus);
    
    expect(Object.keys(gameStatus).length.toBe(4));
    expect(Number.isInteger(gameStatus.strikes)).toBe(true);
    expect(Number.isInteger(gameStatus.balls)).toBe(true);
    expect(Number.isInteger(gameStatus.fouls)).toBe(true);
    expect(Number.isInteger(gameStatus.hits)).toBe(true);
  });

test("Strike count is incremented to the next number when it is below 2 to begin with", () => {

    let gameStatus = { strikes: 0, balls: 0, fouls: 0, hits: 0 }
    expect(gameStatus.strikes.toBe(1));

    let gameStatus = { strikes: 1, balls: 0, fouls: 0, hits: 0 }
    expect(gameStatus.strikes.toBe(2));


  });
  
test("Strike count is reset to 0 when it is at 2", () => {

    let gameStatus = { strikes: 2, balls: 0, fouls: 0, hits: 0 }
    expect(gameStatus.strikes.toBe(0));

  });
  