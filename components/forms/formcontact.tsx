import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import type { IValues } from '../../helps/validate';
import { validate, warn } from '../../helps/validate';


const RenderInput = ({
    classNameInput,renderDropLeftIcon,
    classNameLabel,
    input,
    label,
    type,
    check,
    meta: { touched, error, warning }
  }:any):any => {
    const [change,setChange]=useState(input.value)
    
    return(
      <div className="space-y-1">
        
        <label className="font-semibold">{label}</label>
        {check &&
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
   
    check,
    meta: { touched, error, warning }
  }:any):any => {
    const [change,setChange]=useState(input.value)

   
    return(
  
      <div className="space-y-1">
        <label htmlFor={id} className="font-semibold">{label}</label>
        {check &&
        ((error && <span className="error">*</span>) ||
            (warning && <span className="warning">*</span>))}
            <textarea {...input}  id={id}  
                value={change}
                className={classNameInput}
                placeholder={label}
                onChange={e => setChange(e.target.value)}
            ></textarea>
         
      </div>
    )
}

const data={
    user_name:'',
    user_phone:'',
    email:'',
    description:''
}

const ContactForm:React.FC<IValues>=(props)=>{
    
    const { handleSubmit, pristine, reset, submitting } = props


    return(
        <form className="space-y-5 mb-8 " id="formUpload" onKeyPress={(event:any):any=>{
            if (event.which === 13 /* Enter */) {
                event.preventDefault();
              }
            }} onSubmit={(e)=>{
              
              e.preventDefault();
              handleSubmit
              }}>


            <div className="p-5 px-10  bg-white space-y-7 rounded-xl  tablet:px-3">
                <div className="space-y-4">
                    <h2 className="font-bold">Liên hệ với chúng tôi</h2>
                    <div className="h-[2px] bg-gray-200 "></div>
                </div>
                 
                <div className="flex gap-4">
                    <div className="flex-[1_1_50%] space-y-4">
                        <p>Chúng tôi biết bạn có nhiều sự lựa chọn.Nhưng cảm ơn vì đã lựa chọn ABC.com</p>
                        <p><span className="font-semibold">Hotline:</span>090123456</p>
                        <p><span className="font-semibold">Email:</span>xyz@gmail.com</p>
                        <p><span className="font-semibold">Zalo:</span>090123456</p>
                        <p><span className="font-semibold">Viber:</span>090123456</p>
                        <p><span className="font-semibold">Địa chỉ:</span>Tòa nhà Lexington Residence, Số 38 Trần Não, Phường An Phú, Quận 2, Thành phố Hồ Chí Minh</p>
                    </div>
                    <div className="flex-[1_0_50%] space-y-4">
                        <div >
                            <Field
                                name="user_name"
                                check={true}
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
                                check={true}
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
                                name="email"
                                
                                classNameInput={`
                                w-full text-placeholder
                                placeholder:text-slate-400  
                                bg-white rounded pl-3 py-2 pr-10
                                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                border border-slate-300 
                                `}
                                component={RenderInput}           
                                type="text"
                                label="Email"
                            /> 
                        </div>
                        <div className="pt-10">
                            <Field
                                name="description"
                                check={true}
                                classNameInput={`
                                w-full text-placeholder
                                placeholder:text-slate-400  
                                bg-white rounded pl-3 py-2 pr-10
                                shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1
                                border border-slate-300 h-[200px]
                                `}
                                component={RenderTextArea}           
                                type="text"
                                label="Nội dung"
                            /> 
                        </div>
                       
                        <button type="submit" disabled={submitting} className="bg-purple-500 w-full p-2 rounded-full text-white font-bold">Gửi tin nhắn</button>
             
                    </div>
                </div>
               

            </div>


        </form>
    )
}

const mapState = (state: any) => ({
    initialValues :data
})
export default connect(mapState)(reduxForm({
    form: 'contactForm', // a unique identifier for this form
    validate, // <--- validation function given to redux-form
    warn, // <--- warning function given to redux-form
    enableReinitialize : true
  })(ContactForm as any))