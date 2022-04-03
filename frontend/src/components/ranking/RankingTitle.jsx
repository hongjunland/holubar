import React from "react";
import { Container } from "@mui/material";
const RankingTitle = () => {
  return (
    <Container
      sx={{
        marginTop: 8,
        textAlign: "center",
      }}
    >
      <h1>Top 10 Rankings</h1>
      <h3>
        The top NFTs on Holuba, ranked by volume, floor price and other
        statistics.
      </h3>
    </Container>
  );
};

export default RankingTitle;
