type Props = {
  name: string;
  description?: string;
  image: string;
};

const Class = ({ name, description, image }: Props) => {
  const overlayStyles = `p-5 absolute z-30 flex
    h-[380px] w-[500px] flex-col items-center justify-center
    whitespace-normal bg-primary-700 text-center text-white
    opacity-0 transition duration-500 hover:opacity-90`;

  return (
    <li className="relative mx-5 inline-block h-[350px] w-[500px]">
      <div className={overlayStyles}>
        <p className="text-2xl">{name}</p>
        <p className="mt-5">{description}</p>
      </div>
      <img
        className="h-[380px] w-[500px] object-fill"
        alt={`${image}`}
        src={image}
      />
    </li>
  );
};

export default Class;
