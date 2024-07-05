import React from "react";
import { Card, Button, Form, Image, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  setUserInfo,
  toggleInput,
  setSocialNetwork,
  setPicture,
  setName,
  setSurname,
} from "../slices/userSlice";
import { useNavigate } from "react-router-dom";
import { RootState } from "../store/store";

const ProfileEdit: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { picture, name, surname, socialNetworks, showInputs } = useSelector(
    (state: RootState) => state.user
  );

  const handleSave = () => {
    dispatch(
      setUserInfo({
        picture,
        name,
        surname,
        socialNetworks,
        showInputs: {
          twitter: false,
          facebook: false,
          instagram: false,
        },
      })
    );
    navigate("/user");
  };

  const handleToggleInput = (network: string) => {
    dispatch(toggleInput(network));
  };

  return (
    <Card
      className="text-white mb-3"
      style={{
        maxWidth: "30rem",
        width: "100%",
        margin: "auto",
        marginTop: "20px",
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
        <Card.Title>Profile Information</Card.Title>
        <Form>
          <Form.Group controlId="formPicture">
            <Form.Label>Picture URL</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter picture URL"
              value={picture}
              onChange={(e) => dispatch(setPicture(e.target.value))}
            />
          </Form.Group>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              value={name}
              onChange={(e) => dispatch(setName(e.target.value))}
            />
          </Form.Group>
          <Form.Group controlId="formSurname">
            <Form.Label>Surname</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter surname"
              value={surname}
              onChange={(e) => dispatch(setSurname(e.target.value))}
            />
          </Form.Group>
          <div className="mt-2">
            <Row className="justify-content-center mb-3">
              <Col xs="auto">
                <FaTwitter
                  size={30}
                  onClick={() => handleToggleInput("twitter")}
                  style={{
                    cursor: "pointer",
                    opacity: showInputs.twitter ? 1 : 0.5,
                  }}
                />
              </Col>
              <Col xs="auto">
                <FaFacebook
                  size={30}
                  onClick={() => handleToggleInput("facebook")}
                  style={{
                    cursor: "pointer",
                    opacity: showInputs.facebook ? 1 : 0.5,
                  }}
                />
              </Col>
              <Col xs="auto">
                <FaInstagram
                  size={30}
                  onClick={() => handleToggleInput("instagram")}
                  style={{
                    cursor: "pointer",
                    opacity: showInputs.instagram ? 1 : 0.5,
                  }}
                />
              </Col>
            </Row>
          </div>
          {showInputs.twitter && (
            <Form.Group controlId="formTwitter">
              <Form.Label>Twitter URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Twitter URL"
                value={socialNetworks.twitter}
                onChange={(e) =>
                  dispatch(
                    setSocialNetwork({
                      network: "twitter",
                      value: e.target.value,
                    })
                  )
                }
              />
            </Form.Group>
          )}
          {showInputs.facebook && (
            <Form.Group controlId="formFacebook">
              <Form.Label>Facebook URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Facebook URL"
                value={socialNetworks.facebook}
                onChange={(e) =>
                  dispatch(
                    setSocialNetwork({
                      network: "facebook",
                      value: e.target.value,
                    })
                  )
                }
              />
            </Form.Group>
          )}
          {showInputs.instagram && (
            <Form.Group controlId="formInstagram">
              <Form.Label>Instagram URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Instagram URL"
                value={socialNetworks.instagram}
                onChange={(e) =>
                  dispatch(
                    setSocialNetwork({
                      network: "instagram",
                      value: e.target.value,
                    })
                  )
                }
              />
            </Form.Group>
          )}
          <Button
            variant="light"
            onClick={handleSave}
            style={{ width: "100%" }}
            className="mt-3"
          >
            Save
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default ProfileEdit;
