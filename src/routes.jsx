import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  UserCircleIcon,
  DocumentTextIcon,
  ArrowTopRightOnSquareIcon,
  AcademicCapIcon,
  StarIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: AcademicCapIcon,
    name: "Services",
    path: "/home",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "Team",
    path: "/home",
    element: <Home />,
  },
  {
    icon: StarIcon,
    name: "Testimonial",
    path: "/home",
    element: <Home />,
  },
  {
    icon: DocumentTextIcon,
    name: "Blog",
    path: "/home",
    element: <Home />,
  },
  // {
  //   icon: ArrowTopRightOnSquareIcon,
  //   name: "DeepTuned.ai",
  //   href: "http://deeptuned.ai/",
  //   target: "_blank",
  //   element: "",
  // }
];

export default routes;
