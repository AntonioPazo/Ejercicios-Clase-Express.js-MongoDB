require('dotenv').config(); // Cargar variables de entorno
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

const app = express();

// Configurar EJS
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

// Middleware para servir archivos estáticos
app.use(express.static(__dirname + '/public'));

// Middleware para manejar formularios
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Middleware para permitir PUT y DELETE en formularios HTML
app.use(methodOverride('_method'));

// Conexión a MongoDB Atlas
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Conectado a MongoDB Atlas'))
.catch(err => console.error('❌ Error de conexión:', err));

// Importar y usar rutas
const rutas = require('./router/rutas');
const pokemonRoutes = require('./router/pokemon');

app.use('/', rutas);
app.use('/pokemon', pokemonRoutes);

// Middleware para error 404
app.use((req, res) => {
    res.status(404).render('index', { titulo: '404', mensaje: 'Página no encontrada' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

const helmet = require('helmet'); // Protege contra ataques comunes
const cors = require('cors'); // Controla qué dominios pueden acceder a la API
const rateLimit = require('express-rate-limit'); // Limita el número de peticiones

// Habilitar Helmet para seguridad en headers HTTP
app.use(helmet());

// Configurar CORS (permite acceso desde cualquier origen)
app.use(cors());

// Limitar las solicitudes para evitar ataques DDoS
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutos
    max: 100, // Máximo 100 peticiones por IP
    message: 'Demasiadas solicitudes desde esta IP, intenta más tarde'
});
app.use(limiter);
