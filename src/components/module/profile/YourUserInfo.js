//프로필 컴포넌트입니다.
import React from "react";
import styled from "styled-components";
import chatImage from "../../../asset/icon/icon-message-circle.png";
import shareImage from "../../../asset/icon/icon-share.png";
import { Link } from "react-router-dom";
import { ProfileImage } from "../../common/image/ProfileImageStyle";
import { Button, SmaillIconButton } from "../button/button";

const YourUserInfo = ({
  username,
  accountname,
  intro,
  followerCount,
  followingCount,
  profileImage,
}) => {
  return (
    <YourUserInfoContainer>
      <YourUserInfoWrapper>
        <ProfileImage src={profileImage} alt="프로필 사진" />
        <UserName>{username}</UserName>
        <AccountName>{accountname}</AccountName>
        <Intro>{intro}</Intro>
        <FollowerWrapper to={`/profile/${accountname}/follower`}>
          <strong>{followerCount}</strong>
          <span>followers</span>
        </FollowerWrapper>
        <FollowingWrapper to={`/profile/${accountname}/following`}>
          <strong>{followingCount}</strong>
          <span>following</span>
        </FollowingWrapper>
        <ButtonWrapper>
          <SmaillIconButton icon={chatImage} />
          <Button size="md" width="120px" color="bg">
            언팔로우
          </Button>
          <SmaillIconButton icon={shareImage} />
        </ButtonWrapper>
      </YourUserInfoWrapper>
    </YourUserInfoContainer>
  );
};

const YourUserInfoContainer = styled.header`
  display: flex;
  justify-content: center;
  border-bottom: 0.5px solid #dbdbdb;
  background-color: #fff;
  margin-bottom: 6px;
`;
const YourUserInfoWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 390px;
  width: 100%;
  padding: 30px 16px 26px;

  img {
    margin-bottom: 16px;
  }
`;
const UserName = styled.strong`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 6px;
`;
const AccountName = styled.strong`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #767676;
  margin-bottom: 16px;
  &::before {
    content: "@";
    margin-right: 3px;
  }
`;
const Intro = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #767676;
  margin-bottom: 24px;
`;
const FollowerWrapper = styled(Link)`
  position: absolute;
  left: 56px;
  top: 65px;
  text-align: center;
  cursor: pointer;

  strong {
    display: block;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 6px;
  }

  span {
    font-size: 10px;
    color: #767676;
  }
`;

const FollowingWrapper = styled(Link)`
  position: absolute;
  left: 287px;
  top: 65px;
  text-align: center;
  cursor: pointer;

  strong {
    display: block;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 6px;
  }

  span {
    font-size: 10px;
    color: #767676;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
`;
export default YourUserInfo;
