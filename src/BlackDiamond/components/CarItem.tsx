
interface CarProps {
  title: string,
  description: string,
}

export const CarItem = ({ car }: CarProps) => {
  return (
    <div>
        <h4>{ car.title }</h4>
        <img alt={ car.title } src="https://acnews.blob.core.windows.net/imgnews/extralarge/NAZ_44817dbaf8084561919a0dc10cfd8b16.jpg"/>
        <p>{ car.description }</p>
    </div>
  )
}
