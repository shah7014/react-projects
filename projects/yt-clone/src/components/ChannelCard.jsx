import React from "react";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";
import {
  demoChannelTitle,
  demoChannelUrl,
  demoThumbnailUrl,
} from "../utils/constants";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";

const ChannelCard = ({
  channel: {
    snippet: { channelId, channelTitle, thumbnails },
    statistics,
  },
}) => {
  return (
    <Link to={channelId ? `/channel/${channelId}` : demoChannelUrl}>
      <Card sx={{ background: "transparent" }}>
        <Stack justifyContent="center" alignItems="center">
          <CardMedia
            component="img"
            image={thumbnails?.high?.url || demoThumbnailUrl}
            sx={{ width: "180px", height: "180px", borderRadius: "50%" }}
          />
          <CardContent>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={1}
            >
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "white" }}
              >
                {channelTitle || demoChannelTitle}
              </Typography>
              <CheckCircle sx={{ fontSize: "15px", color: "gray" }} />
            </Stack>
            {statistics && statistics?.subscriberCount && (
              <Typography>
                {parseInt(statistics.subscriberCount).toLocaleString() +
                  " Subscribers"}
              </Typography>
            )}
          </CardContent>
        </Stack>
      </Card>
    </Link>
  );
};

export default ChannelCard;
