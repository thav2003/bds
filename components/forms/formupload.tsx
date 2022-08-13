import { ListGroup } from 'flowbite-react';
import { useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import useDevice from '../../hooks/useDevice';


const BASE_API_URL = 'https://provinces.open-api.vn/api'

const focusInCurrentTarget = ({ relatedTarget, currentTarget }:any):any => {
  if (relatedTarget === null) return false;
  
  var node = relatedTarget.parentNode;
        
  while (node !== null) {
    if (node === currentTarget) return true;
    node = node.parentNode;
  }

  return false;
}


interface IValues{
  username?:string;
  email:string;
  age:number | string;
  du_an:string;
  city:string;
  district:string;
  ward:string;
  street:string;
}



const validate = (values:IValues):any => {
  const errors = {} as IValues
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.age) {
    errors.age = 'Required'
  } else if (isNaN(Number(values.age))) {
    errors.age = 'Must be a number'
  } else if (Number(values.age) < 18) {
    errors.age = 'Sorry, you must be at least 18 years old'
  }
  return errors
}

const warn = (values:IValues):any => {
  const warnings = {} as IValues
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
}

const renderInput = ({
  classNameInput,renderDropLeftIcon,
  classNameLabel,
  input,
  label,
  type,
  meta: { touched, error, warning }
}:any):any => {
  return(
    <div>
      <label className="font-semibold">{label}</label>
      <div>
        <input {...input} placeholder={label} type={type}  className={`${classNameInput}`}/>
        {touched &&
          ((error && <span className="text-red-500">*</span>) ||
            (warning && <span className="text-red-500">*</span>))}
        { renderDropLeftIcon &&
          <div className="relative divide-x-2" >
            
            
            
            <div></div>
            <div className="absolute z-[4] -top-8 right-4 flex  items-center ">
                <div className=" pl-4">{renderDropLeftIcon}</div>
            </div>
          </div>
        }
       
      </div>
    </div>
  )
}
const renderTextArea = ({
  classNameInput,maxtext,
  id,
  input,
  label,
  type,
  meta: { touched, error, warning }
}:any):any => {
  const [countTitle, setCountTitle] = useState(0);
 

  const hanldeChange=(e:any)=>{
   
    setCountTitle(e.target.value.length)
    input.value=e.target.value
    
    
  }

  return(

    <div>
          <label htmlFor={id} className="font-semibold">{label}</label>
            <textarea {...input}  id={id}  
                
                className={classNameInput}
                placeholder={label}
                onChange={hanldeChange}
            ></textarea>
          <div className="flex flex-row justify-between">
            <p className="text-sm opacity-60">Tối thiểu 30 ký tự, tối đa {maxtext} ký tự</p>
            <p>{countTitle}/{maxtext}</p>
          </div>
    </div>
  )
}



const du_an=new Array(120).fill({
  name:"du an" 
})

const city=new Array(3).fill({
  name:"Hồ Chí Minh"
})
const direction=[
  {name:"Đông"},
  {name:"Tây"},
  {name:"Nam"},
  {name:"Bắc"},

]

const RenderDropLeft=({action,icon}:any):any=>{
  return(
      <button type="button" onClick={action} className="absolute z-[4] -top-8 right-2 flex  items-center">
            <img  src={icon} className="w-full h-5"/>
      </button>
  )
}

const renderRadio=({
  id,
  input,
  label,
  type,
  meta: { touched, error, warning }
}:any):any=>{

  return(
    <div>
        <input {...input}  className="form-radio peer hidden" id={id} type={type}  />
        <label htmlFor={id} className="peer-checked:bg-red-200 px-4 py-2 bg-slate-100 w-20 text-center rounded-3xl">{label}</label>
    </div>
  )

}

const renderDrop=({
  data,renderDropLeftIcon,
  classNameInput,
  input,
  label,
  type,
  meta: { touched, error, warning }
}:any):any=>{
 
  const [change,setChange]= useState(input.value)
  const [isFocus,setIsFocus]=useState(false)
  const clear=()=>{
    setIsFocus(false)
    setChange('')
  }



  const focusInput=()=>{
    setIsFocus(true)
  }
  const selectItem=(item:any):any=>{
    input.value =`${item.name}`
    setChange(`${item.name}`)
    setIsFocus(false)
  }
  const onBlur = (e:any):any => {
    if (!focusInCurrentTarget(e)) {
      console.log(' blurred');
      setIsFocus(false)
    }
  }

  return(
    <div >
      <label className="font-semibold">{label}</label>
      <div className="relative "  onBlur={onBlur}   >
        <input {...input} placeholder={label} onClick={focusInput}   type={type} onChange={e => setChange(e.target.value)} value={change} autocomplete="off"  className={classNameInput}/>
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
        {renderDropLeftIcon && renderDropLeftIcon.search('/') === -1 && 

          <div className="relative divide-x-2" >
                      
                      
                      
            <div></div>
            <div className="absolute z-[4] -top-8 right-4 flex  items-center ">
                <div className=" pl-4">{renderDropLeftIcon}</div>
            </div>
          </div>
        }
        {isFocus &&
        <div className="relative" >
            {renderDropLeftIcon && renderDropLeftIcon.search('/') !== -1 && <RenderDropLeft action={clear} icon={renderDropLeftIcon}/>

            }
          
          
          
            <div className="bnone">
              <ListGroup>
                <div className="divide-y-[1px]">
                {input.name ==="du_an" && change && !du_an.find(e => e.name === change) &&
                <div className="relative">
                  <ListGroup.Item>
                    {change}
                    <button type="button" onClick={clear} className="absolute z-[4] top-2 gap-2 right-1 flex   items-center ">
                      <img  src="/closed-btn.svg" className="h-4"/>
                      Thêm mới
                    </button>
                  </ListGroup.Item>
                  </div>
                }
                

                {data.map((item:any,index:any):any=>{
                  return(
                    <ListGroup.Item onClick={()=>selectItem(item)}
                    >
                      {item.name}
                    </ListGroup.Item>
                  )
                })}
                  <div></div>
                </div>
              </ListGroup>
            </div>
        </div>
        }

        
        
      </div>
    </div>
  )
}

const renderInputTime=({
  dateFormat,
  showTimeSelect,
  classNameInput,
  input,
  label,placeholder,
}:any):any=>{
  

  return(
    <div>
        
          <label className="font-semibold">{label}</label>
          <DatePicker className={classNameInput} 
            selected={input.value || null} 
            disabledKeyboardNavigation
            onChange={input.onChange}
            showTimeSelectOnly={showTimeSelect}
            showTimeSelect={showTimeSelect}
            placeholderText={placeholder}
            dateFormat={dateFormat}
            
          />
    </div>
  )
}

const renderCheckbox=({
  classNameInput,
  classNameLabel,
  input,
  label,
  type,
  popup
}:any):any=>{
  return(
    <div>
        <div className="flex">
          <input {...input} type={type} id="check_note" className={classNameInput}></input>
          <label htmlFor="check_note" className={`${classNameLabel} info-hover`}>{label} </label>
          <div>h</div>
        </div>
    </div>
  )

}
const renderToggle=({
  id,
  input,
  label,
  type,
}:any):any=>{
  return(
    <div>
        
       <label htmlFor={id} className="inline-flex relative items-center cursor-pointer">
            <input {...input} type={type} id={id} className="sr-only peer"/>
            <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-semibold text-gray-900 dark:text-gray-300 info">{label}</span>
        </label>
    </div>
  )

}
const renderCountToggle=({

  input,


}:any):any=>{
  
  const decrease=()=>{
   
    if(input.value > 0)input.onChange(parseInt(input.value) - 1)
  }
  const increase=()=>{
   
    input.onChange(parseInt(input.value) + 1)
  }
  input.value=input.value ? input.value : 0
  return(
    <div className="flex flex-row  gap-2 w-full items-center justify-center col-start-3 col-end-4">
    
      <button type="button" onClick={decrease} className="btn-primary bg-gray-300 rounded flex-[2_1_0%]  ">-</button>
      
      <input {...input} className="w-full p-2 text-center rounded-md h-3/4 border-solid border-[1px] flex-[2_1_0%] border-gray-200"/>
      
      
      <button type="button" onClick={increase} className="btn-primary flex-[2_1_0%] bg-gray-300 rounded">+</button>

    </div>
  )

}
const RenderPopUp=({  
  classNameInput,data,renderDropLeftIcon,
  input,
  page,
  label,
  type,
  meta: { touched, error, warning }
}:any):any=>{
  const [temp,setTemp]=useState(input.value) // chỗ này dùng redux để móc data cũ ra
  const [isVisible,setIsVisible] = useState(true)
  const [change,setChange]= useState(input.value)
  const [isClick,setIsClick]=useState(false)
  const onOpen=()=>{
    console.log(temp)
    
    setIsVisible(false)
  }
  const onClose=()=>{
    setIsClick(true)
    setIsVisible(true)
  }
  const search=()=>{
    console.log("search",input)
  }
  const selectItem=(item:any):any=>{
    input.value =`${item.name}`
    setChange(`${item.name}`)
    setIsVisible(true)
    setIsClick(true)
  }

  const add=()=>{
    input.value=change
    setIsVisible(true)
    setIsClick(true)
    console.log("add")
  }
  const handleEnter=(e:any):any=>{
    if(e.key ==="Enter"){
      input.value=change
      setIsVisible(true)
      setIsClick(true)
    }
  }

  return(
    <div >
      <label className="font-semibold">{label}</label>
      {isClick &&
          ((error && <span className="text-red-500">*</span>) ||
            (warning && <span className="text-red-500">*</span>))}
      <button className={`w-full text-placeholder
              placeholder:text-slate-400  
              bg-white rounded pl-3 py-2 pr-10
              shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
              border border-slate-300 text-left ${input.value ? 'text-black':'text-slate-400 '} `}  onClick={onOpen}
              
      >
        {input.value  ? input.value : label}
      </button>
      
      <div className={`${isVisible ? 'hidden' : 'block'} modal  flex justify-center items-center `}>
        <div className="modal-content tablet:w-full tablet:h-full  rounded-lg">
          <div className="w-full flex flex-col space-y-4 items-center  bg-slate-50 laptop:text-sm  rounded-lg ">
            {/* header */}
            <div  className={`w-full bg-white flex flex-col relative justify-center items-center py-5 rounded-t-lg shadow select-none gap-4 `}>
                  <div className="absolute flex inset-x-0 bottom-[25px] px-4  w-[50px]  ">
                      <a onClick={onClose}>
                          <img src="/arrow-left.svg" className="w-4 h-4"/>

                      </a>
                      
                  </div>
                  <div className=" w-full flex items-center justify-between">
                      <div className="flex flex-grow items-center justify-center">
                          <h3>{page}</h3>
                      
                      </div>
                  </div>
                  <div className="absolute flex  right-0 bottom-[25px]  px-4    w-[50px]  ">
                      <a onClick={onClose}>
                          <img src="/closed-black.svg" className="w-4 h-4"/>

                      </a>
                      
                  </div>
            </div>
            {/* body */}
            <div className="w-full flex flex-col  p-5 bg-white rounded-b-lg ">
              <div className=" w-full flex flex-col  space-y-4  ">
                
                <div >
                  <input {...input} onKeyDown={handleEnter} placeholder={label} type={type} onChange={e => setChange(e.target.value)} value={change} autocomplete="off" className={classNameInput}/>
                
                  <div className="relative" >
                    <RenderDropLeft action={search} icon={renderDropLeftIcon}/>
                  </div>
                  
                </div>
                <div className="overflow-y-auto h-[400px] tablet:h-[100vh] w-full relative bnone">
             
                    <ListGroup>
                      <div className="divide-y-[1px]  ">
                      {input.name ==="du_an" && change && !data.find((e:any) => e.name === change) &&
                      <div className="relative">
                        <ListGroup.Item>
                          {change}
                          <button type="button" onClick={add} className="absolute z-[4] top-2 gap-2 right-1 flex   items-center ">
                            <img  src="/closed-btn.svg" className="h-4"/>
                            Thêm mới
                          </button>
                        </ListGroup.Item>
                        </div>
                      }
                      

                      {data.map((item:any,index:any):any=>{
                        return(
                          <ListGroup.Item onClick={()=>selectItem(item)}
                          >
                            <div className="py-1">
                              {item.name}
                            </div>
                            
                          </ListGroup.Item>
                        )
                      })}
                        <div></div>
                      </div>
                    </ListGroup>
                 
                
             
                  
                </div>
                  
                      
                 
            
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const UploadForm = (props:InjectedFormProps<IValues> ) => {
  const { handleSubmit, pristine, reset, submitting } = props
  


  const {isMobile} =useDevice()



  return (
    <form className="space-y-5 mb-8 " id="formUpload" onSubmit={(e)=>{
      e.preventDefault();
      handleSubmit
      }}>
        
 
  
    {/*container 1 */}
    <div className="p-5 px-14 bg-white space-y-4 rounded-xl  tablet:px-3">

        <h2 className="font-bold">Vị trí căn hộ</h2>
        <div >
       
          <Field
              name="du_an"
              data={du_an}
              renderDropLeftIcon="search_grey.svg"
              classNameInput={`
              w-full text-placeholder
              placeholder:text-slate-400  
              bg-white rounded pl-3 py-2 pr-10
              shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
              border border-slate-300 rounded-lg
            `}     
              component={RenderPopUp}  
              type="text"
              page="Dự án"
              label="Tên dự án"
          />
          
          
        </div>
        <div className="grid grid-rows-2 grid-cols-2 tablet:flex tablet:flex-col gap-2 ">
          <div >
            <Field
              name="city"
              data={city}
              renderDropLeftIcon="search_grey.svg"
              classNameInput={`
                w-full text-placeholder
                placeholder:text-slate-400  
                bg-white rounded pl-3 py-2 pr-10
                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                border border-slate-300 
              `}
              component={RenderPopUp}           
              type="text"
              page="Tỉnh/thành phố"
              label="Tỉnh/ thành phố"
            />
          </div>
          <div className="ml-4 tablet:ml-0">
              <Field
                name="district"
                data={city}
                renderDropLeftIcon="search_grey.svg"
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={RenderPopUp}           
                type="text"
                page="Quận/ huyện"
                label="Quận/ huyện"
              />
        
          </div>
          <div >
              <Field
                  name="ward"
                  data={city}
                  renderDropLeftIcon="search_grey.svg"
                  classNameInput={`
                    w-full text-placeholder
                    placeholder:text-slate-400  
                    bg-white rounded pl-3 py-2 pr-10
                    shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                    border border-slate-300 
                  `}
                  component={RenderPopUp}           
                  type="text"
                  page="Phường/ xã"
                  label="Phường/ xã"
                />
          </div>
        
          <div className="ml-4 tablet:ml-0" >
              <Field
                  name="street"
                  data={city}
                  renderDropLeftIcon="search_grey.svg"
                  classNameInput={`
                    w-full text-placeholder
                    placeholder:text-slate-400  
                    bg-white rounded pl-3 py-2 pr-10
                    shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                    border border-slate-300 placeholder-red-700
                  `}
                  component={RenderPopUp}           
                  type="text"
                  label="Đường/ phố"
                  page="Đường/ phố"
                />
           
          </div>
        
        </div>
        <div >
              <Field
                  name="address"
                  
                  classNameInput={`
                    w-full text-placeholder
                    placeholder:text-slate-400  
                    bg-white rounded pl-3 py-2 pr-10
                    shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                    border border-slate-300 
                  `}
                  component={renderInput}           
                  type="text"
                  label="Địa chỉ cụ thể"
              />
          
        </div>
    </div>

    {/*container 2 */}
    <div className="p-5 px-14 bg-white space-y-4 rounded-xl tablet:px-3 ">
      <h2 className="font-bold">Thông tin chi tiết</h2>
      <div>
            <Field
                name="TypeOfApartment"
                data={city}
                renderDropLeftIcon="search_grey.svg"
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={RenderPopUp}           
                type="text"
                label="Loại hình căn hộ"
                page="Loại hình căn hộ"
              />
          
      </div>
      <div>
              <Field
                name="areas"
                renderDropLeftIcon="m2"
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={renderInput}           
                type="number"
                label="Diện tích"
              />
          
      </div>
      <div>
              <Field
                name="room"
                renderDropLeftIcon="phòng"
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={renderInput}           
                type="number"
                label="Số phòng ngủ"
              />
       
      </div>
        <div >
              <Field
                name="wc"
                renderDropLeftIcon="phòng"
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={renderInput}           
                type="number"
                label="Số phòng vệ sinh"
              />
        </div>
        <div >
              <Field
                name="prices"
                data={city}
                renderDropLeftIcon="đ"
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={renderDrop}           
                type="number"
                label="Giá thuê"
              />
        </div>
        <div>
            <div className="flex items-center py-4">
                <span className="flex-shrink text-md text-gray-400   font-light">Thông tin bổ sung</span>
                <div className="flex-grow h-px bg-gray-200 "></div>
            </div>
        </div>
        <div >
              <Field
                  name="deposits"
                  renderDropLeftIcon="đ"
                  classNameInput={`
                    w-full text-placeholder
                    placeholder:text-slate-400  
                    bg-white rounded pl-3 py-2 pr-10
                    shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                    border border-slate-300 
                  `}
                  component={renderInput}           
                  type="number"
                  label="Tiền đặt cọc"
              />
       
        </div>
        <div className="grid grid-rows-3 grid-cols-2 gap-2 tablet:flex tablet:flex-col">
          <div >
              <Field
                name="main_door_direction"
                renderDropLeftIcon="search_grey.svg"
                data={direction}
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={RenderPopUp}           
                type="text"
                label="Hướng cửa chính"
                page="Hướng cửa chính"
              />
          

          </div>
          <div className="ml-4 tablet:m-0">
              <Field
                name="balcony_direction"
                renderDropLeftIcon="search_grey.svg"
                data={direction}
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={RenderPopUp}           
                type="text"
                label="Hướng ban công"
                page="Hướng ban công"
              />
           
          </div>
          <div >
              <Field
                name="floor"
             
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={renderInput}           
                type="number"
                label="Tầng thứ"
              />
           
          </div>
        
          <div  className="ml-4 tablet:m-0">
              <Field
                name="block"
             
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={renderInput}           
                type="text"
                label="Block/tháp"
              />
            
           
          </div>
          <div  >
              <Field
                name="minimum_rental_period"
                data={city}
                renderDropLeftIcon="search_grey.svg"
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={RenderPopUp}           
                type="number"
                label="Thời gian thuê tối thiểu"
                page="Thời gian thuê tối thiểu"
              />
          
          </div>
          <div className="ml-4 tablet:m-0" >
              <Field
                name="payment_period"
                renderDropLeftIcon="search_grey.svg"
                data={city}
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={RenderPopUp}           
                type="number"
                label="Kỳ thanh toán"
                page="Kỳ thanh toán"
              />
           
          </div>
        
        
        </div>
        <div className="space-y-2 w-full ">
          <p className="font-semibold  ">Tình trạng nội thất</p>
          <div className='space-x-2 flex select-none w-full tablet:text-xs hideinput' >
              <div>
                <Field name="status" component={renderRadio} id="none" type="radio" value="none" label="Chưa có"/>
              </div>
              <div>
                <Field name="status" component={renderRadio} id="basic" type="radio"  value="basic" label="Cơ bản"/>
              </div>
              <div>
                <Field name="status" component={renderRadio} id="full" type="radio"  value="full" label="Đầy đủ"/>
              </div>
              <div>
              <Field name="status" component={renderRadio} id="vip" type="radio"  value="vip" label="Cao cấp"/>
              </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-semibold  ">Đặc điểm căn hộ</p>
          <div className="tablet:text-xs">
            <Field name="dac_diem" component={renderRadio} id="can_goc" type="checkbox"  value="1" label="Căn góc"/>
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
              <Field
                name="title"
                id="title"
                classNameInput=" text-placeholder
                form-textarea
                w-full h-[4rem] 
                placeholder:text-slate-400  
                bg-white rounded pl-3 py-2 pr-10
                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                border border-slate-300 "
                component={renderTextArea}           
                type="number"
                maxtext={100}
                label="Tiêu đề"
              />
          
         
          
      </div>
      <div>
              <Field
                name="description"
                id="description"
                classNameInput=" text-placeholder
                form-textarea text-placeholder
                w-full h-[14rem] 
                placeholder:text-slate-400  
                bg-white rounded pl-3 py-2 pr-10
                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                border border-slate-300 "
                component={renderTextArea}
                maxtext={3000}           
                type="number"
                label="Mô tả"
              />  
      </div>
    </div>

    {/*container 4 */}
    <div className="p-5 px-14 bg-white space-y-4 rounded-xl tablet:px-3">
      <h2 className="font-bold">Thông tin liên hệ</h2>
      <div className="grid grid-cols-3 space-x-5 tablet:flex tablet:flex-col tablet:space-x-0 tablet:gap-2">
          <div >
              <Field
                name="user_name"
                classNameInput={`
                w-full text-placeholder
                placeholder:text-slate-400  
                bg-white rounded pl-3 py-2 pr-10
                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                border border-slate-300 
                `}
                component={renderInput}           
                type="text"
                label="Họ và Tên"
              /> 
          </div>
          <div >
              <Field
                name="user_phone"
                classNameInput={`
                w-full text-placeholder
                placeholder:text-slate-400  
                bg-white rounded pl-3 py-2 pr-10
                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                border border-slate-300 
                `}
                component={renderInput}           
                type="text"
                label="Số điện thoại"
              /> 
           
          </div>
          <div >
              <Field
                name="zalo"
                classNameInput={`
                w-full text-placeholder
                placeholder:text-slate-400  
                bg-white rounded pl-3 py-2 pr-10
                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                border border-slate-300 
                `}
                component={renderInput}           
                type="text"
                label="Zalo"
              /> 
          </div>
      </div>
      <div className="space-y-2">
          <p className="font-semibold  ">Bạn là cá nhân / môi giới</p>
          <div className='space-x-2 flex select-none'>
              <div>
                <Field name="individual_broker" component={renderRadio} id="individual" type="radio"  value="individual" label="Cá nhân"/>
              </div>
              <div>
                <Field name="individual_broker" component={renderRadio} id="broker" type="radio"  value="broker" label="Môi giới"/>

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
            <Field
                name="time_day"
                data={city}
                renderDropLeftIcon="search_grey.svg"
                classNameInput={`
                w-full text-placeholder
                placeholder:text-slate-400  
                bg-white rounded pl-3 py-2 pr-10
                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                border border-slate-300 
                `}
                component={RenderPopUp}           
                type="text"
                label="Số ngày đăng"
                page="Số ngày đăng"
            /> 
        
        </div>
        <div className="grid grid-cols-2">
          <div >
              <Field
                name="time_start"

                classNameInput={`
                w-full text-placeholder
                placeholder:text-slate-400  
                bg-white rounded pl-3 py-2 pr-10
                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                border border-slate-300 
                `}
                component={renderInputTime}
                dateFormat="dd/MM/yyyy"           
                placeholder="DD/MM/YYYY"
                label="Ngày bắt đầu"
              /> 

          </div>
          <div className="ml-4">
              <Field
                name="time_range"

                classNameInput={`
                w-full text-placeholder
                placeholder:text-slate-400  
                bg-white rounded pl-3 py-2 pr-10
                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                border border-slate-300 
                `}
                showTimeSelect={true}
                component={renderInputTime} 
                dateFormat="h:mm aa"          
                placeholder="hh/mm"
                label="Khung giờ"
              /> 
             
            </div>
        </div>
        <p className="text-sm opacity-60">Kết thúc ngày</p>
        <div className="flex items-center space-x-9">
              <Field
                name="check_note"
                popup={true}
                classNameLabel={`
                  info text-sm font-semibold ml-10 
                `}
                classNameInput={`
                form-checkbox rounded
                `}
                type="checkbox"
                component={renderCheckbox} 
              
                label="Làm nổi bật tin đăng"
              /> 
        </div>
        <div>
              <Field
                name="auto_post"
                type="checkbox"
                component={renderToggle} 
                id="toggle" 
                label="Tự động đăng tải tin"
              /> 

          
        </div>
        {isMobile && <div className="bg-gray-100 p-2 px-3 gap-3  rounded-lg grid">
          <div className="col-start-1 col-end-3">
            <p className="font-medium">Số lần đăng lại</p>
            <p className="text-xs  text-gray-300">Lần đăng lại cuối dự kiến vào</p>
            <p>24/2/2020</p>
          </div>
          
            {/* <button type="button" onClick={decresingCountPost} className="btn-primary bg-gray-300 rounded flex-[2_1_0%]  ">-</button>
        
            <input value={countPost} className="w-full p-2 text-center rounded-md  border-solid border-[1px] flex-[2_1_0%] border-gray-200"/>
           
           
            <button type="button" onClick={incresingCountPost} className="btn-primary flex-[2_1_0%] bg-gray-300 rounded">+</button> */}
            <Field
                name="auto_post_count"
               
                component={renderCountToggle} 
               
              /> 
          
        </div>}
          
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
          <button type="submit" disabled={submitting} className="bg-pink-800 w-full p-3 rounded-lg text-white font-bold">Đăng tin</button>
    </div>




  </form>
  )
}

export default reduxForm({
  form: 'uploadForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(UploadForm)
