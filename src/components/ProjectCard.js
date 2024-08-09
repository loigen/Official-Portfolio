import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
} from "@mui/material";

const ProjectCard = ({ title, description, imageUrl, demoLink, codeLink }) => (
  <Card
    sx={{
      borderRadius: "12px",
      boxShadow: "0px 4px 15px rgba(0,0,0,0.1)",
      transition: "transform 0.3s, box-shadow 0.3s",
      "&:hover": {
        transform: "scale(1.05)",
        boxShadow: "0px 8px 20px rgba(0,0,0,0.2)",
      },
    }}
  >
    {imageUrl && (
      <CardMedia component="img" height="140" image={imageUrl} alt={title} />
    )}
    <CardContent>
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      {demoLink && (
        <Button size="small" color="primary" href={demoLink} target="_blank">
          Demo
        </Button>
      )}
      {codeLink && (
        <Button size="small" color="secondary" href={codeLink} target="_blank">
          Code
        </Button>
      )}
    </CardActions>
  </Card>
);

export default ProjectCard;
