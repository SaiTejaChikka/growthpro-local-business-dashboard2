import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Configure allowed origins
const allowedOrigins = [
  'https://growthpro-local-business-dashboard2.vercel.app',
  'http://localhost:3000'
];

// Enhanced CORS configuration
const corsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Blocked by CORS policy'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 204
};

// Apply CORS middleware FIRST
app.use(cors(corsOptions));

// Security headers middleware
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  next();
});

// Body parsing middleware
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

// Helper functions
function getRandomRating() {
  return Math.round((Math.random() * 1.5 + 3.5) * 10) / 10;
}

function getRandomReviews() {
  return Math.floor(Math.random() * 500) + 50;
}

function createHeadline(name, location) {
  const randomIndex = Math.floor(Math.random() * headlines.length);
  return headlines[randomIndex]
    .replace(/{name}/g, name)
    .replace(/{location}/g, location);
}

// Explicit OPTIONS handler for /business-data
app.options('/business-data', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', allowedOrigins[0]);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.status(204).end();
});

// POST endpoint for business data
app.post('/business-data', (req, res) => {
  try {
    // Explicitly set CORS headers for actual response
    res.setHeader('Access-Control-Allow-Origin', allowedOrigins[0]);
    res.setHeader('Access-Control-Allow-Credentials', 'true');

    const { name, location } = req.body;

    if (!name || !location) {
      return res.status(400).json({ 
        error: 'Both name and location are required' 
      });
    }

    if (typeof name !== 'string' || typeof location !== 'string') {
      return res.status(400).json({ 
        error: 'Name and location must be strings' 
      });
    }

    const businessData = {
      rating: getRandomRating(),
      reviews: getRandomReviews(),
      headline: createHeadline(name, location)
    };

    res.json(businessData);
  } catch (error) {
    console.error('POST /business-data error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET endpoint for headline regeneration
app.get('/regenerate-headline', (req, res) => {
  try {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', allowedOrigins[0]);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    
    const { name, location } = req.query;

    if (!name || !location) {
      return res.status(400).json({ 
        error: 'Both name and location are required' 
      });
    }

    const newHeadline = createHeadline(
      decodeURIComponent(name), 
      decodeURIComponent(location)
    );

    res.json({ headline: newHeadline });
  } catch (error) {
    console.error('GET /regenerate-headline error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).send('OK');
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log('✅ Allowed origins:', allowedOrigins.join(', '));
});
