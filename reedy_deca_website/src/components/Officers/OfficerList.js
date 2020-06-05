import React, { Component } from 'react';
import './OfficerList.css';
import {Form} from 'react-bootstrap';
import {FaChessQueen,FaUserTie,FaHandsHelping,FaBriefcase,FaComments, FaAd,FaMobileAlt ,FaDollarSign,FaLaptopCode, FaGlobe, FaStoreAlt, FaFrown} from 'react-icons/fa';

import RishiN from '../../assets/images/OfficerPFPs/rishin.jpg';
import SaathvikK from '../../assets/images/OfficerPFPs/saathvikk.jpg';
import VivekK from '../../assets/images/OfficerPFPs/vivekk.jpg';
import AniketG from '../../assets/images/OfficerPFPs/aniketg.jpg';
import Logo from '../../assets/images/SquareLogoPFP.png';




class OfficerList extends Component {

    state = {
        filteredName: "",
    }

    filterName = (event) => {
        this.setState({
            filteredName: event.target.value
        })
    }

    render() {

        let onethere=false;

        const officers = {
            'sponser': {
                'Ms. Deborah Raymond' : {
                    'title': 'Sponsor/Leader of Reedy DECA',
                    'email': 'raymondd@friscoisd.org',
                    'headshot': Logo,
                    'icon': <FaChessQueen />,
                    'grade': ' '
                }
            },
            'president': {
                'Shishir Nambi' : {
                    'title': 'President of Reedy DECA',
                    'email': 'shishirchandra.nambi.411@k12.friscoisd.org',
                    'headshot': Logo,
                    'icon': <FaUserTie />,
                    'grade': 'Senior (12th)'
                }
            },
            'leadership': {
                'Pranav Chelat': {
                    'title': 'Vice President of Leadership',
                    'email': 'pranav.chelat.185@k12.friscoisd.org',
                    'headshot': Logo,
                    'icon': <FaHandsHelping />,
                    'grade': 'Senior (12th)'
                }
            },
            'careerdevelopment': {
                'Pranav Jaganathan': {
                    'title': 'Vice President of Career Development',
                    'email': 'pranav.jaganathan.092@k12.friscoisd.org',
                    'headshot': Logo,
                    'icon': <FaBriefcase />,
                    'grade': 'Junior (11th)'
                },
                'Aniket Gupta': {
                    'title': 'Committee Member of Career Development',
                    'email': 'aniket.gupta.223@k12.friscoisd.org',
                    'headshot': AniketG,
                    'icon': <FaBriefcase />,
                    'grade': 'Sophomore (10th)'
                },
                'Varun Gosula': {
                    'title': 'Committee Member of Career Development',
                    'email': 'saivarun.gosula.015@k12.friscoisd.org',
                    'headshot': Logo,
                    'icon': <FaBriefcase />,
                    'grade': 'Junior (11th)'
                }
            },
            'marketing': {
                'Shreya Gharge': {
                    'title': 'Vice President of Marketing',
                    'email': 'shreya.gharge.764@k12.friscoisd.org',
                    'headshot': Logo,
                    'icon': <FaAd/>,
                    'grade': 'Junior (11th)'
                }
            },
            'socialmedia': {
                'Ty McElroye': {
                    'title': 'Vice President of Social Media',
                    'email': 'ty.mcelroye.006@k12.friscoisd.org',
                    'headshot': Logo,
                    'icon': <FaMobileAlt/>,
                    'grade': 'Junior (11th)'
                }
            },
            'finance' : {
                'Viveka Mallampaty': {
                    'title': 'Vice President of Finance',
                    'email': 'viveka.mallampaty.751@k12.friscoisd.org',
                    'headshot': Logo,
                    'icon': <FaDollarSign/>,
                    'grade': 'Junior (11th)'
                }
            },
            'communication' : {
                'Isha Riaz': {
                    'title': 'Vice President of Communication',
                    'email': 'isha.riaz.298@k12.friscoisd.org',
                    'headshot': Logo,
                    'icon': <FaComments/>,
                    'grade': 'Junior (11th)'
                }
            },
            'technology': {
                'Aniketh Sudunagunta': {
                    'title': 'Vice President of Technology',
                    'email': 'aniketh.sudunagunta.381@k12.friscoisd.org',
                    'headshot': Logo,
                    'icon': <FaLaptopCode />,
                    'grade': 'Junior (11th)'
                },
                'Vivek Kogilathota': {
                    'title': 'Website Creator & Tech Committee Member',
                    'email': 'vivek.kogilathota.548@k12.friscoisd.org',
                    'headshot': VivekK,
                    'icon': <FaLaptopCode />,
                    'grade': 'Junior (11th)'
                },
            },
            'hospitality' : {
                'Ishan Gupta': {
                    'title': 'Vice President of Hospitality',
                    'email': 'ishan.gupta.642@k12.friscoisd.org',
                    'headshot': Logo,
                    'icon': <FaGlobe />,
                    'grade': 'Senior (12th)'
                }
            },
            'schoolstore' : {
                'Saathvik Konidena': {
                    'title': 'Vice President of School Store',
                    'email': 'saathvik.konidena.307@k12.friscoisd.org',
                    'headshot': Logo,
                    'icon': <FaStoreAlt />,
                    'grade': 'Junior (11th)'
                },
                'Rishi Natarajan': {
                    'title': 'Vice President of School Store',
                    'email': 'rishi.natarajan.667@k12.friscoisd.org',
                    'headshot': RishiN,
                    'icon': <FaStoreAlt />,
                    'grade': 'Junior (11th)'
                },
                'Sreekar Ponnapalli': {
                    'title': 'Vice President of School Store',
                    'email': 'sreekar.ponnapalli.066@k12.friscoisd.org',
                    'headshot': Logo,
                    'icon': <FaStoreAlt />,
                    'grade': 'Junior (11th)'
                }, 
            }
    
        }

        

        const RenderOfficersCards = Object.keys(officers).map((element, igKey) => {
            const backcolor = element==='sponser' ? "#1750ac" : (element==='president' ? "#25783b": null);
            const headcolor = element==='sponser' || element==='president' ? "white" : "#25783b";
            const textcolor = element==='sponser' || element==='president' ? "white" : null;

            return (
                Object.keys(officers[element]).map((el, igk) => {

                    const headshotstyle = {
                        backgroundImage: `url(${officers[element][el]['headshot']})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }
            
                    if (igk===0 || (element==="schoolstore" || element==="technology")) {
                        headshotstyle['border'] = '5px solid #25783b'
                    } else {
                        headshotstyle['border'] = '5px solid #eeeeee'
                    }

                    const searchname = (
                        el.toLowerCase().includes(this.state.filteredName.toLowerCase()) || 
                        officers[element][el]['title'].toLowerCase().includes(this.state.filteredName.toLowerCase()) || 
                        element.toLowerCase().includes(this.state.filteredName.toLowerCase()) ||
                        officers[element][el]['grade'].toLowerCase().includes(this.state.filteredName.toLowerCase()))

                    if (searchname) {
                        onethere=true;
                    }

                    return (
                        <div class="OfficerCard" style={{backgroundColor: backcolor, 
                            display: searchname ? null : 'none'}}>
                            <div className="OfficerCardIcon" style={{color: textcolor}}>
                                {officers[element][el]['icon']}
                            </div>
                            <div className="OfficerCardHeadshot" 
                                style={headshotstyle}
                                >
                            </div>
                            <div className="OfficerCardDesc" >
                                <div className="OfficerCardName" style={{color: headcolor}}>{el}</div>
                                <div className="OfficerCardPosition" style={{color: textcolor}}>{officers[element][el]['title']}</div>
                                <div className="OfficerCardEmail" style={{color: textcolor}}>{officers[element][el]['email']}</div>
                                <div className="OfficerCardEmail" style={{color: textcolor}}>{officers[element][el]['grade']}</div>
                            </div>
                        </div>
                    );
                })
            );
        })



        return (
            <div>
                <div class="SearchBar">
                    <Form className="SearchForm">
                        <Form.Label>Search Officer</Form.Label>
                        <Form.Control type="email" placeholder="Type Name, Position, or Grade" onChange={(event) => this.filterName(event)}/>
                    </Form>
                </div>
                {onethere ? 
                <div className="OfficerListHolder">
                    {RenderOfficersCards}
                </div> :
                <div className="noresults">
                    <FaFrown className="errorfrown"/>
                    <h1>Sorry, No Results!</h1>
                </div>
                }
            </div>
               
        )
    }
}

export default OfficerList;