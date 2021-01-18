import React, { useState } from "react";

import {
  Container,
  ContainerTabs,
  Tabs,
  ContainerPanel,
  Panel,
} from "./styles";

const Tab = ({ children, tabs }) => {
  const [activeTab, setTab] = useState(1);

  return (
    <Container>
      <ContainerPanel>
        {children.map((select, index) => (
          <Panel
            key={index}
            display={activeTab === index + 1 ? "flex" : "none"}
          >
            {select}
          </Panel>
        ))}
      </ContainerPanel>
      <ContainerTabs>
        {tabs.map((tab, index) => (
          <Tabs
            key={index}
            background={activeTab === index + 1 ? "#003c8f" : "#01224f"}
            onClick={() => setTab(index + 1)}
          >
            {tab}
          </Tabs>
        ))}
      </ContainerTabs>
    </Container>
  );
};

export default Tab;
