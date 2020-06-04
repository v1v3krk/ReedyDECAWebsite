import React, { Component } from 'react';
import './OfficerList.css';
import {FaChessQueen,FaUserTie,FaHandsHelping,FaBriefcase,FaComments, FaAd,FaMobileAlt ,FaDollarSign,FaLaptopCode, FaGlobe, FaStoreAlt, FaBell} from 'react-icons/fa';


class OfficerList extends Component {

    render() {

        const officers = {
            'sponser': {
                'Ms. Deborah Raymond' : {
                    'title': 'Sponsor/Leader of Reedy DECA',
                    'email': 'raymondd@friscoisd.org',
                    'headshot': '',
                    'icon': <FaChessQueen />,
                }
            },
            'president': {
                'Shishir Nambi' : {
                    'title': 'President of Reedy DECA',
                    'email': 'shishirchandra.nambi.411@k12.friscoisd.org',
                    'headshot': '',
                    'icon': <FaUserTie />,
                }
            },
            'leadership': {
                'Pranav Chelat': {
                    'title': 'Vice President of Leadership',
                    'email': 'pranav.chelat.185@k12.friscoisd.org',
                    'headshot': '',
                    'icon': <FaHandsHelping />,
                }
            },
            'careerdevelopment': {
                'Pranav Jaganathan': {
                    'title': 'Vice President of Career Development',
                    'email': 'pranav.jaganathan.092@k12.friscoisd.org',
                    'headshot': '',
                    'icon': <FaBriefcase />,
                },
                'Varun Gosula': {
                    'title': 'Committee Member of Career Development',
                    'email': 'saivarun.gosula.015@k12.friscoisd.org',
                    'headshot': '',
                    'icon': <FaBriefcase />,
                }
            },
            'marketing': {
                'Shreya Gharge': {
                    'title': 'Vice President of Marketing',
                    'email': 'shreya.gharge.764@k12.friscoisd.org',
                    'headshot': '',
                    'icon': <FaAd/>,
                }
            },
            'socialmedia': {
                'Ty McElroye': {
                    'title': 'Vice President of Social Media',
                    'email': 'ty.mcelroye.006@k12.friscoisd.org',
                    'headshot': '',
                    'icon': <FaMobileAlt/>,
                }
            },
            'finance' : {
                'Viveka Mallampaty': {
                    'title': 'Vice President of Finance',
                    'email': 'viveka.mallampaty.751@k12.friscoisd.org',
                    'headshot': '',
                    'icon': <FaDollarSign/>,
                }
            },
            'communication' : {
                'Isha Riaz': {
                    'title': 'Vice President of Communication',
                    'email': 'isha.riaz.298@k12.friscoisd.org',
                    'headshot': '',
                    'icon': <FaComments/>,
                }
            },
            'technology': {
                'Aniketh Sudunagunta': {
                    'title': 'Vice President of Technology',
                    'email': 'aniketh.sudunagunta.381@k12.friscoisd.org',
                    'headshot': '',
                    'icon': <FaLaptopCode />,
                },
                'Vivek Kogilathota': {
                    'title': 'Website Creator and Committee Member of Technology',
                    'email': 'vivek.kogilathota.548@k12.friscoisd.org',
                    'headshot': '',
                    'icon': <FaLaptopCode />,
                },
            },
            'hospitality' : {
                'Ishan Gupta': {
                    'title': 'Vice President of Hospitality',
                    'email': 'ishan.gupta.642@k12.friscoisd.org',
                    'headshot': '',
                    'icon': <FaGlobe />,
                }
            },
            'schoolstore' : {
                'Saathvik Konidena': {
                    'title': 'Vice President of School Store',
                    'email': 'saathvik.konidena.307@k12.friscoisd.org',
                    'headshot': '',
                    'icon': <FaStoreAlt />,
                },
                'Rishi Natarajan': {
                    'title': 'Vice President of School Store',
                    'email': 'rishi.natarajan.667@k12.friscoisd.org',
                    'headshot': '',
                    'icon': <FaStoreAlt />,
                },
                'Sreekar Ponnapalii': {
                    'title': 'Vice President of School Store',
                    'email': 'sreekar.ponnapalli.066@k12.friscoisd.org',
                    'headshot': '',
                    'icon': <FaStoreAlt />,
                }, 
            }
    
        }

        const RenderOfficersCards = Object.keys(officers).map((element, igKey) => {
            const backcolor = element==='sponser' ? "#1750ac" : (element==='president' ? "#25783b": null);
            const textcolor = element==='sponser' || element==='president' ? "white" : null;

            return (
                Object.keys(officers[element]).map((el, igk) => {
                    return (
                        <div class="OfficerCard" style={{backgroundColor: backcolor}}>
                            <div className="OfficerCardIcon" style={{color: textcolor}}>
                                {officers[element][el]['icon']}
                            </div>
                            <div className="OfficerCardHeadshot" 
                                style={igk===0 || (element==="schoolstore" || element==="technology") ? {border: '3px solid #25783b'}: null}
                                >
                            </div>
                            <div className="OfficerCardDesc" >
                                <div className="OfficerCardName" style={{color: textcolor}}>{el}</div>
                                <div className="OfficerCardPosition" style={{color: textcolor}}>{officers[element][el]['title']}</div>
                                <div className="OfficerCardEmail" style={{color: textcolor}}>{officers[element][el]['email']}</div>
                            </div>
                        </div>
                    );
                })
            );
        })



        return (
            <div className="OfficerListHolder">
                {RenderOfficersCards}
            </div>   
        )
    }
}

export default OfficerList;