import React, { useEffect } from "react";
import { Divider } from "antd";
import styled from "styled-components";
import Flower from "../assets/flower2.png";

const Wrapper = styled.div`
  padding-top: 42px;
  width: 70%;
  margin: 0 auto;
`;

const Title = styled.span`
  font-size: 1rem;
  color: var(--title-color);
  font-weight: bold;
  opacity: 0.85;
  margin-bottom: 0;
`;

const Image = styled.img`
  display: block;
  margin: 0 auto;
  width: 1.375rem;
  padding-bottom: 42px;
`;

const Content = styled.p`
  font-size: 0.875rem;
  line-height: 1.75;
  opacity: 0.75;
  width: 100%;
  text-align: center;
  padding-top: 42px;
  padding-bottom: 42px;
  margin: 0;
`;

const Map = styled.div`
  width: 100%;
  padding: 0;
`;

const Location = () => {
  // 카카오 맵 불러오기

  // <!-- 3. 실행 스크립트 -->
  const executeScript = () => {
    const scriptTag = document.createElement("script");
    const inlineScript = document.createTextNode(`new daum.roughmap.Lander({
    "timestamp" : "1667782337862",
    "key" : "2ceng",
    "mapWidth" : "640",
    "mapHeight" : "360"
  }).render();`);
    scriptTag.appendChild(inlineScript);
    document.body.appendChild(scriptTag);
  };

  // <!-- 2. 설치 스크립트 * 지도 퍼가기 서비스를 2개 이상 넣을 경우, 설치 스크립트는 하나만 삽입합니다. -->
  // document.write 문제가 발생해서 해당 파일을 직접 가져온다음 수정했음
  const InstallScript = () => {
    (function () {
      let c = window.location.protocol === "https:" ? "https:" : "http:";
      let a = "16137cec";

      if (window.daum && window.daum.roughmap && window.daum.roughmap.cdn) {
        return;
      }
      window.daum = window.daum || {};
      window.daum.roughmap = {
        cdn: a,
        URL_KEY_DATA_LOAD_PRE: c + "//t1.daumcdn.net/roughmap/",
        url_protocal: c,
      };
      let b =
        c +
        "//t1.daumcdn.net/kakaomapweb/place/jscss/roughmap/" +
        a +
        "/roughmapLander.js";

      // document.write -> doumnet.body.append로 수정
      const scriptTag = document.createElement("script");
      scriptTag.src = b;
      document.body.append(scriptTag);
      scriptTag.onload = () => {
        executeScript();
      };
    })();
  };

  useEffect(() => {
    InstallScript();
  }, [InstallScript]);

  return (
    <Wrapper>
      <Divider plain style={{ marginTop: 0, marginBottom: 32 }}>
        <Title>오시는 길</Title>
      </Divider>
      <Image src={Flower} />
      <Map
        id="daumRoughmapContainer1667782337862"
        className="root_daum_roughmap root_daum_roughmap_landing"
      ></Map>
      <Content>
        서울 송파구 올림픽로 240
        <br />
        잠실롯데호텔월드 3층 크리스탈볼룸
        <br />
        <br />
        <Title>버스 이용시</Title>
        <br />
        <br />
        간선 301, 351, 360, 362/ 공항 6000, 6006
        <br />
        지선 3217, 3313, 3314, 3411, 3412, 3414
        <br />
        <br />
        <Title>지하철 이용시</Title>
        <br />
        <br />
        2호선, 8호선 잠실역 3번출구 (도보 1분)
        <br />
        <br />
        <Title>주차</Title>
        호텔 입구로 들어오셔서 지하2층 지정주차장 H구역의 안내원에게 결혼식 하객이라고
        <br />
        말씀하시면 주차하실 수 있도록 지정구역을 열어드립니다.
        <br />
        *혼잡할 것으로 예상되오니 대중교통을 이용하시면 더욱 편리합니다.
        <br />
        주차는 백화점, 어드벤처, 롯데마트 주차장도 가능합니다.
      </Content>
    </Wrapper>
  );
};

export default Location;
