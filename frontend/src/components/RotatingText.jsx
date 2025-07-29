import { useEffect, useState } from "react";

const RotatingText = () => {
  const interests = [
    "enjoy solving problems through code ⚙️",
    "am one of those nerds that play Dungeons & Dragons 🧙‍♂️",
    "am tall but terrible at basketball ⛹️",
    "love motorsport 🏎️",
    "got stuck in tutorial hell 🤦‍♂️",
    "always need to try wacky flavoured snacks 🍔",
    "am (or at least try to be) a fullstack developer 👨‍💻",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % interests.length);
    }, 3000);

    return () => clearInterval(interval);
  });

  return <span>I {interests[index]}</span>;
};

export default RotatingText;
