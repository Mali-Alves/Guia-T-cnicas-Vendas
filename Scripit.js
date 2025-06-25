const form = document.getElementById('intro-form');
const introSection = document.getElementById('intro');

window.addEventListener('load', () => {
  const nomeSalvo = localStorage.getItem('nome');
  const emailSalvo = localStorage.getItem('email');
  const quizScore = localStorage.getItem('quizScore');
  const quizTotal = localStorage.getItem('quizTotal');

  if(nomeSalvo && emailSalvo) {
    // Preenche os campos (caso queira)
    nomeInput.value = nomeSalvo;
    emailInput.value = emailSalvo;

    if(quizScore !== null && quizTotal !== null) {
      // Mostrar resultado do quiz direto
      telaInicial.style.display = 'none';
      tecnicasSection.style.display = 'none';
      quizSection.style.display = 'block';
      quizSection.querySelector('#quiz-container').style.display = 'none';
      resultDiv.style.display = 'block';
      resultDiv.textContent = `Você acertou ${quizScore} de ${quizTotal} perguntas na última vez.`;
    } else {
      // Mostrar técnicas para continuar
      telaInicial.style.display = 'none';
      tecnicasSection.style.display = 'block';
    }
  }
});


form.addEventListener('submit', (e) => {
  e.preventDefault();

  const nameInput = form.querySelector('input[type="text"]');
  const emailInput = form.querySelector('input[type="email"]');

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();

  if (!name) {
    alert('Por favor, preencha seu nome.');
    nameInput.focus();
    return;
  }
  if (!email || !email.includes('@')) {
    alert('Por favor, preencha um email válido.');
    emailInput.focus();
    return;
  }

  alert(`Bem-vindo(a), ${name}! Vamos começar sua jornada.`);

  // Esconde o cadastro
  introSection.style.display = 'none';

  // Mostra o conteúdo principal
  document.getElementById('conteudo-principal').style.display = 'block';
});
// Ao começar a jornada (botão começar)
btnComecar.addEventListener('click', () => {
  if(nomeInput.value.trim() === '' || emailInput.value.trim() === '') {
    alert('Por favor, preencha nome e e-mail para continuar.');
    return;
  }
  // Salva no localStorage
  localStorage.setItem('nome', nomeInput.value.trim());
  localStorage.setItem('email', emailInput.value.trim());

  telaInicial.style.display = 'none';
  tecnicasSection.style.display = 'block';
});

// No final do quiz, salva o resultado
function showResult() {
  quizSection.querySelector('#quiz-container').style.display = 'none';
  resultDiv.style.display = 'block';
  let msg = '';
  if(score === quizQuestions.length) {
    msg = `🎉 Incrível! Você acertou todas as ${score} perguntas!`;
  } else if(score >= quizQuestions.length * 0.7) {
    msg = `👍 Muito bom! Você acertou ${score} de ${quizQuestions.length} perguntas.`;
  } else {
    msg = `📚 Continue estudando! Você acertou ${score} de ${quizQuestions.length} perguntas.`;
  }
  resultDiv.textContent = msg;

  // Salvar resultado no localStorage
  localStorage.setItem('quizScore', score);
  localStorage.setItem('quizTotal', quizQuestions.length);
}

// No final do quiz, salva o resultado
function showResult() {
  quizSection.querySelector('#quiz-container').style.display = 'none';
  resultDiv.style.display = 'block';
  let msg = '';
  if(score === quizQuestions.length) {
    msg = `🎉 Incrível! Você acertou todas as ${score} perguntas!`;
  } else if(score >= quizQuestions.length * 0.7) {
    msg = `👍 Muito bom! Você acertou ${score} de ${quizQuestions.length} perguntas.`;
  } else {
    msg = `📚 Continue estudando! Você acertou ${score} de ${quizQuestions.length} perguntas.`;
  }
  resultDiv.textContent = msg;

  // Salvar resultado no localStorage
  localStorage.setItem('quizScore', score);
  localStorage.setItem('quizTotal', quizQuestions.length);
}
