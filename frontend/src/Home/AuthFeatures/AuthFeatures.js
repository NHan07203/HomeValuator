import DetailFeature from "../../Feature/DetailFeature";
import Feature from "../../Feature/Feature";

function AuthFeatures() {
  return (
    <>
      <Feature
        title={"Đăng nhập và đăng ký: Dễ dàng và an toàn cho người dùng."}
        content={
          "Người dùng có thể nhanh chóng tạo tài khoản mới hoặc đăng nhập vào tài khoản hiện có. Tất cả đều được thực hiện một cách an toàn và thuận tiện."
        }
        featureLayout="grid"
        feature={[
          
            <DetailFeature
            key={1}
              title={"Tính năng chính"}
              content={
                "Giao diện thân thiện giúp người dùng dễ dàng thao tác và tìm kiếm thông tin."
              }
            />,
            <DetailFeature
            key={2}
              title={"Bảo mật cao"}
              content={
                "Chúng tôi cam kết bảo vệ thông tin cá nhân của người dùng một cách tối ưu."
              }
            />
        ]}
        img={"login.jpg"}
      />
    </>
  );
}

export default AuthFeatures;
