/**
 * Created by Chris on 2016. 2. 15..
 */

function index(req, res) {
  res.json({message: 'pong'});
}

module.exports = {
  index: index
};
