class Pessoa {
    constructor(nome, idade, email) {
      this.nome = nome;
      this.idade = idade;
      this.email = email;
    }
  }
  
  function classificao(idade) {
    let result;
    if (idade >=0 && idade < 12) {
      result = 'Crianca';
    }else if (idade >= 12 && idade < 18){ 
      result = 'Adolescente';
    }else if (idade >= 18 && idade < 120){ 
      result = 'Adulto';
    }else{
      result = 'Valor invalido';
    }
    return result;
  }
  
  const pessoa1 = new Pessoa('Amanda', 10, 'email@email.com');
  const pessoa2 = new Pessoa('Germano', 20, 'email2@email.com');
  const pessoa3 = new Pessoa('Kaio', 30, 'email3@email.com');
  var lista = [pessoa1, pessoa2, pessoa3];
  
  
  
  console.log("Numero de pessoas na lista: ", lista.length)
  
  for (let i = 0; i < lista.length; i++) {
    console.log("#: ",i+1, "\tNome: ", lista[i].nome, "\tClassificacao: ", classificao(lista[i].idade));
  }
  
  