/**
 * Created by piyush on 15/8/16.
 */
const data = require('./scrap');

done = false;
const quesAns = data.quesAns(function () {
    done = true;
    console.log(done);
});
