import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function PageTitle({ heading, mode, children }) {

  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      
      <Typography variant="h1" color="blue-gray" className="mb-3 bg-gradient-to-r from-blue-200 via-green-500 to-indigo-600 inline-block text-transparent bg-clip-text">
        {heading}
      </Typography>
      <Typography variant="lead" className={mode === "light" ? "text-blue-gray-500": "text-blue-gray-300"}>
        {children}
      </Typography>
    </div>
  );
}

PageTitle.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  mode: "light",
};

PageTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default PageTitle;
