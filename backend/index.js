import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// CORS Configuration
const allowedOrigins = [
  'https://growthpro-local-business-dashboard2.vercel.app',
  // Add other environments as needed:
  'http://localhost:3000' // For local development
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, etc.)
    if (!origin) return callback(null, true);
    
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 204
};

// Apply CORS middleware
app.use(cors(corsOptions));

// Handle OPTIONS requests globally
app.options('*', cors(corsOptions)); // Enable preflight for all routes

// Middleware
app.use(express.json());

// Sample SEO headlines
const headlines = [
  "Why {name} is {location}'s Best Choice in 2025",
  "Discover {name}: {location}'s Top Rated Business",
  "{name} - The #1 Service in {location}",
  "Why Everyone in {location} Loves {name}",
  "{name}: Your Trusted Partner in {location}",
  "The Best {name} Experience in {location}",
  "{name} - Leading {location} Since Day One",
  "Why {name} Stands Out in {location}",
  "{name}: Quality Service in {location}",
  "Experience the Best at {name} in {location}"
];

// Helpers
function getRandomRating() {
  return Math.round((Math.random() * 1.5 + 3.5) * 10) / 10;
}

function getRandomReviews() {
  return Math.floor(Math.random() * 500) + 50;
}

function createHeadline(name, location) {
  const randomIndex = Math.floor(Math.random() * headlines.length);
  let headline = headlines[randomIndex];
  headline = headline.replace(/{name}/g, name);
  headline = headline.replace(/{location}/g, location);
  return headline;
}

// POST /business-data
app.post('/business-data', (req, res) => {
  // Set security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  
  const { name, location } = req.body;

  if (!name || !location) {
    return res.status(400).json({
      error: 'Name and location are required'
    });
  }

  const data = {
    rating: getRandomRating(),
    reviews: getRandomReviews(),
    headline: createHeadline(name, location)
  };

  res.json(data);
});

// GET /regenerate-headline
app.get('/regenerate-headline', (req, res) => {
  // Set security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  
  const { name, location } = req.query;

  if (!name || !location) {
    return res.status(400).json({
      error: 'Name and location are required'
    });
  }

  const newHeadline = createHeadline(name, location);

  res.json({ headline: newHeadline });
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
  console.log(`✅ CORS configured for origins: ${allowedOrigins.join(', ')}`);
});
