interface IButtonProps {
  title: string,
  bgColor: string,
  textColor: string,
  onPress: () => void,
}

export const Button = (props : IButtonProps) => {
  const {title, bgColor, textColor, onPress} = props;

  return (
    <button
      onClick={onPress}
      className={`w-40 mr-2 py-2 px-5 text-black font-medium bg-darkGold rounded-lg hover:font-bold hover:bg-lightGold`}
    >
      {title}
    </button>
  );
}
