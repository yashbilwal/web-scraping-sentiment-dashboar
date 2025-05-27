import React from "react";
import { Table, Card } from "react-bootstrap";

const SentimentTable = ({ data }) => {
  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title>Sentiment Analysis Table</Card.Title>
        <Table striped bordered hover responsive className="mt-3">
          <thead>
            <tr>
              <th>#</th>
              <th>Headline</th>
              <th>Sentiment</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <a href={item.url} target="_blank" rel="noopener noreferrer">
                    {item.headline}
                  </a>
                </td>
                <td>{item.sentiment}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default SentimentTable;
