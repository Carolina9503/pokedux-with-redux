import { Button } from "antd";
import { StarOutlined, StarFilled } from "@ant-design/icons";

export const StartButton = ({ isFavorite, onClick }) => {
  const Icon = isFavorite ? StarFilled : StarOutlined;
  return <Button icon={<Icon/>} onClick={onClick} />;
};
