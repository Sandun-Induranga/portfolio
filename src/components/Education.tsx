import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";
import { School } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const EducationSection = () => {
  const educationData = [
    {
      title: "BEng(Hons). in Software Engineering",
      institution: "London Metropolitan University",
      year: "2024 - Present",
      status: "Pursuing",
    },
    {
      title: "Graduate Diploma in Software Engineering",
      institution: "IJSE - Institute Of Software Engineering",
      year: "2021 - 2023",
      status: "Completed",
    },
    {
      title: "Advance Level (Maths Scheme)",
      institution: "G/Siridhamma College",
      year: "2018 - 2020",
      status: "GCE A/L: Passed",
    },
    {
      title: "Secondary Education",
      institution: "G/Siridhamma College",
      year: "2012 - 2017",
      status: "GCE O/L: Passed",
    },
    {
      title: "Primary Education",
      institution: "G/Meepawala Amarasuriya College",
      year: "2006 - 2011",
      status: "GCE Scholarship: Passed",
    },
  ];

  return (
    <Box
      padding="4rem 2rem"
      style={{
        backgroundColor: "#0A0A0A",
        color: "#FFFFFF",
        borderRadius: "8px",
      }}
    >
      <Typography
        variant="h4"
        style={{ marginBottom: "2rem", textAlign: "center" }}
      >
        Education
      </Typography>
      <Timeline position="alternate">
        {educationData.map((item, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot style={{
                  backgroundColor: '#FFC107',
                }}>
                <School style={{ color: '#121212' }}/>
              </TimelineDot>
              {index < educationData.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography
                variant="h6"
                style={{ fontWeight: "bold", marginBottom: "0.5rem" }}
              >
                {item.title}
              </Typography>
              <Typography variant="body1" style={{ marginBottom: "0.25rem" }}>
                {item.institution}
              </Typography>
              <Typography
                variant="body2"
                style={{ marginBottom: "0.25rem", color: "#B0BEC5" }}
              >
                {item.year}
              </Typography>
              <Typography variant="body2" style={{ color: "#FFC107" }}>
                {item.status}
              </Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
};

export default EducationSection;
