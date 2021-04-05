import React, { useState } from 'react';
import Panel from './Panel';
import ChevronLeft from './assets/chevron-left.svg';

const Conference = () => {

    const [firstOpened, setFirstOpened] = useState(true);
    const [secondOpened, setSecondOpened] = useState(false);
    const [thirdOpened, setThirdOpened] = useState(false); 

    return (
        <div className='conference'>
            <Panel />
            <div className='conference-container'>
                <div className='information'>
                    <div className='announcements'>
                        <h2>Announcement</h2>
                        <p>
                            Important information will be here &mdash; Keep posted!
                        </p>
                    </div>
                    <h2>General Information</h2>

                    <h3>Conference Schedule (PDT)</h3>

                    <div className={`schedule ${firstOpened ? 'opened' : 'closed'}`}>
                        <div className='schedule-head'>
                            <h4>April 9th, 2021</h4>
                            <div className={`schedule-toggle`} onClick={e=>setFirstOpened(firstOpened ? false : true)}>
                                <img src={ChevronLeft} alt='Chevron Left' />
                            </div>
                        </div>
                        
                        <table class="schedule-table">
                            <tr class="first">
                                <td>3:00 pm – 4:00 pm</td>
                                <td>Registration</td>
                            </tr>
                            <tr class="first">
                                <td>4:00 pm – 5:00 pm</td>
                                <td>Opening Ceremony</td>
                            </tr>
                            <tr class="first">
                                <td>5:00 pm – 6:00 pm</td>
                                <td>Dinner</td>
                            </tr>
                            <tr class="first">
                                <td>6:00 pm – 7:20 pm</td>
                                <td>Committee Session I</td>
                            </tr>
                            <tr class="first">
                                <td>7:20 pm – 7:30 pm</td>
                                <td>Break</td>
                            </tr>
                            <tr class="first">
                                <td>7:30 pm – 8:30 pm</td>
                                <td>Committee Session II</td>
                            </tr>
                        </table>
                    </div>

                    <div className={`schedule ${secondOpened ? 'opened' : 'closed'}`}>
                        <div className='schedule-head'>
                            <h4>April 10th, 2021</h4>
                            <div className={`schedule-toggle`} onClick={e=>setSecondOpened(secondOpened ? false : true)}>
                                <img src={ChevronLeft} alt='Chevron Left' />
                            </div>
                        </div>
                        
                        <table class="schedule-table">
                            <tr class="second">
                                <td>8:30 am – 9:40 am</td>
                                <td>Committee Session III</td>
                            </tr>
                            <tr class="second">
                                <td>9:40 am – 9:50 am</td>
                                <td>Break</td>
                            </tr>
                            <tr class="second">
                                <td>9:50 am – 11:00 am</td>
                                <td>Committee Session IV</td>
                            </tr>
                            <tr class="second">
                                <td>11:00 am – 11:20 am</td>
                                <td>Break</td>
                            </tr>
                            <tr class="second">
                                <td>11:20 am – 12:30 pm</td>
                                <td>Committee Session V</td>
                            </tr>
                            <tr class="second">
                                <td>12:30 pm – 1:40 pm</td>
                                <td>Lunch</td>
                            </tr>
                            <tr class="second">
                                <td>1:40 pm – 2:50 pm</td>
                                <td>Committee Session VI</td>
                            </tr>
                            <tr class="second">
                                <td>2:50 pm – 3:00 pm</td>
                                <td>Break</td>
                            </tr>
                            <tr class="second">
                                <td>3:00 pm – 4:10 pm</td>
                                <td>Committee Session VII</td>
                            </tr>
                            <tr class="second">
                                <td>4:10 pm – 4:30 pm</td>
                                <td>Break</td>
                            </tr>
                            <tr class="second">
                                <td>4:30 pm – 5:30 pm</td>
                                <td>Committee Session VIII</td>
                            </tr>
                            <tr class="second">
                                <td>5:30 pm – 7:00 pm</td>
                                <td>Dinner</td>
                            </tr>
                            <tr class="second">
                                <td>7:00 pm – 9:00 pm</td>
                                <td>Delegate Social</td>
                            </tr>
                        </table>
                    </div>

                    <div className={`schedule ${thirdOpened ? 'opened' : 'closed'}`}>
                        <div className='schedule-head'>
                            <h4>April 11th, 2021</h4>
                            <div className={`schedule-toggle`} onClick={e=>setThirdOpened(thirdOpened ? false : true)}>
                                <img src={ChevronLeft} alt='Chevron Left' />
                            </div>
                        </div>
                        
                        <table class="schedule-table">
                            <tr class="third">
                                <td>8:00 am – 10:00 am</td>
                                <td>Morning Crisis (Session IX)</td>
                            </tr>
                            <tr class="third">
                                <td>10:00 am – 10:45 am</td>
                                <td>Extended Break</td>
                            </tr>
                            <tr class="third">
                                <td>10:45 am – 12:00 pm</td>
                                <td>Committee Session X</td>
                            </tr>
                            <tr class="third">
                                <td>12:00 pm – 12:10 pm</td>
                                <td>Break</td>
                            </tr>
                            <tr class="third">
                                <td>12:10 pm – 1:10 pm</td>
                                <td>Committee Session XI</td>
                            </tr>
                            <tr class="third">
                                <td>1:10 pm – 2:15 pm</td>
                                <td>Lunch</td>
                            </tr>
                            <tr class="third">
                                <td>2:15 pm – 3:45 pm</td>
                                <td>Closing Ceremony</td>
                            </tr>
                        </table>
                    </div>

                    <section className='contact'>
                        <h3>Contact the Secretariat</h3>
                        <div className='contact-grid'>
                            <h4>All Inquiries</h4>
                            <p>
                                For any inquiries, visit us at the Secretariat Desk (Accessible via the 'Campus Rooms' link on the side). 
                                Alternatively, you can email Emily Ni, our Secretary-General, at <a href="mailto:sg@cahsmun.org">sg@cahsmun.org</a>.
                            </p>
                        </div>
                    </section>
                    
                </div>
            </div>
        </div>
    );
}

export default Conference;