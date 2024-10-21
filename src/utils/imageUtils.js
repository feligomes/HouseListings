import testImage from "../assets/test_image.jpg";
import testImage2 from "../assets/test_image2.jpg";
import testImage3 from "../assets/test_image3.jpg";
import testImage4 from "../assets/test_image4.jpg";
import testImage5 from "../assets/test_image5.jpg";
import testImage6 from "../assets/test_image6.jpg";

const testImages = [testImage, testImage2, testImage3, testImage4, testImage5, testImage6];

export const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * testImages.length);
  return testImages[randomIndex];
};
