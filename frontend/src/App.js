import React, { useEffect, useState } from "react";
import axios from "axios";
import SentimentChart from "./components/SentimentChart";
import './custom.css'; // Import custom styles
import SentimentTable from "./components/SentimentTable";
import Navbar from "./components/Navbar";
import Loader from "./components/Loader";
import { Spinner } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const scrapeAndAnalyze = async () => {
    setIsProcessing(true);
    setLoading(true);
    try {
      await axios.get("http://127.0.0.1:5000/api/scrape");
    } catch (err) {
      console.error("Error during scraping:", err);
    }
  };

  const fetchSentimentData = async () => {
    try {
      const res = await axios.get("http://127.0.0.1:5000/api/sentiments");
      setData(res.data);
    } catch (error) {
      console.error("Error fetching sentiment data", error);
    } finally {
      setLoading(false);
      setIsProcessing(false);
    }
  };

  const handleStart = async () => {
    setShowDashboard(true);
    await scrapeAndAnalyze();
    await fetchSentimentData();
  };

  return (
    <div className="text-center">
      {!showDashboard ? (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 px-3 bg-light">
          <h1 className="mb-3 fw-bold display-5">📊 Sentiment Analysis Dashboard</h1>
          <p className="lead mb-4" style={{ maxWidth: "700px" }}>
            Dive into real-time sentiment insights scraped from NDTV’s latest headlines. Analyze the tone of current events using
            AI-powered sentiment analysis in an interactive dashboard.
          </p>

          <button
            className="btn btn-dark btn-lg px-5 py-3 shadow"
            onClick={handleStart}
            disabled={isProcessing}
            style={{ minWidth: "250px" }}
          >
            {isProcessing ? (
              <div className="d-flex align-items-center justify-content-center gap-2">
                <Spinner animation="border" size="sm" role="status" />
                <span className="ms-2">Scraping & Analyzing...</span>
              </div>
            ) : (
              "🚀 Start Dashboard"
            )}
          </button>

          <p className="text-muted mt-4" style={{ fontSize: "14px" }}>
            Please be patient — it may take a few seconds to fetch and analyze data.
          </p>
        </div>
      ) : (
        <>
          <Navbar />
          <h2 className="my-4">Web Scraping & Sentiment Analysis</h2>
          {loading ? (
            <Loader />
          ) : (
            <div className="container">
              <SentimentChart data={data} />
              <SentimentTable data={data} />
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;


// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import SentimentChart from "./components/SentimentChart";
// import './custom.css'; // Import custom styles
// import SentimentTable from "./components/SentimentTable";
// import Navbar from "./components/Navbar";
// import Loader from "./components/Loader";
// import { Spinner } from 'react-bootstrap';  // Bootstrap spinner
// import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap styles are included

// function App() {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [showDashboard, setShowDashboard] = useState(false);
//   const [isProcessing, setIsProcessing] = useState(false);  // New state to track processing status

//   // First trigger scrape & analyze
//   const scrapeAndAnalyze = async () => {
//     setIsProcessing(true);  // Indicate that processing has started
//     setLoading(true);       // Set loading to true while fetching data
//     try {
//       await axios.get("http://127.0.0.1:5000/api/scrape");  // This triggers scraping + sentiment analysis
//     } catch (err) {
//       console.error("Error during scraping:", err);
//     }
//   };

//   // Then fetch updated sentiment data
//   const fetchSentimentData = async () => {
//     try {
//       const res = await axios.get("http://127.0.0.1:5000/api/sentiments");
//       setData(res.data);
//     } catch (error) {
//       console.error("Error fetching sentiment data", error);
//     } finally {
//       setLoading(false);   // Set loading to false after data fetch
//       setIsProcessing(false);  // End of processing
//     }
//   };

//   // Handle button click to start the process
//   const handleStart = async () => {
//     setShowDashboard(true);
//     await scrapeAndAnalyze();  // Start scraping
//     await fetchSentimentData();  // Fetch sentiment data once scraping is done
//   };

//   return (
//     <div className="text-center mt-5">
//       {!showDashboard ? (
//         <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
//           <h1 className="mb-4">📊 Welcome to the Sentiment Dashboard</h1>
//           <button
//             className="btn btn-primary btn-lg"
//             onClick={handleStart}
//             disabled={isProcessing}  // Disable the button while processing
//           >
//             {isProcessing ? (
//               <>
//                 <Spinner animation="border" size="sm" className="mr-2" />
//                 Please wait...
//               </>
//             ) : (
//               "Start Dashboard"
//             )}
//           </button>
//         </div>
//       ) : (
//         <>
//           <Navbar />
//           <h2 className="my-4">Web Scraping & Sentiment Analysis</h2>
//           {loading ? (
//             <Loader />
//           ) : (
//             <div className="container">
//               <SentimentChart data={data} />
//               <SentimentTable data={data} />
//             </div>
//           )}
//         </>
//       )}
//     </div>
//   );
// }

// export default App;
