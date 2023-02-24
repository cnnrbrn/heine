import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import PersonAddDisabledOutlinedIcon from "@mui/icons-material/PersonAddDisabledOutlined";
import { BASE_URL, PROFILE_URL } from "../constants/api";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";

const url = BASE_URL + PROFILE_URL;

export default function FollowUnfollow({ profileName }) {
  const { auth } = useContext(AuthContext);
  const { accessToken } = auth;

  const follow = () => {
    fetch(`${url}/${profileName}/follow`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({}),
    })
      .then((response) => {
        console.log("Received response", response);
        if (!response.ok) {
          throw new Error(`Error ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log("Received data", data);
        window.location.reload();
      })
      .catch((error) => console.error(error));
  };

  const unFollow = () => {
    fetch(`${url}/${profileName}/unfollow`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then((response) => {
        console.log("Received response", response);
        if (!response.ok) {
          throw new Error(`Error ${response.status}`);
        }

        return response.json();
      })
      .then((data) => {
        console.log("Received data", data);
        window.location.reload();
      })
      .catch((error) => console.error(error));
  };

  return (
    <Box>
      <Button
        variant="contained"
        size="medium"
        onClick={follow}
        sx={{
          marginRight: { xs: 0, md: "20px" },
          marginBottom: { xs: "10px", md: 0 },
        }}
      >
        <PersonAddOutlinedIcon /> Follow
      </Button>
      <Button variant="contained" size="medium" onClick={unFollow}>
        <PersonAddDisabledOutlinedIcon /> Unfollow
      </Button>
    </Box>
  );
}
