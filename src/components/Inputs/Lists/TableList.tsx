import React, { useMemo, useEffect } from "react";
import { useFieldArray } from "react-hook-form";
import { ITableList, TListItems } from "../../core/interfaces/lists";
import InputChooser from "../../core/InputChooser";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";
import styled from "styled-components";
import { InputWrapper } from "../../core/index";

const Table = styled.table`
  width: 100%;
  margin-top: 5px;
  margin-bottom: 5px;
`;

const TableHead = styled.thead``;
const TableBody = styled.tbody``;
const TableTH = styled.th`
  position: sticky;
  top: 0;
  background-color: gainsboro;
  z-index: 1;
  padding: 5px;
`;
const TableTD = styled.td``;
const TableTR = styled.tr``;
const TableHeaderTR = styled.tr``;

const IconUp = styled(FaPlusSquare)`
  color: green;
  font-size: 1.5em;
  margin: 2px 5px;
  transition: 0.2s all ease-in-out;
  &:hover {
    filter: brightness(110%);
    box-shadow: 1px 1px 10px 1px green;
  }
`;
const IconDown = styled(FaMinusSquare)`
  color: red;
  font-size: 1.5em;
  margin: 2px 5px;
  transition: 0.2s all ease-in-out;
  &:hover {
    filter: brightness(110%);
    box-shadow: 1px 1px 10px 1px red;
  }
`;

const TableList = (props: ITableList) => {
  const emptyRow = useMemo(() => {
    if (props.emptyRow) {
      return props.emptyRow;
    } else {
      let obj: Record<string, string> = {};
      props.items.forEach((i: TListItems) => (obj[i.name] = ""));
      return obj;
    }
  }, []);

  return (
    <InputWrapper disableController empty={[emptyRow]} type={props.type ?? "tablelist"} {...props}>
      <_Table {...props} emptyRow={emptyRow} />
    </InputWrapper>
  );
};

const _Table = (props: ITableList) => {
  const { fields, append, insert, remove } = useFieldArray({ name: props.name });
  console.log("TABLELIST_FIELDS", fields);
  const TableTemplate = props.elemTable ?? Table;
  const TableHeadTemplate = props.elemTableHead ?? TableHead;
  const TableBodyTemplate = props.elemTableBody ?? TableBody;
  const TableHeaderTRTemplate = props.elemTR ?? TableHeaderTR;
  const TableTRTemplate = props.elemTR ?? TableTR;
  const TableTHTemplate = props.elemTH ?? TableTH;
  const TableTDTemplate = props.elemTD ?? TableTD;

  const IconAdd = props.iconAdd ?? IconUp;
  const IconRemove = props.iconRemove ?? IconDown;

  const Row = React.memo(
    ({
      field,
      index,
      items,
      emptyRow,
      insert,
      remove,
      showIndex,
    }: {
      field: any;
      index: number;
      items: any[];
      emptyRow: any[];
      insert: any;
      remove: any;
      showIndex?: boolean;
    }) => (
      <TableTRTemplate key={`tr-${field.id}-${index}`}>
        {showIndex && <TableTDTemplate>{index + 1}</TableTDTemplate>}
        {items.map((item, iT) => (
          <TableTDTemplate key={`td-${field.id}-${iT}`} style={{ ...(item?.cellProps ?? {}) }}>
            <InputChooser fields={field[item.name] ?? null} {...item} noLabel name={`${props.name}.${index}.${item.name}`} />
          </TableTDTemplate>
        ))}
        {props.fixed !== true && (
          <TableTDTemplate>
            <IconAdd onClick={() => insert(index + 1, emptyRow)} />
            <IconRemove onClick={() => remove(index)} />
          </TableTDTemplate>
        )}
      </TableTRTemplate>
    )
  );

  useEffect(() => {
    if (fields.length === 0) {
      append(props.emptyRow);
    }
  },[]);

  const headerGenerator = useMemo(
    () =>
      props.headerTemplate ? (
        props.headerTemplate(props, fields)
      ) : (
        <TableHeadTemplate>
          <TableHeaderTRTemplate>
            {props.showIndex === true && <TableTHTemplate></TableTHTemplate>}
            {props.items.map((item: TListItems, key: number) => (
              <TableTHTemplate key={`tl-${props.name}-${item.name}-th-${key}`} style={{ ...(item?.cellProps ?? {}), ...(item?.headerProps ?? {}) }}>
                {item.label}
              </TableTHTemplate>
            ))}
            {props.fixed !== true && <TableTHTemplate></TableTHTemplate>}
          </TableHeaderTRTemplate>
        </TableHeadTemplate>
      ),
    [props.headerTemplate, fields]
  );

  // const footerGenerator = useMemo(
  //   () => (props.footerTemplate ? props.footerTemplate(props, fields) : headerGenerator),
  //   [props.footerTemplate, fields]
  // );

  const footerGenerator = props.footerTemplate ? props.footerTemplate(props, fields) : headerGenerator;

  const bodyGenerator = fields.map((field, i) => (
    <Row
      key={`row-${field.id}`}
      field={field}
      index={i}
      items={props.items}
      emptyRow={props.emptyRow}
      insert={insert}
      remove={remove}
      showIndex={props.showIndex}
    />
  ));

  return (
    <TableTemplate>
      {(props.header === undefined || props.header === "top" || props.header === "both" || props.header === "header_footer") && headerGenerator}
      <TableBodyTemplate>
        {bodyGenerator}

        {props.add_element && !props.fixed &&  <TableTR>
            <TableTH colSpan={props.items.length + (props.showIndex !== false ? 1:0)}>
              <props.add_element onClick={()=>{ insert(fields.length, props.emptyRow)}} />
            </TableTH>
          </TableTR>}
      </TableBodyTemplate>
      {props.header === "footer" || props.header === "header_footer"
        ? footerGenerator
        : (props.header === "bottom" || props.header === "both") && headerGenerator}
    </TableTemplate>
  );
};

export default TableList;
