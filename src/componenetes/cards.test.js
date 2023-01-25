/* eslint-disable no-undef */
/* eslint-disable testing-library/render-result-naming-convention */
/* eslint-disable no-unused-vars */
import React, { Component } from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import randomCards from "./cards";


test("probar la funcionalidad", () => {
  expect(typeof (randomCards())).toBe("string");
});