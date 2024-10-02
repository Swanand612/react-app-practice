import { Box, Button, Modal, TextField, Typography } from "@mui/material";

export default function LoginModal({
  showLoginModal,
  setShowLoginModal,
  username,
  setUsername,
  password,
  setPassword,
  handleLogin,
}) {
  return (
    showLoginModal && (
      <Modal
        open={open}
        onClose={() => setShowLoginModal(false)}
        className="modal-overlay"
      >
        <Box className="modal">
          <Box className="modal-header">
            <Typography
              variant="h6"
              component="h2"
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              Login
            </Typography>
            <Button
              style={{ display: "flex", flexDirection: "column" }}
              variant="textfield"
              className="close-button"
              onClick={() => setShowLoginModal(false)}
            >
              x
            </Button>
          </Box>
          <TextField
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1rem",
            }}
            value={username}
            color={handleLogin ? "success" : "error"}
            onChange={(e) => setUsername(e.target.value)}
            label="Username"
          />

          <TextField
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1rem",
            }}
            type="password"
            value={password}
            color={handleLogin ? "success" : "error"}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
          />

          <Button
            onClick={handleLogin}
            variant="contained"
            style={{ display: "flex", width: "100%", marginTop: "1rem" }}
          >
            Login
          </Button>
        </Box>
      </Modal>
    )
  );
}
