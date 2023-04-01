import React from 'react';
import { stats } from "../constants";
import styles  from '../style';

const Stats = () => {
    return (
        <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
            {stats.map((stat, index) => (
                <div key={stat.id} className={`flex flex-1 justify-start items-center flex-row m-3`}>
                    <h4 className={`font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] text-white leading-[43px]`}>
                        {stat.value}
                    </h4>
                    <p className={`font-poppins font-normal xs:text-[20px] text-[15px] xs:leading-[26px] text-gradient uppercase ml-3 leading-[21px]`}>
                        {stat.title}
                    </p>
                </div>
            ) )}
        </section>
    );
};

export default Stats;