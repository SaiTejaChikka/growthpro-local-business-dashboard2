# GrowthPro Local Business Dashboard - README
url-https://growthpro-local-business-dashboard2.vercel.app/


GrowthPro is a comprehensive analytics dashboard designed to help local businesses track performance metrics, generate SEO headlines, and gain actionable insights to grow their business.

## Features

- 🚀 **Business Analytics Dashboard** - View key metrics at a glance
- ⭐ **Customer Rating & Reviews** - Track customer satisfaction metrics
- 🔍 **SEO Headline Generator** - Create optimized headlines for better search visibility
- 📊 **Engagement Score** - Measure customer engagement effectiveness
- 📈 **Performance Metrics** - Analyze business performance over time
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile devices

## Technologies Used

### Frontend
- React.js
- Vite.js
- Tailwind CSS
- Lucide React Icons
- Axios (API calls)

### Backend
- Node.js
- Express.js
- CORS (Cross-Origin Resource Sharing)

## Installation Guide

### Prerequisites
- Node.js (v18+)
- npm (v9+)

### Step-by-Step Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SaiTejaChikka/growthpro-local-business-dashboard2.git
   cd growthpro-local-business-dashboard
   ```

2. **Set up the backend:**
   ```bash
   cd backend
   npm install
   ```

3. **Set up the frontend:**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Configure environment variables:**
   Create a `.env` file in the backend directory:
   ```
   PORT=3001
   ```

## Running the Application

1. **Start the backend server:**
   ```bash
   cd backend
   npm start
   ```

2. **Start the frontend development server:**
   ```bash
   cd ../frontend
   npm run dev
   ```

3. **Access the application:**
   Open your browser and go to:
   ```
   http://localhost:5173
   ```

## Project Structure

```
growthpro-local-business-dashboard/
├── backend/
│   ├── app.js            # Main server file
│   ├── package.json        # Backend dependencies
│   └── .env                # Environment variables
│
├── frontend/
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.jsx         # Main application component
│   │   └── main.jsx        # Application entry point
│   ├── index.html          # Main HTML file
│   ├── package.json        # Frontend dependencies
│   └── vite.config.js      # Vite configuration
│
└── README.md               # This documentation file
```

## Usage Guide

1. **Enter Business Information:**
   - Fill in your business name and location
   - Click "Get Analytics"

2. **View Dashboard Metrics:**
   - Customer Rating (1-5 stars)
   - Customer Reviews (total count)
   - Engagement Score (percentage)

3. **Generate SEO Headlines:**
   - View automatically generated SEO headlines
   - Click "New Headline" for alternative suggestions

4. **Download Reports:**
   - Export your analytics data as a PDF report

## Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Support

For support or questions, please email: support@growthpro.com

---

**Ready to boost your local business?** [Get Started Now](#installation-guide)
