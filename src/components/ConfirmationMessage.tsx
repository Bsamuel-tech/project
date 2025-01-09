import React from "react";

interface ConfirmationMessageProps {
  message: string;
}

const ConfirmationMessage: React.FC<ConfirmationMessageProps> = ({
  message,
}) => {
  return (
    <div className="bg-green-100 text-green-800 px-4 py-2 rounded-md text-center mb-6">
      {message}
    </div>
  );
};

export default ConfirmationMessage;
