
export const BonusCard = ({ image, title, subTitle, body }: props) => {
    console.log(image, title, subTitle, body);
    return (
        <div className="bg-black flex flex-col items-center justify-start rounded-2xl py-8 px-4">
            <img src={image} className="w-52" />
            <p className="text-white font-bold text-lg">{title}</p>
            <p className="text-lightGray uppercase font-bold text-xl">{subTitle}</p>
            <p className="text-white capitalize text-lg text-center">
                {
                    body.split("|").map(e => {
                        return e;
                    })
                }
            </p>
        </div>
    )
}
