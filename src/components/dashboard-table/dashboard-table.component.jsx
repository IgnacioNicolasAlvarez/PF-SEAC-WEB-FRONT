import React, { Component } from "react";

import "./dashboard-table.styles.css";

import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const DashBoardTable = ({solicitudes}) => {
  return (
    <TableContainer className="tabla-container" component={Paper}>
      <Table className="tabla-container" aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Nro.</StyledTableCell>
            <StyledTableCell align="right">Fecha</StyledTableCell>
            <StyledTableCell align="right">Descripcion</StyledTableCell>
            <StyledTableCell align="right">Location</StyledTableCell>
            <StyledTableCell align="right">Estado</StyledTableCell>
            <StyledTableCell align="right">Clasificacion</StyledTableCell>
            <StyledTableCell align="right">Polaridad</StyledTableCell>
            <StyledTableCell align="right">Operacion</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {solicitudes.map((solicitud) => (
            <StyledTableRow key={solicitud.id}>
              <StyledTableCell component="th" scope="row">
                {solicitud.id}
              </StyledTableCell>
              <StyledTableCell align="right">{solicitud.fecha}</StyledTableCell>
              <StyledTableCell align="right">
                {solicitud.descripcion}
              </StyledTableCell>
              <StyledTableCell align="right">
                {solicitud.location}
              </StyledTableCell>
              <StyledTableCell align="right">
                {solicitud.estado}
              </StyledTableCell>
              <StyledTableCell align="right">
                {solicitud.clasificacion}
              </StyledTableCell>
              <StyledTableCell align="right">
                {solicitud.sentimentalismo}
              </StyledTableCell>
              <StyledTableCell align="right">
                <button>asd</button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DashBoardTable;
