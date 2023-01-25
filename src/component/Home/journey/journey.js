import React from 'react';
import './journey.css'
import iso from '../../../Assets/iso.png'
const Journey_main_page = () => {
    return (
            <div className='main_wrapper_journey_main'>
                <div className='journey_main_title'>
                    <h1>OUR JOURNEY AND ACHIEVEMENTS</h1>
                </div>
                <div className='journey_main_content'>
                    <p>It is a concern promoted by 2 individuals. Sabyasachi having around 23 years of core domain experience in sales and marketing encompassing insights in sales , distribution , logistics , warehousing having handled all operations in different capacities in multiple geographical locations and countries.
Another promoter Vivek has around 22 years of experience specializing in backend operations in IT platform, banking and business process consulting and having exposure in various geographical locations and countries.
This concern is a hybrid concern having diversified business interests
 in both distribution and CFA operations in Eastern India.
In pursuance to adhere strictly to systems and laid down processes have obtained them the coveted ISO 9001 : 2015 certification.
</p>
            <img src={iso}/>
            <p>We are distributors of Motoforce brand of lubricants in West Bengal and Minda 2W batteries in four districts of Southern Bengal. 
Primarily handling setting up distribution houses across the state and their channel set up down the line backed by professional and domain expertise services by providing continuous support in their sales growth .
We are also distributors of Daramic separators in Eastern India barring Kolkata location.
We also cater to other battery companies like Brostek for their C&F operations and marketing setup for
West Bengal .

</p>
                </div>
            </div>
    );
};

export default Journey_main_page;