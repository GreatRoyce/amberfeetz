import { IoCameraOutline } from "react-icons/io5";
import { LiaCommentSolid } from "react-icons/lia";
import { BsTools } from "react-icons/bs";

const repairSteps = [
  {
    id: "01",
    title: "Send Photos",
    description:
      "Send 2–3 clear photos of the soles, upper and worn areas on WhatsApp.",
    icon: IoCameraOutline,
  },
  {
    id: "02",
    title: "Get an Assessment",
    description:
      "We review your photos and recommend repairs, with a cost and time estimate.",
    icon: LiaCommentSolid,
  },
  {
    id: "03",
    title: "Restore & Enjoy",
    description:
      "Drop off or ship your pair. We repair and return them with care.",
    icon: BsTools,
  },
];

export default repairSteps;
