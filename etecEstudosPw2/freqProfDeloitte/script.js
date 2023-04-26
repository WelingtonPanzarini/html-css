const nota1 = document.getElementById('nota1');
const nota2 = document.getElementById('nota2');
const nota3 = document.getElementById('nota3');
const nota4 = document.getElementById('nota4');
const calcularBtn = document.getElementById('calcular-btn');
const media = document.getElementById('media');

calcularBtn.addEventListener('click', () => {
  if (nota1.validity.valid && nota2.validity.valid && nota3.validity.valid && nota4.validity.valid) {
    const notas = [Number(nota1.value), Number(nota2.value), Number(nota3.value), Number(nota4.value)];
    const total = notas.reduce((sum, nota) => sum + nota, 0);
    const mediaCalculada = total / notas.length;
    if (mediaCalculada > 10) {
      media.innerHTML = 'A média não pode ser maior que 10!';
      media.classList.add('error');
    } else {
      media.innerHTML = `Média: ${mediaCalculada.toFixed(2)}`;
      media.classList.remove('error');
    }
  } else {
    media.innerHTML = 'Por favor, preencha todas as notas!';
    media.classList.add('error');
  }
  
  let n1V = nota1.value, n2V = nota2.value, n3V = nota3.value, n4V = nota4.value  
  let conds = [nota1, nota2, nota3, nota4]
  for (i = 0; i < conds.length; i++) {
      if (conds[i].value == "") {
          console.log(conds[i])

          conds[i].classList.add('borderVermelha')
          conds[i].placeholder = "Informe uma nota"
      }
      }      
});