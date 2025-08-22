
const tokens = {
  "admin-token-123": "admin.html",
  "creador-token-456": "creador.html",
  "invitado-token-789": "invitado.html"
};

function validarToken(inputToken) {
  return tokens[inputToken] || null;
}
