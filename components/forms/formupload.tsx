import { ListGroup } from 'flowbite-react';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { connect } from 'react-redux';
import { Field, formValueSelector, reduxForm } from 'redux-form';
import type { IValues } from '../../helps/validate';
import { validate, warn } from '../../helps/validate';
import useBlur from '../../hooks/useBlur';
import useDevice from '../../hooks/useDevice';
import { IPrices } from '../../interfaces/interfaces';
import ScrollButton from '../button/scrollbutton';

const RenderInput = ({
  classNameInput,renderDropLeftIcon,
  classNameLabel,
  input,
  label,
  type,
  meta: { touched, error, warning }
}:any):any => {
  const [isClick,setIsClick]=useState(true)
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

  },[change,warning,input])
  return(
    <div className="space-y-1">
      
      <label className="font-semibold">{label}</label>
      {isClick &&
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
  const [isClick,setIsClick] =useState(true)
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
  
  },[input.name,countTitle])
  const { ref, isComponentVisible,setIsComponentVisible } = useBlur(false);
  const handleClick=()=>{
    setIsComponentVisible(true)
  }
  return(

    <div className="space-y-1">
          <label htmlFor={id} className="font-semibold">{label}</label>
          {isClick &&
          ((error && <span className="error">*</span>) ||
            (warning && <span className="warning">*</span>))}
          <div ref={ref}>
            <textarea {...input}  id={id}  
                onKeyDown={(e)=>{if(e.key==="Backspace"){
                  setIsFull(false)
                }}}
                onClick={handleClick}
                className={classNameInput}
                placeholder={label}
                onChange={hanldeChange}
            ></textarea>
            <div className="flex flex-row justify-between">
              <p className="text-sm opacity-60">Tối thiểu 30 ký tự, tối đa {maxtext} ký tự</p>
              <p>{countTitle}/{maxtext}</p>
            </div>
          
             
              {isComponentVisible && 
           
                
                  <div className=" bg-slate-300 shadow-lg rounded-lg flex flex-col gap-4 w-[w-full] py-4 px-5">
                      <div className="flex gap-2">
                          <div>img</div>
                          <p>Chỉ nhập tên sản phẩm cần rao bán</p>
                      </div>
                      <div className="flex gap-2">
                          <div>img</div>
                          <p>Chỉ nhập tên sản phẩm cần rao bán</p>
                      </div>
                  </div>
           
         
              }
            </div>
    </div>
  )
}
const data_infos=new Array(5).fill({
  name:"Vip đặc biệt 24 ảnh"
})

const du_an_data=new Array(120).fill({
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
  

  return(
    <>
    <div >
      <button type="button" 
            
             onClick={action} className={`absolute z-[4] -top-8 right-2 flex  items-center ${className}`}>
            <div className="w-5 h-5 relative">
              <Image width="100%" height="100%" layout="fill" objectFit="contain"   src={icon} className="w-full h-5"/>
             </div>
      
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
        <label htmlFor={id} className="peer-checked:bg-red-200 px-4 py-2 bg-slate-100 w-20 text-center rounded-3xl font-normal peer-hover:bg-red-200">{label}</label>
    </div>
  )

}


const RenderDrop=({
  data,renderDropLeftIcon,renderBottom,
  classNameInput,showMoney,
  input,
  label,
  type,
  meta: { touched, error, warning }
}:any):any=>{

  const [change,setChange]= useState(input.value)
  const [isClick,setIsClick]=useState(true)
  const [isButton,setIsButton]=useState(true)
  const { ref, isComponentVisible,setIsComponentVisible } = useBlur(false);
  
  const [renderPrices,setRenderPrices]=useState<IPrices[]>([])
  const [stringBottom,setStringBottom]=useState<string>('')
  const clear=()=>{
    setChange('')
  }
  const handleClick=()=>{
    setIsComponentVisible(true)
  }
  const selectItem=(item:any):any=>{
   
    input.onChange(input.value =`${item.name}`)
    setChange(`${item.name}`)
    setIsComponentVisible(false)
  }

  useEffect(()=>{
    const temp:IPrices[]=[]
    const len=change.toString().length
    const base=change <= 1000000 ? 100000 : change <= 10000000 ? 1000000 : 10000000 <= 100000000 ? 10000000 : 1000000000
    for(var i=0;i<4;i++){
      temp.push({price:change*(base*Math.pow(10,i))/Math.pow(10,len-1)})
    }
    change && setStringBottom(`${new Intl.NumberFormat('it-IT', { style: 'currency', currency: 'VND' }).format(change)} / tháng`)
    setRenderPrices(temp)
    
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
  },[change,input])
 
  return(
    <div className="space-y-1">
      <label className="font-semibold">{label}</label>
      {isClick &&
          ((error && <span className="error">*</span>) ||
            (warning && <span className="warning">*</span>))}
      <div className="relative"  ref={ref}   >
        <input {...input}   placeholder={label} onClick={handleClick}   
                type={type}
                onChange={(e:any) => {
                  if(isButton){
                    setChange(e.target.value)
                  }
              
                }} 
                onKeyDown={(e:any)=>{
                  if(!((e.keyCode > 95 && e.keyCode < 106)
                    || (e.keyCode > 47 && e.keyCode < 58) 
                    || e.keyCode == 8) && type==="number") {
                      setIsButton(false);
                  }else setIsButton(true)
                }}
              
                value={change} autoComplete="off"  className={classNameInput}/>
        
       
        {renderDropLeftIcon && renderDropLeftIcon.search('/') === -1 && 

          <div className="relative divide-x-2" >
                      
                      
                      
            <div></div>
            <div className="absolute z-[4] -top-8 right-4 flex  items-center ">
                <div className=" pl-4">{renderDropLeftIcon}</div>
            </div>
          </div>
        }
        {isComponentVisible &&
        <div className="relative" >
            {renderDropLeftIcon && renderDropLeftIcon.search('/') !== -1 && <RenderDropLeft action={clear} icon={renderDropLeftIcon}/>

            }
          
          
          
            <div className="bnone">
              <ListGroup>
                <div className="divide-y-[1px]">
             
                
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
              {change.toString().length===0 &&<div className=" bg-slate-300 shadow-lg rounded-lg flex flex-col gap-4 w-[w-full] py-4 px-5">
                      <div className="flex gap-2">
                          <div>img</div>
                          <p>Chỉ nhập tên sản phẩm cần rao bán</p>
                      </div>
                      <div className="flex gap-2">
                          <div>img</div>
                          <p>Chỉ nhập tên sản phẩm cần rao bán</p>
                      </div>
                </div>}
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
  classNameInput,data,
  classNameLabel,
  input,
  label,
  type,
  popup
}:any):any=>{
  const { ref, isComponentVisible,setIsComponentVisible } = useBlur(false);
  const handleClick=()=>{
    setIsComponentVisible(true)
  }
  return(
    <div>
        <div className="flex relative ">
          <input {...input}  type={type} id="check_note" className={classNameInput}></input>
          <label htmlFor="check_note" className={`${classNameLabel} info-hover`}>{label} </label>
          
          <div ref={ref}>
              <RenderDropLeft action={handleClick} icon="/info-icon.svg" className="-top-0 -right-6 "/>
              {isComponentVisible && 
           
                  
                  <div className="absolute inset-x-1/2 top-5 bg-[#f7f7f7] shadow-round w-[18rem] z-[60] ">
                        <RenderInfo data={data}/>
                  </div>
         
              }
            </div>
        
        </div>
    </div>
  )

}
const RenderToggle=({
  id,data,
  input,
  label,
  type,
}:any):any=>{
  const { ref, isComponentVisible,setIsComponentVisible } = useBlur(false);
  const handleClick=()=>{
    setIsComponentVisible(true)
  }
  return(
    <div>
        
       <label htmlFor={id} className="inline-flex relative items-center cursor-pointer item-center">
            <input {...input}  type={type} id={id} className="sr-only peer"/>
            <div className="w-10 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[3px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ml-3 text-sm font-semibold text-gray-900 dark:text-gray-300 ">{label}</span>
          
            <div ref={ref}>
              <RenderDropLeft action={handleClick} icon="/info-icon.svg" className="-top-0 -right-6 "/>
              {isComponentVisible && 
           
                  
                  <div className="absolute inset-x-1/2 top-5 bg-[#f7f7f7] shadow-round w-[18rem] z-[60] ">
                        <RenderInfo data={data}/>
                  </div>
          
              }
            </div>


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
  meta: {  error, warning }
}:any):any=>{

  const [isVisible,setIsVisible] = useState(true)
  const [change,setChange]= useState(input.value)
  const [isClick,setIsClick]=useState(true)
  const onOpen=()=>{
    setIsVisible(false)
  }
  const onClose=()=>{
    setIsVisible(true)
  }
  const search=()=>{
    
  }
  const selectItem=(item:any):any=>{
    input.onChange(`${item.name}`)
    setIsVisible(true)
  }

  const add=()=>{
    setIsVisible(true)
  }


  return(
    <div className="space-y-1">
      <label className="font-semibold">{label}</label>
      
      {isClick &&
          ((error && <span className="error">*</span>) ||
            (warning && <span className="warning">*</span>))}
      <button type="button" className={`w-full text-placeholder
              placeholder:text-slate-400  
              bg-white rounded pl-3 py-2 pr-10
              shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
              border border-slate-300 text-left ${change ? 'text-black':'text-slate-400 '} `}  onClick={onOpen}
              
      >
        {change  ? change : label}
      </button>
      
      <div className={`${isVisible ? 'hidden' : 'block'} modal  flex justify-center items-center `}>
        <div className="modal-content  tablet:w-full tablet:h-full -translate-y-7 rounded-lg">
          <div className="w-full flex flex-col space-y-4 items-center  bg-slate-50 laptop:text-sm  rounded-lg ">
            {/* header */}
            <div  className={`w-full bg-white flex flex-col relative justify-center items-center py-5 rounded-t-lg shadow select-none gap-4 `}>
                  <div className="absolute flex inset-x-0 bottom-[25px] px-4  w-[50px]  ">
                      <a onClick={onClose}>
                        <div className="w-4 h-4 relative cursor-pointer">
                           <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/arrow-left.svg" />
                        </div>
                      </a>
                      
                  </div>
                  <div className=" w-full flex items-center justify-between">
                      <div className="flex flex-grow items-center justify-center">
                          <h3>{page}</h3>
                      
                      </div>
                  </div>
                  <div className="absolute flex  right-0 bottom-[25px]  px-4    w-[50px]  ">
                      <a onClick={onClose}>
                        <div className="w-4 h-4 relative cursor-pointer">
                            <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/closed-black.svg" />
                        </div>
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
                <div className="overflow-y-auto h-[50vh] tablet:h-[100vh] w-full relative bnone">
             
                    <ListGroup>
                      <div className="divide-y-[1px]  ">
                      {input.name ==="du_an"  && change && !data.find((e:any) => e.name === change) &&
                      <div className="relative">
                        <ListGroup.Item>
                          {change}
                          <button type="button" onClick={add} className="absolute z-[4] top-2 gap-2 right-1 flex   items-center ">
                             <div className="h-4 w-4 relative">
                              <Image width="100%" height="100%" layout="fill" objectFit="contain"   src="/closed-btn.svg" className="h-4"/>
                              </div>
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

const RenderInfo=({data}:any)=>{
  return(
    <div className="p-3 px-4">
        <p className="font-semibold">Số lượng tối đa được tải lên</p>
        <ul className="list-square list-inside">
          {data.map((item:any,index:any):any=>{
            return(
              <li key={index}>
                <a className="font-normal">{item.name}</a>
              </li>
            )
          })}
        </ul>
       
    </div>
  )
}

const RenderImage=({data,action}:any):any=>{

  
  return(
    <div className="flex gap-7 flex-wrap w-full pt-3">
      {data.length<20 && 
        <button  onClick={action} className="w-[8.5rem] h-[8.5rem] ">
          <div className="relative w-[8.5rem] h-[8.5rem] border-[1px] border-dashed rounded-lg">
              <Image  layout="fill" objectFit="contain"  src="/upload-image.svg"  />
          </div>
        </button>
      }
      {data.map((item:any,index:any):any=>{
        return(
          <div key={index} className="relative w-[8.5rem] h-[8.5rem] border-[1px] border-solid rounded-lg">
            <Image   layout="fill" objectFit="contain"   src={item} />
            <div className="absolute -right-2 -top-2.5">
              <button className="w-5 h-5  bg-black rounded-full">
                <div className="relative w-5 h-5 ">
                  <Image   layout="fill" objectFit="contain"   src="/closed-white.svg" />
                </div>
              </button>
            </div>
          </div>
        )
      })}
      
    </div>
  )
}
const RenderVideo=({data,action}:any):any=>{

  
  return(
    <div className="flex gap-2 flex-wrap w-full h-full pt-3">
      {data.map((item:any,index:any):any=>{
        return(
          <div key={index} className="relative w-full h-full">
            <video controls width="100%" height="100%">
              <source src={item}  />
    
            </video>
            <div className="absolute -right-2 -top-2.5">
              <button className="w-5 h-5  bg-black rounded-full">
                <div className="relative w-5 h-5 ">
                  <Image  width="100%" height="100%" layout="fill" objectFit="contain"   src="/closed-white.svg" />
                </div>
              </button>
            </div>
          </div>
        )
      })}
 
    </div>
  )
}

const RenderLink=({  
  input,data,
  label,description,
  img,type,
  meta: { touched, error, warning }
}:any):any=>{
  const [change,setChange]= useState()
  const [selectedFile, setSelectedFile] = useState([])
  const [preview, setPreview] = useState([])
  const fileUpload = useRef<any>(null);
  const { ref, isComponentVisible,setIsComponentVisible } = useBlur(false);
  const handleClick=()=>{
    setIsComponentVisible(true)
  }
  useEffect(() => {
    if(input.name==="image"){
      if (selectedFile.length===0) {
          setPreview([])
          return
      }
      let array=[] as any
      [...selectedFile].forEach((file) => {
        const objectUrl = URL.createObjectURL(file) 
        array.push(objectUrl)
      })
      
      setPreview(array)
      input.onChange(array)
    }else if(input.name==="video"){
      if (selectedFile.length===0) {
        setPreview([])
        return
      }
      let array=[] as any
      [...selectedFile].forEach((file) => {
        const objectUrl = URL.createObjectURL(file) 
        array.push(objectUrl)
      })
      setPreview(array)
      input.onChange(array)
      console.log("a")
    }
  }, [selectedFile])
  const onSelectFile = (e:any) => {

      if (!e.target.files || e.target.files.length === 0) {
          setSelectedFile([])
          return
      }
      let droppedFiles = e.target.files;
      setSelectedFile(droppedFiles)
  }

  const handleUpload = () => {

    fileUpload.current.click()
  };
  return(
    <div>
        
        <div className="inline-flex relative items-center cursor-pointer item-center">
          <p className="font-semibold ">{label}</p>
          <RenderDropLeft action={handleClick} icon="/info-icon.svg" className="-top-0 -right-6 "/>
          <div ref={ref}>
                
                {isComponentVisible && data &&
            
                    
                    <div className="absolute inset-x-1/2 top-5 bg-[#f7f7f7] shadow-round w-[18rem] z-[60] ">
                          <RenderInfo data={data}/>
                    </div>
            
                }
            </div>
        </div>
        <input ref={fileUpload} className="hidden"  type={type} accept={input.name === "image" ? "image/*" : "video/*"} onChange={onSelectFile} multiple={input.name === "video" ? false : true}/>
          {selectedFile.length > 0 ? 
            ( (input.name==="image" && <RenderImage data={preview} action={handleUpload}/>)||
              (input.name==="video" && <RenderVideo  data={preview} action={handleUpload}/>)
            )
          :
            <button onClick={() => handleUpload()} className="w-full">
            <div className="w-full h-36 bg-slate-100 flex flex-col items-center justify-center border-dashed border-slate-300 border-[1px] rounded-lg">
                <div className="relative w-auto h-auto">
                  <Image width="100%" height="100%" layout="intrinsic" objectFit="contain"  src={img} />
                </div>
                <p>{description}</p>
            </div>
            </button>
          }
    </div>
  )

}
const RenderLink2=({  
  input,classNameInput,
  label,description,
  img,type,

}:any):any=>{
 
  const [change,setChange]=useState(input.value)
  const { ref, isComponentVisible,setIsComponentVisible } = useBlur(false);
  const handleClick=()=>{
    setIsComponentVisible(true)
  }

  return(
    <div className="flex gap-2">
       <div className="w-5 h-5 bg-black relative">
          <Image width="100%" height="100%" layout="intrinsic" objectFit="contain"  src={img} />
        </div>
        <div className="relative" ref={ref} >
        <button type="button" onClick={handleClick} className="text-left">{input.value ? input.value : description}</button> 
        {isComponentVisible && (
            <div className="absolute top-6 ">
              <input {...input} type={type} placeholder={label} value={change}  onChange={e => setChange(e.target.value)} className={`${classNameInput}`}/>
            </div>
        )}  
        </div>
    </div>
  )

}

const UploadForm:React.FC<IValues>=(props) => {
  const { handleSubmit, pristine, reset, submitting,status,image,du_an } = props

 

  const {isMobile} =useDevice()



  return (
    <form className="space-y-5 mb-8 " id="formUpload" onKeyPress={(event:any):any=>{
      if (event.which === 13 /* Enter */) {
        event.preventDefault();
      }
    }} onSubmit={handleSubmit}>
        
 
  
    {/*container 1 */}
    <div className="p-5 px-14 bg-white space-y-4 rounded-xl  tablet:px-3">

        <h2 className="font-bold">Vị trí căn hộ</h2>
        <div >
       
          <Field
              name="du_an"
              data={du_an_data}
              renderDropLeftIcon="/search_grey.svg"
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
              renderDropLeftIcon="/search_grey.svg"
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
                renderDropLeftIcon="/search_grey.svg"
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
                  renderDropLeftIcon="/search_grey.svg"
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
                  renderDropLeftIcon="/search_grey.svg"
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
                renderDropLeftIcon="/search_grey.svg"
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
                renderDropLeftIcon="/search_grey.svg"
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
                renderDropLeftIcon="/search_grey.svg"
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
                renderDropLeftIcon="/search_grey.svg"
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
                renderDropLeftIcon="/search_grey.svg"
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
        <div className="space-y-3 w-full ">
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
        <div className="space-y-3">
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
            <Field
                name="image"
                component={RenderLink}           
                label="Hình ảnh"
                data={data_infos}
                description="Đăng từ 1 đến 20 hình ảnh"
                img="/upload-image.svg"
                type="file" 
            />
        </div>
        <div className="space-y-2">
            <Field
                name="video"
                data={data_infos}
                component={RenderLink}           
                label="Video"
                type="file"   
                description="Đăng tối đa 1 video"
                img="/upload-video.svg"
            />
        </div>
        <div >
            <Field
                name="youtube"
                component={RenderLink2}  
                type="text"     
                description="Hoặc thêm video từ Youtube"
                img="/play-button.svg"
                classNameInput="w-[20rem] h-[3rem] text-placeholder
                  placeholder:text-slate-400  
                  bg-white rounded pl-3 py-2 pr-10
                  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                  border border-slate-300"
                label="Nhập link youtube"
            />
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
          <div className="w-5 h-5 relative mr-1">
           <Image width="100%" height="100%" layout="fill" objectFit="contain"  src="/verified.svg" />
           </div>
          <p className="text-purple-500">Tăng hiệu quả đáng tin</p>
        </div>
      </div>
      <div >
            <Field
                name="time_day"
                data={city}
                renderDropLeftIcon="/search_grey.svg"
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
                data={data_infos}
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
                data={data_infos}
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
          {!isMobile && <ScrollButton className="left-[0] bottom-[8%] " submitting={submitting} isSubmitButton={true}/>}
          <button type="submit" disabled={submitting} className="bg-pink-800 w-full p-3 rounded-lg text-white font-bold">Đăng tin</button>

    </div>




    </form>
  )
}

const selector = formValueSelector('uploadForm')
const mapState = (state:any) => ({
  status:selector(state, 'status'),
  initialValues:{
    du_an:''
  }
})




export default connect(mapState)(reduxForm({
  form: 'uploadForm', // a unique identifier for this form
  validate, // <--- validation function given to redux-form
  warn // <--- warning function given to redux-form
})(UploadForm as any))


