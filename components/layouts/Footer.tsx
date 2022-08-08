
export interface IFooter extends React.ComponentPropsWithoutRef<'footer'> {}

const Footer: React.FC<IFooter> = ({ ...footerProps }) => {
  return (
    <footer
      {...footerProps}
      className={`w-full p-5 bg-slate-100 text-slate-500 `}
    >
      <div className="flex justify-center ">
        <div className="w-10/12 flex flex-row justify-between space-x-3">
          <div className="  flex-[2_1_0%] flex flex-col  space-y-2">
            <div>
              <h1>Chào mừng bạn đến với 99.co!</h1>
              <p>99.co là cổng thông tin bất động sản phát triển nhanh nhất Singpore. i chúng tôi, bạn sẽ cảm thấy như đang ở nhà khi tìm kiếm nhà ở, chung cư, căn hộ, và bán và cho thuê tại Singapore</p>
            </div>
            <div className="space-y-2">
              <div className="flex flex-row">
                <img src="/mail-footer.svg" className="w-5 h-5 mr-3"/>
                <p>Yêu cầu</p>
              </div>
              <div>
                <p className="ml-8">Tổng hợp: helol@99.co</p>
              </div>
              <div>
                <p className="ml-8">Quảng cáo: ads@99.co</p>
              </div>
              <div className="flex flex-row">
                <img src="/phone-footer.svg" className="w-5 h-5 mr-3"/>
                <p>+65 646 0552 (10 giờ sáng - 6 giờ tối, Thứ Hai - Thứ Sáu)</p>
              </div>
              <div className="flex flex-row">
                <img src="/facebook-footer.svg" className="w-5 h-5 mr-3"/>
                <p>Nhóm facebook Đại lý 99.co</p>
              </div>
             
            </div>
          </div>
          <div className="  flex-1">
            <div>
                Công ty
            </div>
          </div>
          <div className="  flex-1">
            <div>
                Phát hiện
            </div>
          </div>
        </div>
    
      </div>
    </footer>
  );
};

export default Footer;