import * as rtl from "@testing-library/react";
import { render } from '@testing-library/react';

import updateWithBall from "./updateWithBall";

test("updateWithBall returns an object", () => {

    let gameStatus = { strikes: 0, balls: 0, fouls: 0, hits: 0 }
    let result = updateWithBall(gameStatus);
    
    expect((result !== null && typeof result === "object" && !Array.isArray(result)).toBe(true));
  });
  
test("updateWithBall returns an object with 4 keys set to 'strikes', 'balls', 'fouls', and 'hits'", () => {

    let gameStatus = { strikes: 0, balls: 0, fouls: 0, hits: 0 }
    let result = updateWithBall(gameStatus);
    
    expect(Object.keys(gameStatus).length.toBe(4));
    expect(gameStatus.strikes).toBe(true);
    expect(gameStatus.balls).toBe(true);
    expect(gameStatus.fouls).toBe(true);
    expect(gameStatus.hits).toBe(true);
  });

  test("updateWithBall returns an object with 4 integer values", () => {

    let gameStatus = { strikes: 0, balls: 0, fouls: 0, hits: 0 }
    let result = updateWithBall(gameStatus);
    
    expect(Object.keys(gameStatus).length.toBe(4));
    expect(Number.isInteger(gameStatus.strikes)).toBe(true);
    expect(Number.isInteger(gameStatus.balls)).toBe(true);
    expect(Number.isInteger(gameStatus.fouls)).toBe(true);
    expect(Number.isInteger(gameStatus.hits)).toBe(true);
  });

test("Ball count is incremented to the next number when it is below 3 to begin with", () => {

    let gameStatus = { strikes: 0, balls: 0, fouls: 0, hits: 0 }
    expect(gameStatus.balls.toBe(1));

    let gameStatus = { strikes: 0, balls: 1, fouls: 0, hits: 0 }
    expect(gameStatus.balls.toBe(2));

    let gameStatus = { strikes: 0, balls: 2, fouls: 0, hits: 0 }
    expect(gameStatus.balls.toBe(3));

  });
  
test("Ball count is reset to 0 when it is at 3", () => {

    let gameStatus = { strikes: 0, balls: 3, fouls: 0, hits: 0 }
    expect(gameStatus.balls.toBe(0));

  });
  