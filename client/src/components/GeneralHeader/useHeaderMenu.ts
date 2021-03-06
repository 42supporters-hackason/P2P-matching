import { useClientRoute } from "../../hooks/useClientRoute";
import { ClientMenu } from "./types";

interface Props {
  /**
   * ログアウトハンドラ
   */
  onLogout: () => void;
}

/**
 * 一般ユーザ向けmenu
 */
export const useClientHeaderMenu = ({ onLogout }: Props): ClientMenu => {
  const { goToApply, goToRecruit, goToEditProfile } = useClientRoute();

  return {
    listMenu: [
      {
        label: "募集する",
        action: goToApply,
      },
      {
        label: "一覧を見る",
        action: goToRecruit,
      },
    ],
    userMenu: [
      {
        label: "プロフィール",
        action: goToEditProfile,
      },
      {
        label: "ログアウト",
        action: onLogout,
      },
    ],
  };
};
