import { IFields } from "@/types";
import Fields from "../Fields";

function GenerateSections(
  section: {
    id: string;
    title?: string;
    fields: IFields[];
  },
  index: number
) {
  return (
    <div key={`${section.id}-${index}`}>
      {section.title && (
        <h2 className="text-2xl font-bold pb-2">{section.title}</h2>
      )}
      {section.fields.map(Fields)}
    </div>
  );
}

export default GenerateSections;
