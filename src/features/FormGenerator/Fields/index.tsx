import { IFields } from "@/types";
import { fieldsComponents } from "../utils";

function Fields(props: IFields) {
  const { type } = props;
  const Component = fieldsComponents[type as keyof typeof fieldsComponents];
  return <div key={props.id}>{<Component {...props} />}</div>;
}

export default Fields;
