import Link from 'next/link';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PrimaryLayout from '../components/layouts/PrimaryLayout';
import { NextPageWithLayout } from './page';
const UploadPage:NextPageWithLayout=()=>{
    const [countTitle, setCountTitle] = useState(0);
    const [countDescription, setCountDescription] = useState(0);
    const [startDate, setStartDate] = useState(new Date());
    const [countPost,setCountPost] = useState(1)

    const incresingCountPost=()=>{
      setCountPost(countPost+1)
    }
    const decresingCountPost=()=>{
      setCountPost(countPost-1)
    }

  
    return (
        <div className={`w-full flex flex-col   items-center p-5 tablet:p-0 select-none bg-slate-50 laptop:text-sm`}>
           
          <div className=" w-8/12 flex items-center justify-between tablet:p-3  tablet:w-full">
              <ol className=" flex items-center ">
                  <li className="pathMenu">
                    
                    <Link href="/" >
                      <a >Trang chủ</a>
                    </Link>
                  </li>
                  <li>
                    
                      <a className="font-bold">
                        Đăng tin mới
                      </a>
                   
                  </li>
              </ol>
          </div>
          <div className=" w-8/12 flex flex-col  m-4 tablet:m-0 tablet:w-full ">
            <form className="space-y-5 mb-8" id="formUpload">
              {/*container 1 */}
              <div className="p-5 px-14 bg-white space-y-4 rounded-xl  tablet:px-3">

                  <h2 className="font-bold">Vị trí căn hộ</h2>
                  <div >
                    <label htmlFor="name_du_an" className="font-semibold">Tên dự án</label>
                    <input id="name_du_an" type="text" name="name_du_an"
                        className="
                        w-full text-placeholder
                        placeholder:text-slate-400  
                        bg-white rounded pl-3 py-2 pr-10
                        shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                        border border-slate-300 "
                        placeholder='Tên dự án'
                    />
                  </div>
                  <div className="grid grid-rows-2 grid-cols-2 tablet:flex tablet:flex-col gap-2 ">
                    <div >
                      <label htmlFor="city" className="font-semibold">Tỉnh/ thành phố</label>
                      <input id="city" type="text" name="city"
                          className="
                          w-full text-placeholder
                          placeholder:text-slate-400  
                          bg-white rounded pl-3 py-2 pr-10
                          shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                          border border-slate-300 "
                          placeholder='Chọn Tỉnh/ thành phố'
                      />

                    </div>
                    <div className="ml-4 tablet:ml-0">
                      <label htmlFor="district" className="font-semibold">Quận/ huyện</label>
                      <input id="district" type="text" name="district"
                          className="
                          w-full text-placeholder
                          placeholder:text-slate-400  
                          bg-white rounded pl-3 py-2 pr-10
                          shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                          border border-slate-300 "
                          placeholder='Chọn Tỉnh/ thành phố'
                      />
                    </div>
                    <div >
                      <label htmlFor="ward" className="font-semibold">Phường/ xã</label>
                      <input id="ward" type="text" name="ward"
                          className="
                          w-full text-placeholder
                          placeholder:text-slate-400  
                          bg-white rounded pl-3 py-2 pr-10
                          shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                          border border-slate-300 "
                          placeholder='Chọn Quận/ huyện'
                      />
                    </div>
                  
                    <div className="ml-4 tablet:ml-0" >
                      
                      <label htmlFor="street" className="font-semibold">Đường/ phố</label>
                      <input id="street" type="text" name="street"
                          className="
                          w-full text-placeholder
                          placeholder:text-slate-400  
                          bg-white rounded pl-3 py-2 pr-10
                          shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                          border border-slate-300 "
                          placeholder='Chọn Quận/ huyện'
                      />
                    </div>
                  
                  </div>
                  <div >
                    <label htmlFor="address" className="font-semibold">Địa chỉ cụ thể</label>
                    <input id="address" type="text" name="address"
                        className="
                        w-full text-placeholder
                        placeholder:text-slate-400  
                        bg-white rounded pl-3 py-2 pr-10
                        shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                        border border-slate-300 "
                        placeholder='Bạn có thể bổ sung số nhà, hẻm ,ngõ...'
                    />
                  </div>
              </div>

              {/*container 2 */}
              <div className="p-5 px-14 bg-white space-y-4 rounded-xl tablet:px-3 ">
                <h2 className="font-bold">Thông tin chi tiết</h2>
                <div>
                    <label htmlFor="TypeOfApartment" className="font-semibold">Loại hình căn hộ</label>
                    <input id="TypeOfApartment" type="text" name="TypeOfApartment"
                        className="
                        w-full text-placeholder
                        placeholder:text-slate-400  
                        bg-white rounded pl-3 py-2 pr-10
                        shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                        border border-slate-300 "
                        placeholder='Tên dự án'
                    />
                </div>
                <div>
                    <label htmlFor="areas" className="font-semibold">Diện tích</label>
                    <input id="areas" type="text" name="areas"
                        className="
                        w-full text-placeholder
                        placeholder:text-slate-400  
                        bg-white rounded pl-3 py-2 pr-10
                        shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                        border border-slate-300 "
                        placeholder='Tên dự án'
                    />
                </div>
                <div>
                    <label htmlFor="room" className="font-semibold">Số phòng ngủ</label>
                    <input id="room" type="text" name="room"
                        className="
                        w-full text-placeholder
                        placeholder:text-slate-400  
                        bg-white rounded pl-3 py-2 pr-10
                        shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                        border border-slate-300 "
                        placeholder='Tên dự án'
                    />
                </div>
                  <div >
                    <label htmlFor="wc" className="font-semibold">Số phòng vệ sinh</label>
                    <input id="wc" type="text" name="wc"
                        className="
                        w-full text-placeholder
                        placeholder:text-slate-400  
                        bg-white rounded pl-3 py-2 pr-10
                        shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                        border border-slate-300 "
                        placeholder='Tên dự án'
                    />
                  </div>
                  <div >
                    <label htmlFor="prices" className="font-semibold">Giá thuê</label>
                    <input id="prices" type="text" name="prices"
                        className="
                        w-full text-placeholder
                        placeholder:text-slate-400  
                        bg-white rounded pl-3 py-2 pr-10
                        shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                        border border-slate-300 "
                        placeholder='Tên dự án'
                    />
                  </div>
                  <div>
                      <div className="flex items-center py-4">
                          <span className="flex-shrink text-md text-gray-400   font-light">Thông tin bổ sung</span>
                          <div className="flex-grow h-px bg-gray-200 "></div>
                      </div>
                  </div>
                  <div >
                    <label htmlFor="deposits" className="font-semibold">Tiền đặt cọc</label>
                    <input id="deposits" type="text" name="deposits"
                        className="
                        w-full text-placeholder
                        placeholder:text-slate-400  
                        bg-white rounded pl-3 py-2 pr-10
                        shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                        border border-slate-300 "
                        placeholder='Nhập số tiền đặt cọc'
                    />
                  </div>
                  <div className="grid grid-rows-3 grid-cols-2 gap-2 tablet:flex tablet:flex-col">
                    <div >
                      <label htmlFor="main_door_direction" className="font-semibold">Hướng cửa chính</label>
                      <input id="main_door_direction" type="text" name="main_door_direction"
                          className="
                          w-full text-placeholder
                          placeholder:text-slate-400  
                          bg-white rounded pl-3 py-2 pr-10
                          shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                          border border-slate-300 "
                          placeholder='Chọn hướng cửa chính'
                      />

                    </div>
                    <div className="ml-4 tablet:m-0">
                      <label htmlFor="balcony_direction" className="font-semibold">Hướng ban công</label>
                      <input id="balcony_direction" type="text" name="balcony_direction"
                          className="
                          w-full text-placeholder
                          placeholder:text-slate-400  
                          bg-white rounded pl-3 py-2 pr-10
                          shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                          border border-slate-300 "
                          placeholder='Chọn hướng ban công'
                      />
                    </div>
                    <div >
                      <label htmlFor="floor" className="font-semibold">Tầng thứ</label>
                      <input id="floor" type="text" name="floor"
                          className="
                          w-full text-placeholder
                          placeholder:text-slate-400  
                          bg-white rounded pl-3 py-2 pr-10
                          shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                          border border-slate-300 "
                          placeholder='Chọn tầng số'
                      />
                    </div>
                  
                    <div  className="ml-4 tablet:m-0">
                      
                      <label htmlFor="block" className="font-semibold">Block/tháp</label>
                      <input id="block" type="text" name="block"
                          className="
                          w-full text-placeholder
                          placeholder:text-slate-400  
                          bg-white rounded pl-3 py-2 pr-10
                          shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                          border border-slate-300 "
                          placeholder='Nhập tên block/tháp'
                      />
                    </div>
                    <div  >
                      
                      <label htmlFor="minimum_rental_period" className="font-semibold">Thời gian thuê tối thiểu</label>
                      <input id="minimum_rental_period" type="text" name="minimum_rental_period"
                          className="
                          w-full text-placeholder
                          placeholder:text-slate-400  
                          bg-white rounded pl-3 py-2 pr-10
                          shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                          border border-slate-300 "
                          placeholder='Thời gian thuê tối thiểu'
                      />
                    </div>
                    <div className="ml-4 tablet:m-0" >
                      
                      <label htmlFor="payment_period" className="font-semibold">Kỳ thanh toán</label>
                      <input id="payment_period" type="text" name="payment_period"
                          className="
                          w-full text-placeholder
                          placeholder:text-slate-400  
                          bg-white rounded pl-3 py-2 pr-10
                          shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                          border border-slate-300 "
                          placeholder='Kỳ thanh toán'
                      />
                    </div>
                  
                  
                  </div>
                  <div className="space-y-2 w-full ">
                    <p className="font-semibold  ">Tình trạng nội thất</p>
                    <div className='space-x-2 flex select-none w-full tablet:text-xs' >
                        <div>
                          <input value="1" className="form-radio peer hidden" id="none" type="radio" name="status" />
                          <label htmlFor="none" className="peer-checked:bg-red-200 px-4 py-2 bg-slate-100 w-20 text-center rounded-3xl">Chưa có</label>
                        </div>
                        <div>
                          <input value="2" className="form-radio peer hidden" id="basic" type="radio" name="status"  />
                          <label htmlFor="basic" className="peer-checked:bg-red-200 px-4 py-2 bg-slate-100 w-20 text-center rounded-3xl">Cơ bản</label>
                        </div>
                        <div>
                          <input value="3" className="form-radio peer hidden" id="full" type="radio" name="status" />
                          <label htmlFor="full" className="peer-checked:bg-red-200 px-4 py-2 bg-slate-100 w-20 text-center rounded-3xl">Đầy đủ</label>
                        </div>
                        <div>
                          <input value="4" className="form-radio peer hidden" id="vip" type="radio" name="status" />
                          <label htmlFor="vip" className="peer-checked:bg-red-200 px-4 py-2 bg-slate-100 w-20 text-center rounded-3xl">Cao cấp</label>
                        </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold  ">Đặc điểm căn hộ</p>
                    <div className="tablet:text-xs">
                      <input value="1" className="form-checkbox peer hidden" id="can_goc" type="checkbox" name="dac_diem" />
                      <label htmlFor="can_goc" className="peer-checked:bg-red-200 px-4 py-2 bg-slate-100 w-20 text-center rounded-3xl">Căn góc</label>
                    </div>
                  </div>
                  <div>
                      <div className="flex items-center py-4">
                          <span className="flex-shrink text-md text-gray-400   font-light">Hình ảnh căn hộ và video</span>
                          <div className="flex-grow h-px bg-gray-200 "></div>
                      </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold info">Hình ảnh</p>
                    <div className="w-full h-36 bg-slate-100 flex flex-col items-center justify-center border-dashed border-slate-300 border-[1px] rounded-lg">
                        <img src="/upload-image.svg" className=""/>
                        <p>Đăng từ 1 đến 20 hình ảnh</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="font-semibold info">Video</p>
                    
                    <div className="w-full h-36 bg-slate-100 flex flex-col items-center justify-center border-dashed border-slate-300 border-[1px] rounded-lg">
                        <img src="/upload-video.svg" className=""/>
                        <p>Đăng tối đa 1 video</p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <img src="/play-button.svg" className="w-5 h-5 bg-black"/>
                    <p>Hoặc thêm video từ Youtube</p>
                  </div>
                  <div className="flex-grow h-px bg-gray-200 "></div>
                  
            
                  
              </div>

              {/*container 3 */}
              <div className="p-5 px-14 bg-white space-y-4 rounded-xl tablet:px-3">
                <h2 className="font-bold">Thông tin mô tả</h2>
                <div>
                    <label htmlFor="title" className="font-semibold">Tiêu đề</label>
                    <textarea  id="title"  name="title" form="formUpload"
                        className=" text-placeholder
                        form-textarea
                        w-full h-[4rem] 
                        placeholder:text-slate-400  
                        bg-white rounded pl-3 py-2 pr-10
                        shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                        border border-slate-300 "
                        placeholder='VD: Cho thuê căn hộ chung cư 80m2 tại khu vực Quận 1, Hồ Chí Minh'
                        onChange={e => setCountTitle(e.target.value.length)}
                    ></textarea>
                    <div className="flex flex-row justify-between">
                      <p className="text-sm opacity-60">Tối thiểu 30 ký tự, tối đa 100 ký tự</p>
                      <p>{countTitle}/100 ký tự</p>
                    </div>
                    
                </div>
                <div>
                    <label htmlFor="description" className="font-semibold">Mô tả</label>
                    <textarea  id="description"   name="description" form="formUpload"
                        className="
                        form-textarea text-placeholder
                        w-full h-[14rem] 
                        placeholder:text-slate-400  
                        bg-white rounded pl-3 py-2 pr-10
                        shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                        border border-slate-300 "
                        placeholder='Nhập mô tả chung về căn hộ cho thuê như vị trí thuận lợi, gần chợ, gần trường, công viên...'
                        onChange={e => setCountDescription(e.target.value.length)}
                    ></textarea>
                    <div className="flex flex-row justify-between">
                      <p className="text-sm opacity-60">Tối thiểu 30 ký tự, tối đa 3.000 ký tự</p>
                      <p>{countDescription}/3000 ký tự</p>
                    </div>
                    
                </div>
              </div>

              {/*container 4 */}
              <div className="p-5 px-14 bg-white space-y-4 rounded-xl tablet:px-3">
                <h2 className="font-bold">Thông tin liên hệ</h2>
                <div className="grid grid-cols-3 space-x-5 tablet:flex tablet:flex-col tablet:space-x-0 tablet:gap-2">
                    <div >
                      <label htmlFor="user_name" className="font-semibold">Họ và Tên</label>
                      <input id="user_name" type="text" name="user_name"
                          className="
                          w-full text-placeholder
                          placeholder:text-slate-400  
                          bg-white rounded pl-3 py-2 pr-10
                          shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                          border border-slate-300 "
                          placeholder='Nhập họ và tên'
                      />
                    </div>
                    <div >
                      <label htmlFor="user_phone" className="font-semibold">Số điện thoại</label>
                      <input id="user_phone" type="text" name="user_phone"
                          className="
                          w-full text-placeholder
                          placeholder:text-slate-400  
                          bg-white rounded pl-3 py-2 pr-10
                          shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                          border border-slate-300 "
                          placeholder='Nhập số điện thoại'
                      />
                    </div>
                    <div >
                      <label htmlFor="zalo" className="font-semibold">Zalo</label>
                      <input id="zalo" type="text" name="zalo"
                          className="
                          w-full text-placeholder
                          placeholder:text-slate-400  
                          bg-white rounded pl-3 py-2 pr-10
                          shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                          border border-slate-300 "
                          placeholder='Nhập số zalo'
                      />
                    </div>
                </div>
                <div className="space-y-2">
                    <p className="font-semibold  ">Tình trạng nội thất</p>
                    <div className='space-x-2 flex select-none'>
                        <div>
                          <input value="1" className="form-radio peer hidden" id="individual" type="radio" name="AreYou" />
                          <label htmlFor="individual" className="peer-checked:bg-red-200 px-4 py-2 bg-slate-100 w-20 text-center rounded-3xl">Cá nhân</label>
                        </div>
                        <div>
                          <input value="2" className="form-radio peer hidden" id="broker" type="radio" name="AreYou"  />
                          <label htmlFor="broker" className="peer-checked:bg-red-200 px-4 py-2 bg-slate-100 w-20 text-center rounded-3xl">Môi giới</label>
                        </div>
                       
                    </div>
                  </div>
              </div>

              {/*container 5 */}
              <div className="p-5 px-14 bg-white space-y-4 rounded-xl tablet:px-3">
                <div className="flex flex-row justify-between">
                  <h2 className="font-bold">Thông tin gói tin</h2>
                  <div className="flex items-center">
                    <img src="/verified.svg" className="w-5 h-5"/>
                    <p className="text-purple-500">Tăng hiệu quả đáng tin</p>
                  </div>
                </div>
                <div >
                      <label htmlFor="user_name" className="font-semibold">Số ngày đăng</label>
                      <input id="user_name" type="text" name="user_name" data-dropdown-toggle="Day"
                          className="
                          w-full
                          placeholder:text-slate-400  
                          bg-white rounded pl-3 py-2 pr-10
                          shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                          border border-slate-300 "
                       
                      />
                  </div>
                  <div className="grid grid-cols-2">
                    <div >
                        <label htmlFor="time_start" className="font-semibold">Ngày bắt đầu</label>
                        <DatePicker className="w-full placeholder:text-slate-400  
                          bg-white rounded pl-3 py-2 pr-10
                          shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                          border border-slate-300 " 
                          selected={startDate} 
                          onChange={(date:Date) => setStartDate(date)} 
                          dateFormat="dd/MM/yyyy"
                        />
                      </div>
                      <div className="ml-4">
                        <label htmlFor="time_range" className="font-semibold">Khung giờ</label>
                        <input id="time_range" type="text" name="time_range"
                            className="
                            w-full
                            placeholder:text-slate-400  
                            bg-white rounded pl-3 py-2 pr-10
                            shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                            border border-slate-300 "
                          
                        />
                      </div>
                  </div>
                  <p className="text-sm opacity-60">Kết thúc ngày</p>
                  <div className="flex items-center space-x-9">
                    <input type="checkbox" id="check_note" className="form-checkbox rounded"></input>
                    <label htmlFor="check_note" className="info text-sm font-semibold ml-10 "> Làm nổi bật tin đăng</label>
                  </div>
                  <div>
                    <label htmlFor="toggle" className="inline-flex relative items-center cursor-pointer">
                      <input type="checkbox" value="" id="toggle" className="sr-only peer"/>
                      <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                      <span className="ml-3 text-sm font-semibold text-gray-900 dark:text-gray-300 info">Tự động đăng tải tin</span>
                    </label>
                  </div>
                  <div className="bg-gray-100 p-2 px-3 gap-3  rounded-lg grid">
                    <div className="col-start-1 col-end-3">
                      <p className="font-medium">Số lần đăng lại</p>
                      <p className="text-xs  text-gray-300">Lần đăng lại cuối dự kiến vào</p>
                      <p>24/2/2020</p>
                    </div>
                    <div className="flex flex-row gap-2 w-full items-center justify-center col-start-3 col-end-4">
                      <button type="button" onClick={decresingCountPost} className="btn-primary bg-gray-300 rounded flex-[2_1_0%]  ">-</button>
                  
                      <input value={countPost} className="w-full p-2 text-center rounded-md  border-solid border-[1px] flex-[2_1_0%] border-gray-200"/>
                     
                     
                      <button type="button" onClick={incresingCountPost} className="btn-primary flex-[2_1_0%] bg-gray-300 rounded">+</button>
                    </div>
                  </div>
                    
                  <div className="bg-sky-100 p-2 px-8 space-y-2  rounded-lg">
                    <div className="flex justify-between">
                      <p>Đơn giá / ngày</p>
                      <p>1.000 đ</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Số ngày đăng tin</p>
                      <p>15 ngày</p>
                    </div>
                    <div className="flex-grow h-px bg-sky-300"></div>
                    <div className="flex justify-between">
                      <p className="font-semibold">Tổng tiền thanh toán</p>
                      <p>15.000 đ</p>
                    </div>
                  </div>
                  

                
              </div>

              {/*container 6 */}
              <div className="p-5 px-14 bg-white space-y-4 rounded-xl flex justify-center items-center  tablet:px-8">
                    <button className="bg-pink-800 w-full p-3 rounded-lg text-white font-bold">Đăng tin</button>
              </div>




            </form>
          </div>
         
            
        </div>
      );
}
UploadPage.getLayout = (page) => {
    return <PrimaryLayout>{page}</PrimaryLayout>;
  };
export default UploadPage;