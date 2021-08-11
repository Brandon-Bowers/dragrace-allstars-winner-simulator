const fetch = require("node-fetch");

const dragQueenController = {};

const allQueens = "http://www.nokeynoshade.party/api/queens/all";

dragQueenController.bringBackMyGirls = (req, res, next) => {
  fetch("http://www.nokeynoshade.party/api/queens/all")
    .then((results) => results.json())
    .then((results) => {
      res.locals.queenList = results;
      console.log("results from dragqueen controller", results);
      next();
    })
    .catch((err) =>
      next({
        log: "ERROR: Error getting queens dragQueenController.bringBackMyGirls middleware",
        message: {
          err: "dragQueenController.bringBackMyGirls: ERROR: Check server logs for details",
        },
      })
    );
};

module.exports = dragQueenController;
