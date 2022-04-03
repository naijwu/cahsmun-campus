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
                    <div className='announcements social'>
                        <h2>Delegate Social Information</h2>
                        <p>
                            <br/>
                            Feel free to explore the various breakout rooms (in the Delegate Social Zoom Meeting)! If you need to be assigned to a particular breakout room let the Secretariat team know.
                        </p>
                        {/* <h3>Photobooth</h3>
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
                        </p> */}
                    </div>

                    {/* <div className='thank-you'>
                        <img draggable='false' src={logo} alt='logo' />
                        <p>
                            On behalf of the entire Secretariat and Staff team,
                            thank you for your participation in CAHSMUN 2021 and for learning 
                            today, so that you may lead tomorrow. ❤
                        </p>
                    </div> */}

                    {/* <div className='announcements'>
                        <h2>Announcement</h2>
                        <p>
                            Attend the opening ceremonies at 4:00 PM on YouTube by <a href="https://youtu.be/V2eFBLv3HvI">clicking here</a>. Hope to see you there!
                        </p>
                    </div> */}

                    <h1 className='welcome'>Welcome to CAHSMUN 2022!</h1>


                    <h2>General Information</h2>

                    <h3>Conference Schedule (PDT)</h3>

                    <div className={`schedule ${firstOpened ? 'opened' : 'closed'}`}>
                        <div className='schedule-head'>
                            <h4>April 1, 2022</h4>
                            <div className={`schedule-toggle`} onClick={e=>setFirstOpened(firstOpened ? false : true)}>
                                <img src={ChevronLeft} alt='Chevron Left' />
                            </div>
                        </div>
                        
                        <table class="schedule-table">
                            <tr class="first">
                                <td>3:30 pm – 4:00 pm</td>
                                <td>Registration</td>
                            </tr>
                            <tr class="first">
                                <td>4:00 pm – 5:00 pm</td>
                                <td>Opening Ceremonies</td>
                            </tr>
                            <tr class="first">
                                <td>5:00 pm – 6:15 pm</td>
                                <td>Dinner</td>
                            </tr>
                            <tr class="first">
                                <td>6:15 pm – 7:15 pm</td>
                                <td>Committee Session I</td>
                            </tr>
                            <tr class="first">
                                <td>7:15 pm – 7:30 pm</td>
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
                            <h4>April 2, 2022</h4>
                            <div className={`schedule-toggle`} onClick={e=>setSecondOpened(secondOpened ? false : true)}>
                                <img src={ChevronLeft} alt='Chevron Left' />
                            </div>
                        </div>
                        
                        <table class="schedule-table">
                            <tr class="second">
                                <td>9:30 am – 10:30 am</td>
                                <td>Committee Session III</td>
                            </tr>
                            <tr class="second">
                                <td>10:30 am – 10:45 am</td>
                                <td>Break</td>
                            </tr>
                            <tr class="second">
                                <td>10:45 am – 11:45 am</td>
                                <td>Committee Session IV</td>
                            </tr>
                            <tr class="second">
                                <td>11:45 am – 12:00 pm</td>
                                <td>Break</td>
                            </tr>
                            <tr class="second">
                                <td>12:00 pm – 1:00 pm</td>
                                <td>Committee Session V</td>
                            </tr>
                            <tr class="second">
                                <td>1:00 pm – 2:00 pm</td>
                                <td>Lunch</td>
                            </tr>
                            <tr class="second">
                                <td>2:00 pm – 3:00 pm</td>
                                <td>Committee Session VI</td>
                            </tr>
                            <tr class="second">
                                <td>3:00 pm – 3:30 pm</td>
                                <td>Break</td>
                            </tr>
                            <tr class="second">
                                <td>3:30 pm – 4:30 pm</td>
                                <td>Committee Session VII</td>
                            </tr>
                            <tr class="second">
                                <td>4:30 pm – 5:00 pm</td>
                                <td>Break</td>
                            </tr>
                            <tr class="second">
                                <td>5:00 pm – 6:00 pm</td>
                                <td>Committee Session VIII</td>
                            </tr>
                            <tr class="second">
                                <td>6:00 pm – 7:00 pm</td>
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
                            <h4>April 3, 2022</h4>
                            <div className={`schedule-toggle`} onClick={e=>setThirdOpened(thirdOpened ? false : true)}>
                                <img src={ChevronLeft} alt='Chevron Left' />
                            </div>
                        </div>
                        
                        <table class="schedule-table">
                            <tr class="third">
                                <td>9:00 am – 11:00 am</td>
                                <td>Morning Crisis (Session IX)</td>
                            </tr>
                            <tr class="third">
                                <td>11:00 am – 11:45 am</td>
                                <td>Extended Break</td>
                            </tr>
                            <tr class="third">
                                <td>11:45 am – 12:45 pm</td>
                                <td>Committee Session X</td>
                            </tr>
                            <tr class="third">
                                <td>12:45 pm – 2:00 pm</td>
                                <td>Lunch</td>
                            </tr>
                            <tr class="third">
                                <td>2:00 pm – 3:00 pm</td>
                                <td>Committee Session XI</td>
                            </tr>
                            <tr class="third">
                                <td>3:00 pm – 4:30 pm</td>
                                <td>Closing Ceremonies</td>
                            </tr>
                        </table>
                    </div>

                    <section className='contact'>
                        <h3>Contact the Secretariat</h3>
                        <div className='contact-grid'>
                            <h4>All Inquiries</h4>
                            <p>
                                For any inquiries, visit us at the Secretariat Desk (Accessible via the 'Campus Rooms' link on the side). 
                                Alternatively, you can send a message in the Inquiries Slack Channel, or email Koby Chen, our Secretary-General, at <a href="mailto:sg@cahsmun.org">sg@cahsmun.org</a>.
                            </p>
                        </div>
                    </section>
                    
                </div>
            </div>
        </div>
    );
}

export default Conference;