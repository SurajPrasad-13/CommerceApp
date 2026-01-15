import Button from "@mui/material/Button";
import { useState } from "react";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const QtyBox = () => {
  const [cartValue, setcartValue] = useState<number>(1);
  console.log(cartValue)
  return (
    <div className="QtyBox flex items-center border-2 border-black/20 rounded relative z-0">
      <input
        type="number"
        readOnly
        className="w-[67%] h-10 p-2  focus:outline-0 "
        value={cartValue}
        onChange={(e) =>
          setcartValue(Math.max(1, parseInt(e.target.value || "1", 10)))
        }
        min={1}
      />

      <div className=" border-l border-gray-400 absolute top-0 right-0 flex flex-col z-50!">
        <Button
          aria-label="Increase quantity"
          onClick={() => setcartValue((c) => (c ?? 1) + 1)}
          className="min-w-6! w-6! h-5! text-black/60! rounded-none! hover:bg-[#f6f6f6]!"
        >
          <FaAngleUp className="text-xs" />
        </Button>
        <Button
          aria-label="Decrease quantity"
          onClick={() => setcartValue((c) => Math.max(1, (c ?? 1) - 1))}
          className="min-w-6! w-6! h-5! text-black/60! rounded-none! hover:bg-[#f6f6f6]!"
          disabled={cartValue <= 1}
        >
          <FaAngleDown className=""  />
        </Button>
      </div>

      
    </div>
  );
};

export default QtyBox;
