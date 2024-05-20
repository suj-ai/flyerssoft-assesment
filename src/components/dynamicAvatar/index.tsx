const Avatar = ({ name }: { name?: any }) => {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("");
  };

  const generateBackground = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";
    for (let i = 0; i < 3; i++) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
  };

  const initials = getInitials(name);
  const color = generateBackground(name);

  const customStyle = {
    background: color,
  };

  return (
    <div
      style={customStyle}
      className="h-52 w-48 rounded-lg text-white  flex justify-center items-center text-5xl"
    >
      {initials}
    </div>
  );
};

export default Avatar;
