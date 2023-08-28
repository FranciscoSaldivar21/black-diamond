import { BrandInformation, Modality, SocialMedia } from "./index.js"


export const Footer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-black py-12 justify-items-center">
      <BrandInformation />
      <SocialMedia />
      <Modality />
    </div>
  );
}
