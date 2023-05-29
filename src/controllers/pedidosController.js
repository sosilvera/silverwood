function index(req, res) {
    req.getConnection((err, conn) => {
      conn.query('SELECT * FROM pedidos;', (err, pedidos) => {
        if(err) {
          res.json(err);
        }
        res.render('pedidos/index', { pedidos });
      });
    });
  }

function create(req, res){
    res.render('pedidos/create');
}

function store(req, res){
    const data = req.body;

    req.getConnection((err, conn) => {
        conn.query('INSERT INTO Pedidos SET ?', [data], (err, rows) => {
            if(err) {
                res.json(err);
            }
            res.redirect('/pedidos');
        })
    })

}

module.exports = {
    index: index,
    create: create,
    store: store,
}