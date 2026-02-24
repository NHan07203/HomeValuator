import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNodes, faChartDiagram } from "@fortawesome/free-solid-svg-icons";

import DetailFeature from "../../Feature/DetailFeature";
import Feature from "../../Feature/Feature";

function UserFriendly() {
  return (
    <>
      <Feature
        title={"Giao diện Thân thiện: Dễ dàng sử dụng cho mọi người dùng."}
        content={
          "Giao diện của chúng tôi được thiết kế để mang lại trải nghiệm người dùng tốt nhất. Bạn có thể dễ dàng tìm kiếm thông tin và thực hiện các thao tác chỉ trong vài cú nhấp chuột."
        }
        featureLayout="grid"
        imageLeft = {true}
        feature={[
          
            <DetailFeature
            key={1}
            icon={<FontAwesomeIcon icon={faCircleNodes} />}
            title={"Dễ dàng sử dụng"}
              content={
                "Giao diện thân thiện giúp người dùng dễ dàng tương tác và tìm kiếm thông tin."
              }
            />,
            <DetailFeature
            key={2}
              icon={<FontAwesomeIcon icon={faChartDiagram} />}
              title={"Trải nghiệm tốt"}
              content={
                "Thiết kế đơn giản và trực quan giúp tiết kiệm thời gian cho người dùng."
              }
            />
        ]}
        img={"userFriendly.jpg"}
      />
    </>
  );
}

export default UserFriendly;
