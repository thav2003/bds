import { ListGroup } from 'flowbite-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import type { IValues } from '../../helps/validate';
import { validate, warn } from '../../helps/validate';
import useDevice from '../../hooks/useDevice';
import { IPrices } from '../../interfaces/interfaces';
const focusInCurrentTarget = ({ relatedTarget, currentTarget }:any):any => {
  if (relatedTarget === null) return false;
  
  var node = relatedTarget.parentNode;
        
  while (node !== null) {
    if (node === currentTarget) return true;
    node = node.parentNode;
  }

  return false;
}

const RenderInput = ({
  classNameInput,renderDropLeftIcon,
  classNameLabel,
  input,
  label,
  type,
  meta: { touched, error, warning }
}:any):any => {
  const [change,setChange]=useState(input.value)
  useEffect(()=>{
    if(input.name ==="room" || input.name ==="wc"){
      if(change > 100){
        setChange(100)
        input.onChange(input.value = 100)
      }
    }else if(input.name ==="areas" ){
      if(change > 1000000){
        setChange(1000000)
        input.onChange(input.value = 1000000)
      } 
    }else if(change>999000000000){
      setChange(999000000000)
      input.onChange(input.value = 999000000000)
    }
    if(warning){
      setChange(1)
      input.onChange(input.value = 1)
    }

  },[change,warning])
  return(
    <div className="space-y-1">
      
      <label className="font-semibold">{label}</label>
      {touched &&
          ((error && <span className="error">*</span>) ||
            (warning && <span className="warning">*</span>))}
      <div>
        <input {...input}  placeholder={label} type={type} onChange={e => setChange(e.target.value)} value={change}  className={`${classNameInput}`}/>
        
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
const RenderTextArea = ({
  classNameInput,maxtext,
  id,
  input,
  label,
  type,
  meta: { touched, error, warning }
}:any):any => {
  const [countTitle, setCountTitle] = useState(0);
  const [isFull,setIsFull]=useState(false)

  const hanldeChange=(e:any)=>{
   
    if(!isFull){
      setCountTitle(e.target.value.length)
      input.value=e.target.value
      
    }
  }
  useEffect(()=>{
    if(input.name ==="title"){
      if(countTitle >= 100){
        setIsFull(true)
      }else{
        setIsFull(false)
      }
    }else if(input.name ==="description"){
      if(countTitle >= 3000){
        setIsFull(true)
      }else{
        setIsFull(false)
      }
    }
    console.log(input.value)
  },[countTitle])
 
  return(

    <div className="space-y-1">
          <label htmlFor={id} className="font-semibold">{label}</label>
          {touched &&
          ((error && <span className="error">*</span>) ||
            (warning && <span className="warning">*</span>))}
            <textarea {...input}  id={id}  
                onKeyDown={(e)=>{if(e.key==="Backspace"){
                  setIsFull(false)
                }}}
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

const prices=new Array(5).fill({
  name:150000
})
const du_an=new Array(120).fill({
  name:"du an" 
})
const street=new Array(120).fill({
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

const RenderDropLeft=({action,icon,className}:any):any=>{
  const [isVisible,setIsVisible]=useState(false)
  const handleMouseOver = () => {
    setIsVisible(true);
}

 const handleMouseLeave = () => {
    setIsVisible(false);
  }
  return(
    <>
    <div className="relative">
      <button type="button" 
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave} onClick={action} className={`absolute z-[4] -top-8 right-2 flex  items-center ${className}`}>
            <Image  src={icon} className="w-full h-5"/>
            { isVisible && 
        <div className="relative">
          <div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} className="absolute  bg-red-500 w-[200px] z-[60] h-[200px]">
            test
          </div>
        </div>
      }
      </button>
    
    </div>
    </>
  )
}
const RenderDropBottom=({value}:any):any=>(
 
     <p>Giá cho thuê: <span className="font-semibold">{value}</span></p>
    
  
)

const RenderPrices=({price,action}:any):any=>{
  const handleClick=()=>{
    

    action({name:price})
  }
  const money=new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(price)
  
  return(
    <ListGroup.Item onClick={handleClick} >
      <p>{`${money} / tháng`}</p>
    </ListGroup.Item>
  )
}

const RenderRadio=({
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


const RenderDrop=({
  data,renderDropLeftIcon,renderBottom,
  classNameInput,showMoney,
  input,
  label,
  type,
  meta: { touched, error, warning },prices
}:any):any=>{

  const [change,setChange]= useState(input.value)
  const [isFocus,setIsFocus]=useState<boolean>(false)
  const [renderPrices,setRenderPrices]=useState<IPrices[]>([])
  const [stringBottom,setStringBottom]=useState<string>('')
  const clear=()=>{
    setIsFocus(false)
    setChange('')
  }
  const focusInput=()=>{
   
    setIsFocus(true)
  }
  const selectItem=(item:any):any=>{
   
    input.onChange(input.value =`${item.name}`)
    setChange(`${item.name}`)
    setIsFocus(false)
  }
  const onBlur = (e:any):any => {
    if (!focusInCurrentTarget(e)) {
      input.onChange(input.value =change)
      console.log(change)
     
      setIsFocus(false)
    }
  }

  useEffect(()=>{
    const temp:IPrices[]=[]
    const len=change.toString().length
    const base=change <= 1000000 ? 100000 : change <= 10000000 ? 1000000 : 10000000 <= 100000000 ? 10000000 : 1000000000
    for(var i=0;i<4;i++){
      /*  base 150
          100 000 x 150 000 00 chia 10^length-1 (2)
          1 000 000 x 1 500 000 00 chia 10^length-1 (2)
          10 000 000 x 15 000 000 00 chia 10^length-1 (2) 
          100 000 000 x 150 000 000 00 chia 10^length-1(2)
          1 000 000 000 x 1 500 000 000 00 chia 10^length-1(2)
          
      */
      // => cong thuc console.log((a*(100000*Math.pow(10,i)))/Math.pow(10,len-1))
      temp.push({price:change*(base*Math.pow(10,i))/Math.pow(10,len-1)})
    }
    change && setStringBottom(`${new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(change)} / tháng`)
    setRenderPrices(temp)
    console.log(change,input.value)
    if(input.name ==="room" || input.name ==="wc"){
      if(change > 100){
        setChange(100)
        input.onChange(input.value = 100)
      }
    }else if(input.name ==="areas" ){
      if(change > 1000000){
        setChange(1000000)
        input.onChange(input.value = 1000000)
      } 
    }else if(change>999000000000){
      setChange(999000000000)
      input.onChange(input.value = 999000000000)
    }
    if(!change){
      setStringBottom('')
    }
  },[change])
 
  return(
    <div className="space-y-1">
      <label className="font-semibold">{label}</label>
      {/* <button onClick={()=>console.log(new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(input.value))}>test</button> */}
      {touched &&
          ((error && <span className="error">*</span>) ||
            (warning && <span className="warning">*</span>))}
      <div className="relative"     >
        <input {...input}   placeholder={label} onClick={focusInput}   type={type} onChange={e => setChange(e.target.value)} value={change} autoComplete="off"  className={classNameInput}/>
        
       
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
                {!showMoney && input.name ==="du_an" || input.name ==="street" && change && !data.find((e:any) => e.name === change)   &&
                <div className="relative">
                  <ListGroup.Item>
                    {change} 
                    <button type="button" onClick={clear} className="absolute z-[4] top-2 gap-2 right-1 flex   items-center ">
                      <Image  src="/closed-btn.svg" className="h-4"/>
                      Thêm mới
                    </button>
                  </ListGroup.Item>
                  </div>
                  
                }
                
                {showMoney &&  change &&
                  renderPrices.map((item,i)=>{
                    return(
                      <RenderPrices key={i} price={item.price}   action={selectItem}/>
                    )
                  })
                }
                  
               
                  
                  
                  {!showMoney && data.map((item:any,index:any):any=>{
                    return(
                      <ListGroup.Item key={index} onClick={()=>selectItem(item)}
                      >
                        {item.name}
                      </ListGroup.Item>
                    )
                  })
                  }
                  <div></div>
                </div>
              </ListGroup>
            </div>
        </div>
        }
        {renderBottom && stringBottom &&
          <div className="mt-2">
            <RenderDropBottom value={stringBottom}/>
          </div>
         }
        
        
      </div>
    </div>
  )
}

const RenderInputTime=({
  dateFormat,
  showTimeSelect,
  classNameInput,
  input,
  label,placeholder,
}:any):any=>{
  

  return(
    <div className="space-y-1">
        
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

const RenderCheckbox=({
  classNameInput,
  classNameLabel,
  input,
  label,
  type,
  popup
}:any):any=>{
  return(
    <div>
        <div className="flex relative ">
          <input {...input}  type={type} id="check_note" className={classNameInput}></input>
          <label htmlFor="check_note" className={`${classNameLabel} info-hover`}>{label} </label>
          
          <RenderDropLeft icon="info-icon.svg" className="-top-0  -right-6 "/>
        
        </div>
    </div>
  )

}
const RenderToggle=({
  id,
  input,
  label,
  type,
}:any):any=>{
  return(
    <div>
        
       <label htmlFor={id} className="inline-flex relative items-center cursor-pointer">
            <input {...input}  type={type} id={id} className="sr-only peer"/>
            <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-semibold text-gray-900 dark:text-gray-300 ">{label}</span>
            <RenderDropLeft icon="info-icon.svg" className="-top-[0.625rem] -right-6 "/>
        </label>
    </div>
  )

}
const RenderCountToggle=({

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
      
      <input {...input}  className="w-full p-2 text-center rounded-md h-3/4 border-solid border-[1px] flex-[2_1_0%] border-gray-200"/>
      
      
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
    //console.log(temp)
    
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
 
    setChange(`${item.name}`)
    input.onChange(input.value =`${item.name}`)
    console.log(input)
    setIsVisible(true)
    setIsClick(true)
  }

  const add=()=>{
    input.value=change
    setIsVisible(true)
    setIsClick(true)
    console.log("add")
  }


  return(
    <div className="space-y-1">
      <label className="font-semibold">{label}</label>
      
      {isClick &&
          ((error && <span className="error">*</span>) ||
            (warning && <span className="warning">*</span>))}
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
                          <Image src="/arrow-left.svg" className="w-4 h-4"/>

                      </a>
                      
                  </div>
                  <div className=" w-full flex items-center justify-between">
                      <div className="flex flex-grow items-center justify-center">
                          <h3>{page}</h3>
                      
                      </div>
                  </div>
                  <div className="absolute flex  right-0 bottom-[25px]  px-4    w-[50px]  ">
                      <a onClick={onClose}>
                          <Image src="/closed-black.svg" className="w-4 h-4"/>

                      </a>
                      
                  </div>
            </div>
            {/* body */}
            <div className="w-full flex flex-col  p-5 bg-white rounded-b-lg ">
              <div className=" w-full flex flex-col  space-y-4  ">
                
                <div >
                  <input {...input}  placeholder={label} type={type} onChange={e => setChange(e.target.value)}  value={change} autoComplete="off" className={classNameInput}/>
                
                  <div className="relative" >
                    <RenderDropLeft action={search} icon={renderDropLeftIcon}/>
                  </div>
                  
                </div>
                <div className="overflow-y-auto h-[400px] tablet:h-[100vh] w-full relative bnone">
             
                    <ListGroup>
                      <div className="divide-y-[1px]  ">
                      {input.name ==="du_an" || input.name ==="street"   && change && !data.find((e:any) => e.name === change) &&
                      <div className="relative">
                        <ListGroup.Item>
                          {change}
                          <button type="button" onClick={add} className="absolute z-[4] top-2 gap-2 right-1 flex   items-center ">
                            <Image  src="/closed-btn.svg" className="h-4"/>
                            Thêm mới
                          </button>
                        </ListGroup.Item>
                        </div>
                      }
                      

                      {data.map((item:any,index:any):any=>{
                        return(
                          <ListGroup.Item key={index} onClick={()=>selectItem(item)}
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
const UploadForm:React.FC<IValues>=(props) => {
  const { handleSubmit, pristine, reset, submitting,status,prices } = props



  const {isMobile} =useDevice()



  return (
    <form className="space-y-5 mb-8 " id="formUpload" onKeyPress={(event:any):any=>{
      if (event.which === 13 /* Enter */) {
        event.preventDefault();
      }
    }} onSubmit={(e)=>{
      
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
                  data={street}
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
                  component={RenderInput}           
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
                component={RenderInput}           
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
                component={RenderInput}           
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
                component={RenderInput}           
                type="number"
                label="Số phòng vệ sinh"
              />
        </div>
        <div >
              <Field
                name="prices"
                showMoney={true}
                prices={prices}
                data={prices}
                renderBottom={true}
                classNameInput={`
                  w-full text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300 
                `}
                component={RenderDrop}           
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
                  component={RenderInput}           
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
                component={RenderInput}           
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
                component={RenderInput}           
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
          <p className="font-semibold  ">Tình trạng nội thất {!status && <span className="text-red-500">*</span>}</p>
          <div className='space-x-2 flex select-none w-full tablet:text-xs hideinput' >
              <div>
                <Field name="status" component={RenderRadio} id="none" type="radio" value="none" label="Chưa có"/>
              </div>
              <div>
                <Field name="status" component={RenderRadio} id="basic" type="radio"  value="basic" label="Cơ bản"/>
              </div>
              <div>
                <Field name="status" component={RenderRadio} id="full" type="radio"  value="full" label="Đầy đủ"/>
              </div>
              <div>
              <Field name="status" component={RenderRadio} id="vip" type="radio"  value="vip" label="Cao cấp"/>
              </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-semibold  ">Đặc điểm căn hộ</p>
          <div className="tablet:text-xs">
            <Field name="dac_diem" component={RenderRadio} id="can_goc" type="checkbox"  value="1" label="Căn góc"/>
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
              <Image src="/upload-image.svg" className=""/>
              <p>Đăng từ 1 đến 20 hình ảnh</p>
          </div>
        </div>
        <div className="space-y-2">
          <p className="font-semibold info">Video</p>
          
          <div className="w-full h-36 bg-slate-100 flex flex-col items-center justify-center border-dashed border-slate-300 border-[1px] rounded-lg">
              <Image src="/upload-video.svg" className=""/>
              <p>Đăng tối đa 1 video</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Image src="/play-button.svg" className="w-5 h-5 bg-black"/>
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
                component={RenderTextArea}           
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
                component={RenderTextArea}
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
                component={RenderInput}           
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
                component={RenderInput}           
                type="number"
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
                component={RenderInput}           
                type="number"
                label="Zalo"
              /> 
          </div>
      </div>
      <div className="space-y-2">
          <p className="font-semibold  ">Bạn là cá nhân / môi giới</p>
          <div className='space-x-2 flex select-none'>
              <div>
                <Field name="individual_broker" component={RenderRadio} id="individual" type="radio"  value="individual" label="Cá nhân"/>
              </div>
              <div>
                <Field name="individual_broker" component={RenderRadio} id="broker" type="radio"  value="broker" label="Môi giới"/>

              </div>
             
          </div>
        </div>
    </div>

    {/*container 5 */}
    <div className="p-5 px-14 bg-white space-y-4 rounded-xl tablet:px-3">
      <div className="flex flex-row justify-between">
        <h2 className="font-bold">Thông tin gói tin</h2>
        <div className="flex items-center">
          <Image src="/verified.svg" className="w-5 h-5"/>
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
                component={RenderInputTime}
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
                component={RenderInputTime} 
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
                   text-sm font-semibold ml-10 
                `}
                classNameInput={`
                form-checkbox rounded
                `}
                type="checkbox"
                component={RenderCheckbox} 
              
                label="Làm nổi bật tin đăng"
              /> 
        </div>
        <div>
              <Field
                name="auto_post"
                type="checkbox"
                component={RenderToggle} 
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
               
                component={RenderCountToggle} 
               
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

const selector = formValueSelector('uploadForm')
const mapState = (state: IValues) => ({
  status:selector(state, 'status'),
  prices:selector(state,'prices'),
})




export default connect(mapState)(reduxForm({
  form: 'uploadForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(UploadForm as any))


