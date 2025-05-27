// frontend/src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import api from '../api';

const Dashboard = () => {
  const [sentiments, setSentiments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api.get('/api/sentiments')
      .then(response => {
        setSentiments(response.data.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching sentiment data:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>NDTV Headline Sentiment Analysis</h2>
      {loading ? (
        <p>Loading data...</p>
      ) : (
        <table border="1" cellPadding="8" style={{ borderCollapse: 'collapse', width: '100%' }}>
          <thead>
            <tr>
              <th>Headline</th>
              <th>Sentiment</th>
              <th>Polarity</th>
              <th>Scraped At</th>
            </tr>
          </thead>
          <tbody>
            {sentiments.map((item, idx) => (
              <tr key={idx}>
                <td>{item.headline}</td>
                <td>{item.sentiment}</td>
                <td>{item.polarity.toFixed(2)}</td>
                <td>{item.scraped_at}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
