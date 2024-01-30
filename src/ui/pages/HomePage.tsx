import { Carrousel } from "@/ui/components";
import { MotherBoardPage } from ".";

export const Home = () => {
  const images = ["Asus-23.jpg", "Asus-intel.jpg"];

  return (
    <>
      <Carrousel images={images} autoPlay={true} />
      <MotherBoardPage />
      <MotherBoardPage />
      <MotherBoardPage />
      <MotherBoardPage />
      <MotherBoardPage />
      <MotherBoardPage />
      <MotherBoardPage />
      <MotherBoardPage />
      <MotherBoardPage />
      <MotherBoardPage />
    </>
  );
};
