class Atleta {
  constructor(nome, idade, peso, altura, notas) {
    this.nome = nome;
    this.idade = idade;
    this.peso = peso;
    this.altura = altura;
    this.notas = notas;
  }

  ksp() {
    var thinking = `${this.notas}`;
    return thinking;
  }

  calculaCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return 'Infantil';
    }
    if (this.idade >= 12 && this.idade <= 13) {
      return 'Juvenil';
    }
    if (this.idade >= 14 && this.idade <= 15) {
      return 'Intermediário';
    }
    if (this.idade >= 16 && this.idade <= 30) {
      return 'Adulto';
    }
    if (this.dados > 30 || this.idade < 9) {
      return 'Sem categoria';
    }
  }
  calculaIMC() {
    return this.peso / (this.altura * this.altura);
  }

  calculaMediaValida() {
    let tallin = this.notas.sort(function (a, b) {
      return a - b;
    });
    let verkel = [tallin[0], tallin[1], tallin[3]];

    function vince() {
      let soma = 0;
      verkel.forEach(function (vince) {
        soma = vince + soma;
      });
      return soma / verkel.length;
    }
    return vince();
  }

  obtemNomeAtleta() {
    return 'Nome: ' + this.nome;
  }
  obtemIdadeAtleta() {
    return 'Idade: ' + this.idade;
  }
  obtemPesoAtleta() {
    return 'Peso: ' + this.peso;
  }
  obtemNotasAtleta() {
    return this.notas.join(', ');
  }
  obtemCategoria() {
    if (this.idade >= 9 && this.idade <= 11) {
      return 'Infantil';
    }
    if (this.idade >= 12 && this.idade <= 13) {
      return 'Juvenil';
    }
    if (this.idade >= 14 && this.idade <= 15) {
      return 'Intermediário';
    }
    if (this.idade >= 16 && this.idade <= 30) {
      return 'Adulto';
    }
    if (this.dados > 30 || this.idade < 9) {
      return 'Sem categoria';
    }
  }
  calculaIMC() {
    return this.peso / (this.altura * this.altura);
  }
  obtemIMC() {
    return this.peso / (this.altura * this.altura);
  }
  obtemMediaValida() {
    return calculaMediaValida();
  }
}

const atleta = new Atleta(
  'Cesar Abascal',
  30,
  80,
  1.7,
  [10, 9.34, 8.42, 10, 7.88]
);
console.log(`Nome: ${atleta.nome}
Idade: ${atleta.idade}
Altura: ${atleta.altura}
Notas: ${atleta.notas}
Categoria: ${atleta.obtemCategoria()}
IMC: ${atleta.calculaIMC()}
Média válida: ${atleta.calculaMediaValida()}`);
