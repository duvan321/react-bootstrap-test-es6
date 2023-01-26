/* eslint-disable no-sequences */
/* eslint-disable no-unused-vars */
import React from "react"

import {screen, render} from "@testing-library/react"
import {ProductPage} from "./"

describe("productPage", () => {
  if("must display a Delfines", ()=>{
  render(<ProductPage/>)
  expect(screen.queryBy(/Delfines/i)).toBeInTheDocument();
  });
});







/* eslint-disable no-undef */
/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable no-unused-vars */
//import React, { Component } from "react";
//import "@testing-library/jest-dom/extend-expect";
//import { render } from "@testing-library/react";
//import randomCards from "../componenetes/cards";


//test("probar la funcionalidad", () => {
  //expect(typeof (randomCards())).toBe("string");
//});