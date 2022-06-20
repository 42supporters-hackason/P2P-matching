import {
  Box,
  Button,
  Modal,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import { Controller, useForm } from "react-hook-form";
import { Card } from "../../components/Card";
import { useBoolean } from "../../hooks/useBoolean";
import { applySchema, ApplySchema } from "./validation/apply_vaildation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useCallback } from "react";
import format from "date-fns/format";

/**
 * マッチングの募集をするページ
 */
export const ApplyPage = () => {
  /**
   * misc.
   */
  const [openModal, setOpenModal] = useBoolean(false);

  /**
   * validation
   */
  const {
    register,
    control,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<ApplySchema>({
    resolver: zodResolver(applySchema),
  });

  const applyFormData = getValues();

  /**
   * event-handler
   */
  const handleApply = useCallback(() => {
    setOpenModal.on();
  }, []);

  return (
    <Box
      sx={{
        m: "30px 45px 30px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h6" fontWeight="bold" sx={{ textAlign: "center" }}>
        情報を入力してマッチング相手を募集しましょう
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "60px",
          width: "100%",
          mt: 3,
        }}
        component="form"
        onSubmit={handleSubmit(handleApply)}
      >
        <Box>
          <TextField
            variant="standard"
            label="タイトル"
            sx={{ width: "500px" }}
            {...register("title")}
          />
          {errors.title && (
            <Typography sx={{ mt: "5px", color: "error.main" }}>
              {errors.title.message}
            </Typography>
          )}
        </Box>
        <Box>
          <Typography variant="subtitle2" sx={{ mb: "5px", ml: "5px" }}>
            内容
          </Typography>
          <TextareaAutosize
            minRows={3}
            style={{
              width: "470px",
              borderRadius: "15px",
              resize: "none",
              padding: "15px",
            }}
            {...register("content")}
          />
          {errors.content && (
            <Typography sx={{ mt: "5px", color: "error.main" }}>
              {errors.content.message}
            </Typography>
          )}
        </Box>
        <Box sx={{ display: "flex", width: "500px", gap: 1 }}>
          <Box sx={{ width: "50%" }}>
            <TextField
              variant="standard"
              label="使用言語"
              sx={{ width: "100%" }}
              {...register("language")}
            />
            {errors.content && (
              <Typography sx={{ mt: "5px", color: "error.main" }}>
                {errors.content.message}
              </Typography>
            )}
          </Box>
          <Box>
            <Controller
              name="date"
              control={control}
              render={({ field: { onChange, value } }) => (
                <DesktopDatePicker
                  label="日時"
                  inputFormat="MM/dd/yyyy"
                  value={value}
                  onChange={onChange}
                  renderInput={(params) => <TextField {...params} />}
                />
              )}
            />
            {errors.date && (
              <Typography sx={{ mt: "5px", color: "error.main" }}>
                {errors.date.message}
              </Typography>
            )}
          </Box>
        </Box>
        <Button
          sx={{
            mt: "100px",
            width: "450px",
            height: "50px",
            borderRadius: "10px",
          }}
          variant="contained"
          type="submit"
        >
          上記の内容で募集をする
        </Button>
      </Box>
      <Modal open={openModal} onClose={setOpenModal.off}>
        <Box
          sx={{ my: "100px", mx: "auto", width: "50%", textAlign: "center" }}
        >
          <Card>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                justifyContent: "center",
                mx: 3,
              }}
            >
              <Typography variant="h6" fontWeight="bold">
                入力内容確認
              </Typography>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Typography>タイトル</Typography>
                <Typography variant="h5">{applyFormData.title}</Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  alignItems: "center",
                  flexWrap: "wrap",
                }}
              >
                <Typography>内容</Typography>
                <Typography variant="h5" sx={{ overflowWrap: "break-word" }}>
                  {applyFormData.content}
                </Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Typography>使用言語</Typography>
                <Typography variant="h5">{applyFormData.language}</Typography>
              </Box>
              <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                <Typography>日程</Typography>
                <Typography variant="h5">
                  {applyFormData.date &&
                    format(applyFormData.date, "yyyy-MM-dd")}
                </Typography>
              </Box>
            </Box>
          </Card>
        </Box>
      </Modal>
    </Box>
  );
};
