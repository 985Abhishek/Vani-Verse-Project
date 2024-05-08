import { Avatar, Badge, Box, Stack, Typography } from "@mui/material";
import { useTheme} from "@mui/material/styles"
import StyledBadge from "./StyledBadge";
import { faker } from "@faker-js/faker";


const ChatElement = ({ id, name, img, msg, time, unread, online }) => {
    const theme = useTheme();
    return (
      <Box
        sx={{
          width: "100%", // adjust the width as needed<StyledBadge
          // margin: "0 auto",
          borderRadius: 1,
          display: "flex",
          alignItems: "center",
  
          backgroundColor:
            theme.palette.mode === "Light"
              ? "#FFF"
              : theme.palette.background.default,
        }}
        p={2}
      >
        <Stack
          direction="row"
          alignItems={"center"}
          justifycontent="space-between"
        >
          <Stack direction="row" spacing={2}>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar src={faker.image.avatar()}></Avatar>
              </StyledBadge>
            ) : (
              <Avatar src={faker.image.avatar()}></Avatar>
            )}
  
            <Stack spacing={"0.3"}>
              <Typography variant="subtitles2">{name}</Typography>
              <Typography variant="caption">{msg}</Typography>
            </Stack>
          </Stack>
          <Stack spacing={2} alignItems="center">
            <Typography sx={{ fontWeight: 600 }} variant="caption">
              {time}
            </Typography>
            <Badge color="primary" badgeContent={unread}></Badge>
          </Stack>
        </Stack>
  
        {/* stack 1 band hori hae  */}
      </Box>
    );
  };
  export default ChatElement;