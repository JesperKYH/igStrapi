import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Post = ({ image, desc, likes, id }) => {
  const [newLikes, setNewLikes] = useState(likes);

  const onButtonClick = () => {
    axios
      .put(`http://localhost:1337/posts/${id}`, {
        likes: likes + 1,
      })
      .then((res) => {
        setNewLikes(res.data.likes);
      });
  };

  return (
    <Wrapper>
      <Img src={image} />
      <Desc>{desc}</Desc>
      <div>
        <Likes>
          Likes:{" "}
          <span style={{ color: "green", fontWeight: "bold" }}>{newLikes}</span>
        </Likes>
      </div>
      <Button onClick={onButtonClick}>LIKE</Button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: 2px solid black;
  border-radius: 20px;
  display: flex;
  flex-flow: column wrap;
  padding: 12px 12px;
  box-sizing: border-box;
  margin-top: 2%;
`;

const Img = styled.img`
  max-width: 300px;
  align-self: center;

  border: 4px solid orange;
`;

const Desc = styled.h4`
  font-size: 1.6rem;
  max-width: 300px;
`;

const Likes = styled.p`
  font-size: 1.5rem;
  margin: 0%;
`;

const Button = styled.button`
  width: 56px;
  height: 32px;
  outline: none;
`;

export default Post;
