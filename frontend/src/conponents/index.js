import moment from "moment";
import styled from "styled-components";
import {
  MessageOutlined,
  DeleteFilled,
  SearchOutlined,
} from "@ant-design/icons";
import React, { useMemo, useCallback } from "react";
import DataListInput from "react-datalist-input";

export const SearchInput = (props) => {
  return (
    <InputBox>
      <Icon>
        <SearchOutlined />
      </Icon>
      <DataListInput
        placeholder={props.placeholder}
        items={useMemo(() => props.datalist.map((listItem) => ({
              label: listItem.name,
              value: listItem,
              key: listItem.id,
            })), [props])}
        onSelect={useCallback((value) => props.onChange(value), [props])}
      />
    </InputBox>
  );
};

export const Listing = (props) => {
  return props.list && props.list.length ? (
    <div>
      {props.list.map((item, index) => {
        const duration = Math.round(
          moment.duration(moment().diff(moment(item.createdAt))).asMinutes()
        );
        return (
          <Item key={index}>
            <div>
              {item.user ? item.user.name : "Unidentified User"}{" "}
              <Timer>{`${duration} Minute${duration > 1 ? "s" : ""}`}</Timer>
            </div>
            <Actions>
              <span> START SESSION </span> <MessageOutlined />{" "}
              <DeleteFilled onClick={() => props.onDelete(item.id)} />
            </Actions>
          </Item>
        );
      })}
    </div>
  ) : null;
};

export const Flexbox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Wrapper = styled.div`
  padding: 10% 15%;
  background: #f8f8f8;
  width: 70%;
  @media screen and (max-width: 768px) {
    padding: 0px;
    width: 100%;
  }
`;

export const Section = styled.section`
  background: white;
  padding: 5px;
  box-shadow: 0px 0px 10px 0px #00000087;
  border-radius: 20px;
  font-family: Montserrat;
  padding-bottom: 20px;
`;

export const Title = styled.div`
  border-bottom: 2px solid #b7b7b787;
  padding: 20px 20px;
  display: flex;
  justify-content: space-between;
  & > div:first-child {
    color: #499f9b;
    font-weight: bold;
    align-self: center;
    font-size: 24px;
  }
  @media screen and (max-width: 1023px) {
    display: block;
    text-align: center;
  }
`;

export const Invite = styled.div`
  @media screen and (max-width: 1023px) {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
`;

export const InputBox = styled.div`
  position: relative;
  float: left;
  & > div {
    margin-right: 15px;
    width: 95%;
    & > input {
      height: 40px;
      border-radius: 20px;
      padding: 0 7px;
      border: 1px solid #00000041;
      box-sizing: border-box;
      @media screen and (min-width: 1024px) and (max-width: 1200px) {
        max-width: 124px;
      }
      @media screen and (max-width: 480px) {
        max-width: 130px;
      }
      :focus-visible {
        outline: none;
      }
    }
  }
`;

export const Icon = styled.span`
  position: absolute;
  right: 20px;
  background: white;
  top: 10px;
  z-index: 1;
`;

export const Button = styled.button`
  background-color: rgb(237, 173, 65);
  color: white;
  border-radius: 20px;
  width: 135px;
  height: 40px;
  border: 0px;
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  height: 30px;
  padding: 0px 20px 10px 20px;
  font-size: 14px;
  margin: 20px;
  & > div {
    line-height: 25px;
  }
  &:hover {
    border-bottom: 1px solid #b7b7b787;
  }
`;

export const Timer = styled.span`
  border: 0px;
  border-radius: 15px;
  height: 20px;
  padding: 5px 15px;
  margin: 0px 5px;
  font-size: 12px;
  background: #63b5d1;
  color: white;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
    margin: 0px;
  }
`;

export const Actions = styled.div`
  span {
    padding: 0px 5px;
    color: #499f9b;
  }
`;
