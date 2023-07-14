interface IButtonProps {
  title: string,
  bgColor: string,
  textColor: string,
  onPress: () => void,
}

export const Button = (props : IButtonProps) => {
  const {title, bgColor, textColor, onPress} = props;
  console.log({props})
  return (
    <button
      onClick={onPress}
      className={`text-${textColor} py-1 px-3 rounded-lg hover:text-darkGold hover:font-semibold`}
    >
      {props.title}
    </button>
  );
}
