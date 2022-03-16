import React from "react";
import { Link } from "react-router-dom";
import {
  SearchUserList,
  SearchUserImgWrapper,
  SearchUserImg,
  SearchUserInfoWrapper,
  SearchUserName,
  SearchUserId,
} from "./index.style";
import basicImg from "../../../asset/basic-profile-img.svg";

function SearchCard({ Link, userimage, username, accountname }) {
  const trigger = e => {
    e.target.src = basicImg;
  };
  return (
    <SearchUserList>
      <SearchUserImgWrapper to={Link}>
        <SearchUserImg src={userimage} onError={e => trigger(e)} />
        <SearchUserInfoWrapper>
          <SearchUserName>{username}</SearchUserName>
          <SearchUserId>{accountname}</SearchUserId>
        </SearchUserInfoWrapper>
      </SearchUserImgWrapper>
    </SearchUserList>
  );
}
export default SearchCard;
