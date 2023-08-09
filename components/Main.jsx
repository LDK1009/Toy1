import React, { useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.jpg";
import styled from "@emotion/styled";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 10px;
`;

const Container = styled.div`
  width: 360px;
  height: 800px;
  background-color: #faefc8;
  text-align: center;
`;

const Information = styled.div`
  text-align: center;
  font-size: 15px;
  /* font-weight: bold; */
`;

function CountBox({ init, final }) {
  const count = useMotionValue(init);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, final, { duration: 7 });

    return animation.stop;
  }, []);
  return (
    <>
      <motion.div
        style={{
          display: "inline-block",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        {rounded}
      </motion.div>
    </>
  );
}

// 인스타 https://www.instagram.com/yunjeong4736/
// 블로그 https://m.blog.naver.com/jang1013jyj/223170880621
// 출신고교 : 부천여자고등학교
// 대학교 : 순천향대학교(생명과학과)
// 동아리 : 뽀동뽀동(총무)
// 취미 : MMA
// 장기 : 나비잡기

// 고백 받은 수
// 펀치 기계 점수
// 이미지 클릭 호버 시 다른 이미지로 변경 및 이미지 확대
// 이미지 클릭 시 승엽이 사진 가져와서 뽀뽀하는 모션 추가
const Main = () => {
  const [imgLink, setImgLink] = useState(img1);
  const showImg2 = () => {
    setImgLink(img2);
  };
  const showImg1 = () => {
    setImgLink(img1);
  };
  const yunjeong = {
    highSchool: "부천여자고등학교",
    university: "순천향대학교(생명과학과 22)",
    crew: "뽀동뽀동(총무)",
    hobby: "MMA",
    pendant: "나비잡기",
  };

  return (
    <>
      <Container>
        <ProfileImage
          src={imgLink}
          alt="윤정 사진1"
          onMouseEnter={showImg2}
          onMouseLeave={showImg1}
        ></ProfileImage>
        <div>
          고백 횟수 : <CountBox init={733} final={783} />
        </div>
        <div>
          펀치 기계 점수 : <CountBox init={800} final={847} />
        </div>
        <Information className="text-left ms-[70px] mt-[30px] mb-6">
          <div className="text-left">고등학교 : {yunjeong.highSchool}</div>
          <div className="text-left">대학교 : {yunjeong.university}</div>
          <div className="text-left">동아리 : {yunjeong.crew}</div>
          <div className="text-left">취미 : {yunjeong.hobby}</div>
          <div className="text-left">특기 : {yunjeong.pendant}</div>
        </Information>
        <div className="flex justify-center ">
          <a
            href="https://www.instagram.com/yunjeong4736/"
            target="blank"
            style={{ color: "black", marginRight: "10px" }}
          >
            <FaInstagram />
          </a>
          <a
            href="https://m.blog.naver.com/jang1013jyj/223170880621"
            target="blank"
            style={{ color: "black" }}
          >
            <FaBlog />
          </a>
        </div>
      </Container>
    </>
  );
};

export default Main;
