
export const handleResponse = (response => {
    if (response.body) {
        return response.json().then(data => {
            return data;
        });
    }
    return null;
});

export class JogosService {

    getAll() {
        return fetch("http://localhost:8080/jogos", {
            credentials: "include",
        }).then(handleResponse);
    }

    getById(_id){
        return fetch("http://localhost:8080/jogos/" + _id, {
            method: "GET",
            credentials: "include"
          }).then(handleResponse);
    }

    guardar(_jogo){
        var myHeaders = new Headers();
        myHeaders.append("content-type", "application/json");
        console.info("teste", _jogo);
  
        return fetch("http://localhost:8080/jogos", {
          method: "POST",
          credentials: "include",
          headers: myHeaders,
          body: JSON.stringify(_jogo)
        }).then(handleResponse);
    }

    remover(_jogo){
        return fetch("http://localhost:8080/jogos/" + _jogo, {
            method: "DELETE",
            credentials: "include"
        }).then(handleResponse);
    }

    save(_user){
        var myHeaders = new Headers();
        myHeaders.append("content-type", "application/json");
        console.info("teste", _user);
  
        return fetch("http://localhost:8080/users", {
          method: "POST",
          credentials: "include",
          headers: myHeaders,
          body: JSON.stringify(_user)
        }).then(handleResponse);
    }
}

export const jService = new JogosService();