import React from "react";
import styled, { css } from "styled-components";

import RankingContainer from "../../containers/main/RankingContainer";
import BillboardContainer from "../../containers/main/BillboardContainer";

const MainLayoutBlock = styled.div`
  height: 800px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const sideBlockStyle = css`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 20%;
  align-items: center;
`;

const LeftSideBlock = styled.div`
  ${sideBlockStyle}
  margin-right: 1%;
`;

const RightSideBlock = styled.div`
  ${sideBlockStyle}
  margin-left: 1%;
`;

const MainLayout = () => {
  return (
    <MainLayoutBlock>
      <LeftSideBlock>
        <BillboardContainer roomKey={0} />
        <BillboardContainer roomKey={1} />
      </LeftSideBlock>
      <RankingContainer />
      <RightSideBlock>
        <BillboardContainer roomKey={2} />
        <BillboardContainer roomKey={3} />
      </RightSideBlock>
    </MainLayoutBlock>
  );
};

export default React.memo(MainLayout);
