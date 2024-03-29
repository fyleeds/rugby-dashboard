
const express = require('express');
const path = require('path');
const app = express();
const PORT = 8080;

// Servir les fichiers statiques du build React
app.use(express.static(path.join(__dirname, './rugby-dashboard/build')));

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});

