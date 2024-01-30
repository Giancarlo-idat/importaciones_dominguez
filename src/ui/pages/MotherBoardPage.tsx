import { GridListItem } from "../components";

export const MotherBoardPage = () => {
  const images = [
    "mother1.jpg",
    "mother2.jpg",
    "mother3.jpg",
    "mother4.jpg",
    "mother6.jpg",
  ];

  return <GridListItem title="Placas Madres" images={images} />;
};
