import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRankingStar, faCubes, faHouseLaptop } from "@fortawesome/free-solid-svg-icons";

import DetailFeature from "../../Feature/DetailFeature";
import Feature from "../../Feature/Feature";

function ValuationAI() {
  return (
    <>
      <Feature
        subTitle="Dự đoán"
        title={"Dự đoán Giá trị Nhà và Đất Chính Xác"}
        content={
          "Chúng tôi sử dụng trí tuệ nhân tạo (AI) để cung cấp những dự đoán chính xác về giá trị nhà và đất. Với công nghệ tiên tiến, bạn có thể dễ dàng nắm bắt thông tin thị trường bất động sản."
        }
        featureLayout="column"
        feature={[
          
            <DetailFeature
            key={1}
            icon={<FontAwesomeIcon icon={faRankingStar} />}
              content={
                "Dự đoán chính xác và đáng tin cậy."
              }
            />,
            <DetailFeature
            key={2}
              icon={<FontAwesomeIcon icon={faCubes} />}
              content={
                "Cập nhật thường xuyên để đảm bảo thông tin mới."
              }
            />,
            <DetailFeature
            icon={<FontAwesomeIcon icon={faHouseLaptop} />}
            key={3}
              content={
                "Giao diện thân thiện, dễ sử dụng cho mọi người."
              }
            />
        ]}
        img={"AI.jpg"}
      />
    </>
  );
}

export default ValuationAI;
