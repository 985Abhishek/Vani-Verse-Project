import React from "react";
import { Chat_History } from "../../data";
import {
    LinkMsg,
  DocMsg,
  MediaMsg,
  ReplyMsg,
  TextMsg,
  TimeLine,
} from "./MsgTypes";
import { Box, Stack } from "@mui/material";

const Message = ({menu}) => {
  return (
    <Box p={3}>
      <Stack spacing={3}>
        {Chat_History.map((el) => {
          switch (el.type) {
            case "divder":
              //
              return <TimeLine el={el} menu={menu} />;
            case "msg":
              switch (el.subtype) {
                case "img":
                  return <MediaMsg el={el} menu={menu}  />;
                case "doc":
                  return <DocMsg el={el} menu={menu}  />;
                case "link":
                  return <LinkMsg el={el} menu={menu}  />;
                case "reply":
                  return <ReplyMsg el={el} menu={menu} />;

                default:
                 return <TextMsg el={el} menu={menu} />;
              }
              

            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

export default Message;
