import React from "react";
import { Box, Modal } from "@mui/material";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import { platformLaunchOpenState } from "../state";

const PlatformLaunchModal: React.FC = () => {
  const [isPlatformLaunchOpen, setIsPlatformLaunchOpen] = useRecoilState(
    platformLaunchOpenState
  );

  return (
    <Modal
      open={isPlatformLaunchOpen}
      onClose={() => setIsPlatformLaunchOpen(false)}
      aria-labelledby="platform-launch-modal"
      aria-describedby="saved-boards"
    >
      <Box></Box>
    </Modal>
  );
};

export default PlatformLaunchModal;
