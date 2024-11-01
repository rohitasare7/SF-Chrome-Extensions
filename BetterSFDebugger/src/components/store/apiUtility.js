
import { apiVersion, sfConn, formatDate } from "@/assets/helper";

let args = new URLSearchParams(location.search.slice(1));
let sfHost = args.get("host");

const performAPIcallout = (url) => {
    return new Promise((resolve, reject) => {
      sfConn
        .getSession(sfHost)
        .then(() => {
          // console.log("getSession inside");
          let limitsPromise = sfConn.rest(url);
          limitsPromise
            .then((data) => {
              //console.log('limitsPromise data --> ', data);
              resolve(data); // Resolve the promise with the fetched data
            })
            .catch((error) => {
              console.error("Error fetching limits: ", error);
              reject(error); // Reject the promise if there is an error
            });
        })
        .catch((error) => {
          console.error("Error getting session: ", error);
          reject(error); // Reject the promise if there is an error getting the session
        });
    });
  };


  // Export the fucntions
export { performAPIcallout };