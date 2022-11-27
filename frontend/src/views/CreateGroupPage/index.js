import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
//import FormControlLabel from "@mui/material/FormControlLabel";
//import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
//import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { registerApi } from "../../api";
import "./index.css";


const theme = createTheme();

export default function CreateGroupForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
    const res = await registerApi({
      username: data.get("email"),
      password: data.get("password"),
    });
    console.log("res", res);
    if (res?.success) {
      
    }
  };

  return (
    <div className="root">
      <div className="cover">
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs" className="ctn">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              </Avatar>
              <Typography component="h1" variant="h5">
                Create your own group
              </Typography>
              <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
                sx={{ mt: 3 }}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="mem"
                      label="Họ và tên thành viên thứ nhất"
                      name="member"
                      autoComplete="name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="mem"
                      label="Họ và tên thành viên thứ 2"
                      name="member"
                      autoComplete="name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="mem"
                      label="Họ và tên thành viên thứ 3"
                      name="member"
                      autoComplete="name"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="mem"
                      label="Tên nhóm"
                      name="member"
                      autoComplete="name"
                    />
                  </Grid>

                </Grid>
                
                <Button           
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >                             
                  <Link href='/group-list' className="link">Tạo nhóm</Link>
                </Button>
              </Box>
            </Box>
          </Container>
        </ThemeProvider>
      </div>
    </div>
  );
}
