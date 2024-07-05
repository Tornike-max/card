import React from "react";
import { Card, Image, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useNavigate } from "react-router-dom";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

const UserDetails: React.FC = () => {
  const { picture, name, surname, socialNetworks } = useSelector(
    (state: RootState) => state.user
  );

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <Card
      className="bg-primary text-white mb-3"
      style={{
        maxWidth: "30rem",
        width: "100%",
        margin: "auto",
        marginTop: "20px",
        marginBottom: "20px",
        padding: "20px",
        borderRadius: "15px",
        transition: "all 0.3s ease-in-out",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
        backgroundImage: `url(/bg.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Card.Body>
        <div className="d-flex justify-content-center mb-3">
          <Image
            src={picture || "https://via.placeholder.com/150"}
            roundedCircle
            style={{ width: "150px", height: "150px", objectFit: "cover" }}
          />
        </div>
        <Card.Title style={{ color: "white" }}>
          {name} {surname}
        </Card.Title>
        <Card.Text style={{ color: "white" }}>
          <FaTwitter style={{ marginRight: "5px" }} />
          <a
            href={socialNetworks.twitter}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            Twitter
          </a>
        </Card.Text>
        <Card.Text style={{ color: "white" }}>
          <FaFacebook style={{ marginRight: "5px" }} />
          <a
            href={socialNetworks.facebook}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            Facebook
          </a>
        </Card.Text>
        <Card.Text style={{ color: "white" }}>
          <FaInstagram style={{ marginRight: "5px" }} />
          <a
            href={socialNetworks.instagram}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "white", textDecoration: "none" }}
          >
            Instagram
          </a>
        </Card.Text>
        <Button variant="light" onClick={handleGoBack} className="mt-3">
          Go Back
        </Button>
      </Card.Body>
    </Card>
  );
};

export default UserDetails;
