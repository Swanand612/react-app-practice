import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
} from "@mui/material";

export default function SignUpModal({
  showSignUpModal,
  setShowSignUpModal,
  username,
  setUsername,
  password,
  setPassword,
  handleSignUp,
}) {
  return (
    showSignUpModal && (
      <>
        <Modal
          open={open}
          onClose={() => setShowSignUpModal(false)}
          className="modal-overlay"
        >
          <Box className="modal">
            <Box className="modal-header">
              <Typography
                variant="h6"
                component="h2"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                Sign up
              </Typography>
              <Button
                style={{ display: "flex", flexDirection: "column" }}
                variant="textfield"
                className="close-button"
                onClick={() => setShowSignUpModal(false)}
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
              onChange={(e) => setPassword(e.target.value)}
              color={handleSignUp ? "success" : "error"}
              label="Password"
            />

            <Button
              onClick={handleSignUp}
              variant="contained"
              style={{ display: "flex", width: "100%", marginTop: "1rem" }}
            >
              Sign up
            </Button>
          </Box>
        </Modal>
      </>
    )
  );
}
