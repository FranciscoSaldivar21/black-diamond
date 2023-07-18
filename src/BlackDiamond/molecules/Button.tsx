interface IButtonProps {
  title: string,
  bgColor: string,
  textColor: string,
  onPress: () => void,
}

export const Button = (props : IButtonProps) => {
  const {title, bgColor, textColor, onPress} = props;
  console.log(props)
  return (
    <button
      onClick={onPress}
      className={`w-40 mr-2 py-2 px-5 text-white bg-blue-500 rounded-lg hover:font-semibold`}
    >
      {title}
    </button>
  );
}
