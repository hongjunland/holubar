import * as React from "react";
import { Box, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const Ranking = styled(Paper)(({ theme }) => ({
  backgroundColor: "blue",
  padding: theme.spacing(3),
  textAlign: "center",
  color: "white",
}));

const RankingContainer = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack spacing={4}>
        <Ranking>Rank 1</Ranking>
        <Ranking>Rank 2</Ranking>
        <Ranking>Rank 3</Ranking>
      </Stack>
    </Box>
  );
};

export default RankingContainer;
