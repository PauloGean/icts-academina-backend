function getIndex(request, response) {
    response.send('Curso de fullstack!!!>>>>>>>>>>>>>>>>>>>');
}

function getSobre(request, response) {
    response.send({app: 'Academia backend', versao: "1.0"});
}
module.exports={getIndex, getSobre}