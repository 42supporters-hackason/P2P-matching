import { Suspense, useEffect } from "react";
import { Box } from "@mui/material";
import { Outlet, useSearchParams } from "react-router-dom";
import { GeneralHeader } from "../../components/GeneralHeader";
import { usePublicRoute } from "../../hooks/usePublicRoute";
import { accessTokenStorage } from "../../utils/local-storage/access_token";

const DEMO_MP = 2;

/**
 * Client画面共通のLayout
 */
export const ClientLayout = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");
  const { goToLogin } = usePublicRoute();

  useEffect(() => {
    if (code && accessTokenStorage.load() === null) {
      accessTokenStorage.save(code);
    }
    if (accessTokenStorage.load() === null) {
      goToLogin({ replace: true });
    }
  }, [goToLogin, code]);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        minHeight: "100vh",
      }}
    >
      <GeneralHeader matchingPoint={DEMO_MP} />
      <Box sx={{ flex: "1" }}>
        <Suspense fallback={null}>
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};
