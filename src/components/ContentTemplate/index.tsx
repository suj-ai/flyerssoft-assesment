import React from "react";
import { Flex } from "antd";

type InfoItemProps = {
  label: string;
  value: string | undefined | number;
};

const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => (
  <Flex className="mb-2">
    <span>{label} :</span>
    <span className="ml-2">{value}</span>
  </Flex>
);

export default InfoItem;
