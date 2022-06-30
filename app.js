const express = require('require');
const app = express();
app.get('/ab', (req, res) => {
    console.log(req);
    return 200;
});
app.listen(3000, () => {
    console.log('Server listening at port 3000')
})
