import React from "react";
import {
  FollowerItem,
  FollowerImgWrapper,
  FollowerImg,
  FollowerInfoWrapper,
  FollowerUserName,
  FollowerIntro,
  FollowBtn,
  CancelBtn,
} from "./index.style";
import basicImg from "../../../asset/basic-profile-img.svg";

const trigger = e => {
  e.target.src = basicImg;
};

function FollowerCard({
  Link,
  image,
  accountname,
  username,
  intro,
  isfollow,
  onUnfollowClick,
  onFollowClick,
}) {
  return (
    <FollowerItem>
      <FollowerImgWrapper to={Link}>
        <FollowerImg 
        onError={e => {
          trigger(e);
        }}
        src={image} />
      </FollowerImgWrapper>
      <FollowerInfoWrapper to={Link}>
        <FollowerUserName>{username}</FollowerUserName>
        <FollowerIntro>{intro}</FollowerIntro>
      </FollowerInfoWrapper>
      {isfollow ? (
        <CancelBtn onClick={() => onUnfollowClick(accountname)}>취소</CancelBtn>
      ) : (
        <FollowBtn onClick={() => onFollowClick(accountname)}>팔로우</FollowBtn>
      )}
    </FollowerItem>
  );
}

export default FollowerCard;
