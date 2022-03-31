import * as React from "react";
import { Box, Paper, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";

// const Ranking = styled(Paper)(({ theme }) => ({
//   backgroundColor: "blue",
//   padding: theme.spacing(3),
//   textAlign: "center",
//   color: "white",
// }));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(rank, nickname, amount) {
  return { rank, nickname, amount };
}

const rows = [
  createData("1", "aaa", "1,000,000"),
  createData("3", "ccc", "100,000"),
  createData("2", "bbb", "100,000"),
  createData("4", "ddd", "100,000"),
  createData("5", "eee", "100,000"),
  createData("6", "fff", "100,000"),
  createData("7", "ggg", "100,000"),
  createData("8", "hhh", "100,000"),
  createData("9", "iii", "100,000"),
  createData("10", "jjj", "100,000"),
];

const RankingContainer = () => {
  return (
    // <Box sx={{ width: "100%" }}>
    //   <Stack spacing={4}>
    //     <Ranking>Rank 1</Ranking>
    //     <Ranking>Rank 2</Ranking>
    //     <Ranking>Rank 3</Ranking>
    //   </Stack>
    // </Box>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>랭킹</StyledTableCell>
            <StyledTableCell align="right">닉네임</StyledTableCell>
            <StyledTableCell align="right">기부금액&nbsp;(₩)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.rank}>
              <StyledTableCell component="th" scope="row">
                {row.rank}
              </StyledTableCell>
              <StyledTableCell align="right">{row.nickname}</StyledTableCell>
              <StyledTableCell align="right">{row.amount}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RankingContainer;
