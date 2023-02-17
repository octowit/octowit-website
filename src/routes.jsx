import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  UserCircleIcon,
  DocumentTextIcon,
  AcademicCapIcon,
  StarIcon,
  HomeIcon,
} from "@heroicons/react/24/solid";

export const routes = [
  {
    icon: HomeIcon,
    name: "Home",
    path: "/home",
    element: <Home />,
  },
  {
    icon: AcademicCapIcon,
    name: "Services",
    path: "/home#services",
    element: <Home />,
  },
  {
    icon: UserCircleIcon,
    name: "Team",
    path: "/home#team",
    element: <Home />,
  }
  // {
  //   icon: DocumentTextIcon,
  //   name: "Blog",
  //   path: "/home",
  //   element: <Home />,
  // },
  // {
  //   icon: ArrowTopRightOnSquareIcon,
  //   name: "DeepTuned.ai",
  //   href: "http://deeptuned.ai/",
  //   target: "_blank",
  //   element: "",
  // }
];

export default routes;
