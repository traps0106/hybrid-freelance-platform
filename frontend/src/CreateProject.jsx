import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import Button from '@mui/material/Button';

export default function CreateProject() {
  const [deadline, setDeadline] = React.useState(dayjs());

  return (
    <Box sx={{ backgroundColor: "#27292B", minHeight: "100vh", px: 4, py: 8 }}>
      {/* Title */}
      <Typography
        variant="h4"
        sx={{
          color: "white",
          fontWeight: "bold",
          fontFamily: "cursive",
          textAlign: "center",
          mb: 6,
        }}
      >
        Create your Project
      </Typography>

      {/* Project Name */}
      <Typography sx={{ color: "white", mb: 1 }}>
        Enter Project Name:
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        sx={{ mb: 3, backgroundColor: "white" }}
      />

      {/* Description */}
      <Typography sx={{ color: "white", mb: 1 }}>
        Enter Project Description:
      </Typography>
      <TextField
        variant="outlined"
        multiline
        rows={4}
        fullWidth
        sx={{ mb: 3, backgroundColor: "white" }}
      />

      {/* Price */}
      <Typography sx={{ color: "white", mb: 1 }}>
        Enter Price:
      </Typography>
      <TextField
        variant="outlined"
        fullWidth
        sx={{ mb: 3, backgroundColor: "white" }}
      />

      {/* Deadline */}
      <Typography sx={{ color: "white", mb: 1 }}>
        Select Project Deadline:
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={deadline}
          onChange={(newValue) => setDeadline(newValue)}
          sx={{ backgroundColor: "white", mb: 4 }}
        />
      </LocalizationProvider>

      {/* Submit Button (Centered) */}
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="outlined"
          sx={{
            color: "white",
            border: "2px solid white",
            px: 4,
            py: 1,
            fontWeight: 'bold',
            '&:hover': {
              backgroundColor: 'white',
              color: '#27292B',
            },
          }}
        >
          Submit Project
        </Button>
      </Box>
    </Box>
  );
}
