import React from "react";

interface IconSwitchProps {
  icon: string;
  onSwitch: () => void;
}

const IconSwitch: React.FC<IconSwitchProps> = ({ icon, onSwitch }) => {
  return (
    <div className="icon-switch" onClick={onSwitch}>
      <span className="material-icons">{icon}</span>
    </div>
  );
};

export default IconSwitch;
