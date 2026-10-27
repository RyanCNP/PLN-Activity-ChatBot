const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/chat", (req, res) => {
  const message = req.body.message.toLowerCase();
  let response = "Desculpe, não entendi sua pergunta.";

  if (message.includes("login")) {
    response = "Você pode redefinir sua senha clicando em 'Esqueci minha senha'.";
  } else if (message.includes("plano")) {
    response = "Temos planos Básico e Premium. Qual você gostaria de saber mais?";
  } else if (message.includes("atendente")) {
    response = "Ok! Encaminhando você para um atendente.";
  } else if (message.includes("ajuda")) {
    response = "Claro! Como posso ajudá-lo?";
  } else if (message.includes("obrigado")) {
    response = "De nada! Estou sempre à disposição.";
  } else if (message.includes("perguntas frequentes")) {
    response = "Aqui estão algumas perguntas frequentes que podem te ajudar.\n1. Como redefinir a senha do login?\n2. Quais são os planos disponíveis?\n3. Como entrar em contato com um atendente?";
  }

  res.json({ reply: response });
});

app.listen(3000, () => console.log("Chatbot rodando na porta 3000"));
