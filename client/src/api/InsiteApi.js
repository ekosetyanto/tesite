import InsiteApiGenerated from "./generated/InsiteApiGenerated";

// Dependencies
//import axios from "axios";
//import { properties } from "../config/properties";

class InsiteApi extends InsiteApiGenerated {
  // You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
  /** 
  // EXAMPLE:
 
  // Get Insite List
  static getInsiteList() {
    console.log("This is my custom API");

    return fetch("http://localhost:3000/api/insites")
      .then(response => {
        return response.json();
      })
      .catch(error => {
        throw error;
      });
  }
  */

}

export default InsiteApi;