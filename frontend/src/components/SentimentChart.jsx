// frontend/src/components/SentimentChart.js
import React, { useEffect, useRef } from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Card } from "react-bootstrap";

// ✅ Register required chart components
ChartJS.register(ArcElement, Tooltip, Legend);

const SentimentChart = ({ data }) => {
  const chartRef = useRef(null);

  const sentiments = {
    Positive: 0,
    Negative: 0,
    Neutral: 0,
  };

  data.forEach((item) => {
    if (sentiments[item.sentiment] !== undefined) {
      sentiments[item.sentiment]++;
    }
  });

  const chartData = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        label: "Sentiment Distribution",
        data: [sentiments.Positive, sentiments.Negative, sentiments.Neutral],
        backgroundColor: ["#28a745", "#dc3545", "#ffc107"],
        borderColor: ["#fff", "#fff", "#fff"],
        borderWidth: 1,
      },
    ],
  };

  // 🧹 Cleanup chart on unmount
  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title>Sentiment Chart</Card.Title>
        <div style={{ maxWidth: 400, margin: "auto" }}>
          <Pie data={chartData} ref={chartRef} />
        </div>
      </Card.Body>
    </Card>
  );
};

export default SentimentChart;
