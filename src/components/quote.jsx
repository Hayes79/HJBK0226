import React from "react";
import styled from "styled-components";
import QuotePaper from "../assets/Quote.png";
import Flower from "../assets/flower1.png";

const Wrapper = styled.div`
  padding-top: 42px;
  padding-left: 42px;
  padding-right: 42px;
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
`;

const Content = styled.span`
  display: block;
  margin: 0 auto;
  font-size: 1.3rem;
  font-family: "mom_to_daughter";
  text-align: center;
  color: var(--title-color);
  line-height: 2.25rem;
  opacity: 0.75;
  background-image: url(${QuotePaper});
  background-repeat: no-repeat;
  background-position: center;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Quote = () => {
  return (
    <Wrapper>
      <Image src={Flower} data-aos="fade-up" />
      <Content data-aos="fade-up">
        때론 오래 된 친구처럼
        <br />
        때론 처음 만나는 사람처럼
        <br />
        그 많은 당신을 다 사랑하고 싶습니다
        <br />
        <br />
        - 이준호, (사랑 고백) -
        <br />
        <br />
      </Content>
    </Wrapper>
  );
};

export default Quote;
