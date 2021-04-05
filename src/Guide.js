import React, {useState, useEffect} from 'react';
import Panel from './Panel';
import { BrowserRouter as Router, Switch, Route, Link, Redirect, useParams } from 'react-router-dom';

const Guide = () => {

    const params = useParams();

    const [page, setPage] = useState('');

    useEffect(() => {
        if(params) {
            setPage(params.information);
        }
    }, [params]);

    return (
        <div className='conference'>
            <Panel />
            <div className='conference-container'>
                <div className='information'>
                    <h2>Zoom Guide</h2>
                    <h3>Conference</h3>
                    <div className='paper'>
                        <p>
                            Welcome to CAHSMUN 2021! To ensure a smooth online experience, please read this Zoom guide in depth before the conference begins.
                        </p>

                        <h4>Before the Conference</h4>
                        <h5>Downloading and Updating Zoom</h5>
                        <p>
                            If you do not already have a Zoom account, please sign up for an account <a target="_blank" rel="noreferrer noopener" href="https://us04web.zoom.us/signup">here</a>. 
                            If you already have a Zoom account, please ensure that you have downloaded Zoom onto your computer and that it is fully updated. To learn how to update your Zoom account, click <a target="_blank" rel="noreferrer noopener" href="https://support.zoom.us/hc/en-us/articles/201362233-Upgrade-update-to-the-latest-version">here</a>.
                        </p>
                        <h5>Renaming Procedure</h5>
                        <p>
                            In order to be admitted into a committee room, please rename yourself according to the following steps before the conference begins.
                        </p>
                        <ol>
                            <li>On your <a href="https://us04web.zoom.us/profile" target="_blank" rel="noreferrer noopener">Zoom profile</a>, rename yourself by clicking on the “Edit” button next to your name.</li>
                            <li>Under “Display Name,” please rename yourself according to the following format:</li>
                            <ol>
                                <li>For delegates: Country Name - Committee (e.g. "Canada - DISEC")</li>
                                <li>For Staff: Committee Role - Name (e.g. "DISEC Director - Jane Doe")</li>
                                <li>For sponsor teachers: Role - Name (e.g. "Sponsor Teacher - John Doe")</li>
                            </ol>
                        </ol>
                        <img alt="fig1" src="https://lh6.googleusercontent.com/J6pSs9YtOvgDilLQ6zrrOhx7Xm2bbxuctP25LYt0FC1vbOXYHx1la9ozTLx-jO-tVc1chn8dOMIyQe4TB-A7irxMWoHr-0AYuVqGRYZZXL__MMQordB6NYXMjTs7Iudqij9pPy9K" />

                        <h4>Committee Functions</h4>
                        <h5>Camera and Microphone Policy</h5>
                        <p>
                            All delegates are expected to have their camera on during committee sessions. However, delegates may temporarily turn off their cameras if their internet connection is unstable, or if they are briefly leaving their computers to use the washroom or grab water. If you are turning off your camera due to connectivity issues, please notify your Staff team.
                        </p>
                        <p>
                            Delegates are expected to be on mute unless it is their turn to speak during a speaker’s list or moderated caucuses.
                        </p>
                        <h5>Chat</h5>
                        <p>
                            Alongside Slack, delegates will be able to send messages to other delegates or Staff through the “Chat” button at the bottom of their Zoom window. However, delegates are expected to refrain from using the chat for non-committee related purposes; Staff will disable the chat function if delegates are found to be off-task.
                        </p>
                        <h5>Raising Placards</h5>
                        <p>
                            Delegates will be able to raise their “placards” using the “Raise Hand” function found at the bottom of their Zoom window under the “Reactions” button. Delegates are reminded to click the “Lower Hand” button when appropriate.
                        </p>
                        <img alt="fig2" src="https://lh3.googleusercontent.com/SFIiPzKQJ8aCctGOpN8B61Zm_rylQOAsD5MksEMox3MtPNZ2sOOmrcYXGQFeevWAg2eQaHbZP6bI9ChxN8otdLvxkaDJjvOeMZA0_KgZbzgK0ensR6fPn5FlkTigUtJmmcuUTC5d" />
                        <h5>Breakout Rooms</h5>
                        <p>
                            The Staff will open breakout rooms for blocs to assemble in during unmoderated caucuses. To self-select and join a breakout room, you must have updated their Zoom to version 5.3.0 or later. To enter a breakout room, you should click the “Join Breakout Room” button found at the bottom of their Zoom window, then select your desired breakout room by hovering over the “Join” button and selecting “Yes” once prompted.
                        </p>
                        <img alt="fig3" src="https://lh5.googleusercontent.com/nA_lSy1xlQxsA608CYA-qKdYhndcARCPyCIP7-YH8_yVkiJNIb9_KIdng33gJtI-nI9pQ8H6-1MOww7cHkFkzjICrhqvFX3sMw58GYF6Z2EIQNpuAHLwrfMTw0LpJ8DvoSRhAiFB" />
                        <img alt="fig4" src="https://lh5.googleusercontent.com/3252kUWPFcLoYxR-_oESvxNbEdaNmVdu0U7wQ34FJvaS5oyqaTxeu0vMSF5Nh97mtXmPkbYuNqPcbeYoKxlAqo9KmluO7VpBCWv01b1pjDJmuyZSzumekRiB86W4urhdHnXB2Iwz" />

                        <h5>Troubleshooting Audio</h5>
                        <p>
                            If your microphone or speakers are not working, select the small upwards arrow next to the “Unmute” button at the bottom left corner of your Zoom window. From there, select the “Test Speaker & Microphone button to test your audio settings.
                        </p>
                        <img alt="fig5" src="https://lh5.googleusercontent.com/J_AXNlDVqtmLKEKT6Rj1ZdNqXehRZdPCmtQUZ6eV7aqgbvevRYY6dMGSUzpZ55oNkJmvO4fav7VZ4ex8mO_5qB1bZUHJLRVYqGF_5sb0IWBuJeEKgQjqQ7Bf56UC5sGjzcnZT2ug" />
                        <p>
                            If you have any questions or concerns, please do not hesitate to contact us via email at <a href="mailto:sg@cahsmun.org">sg@cahsmun.org</a> or join the Secretariat Desk on the CAHSMUN Campus homepage.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guide;