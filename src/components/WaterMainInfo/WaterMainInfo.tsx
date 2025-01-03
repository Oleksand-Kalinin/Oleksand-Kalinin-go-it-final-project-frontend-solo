import AddWaterBtn from "../AddWaterBtn/AddWaterBtn.tsx";
import WaterDailyNorma from "../WaterDailyNorma/WaterDailyNorma.tsx";
import WaterProgressBar from "../WaterProgressBar/WaterProgressBar.tsx";

const WaterMainInfo = () => {
  return (
    <div>
      <WaterDailyNorma />
      <WaterProgressBar />
      <AddWaterBtn sectionName="WaterMainInfo" />
    </div>
  );
};

export default WaterMainInfo;
