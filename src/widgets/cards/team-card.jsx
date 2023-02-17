import PropTypes from "prop-types";
import { Card, Avatar, Typography } from "@material-tailwind/react";

export function TeamCard({ img, name, position, mode, socials }) {

  const textColor = (mode == "light") ? "blue-gray" : "text-blue-100/50";
  const shadowColor = (mode == "light") ? "shadow-gray-500/25" : "shadow-gray-900/25";

  return (
    <Card color="transparent" shadow={false} className="text-center">
      <Avatar
        src={img}
        alt={name}
        size="xxl"
        className={`rounded-full h-full w-full shadow-lg ${shadowColor}`}
      />
      <Typography variant="h5" className={`mt-6 mb-1 ${textColor}`}>
        {name}
      </Typography>
      {position && (
        <Typography className="font-normal text-blue-gray-500">
          {position}
        </Typography>
      )}
      {socials && <div className="mx-auto mt-5">{socials}</div>}
    </Card>
  );
}

TeamCard.defaultProps = {
  position: "",
  socials: null,
};

TeamCard.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  position: PropTypes.string,
  socials: PropTypes.node,
};

TeamCard.displayName = "/src/widgets/layout/team-card.jsx";

export default TeamCard;
