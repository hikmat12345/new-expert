//libs
import { VerificationInput } from "@/@types/Input";
import dynamic from "next/dynamic";
const ReactCodeInput = dynamic(import("react-code-input"));
//scss

export const FAECodeInput = ({
  justify,
  align,
  className = "",
  type = "numeric",
  fields = 6,
  inputStyle,
  getValue = () => {},
}: VerificationInput) => {
  return (
    <div style={{ textAlign: "center" }}>
      <ReactCodeInput
        className="fae--code-input"
        inputStyle={{
          ...inputStyle,
          border: "none",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
          backgroud: "white",
          margin: "4px",
          outline: "none",
          textAlign: "center",
          height: "60px",
          paddingLeft: "7px",
          width: "60px",
          borderRadius: "5px",
        }}
        type={"number"}
        fields={fields}
        onChange={getValue}
      />
    </div>
  );
};
