function getIndex(request, response) {
    response.send('Curso de fullstack!!!!');
}

function getSobre(request, response) {
    response.send({ app:'Curso de fullstack!!!',versao: "1.0"});
}

module.exports={getIndex, getSobre}