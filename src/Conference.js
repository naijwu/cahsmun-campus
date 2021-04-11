import React, { useState } from 'react';
import Panel from './Panel';
import ChevronLeft from './assets/chevron-left.svg';
import logo from './assets/cahs-logo.png';

const Conference = () => {

    const [firstOpened, setFirstOpened] = useState(false);
    const [secondOpened, setSecondOpened] = useState(false);
    const [thirdOpened, setThirdOpened] = useState(true); 

    return (
        <div className='conference'>
            <Panel />
            <div className='conference-container'>
                <div className='information'>
                    {/* <div className='announcements social'>
                        <h2>Delegate Social Information</h2>
                        <p>
                            <br/>
                            Feel free to explore the various breakout rooms (in the Delegate Social Zoom Meeting)! If you need to be assigned to a particular breakout room let the Secretariat team know.
                        </p>
                        <h3>Photobooth</h3>
                        <p>
                            For the photobooth, please join the Photo Booth Breakout Room only when it is empty (excluding the Secretariat member present).
                        </p>
                        <h3>Trivia</h3>
                        <p>
                            Trivia will start at 8:00 PM and will be hosted by our USG of Outreach, Owen Ebose!
                        </p>
                        <h3>Minecraft Server</h3>
                        <p>
                            The Minecraft server IP Address is play.cahsmun.org. <br/><br/>
                            
                            The Challenge: Using any means necessary, defeat the Ender Dragon. The user who kills the Ender Dragon will win a $25 UberEats Gift Card. Feel free to mine around spawn to collect the resources needed. You have until 9:00 PM PDT. 
                        </p>
                    </div> */}

                    <div className='thank-you'>
                        <img draggable='false' src={logo} alt='logo' />
                        <p>
                            On behalf of the entire Secretariat and Staff team,
                            thank you for your participation in CAHSMUN 2021 and for learning 
                            today, so that you may lead tomorrow. ❤
                        </p>
                    </div>

                    <div className='announcements'>
                        <h2>Announcement</h2>
                        <p>
                            View the closing ceremony on YouTube by <a href="https://www.youtube.com/watch?v=Fe3wCb6hJrM&ab_channel=CAHSMUN" >clicking here</a>. Thank you all for an amazing weekend!
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
                                <td>5:30 pm – 6:00 pm</td>
                                <td>Sponsor Teacher Meeting @ Secretariat Desk</td>
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
                                Alternatively, you can send a message in the Inquiries Slack Channel, call our toll-free line at 1-833-REDCAHS (available 8am - 10pm PST), 
                                or email Emily Ni, our Secretary-General, at <a href="mailto:sg@cahsmun.org">sg@cahsmun.org</a>.
                            </p>
                        </div>
                    </section>
                    
                </div>
            </div>
        </div>
    );
}

export default Conference;