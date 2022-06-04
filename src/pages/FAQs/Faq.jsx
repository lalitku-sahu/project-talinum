import React from 'react'
import Buttons from '../../components/Buttons'

function Faq() {
  return (
    <div className='relative grid lg:grid-cols-2 gap-10 py-[120px] px-[3%] font-sans box-border  '>
        <div className='flex flex-col relative justify-center items-center'>
            <img src="https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa379a976b602_Phones.png" srcSet='https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa379a976b602_Phones-p-500.png 500w, https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa379a976b602_Phones-p-800.png 800w, https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa379a976b602_Phones.png 2103w' sizes='94vw' alt="Phones" className=' inline-block  top-0 left-0 max-w-full align-middle object-cover lg:w-full md:w-full	' />
            <img src="https://assets.website-files.com/5e865e09d8efa3310676b585/5e865e09d8efa3241b76b605_Content%20Pattern.svg" alt="Pattern" className='absolute top-0 max-w-full inline-block left-0 right-0 bottom-0  align-middle ' />
        </div>
        <div className='flex flex-col lg:items-start md:items-center lg:text-left text-center justify-center'>
            <h1 className=' my-[20px] md:text-[55px] lg:text-[55px] text-[48px] tracking-[-0.03em] font-bold block leading-none text-[#35b8be]  '>Order online with our simple checkout.</h1>
             <p className='mb-[10px] text-[18px] leading-[1.5] tracking-[-0.02em] text-[#546285]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.</p>
            <Buttons>See your FAQs</Buttons>
        </div>
    </div>
  )
}

export default Faq