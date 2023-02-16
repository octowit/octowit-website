import { Home, Profile, SignIn, SignUp } from "@/pages";
import {
  HomeIcon,
  UserCircleIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
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
    path: "/profile",
    element: <Profile />,
  },
  {
    icon: StarIcon,
    name: "Testimonial",
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    icon: DocumentTextIcon,
    name: "Blog",
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    icon: ArrowTopRightOnSquareIcon,
    name: "DeepTuned.ai",
    href: "https://www.material-tailwind.com/docs/react/installation",
    target: "_blank",
    element: "",
  },
];

export default routes;
