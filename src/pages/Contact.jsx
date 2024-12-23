import { Box, Typography, Grid, Paper, TextField, Button } from "@mui/material";

function Contact() {
  return (
    <Box py={8}>
      <Typography variant="h2" textAlign="center" mb={4}>
        Contact Us
      </Typography>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4 }}>
            <form>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth label="Email" type="email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField fullWidth label="Message" multiline rows={4} />
                </Grid>
                <Grid item xs={12}>
                  <Button variant="contained" size="large">
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Contact;
