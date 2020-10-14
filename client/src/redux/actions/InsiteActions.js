import actionsFunction from "./generated/InsiteActionsGenerated";

// You can customize the base actions overriding the object "actionsFunction" as shown in the example below:
/** 
 // EXAMPLE:
 
 import insiteApi from "../../api/insiteApi";
 
 actionsFunction.loadinsiteList = function() {
   return function(dispatch) {
     console.log("This is my custom function");
     return insiteApi
     .getinsiteList()
     .then(list => {
       dispatch(actionsFunction.loadinsiteSuccess(list));
      })
      .catch(error => {
        throw error;
      });
    };
  };
  
*/

export default actionsFunction;
