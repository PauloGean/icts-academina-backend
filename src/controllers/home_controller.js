module.exports = {
    index:function (res, req) {
        req.send('Curso de fullstack::');
    },
    sobre: (res, req) => {
        req.send({ app: "Academia backend" ,versao:"1.0"})
    }
}