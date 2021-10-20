import styled from "styled-components";

const Table = styled.table`
  width: 90%;
  border-collapse: separate;
  white-space: nowrap;
  margin-top: 20px;
  margin-left: 60px;
  border-spacing: 0 20px;
`;
const TableHead = styled.thead`
  background-color: #f5f8fa;
  border-radius: 8px;
  font-family: MuseoSans !important;
`;
const TableBody = styled.tbody`
  position: relative;
  font-family: MuseoSans !important;
  background-color: #f5f8fa;
`;
const HeadColumn = styled.th`
  padding: 14px 0 14px 26px;
  text-align: left;
  font-size: 15px;
  font-weight: 300;
  width:320px;
  font-family: MuseoSans !important;
  &:first-child {
    border-radius: 10px 0 0 10px;
  }
  &:last-child {
    border-radius: 0 10px 10px 0;
  }
`;
const BodyRow = styled.tr`
  padding: 20px 26px;
  margin: 0px 0px 0px 0px;
  font-family: MuseoSans !important;
`;

const BodyColumn = styled.td`
  font-family: MuseoSans !important;
  font-size: 16px;
  font-weight: 500;
  border-left: none;
  border-right: none;
  border-top: solid 1px #bbbbbb;
  border-bottom: solid 1px #bbbbbb;
  text-align: left;
  vertical-align: middle;
  padding: 14px 0 14px 26px;

  &:first-child {
    border-radius: 8px 0 0 8px;
    border: solid 1px #bbbbbb;

    border-right: none;
  }
  &:last-child {
    border-radius: 0 8px 8px 0;
    border: solid 1px #bbbbbb;

    border-left: none;
  }
`;

export default {
    Table,
    TableHead,
    TableBody,
    HeadColumn,
    BodyColumn,
    BodyRow,
}
