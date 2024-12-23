import { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Paper,
  Grid,
  TextField,
  Button,
  MenuItem,
  Snackbar,
  Alert,
  CircularProgress,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { TimePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { addDoc, collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const serviceTypes = [
  "Bespoke Suit",
  "Made-to-Measure Suit",
  "Shirt Tailoring",
  "Dress Alterations",
  "Wedding Attire",
  "Other",
];

function Appointments() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    date: null,
    time: null,
    notes: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isTimeSlotAvailable = async (dateTime) => {
    // Check 1 hour before and after the requested time
    const startTime = new Date(dateTime);
    startTime.setHours(startTime.getHours() - 1);

    const endTime = new Date(dateTime);
    endTime.setHours(endTime.getHours() + 1);

    const appointmentsRef = collection(db, "appointments");
    const q = query(
      appointmentsRef,
      where("dateTime", ">=", startTime),
      where("dateTime", "<=", endTime)
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot.empty;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // Basic validation
      if (!formData.date || !formData.time || !formData.serviceType) {
        throw new Error("Please fill in all required fields");
      }

      // Combine date and time
      const appointmentDateTime = new Date(formData.date);
      const timeDate = new Date(formData.time);
      appointmentDateTime.setHours(timeDate.getHours());
      appointmentDateTime.setMinutes(timeDate.getMinutes());

      // Check if time slot is available
      const isAvailable = await isTimeSlotAvailable(appointmentDateTime);
      if (!isAvailable) {
        throw new Error(
          "This time slot is already booked. Please select a different time."
        );
      }

      // Save to Firebase
      await addDoc(collection(db, "appointments"), {
        ...formData,
        dateTime: appointmentDateTime,
        createdAt: new Date(),
        status: "pending",
      });

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceType: "",
        date: null,
        time: null,
        notes: "",
      });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Container maxWidth="md">
        <Box py={8}>
          <Typography
            variant="h1"
            textAlign="center"
            mb={2}
            color="primary.main"
            sx={{ fontSize: { xs: "2rem", md: "3rem" } }}
          >
            Book an Appointment
          </Typography>
          <Typography
            variant="h4"
            textAlign="center"
            mb={6}
            color="text.secondary"
            sx={{
              maxWidth: "800px",
              mx: "auto",
              fontSize: { xs: "1.1rem", md: "1.3rem" },
              fontWeight: "light",
            }}
          >
            Schedule your fitting session with our expert tailors
          </Typography>

          <Paper sx={{ p: 4 }}>
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    select
                    fullWidth
                    label="Service Type"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                  >
                    {serviceTypes.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <DatePicker
                    label="Preferred Date"
                    value={formData.date}
                    onChange={(newValue) =>
                      setFormData((prev) => ({ ...prev, date: newValue }))
                    }
                    slotProps={{
                      textField: {
                        required: true,
                        fullWidth: true,
                      },
                    }}
                    minDate={new Date()}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TimePicker
                    label="Preferred Time"
                    value={formData.time}
                    onChange={(newValue) =>
                      setFormData((prev) => ({ ...prev, time: newValue }))
                    }
                    slotProps={{
                      textField: {
                        required: true,
                        fullWidth: true,
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Additional Notes"
                    name="notes"
                    multiline
                    rows={4}
                    value={formData.notes}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    fullWidth
                    disabled={loading}
                  >
                    {loading ? (
                      <CircularProgress size={24} color="inherit" />
                    ) : (
                      "Book Appointment"
                    )}
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Box>
      </Container>

      <Snackbar
        open={success}
        autoHideDuration={6000}
        onClose={() => setSuccess(false)}
      >
        <Alert severity="success" onClose={() => setSuccess(false)}>
          Appointment booked successfully! We'll contact you to confirm.
        </Alert>
      </Snackbar>

      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={() => setError("")}
      >
        <Alert severity="error" onClose={() => setError("")}>
          {error}
        </Alert>
      </Snackbar>
    </LocalizationProvider>
  );
}

export default Appointments;
