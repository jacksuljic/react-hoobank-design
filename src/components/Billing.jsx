import React from 'react'
import { apple, bill, google } from '../assets'
import styles, { layout } from '../style'
const Billing = () => {
    return (
        <section id={'product'} className={layout.sectionReverse}>
            <div className={layout.sectionImgReverse}>
                <img src={bill} alt={'billing'} className={'w-full h-full relative z-[5]'} />
                <div className={`absolute z-[3] absolute top-0 w-1/2 h-1/2 -left-1/2 rounded-full white__gradient`}/>
                <div className={`absolute z-[0] absolute bottom-0 w-1/2 h-1/2 -left-1/2 rounded-full pink__gradient`}/>
            </div>

            <div className={layout.sectionInfo}>
                <h4 className={styles.heading2}>
                    Easily control your <br className={'sm:block hidden'}/> billing & invoicing.
                </h4>
                <p className={`${styles.paragraph} mt-5 max-w-[470px]`}>
                    Elit enim sed massa etiam.
                    Mauris eu adipiscing ultrices ametodio aenean neque.
                    Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
                </p>
                <div className={'flex flex-row flex-wrap sm:mt-10 mt-6'}>
                    <img src={apple} alt={'apple store link'} className={'w-[128px] h-[42px] mr-5 cursor-pointer object-contain'}/>
                    <img src={google} alt={'google store link'} className={'w-[128px] h-[42px] cursor-pointer object-contain'}/>
                </div>
            </div>
        </section>
    )
}

export default Billing