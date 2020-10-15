function validaForm(){
    var nome = document.forms["meuForm"] ["txtNome"].value;
    if( nome == '') {
        alert("O campo nome deve ser preenchido");
        return false
    }
}

function lerDinamico(){
    var http = new XMLHttpRequest();
    http.onreadystatechange = function(){
        if( this.readyState == 4 && this.status == 200){
            var dadosXML = this.responseXML;
            var clientes = dadosXML.getElementsByTagName("cliente");
            var texto = '<table border=1>';
            texto += '<tr>';
            texto += '  <th>Id:</th>';
            texto += '  <th>Nome:</th>';
            texto += '  <th>E-mail:</th>';
            texto += '  <th>Telefone:</th>';
            texto += '</tr>';
            for( i = 0 ; i < clientes.length; i++ ){
                id = clientes[i].getElementsByTagName("id");
                nome = clientes[i].getElementsByTagName("nome");
                email = clientes[i].getElementsByTagName("email");
                telefone = clientes[i].getElementsByTagName("telefone");
                texto += '<tr>';
                texto += '<td>' + id[0].childNodes[0].nodeValue + '</td>';
                texto += '<td>' + nome[0].childNodes[0].nodeValue + '</td>';
                texto += '<td>' + email[0].childNodes[0].nodeValue + '</td>';
                texto += '<td>' + telefone[0].childNodes[0].nodeValue + '</td>';
                texto += '</tr>';
            }
            texto += '</table>'
            document.getElementById("dinamico").innerHTML = texto;
        }
    };
    http.open("GET", "servidor.php", true);
    http.send();
}