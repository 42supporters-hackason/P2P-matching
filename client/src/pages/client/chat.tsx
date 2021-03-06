import { useCallback, useEffect, useRef } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import LogoutIcon from "@mui/icons-material/Logout";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import {
  Avatar,
  Box,
  Button,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";
import { ChatMessage } from "../../components/ChatMessage";
import { IconButton } from "../../components/IconButton";
import { VideoButtons } from "../../components/VideoButtons";
import { useSendMessageMutation } from "../../gen/graphql-client";
import { useBoolean } from "../../hooks/useBoolean";
import { useClientRoute } from "../../hooks/useClientRoute";
import { unreachable } from "../../utils";
import { useChatHooks } from "../hooks/useChatHooks";
import { ChatSchema, chatSchema } from "../validation/chat_validation";

/**
 * p2p相手とやり取りをするページ
 */
export const ChatPage = () => {
  /**
   * misc.
   */
  const [volumeOn, setVolumeOn] = useBoolean(false);
  const [videoOn, setVideoOn] = useBoolean(false);
  const { goToHome } = useClientRoute();
  const ref = useRef<HTMLDivElement>(null);
  const [searchParams] = useSearchParams();
  const roomId = searchParams.get("room_id");
  const { messages, opponentGithubLogin, opponentName } = useChatHooks(
    roomId ?? unreachable()
  );

  const [sendMessage] = useSendMessageMutation();

  /**
   * form validation
   */
  const { register, handleSubmit, setValue } = useForm<ChatSchema>({
    resolver: zodResolver(chatSchema),
  });

  /**
   * event-handler
   */
  const handleMessageSubmit: SubmitHandler<ChatSchema> = useCallback(
    async ({ message }) => {
      if (roomId !== null) {
        await sendMessage({
          variables: {
            postId: roomId,
            content: message,
          },
          onCompleted: () => {
            setValue("message", "");
          },
        });
      }
    },
    [sendMessage, roomId, setValue]
  );

  useEffect(() => {
    ref.current?.scrollIntoView();
  }, [messages]);

  return (
    <Box sx={{ display: "flex", height: "calc(100vh - 68.5px)" }}>
      <Box sx={{ width: "70%", mx: 3, mt: 3 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", height: "85%", width: "100%", gap: 3 }}>
            <Box sx={{ width: "50%", border: 1 }}>自分</Box>
            <Box sx={{ width: "50%", border: 1 }}>相手</Box>
          </Box>
          <Box sx={{ m: "auto", display: "flex", gap: 2 }}>
            <VideoButtons
              volumeOn={volumeOn}
              videoOn={videoOn}
              onClickVideo={setVideoOn.toggle}
              onClickVolume={setVolumeOn.toggle}
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          height: "calc(100vh - 68.5px)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            borderBottom: 1,
            borderColor: "primary.main",
            py: "30px",
          }}
        >
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Avatar src={`https://github.com/${opponentGithubLogin}.png`} />
            <Typography fontWeight="bold">{opponentName}</Typography>
          </Box>
          <IconButton sx={{ mr: 2 }} onClick={() => goToHome()}>
            <Typography fontWeight="bold" sx={{ mr: 1 }}>
              退出する
            </Typography>
            <LogoutIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            my: "15px",
            mx: "25px",
            overflow: "scroll",
            display: "flex",
            flexDirection: "column",
            gap: 3,
          }}
        >
          {messages &&
            messages.map(({ id, content, createdBy }) => (
              <Box key={id}>
                <ChatMessage
                  key={id}
                  content={content}
                  side={createdBy === "taisei-13046" ? "right" : "left"}
                />
              </Box>
            ))}
          <div ref={ref} />
        </Box>
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            mt: "auto",
            mb: "30px",
          }}
          component="form"
          onSubmit={handleSubmit(handleMessageSubmit)}
        >
          <TextareaAutosize
            minRows={3}
            maxRows={3}
            style={{
              width: "80%",
              borderRadius: "15px",
              resize: "none",
              padding: "15px",
            }}
            {...register("message")}
          />
          <Button type="submit">
            <SendRoundedIcon sx={{ cursor: "pointer", m: "auto" }} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
