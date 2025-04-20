import { Avatar, Badge } from "@nextui-org/react";
import { useContext } from "react";
import { AppContext } from "../../../context/Provider";
import shoppingBag from "@/assets/images/navbar/shopping-bag.png";

function BagIcon() {
  const { bagIconNum } = useContext(AppContext);

  return (
    <Badge
      content={bagIconNum > 0 ? bagIconNum : null}
      color="primary"
      shape="circle"
      placement="top-right"
      className="-top-[2.5px] -right-[2.5px]"
    >
      <Avatar
        radius="full"
        size="sm"
        src={shoppingBag}
        className="w-6 h-6"
        classNames={{
          base: "bg-transparent",
        }}
      />
    </Badge>
  );
}

export default BagIcon;
