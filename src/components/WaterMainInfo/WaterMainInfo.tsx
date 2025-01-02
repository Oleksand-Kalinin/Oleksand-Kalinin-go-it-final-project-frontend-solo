import AddWaterBtn from "../AddWaterBtn/AddWaterBtn.tsx";
import WaterDailyNorma from "../WaterDailyNorma/WaterDailyNorma.tsx";

const WaterMainInfo = () => {
  return (
    <div>
      <WaterDailyNorma />
      <div>WaterProgressBar</div>
      <AddWaterBtn sectionName="WaterMainInfo" />
    </div>
  );
};

export default WaterMainInfo;
