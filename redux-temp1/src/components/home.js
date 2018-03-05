import React from 'react';
import Header from './header';
import Footer from './footer';
import Sidebar from './sidebar';
import img1 from '../images/img3.jpg';
import img2 from '../images/img3.jpg';
import './comoponents.css';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        return (
            <div>
                <Header/>
                    <div className="row content">
                        <Sidebar />
                        <div className="col-sm-9" id="home">
                            <table>
                                <tr class="info1">
                                    <td>
                                        <img src={img1} height="300" width="500" />
                                            <p>
                                                Bhagwan Mahavir Education Foundation (BMEF), Surat is a leading education trust of South Gujarat, which was established in 2002. The Trust is committed to provide quality education to its students while contributing significantly to industrial and societal growth. BMEF runs 14 reputed institutes, which are built in 20 acres of state-of-the-art campus located in the prime area of the city. BMEF imbibes knowledge and skills to more than 10,000 students every year through various courses of Engineering, Polytechnic, Management, Architecture, Pharmacy, Science, Education and Nursing. We feel ourselves very privileged to be blessed by Jain monks.Bhagwan Mahavir Education Foundation (BMEF), Surat is a leading education trust of South Gujarat, which was established in 2002. The Trust is committed to provide quality education to its students while contributing significantly to industrial and societal growth. BMEF runs 14 reputed institutes, which are built in 20 acres of state-of-the-art campus located in the prime area of the city. BMEF imbibes knowledge and skills to more than 10,000 students every year through various courses of Engineering, Polytechnic, Management, Architecture, Pharmacy, Science, Education and Nursing. We feel ourselves very privileged to be blessed by Jain monks.Bhagwan Mahavir Education Foundation (BMEF), Surat is a leading education trust of South Gujarat, which was established in 2002. The Trust is committed to provide quality education to its students while contributing significantly to industrial and societal growth. BMEF runs 14 reputed institutes, which are built in 20 acres of state-of-the-art campus located in the prime area of the city. BMEF imbibes knowledge and skills to more than 10,000 students every year through various courses of Engineering, Polytechnic, Management, Architecture, Pharmacy, Science, Education and Nursing. We feel ourselves very privileged to be blessed by Jain monks.<br/><br/><br/>
                                            </p>
                                        </td>
                                </tr>
                                <tr class="info2">
                                    <td>
                                        <img src={img2} height="300" width="500" />
                                            <p>
                                                Bhagwan Mahavir Education Foundation (BMEF), Surat is a leading education trust of South Gujarat, which was established in 2002. The Trust is committed to provide quality education to its students while contributing significantly to industrial and societal growth. BMEF runs 14 reputed institutes, which are built in 20 acres of state-of-the-art campus located in the prime area of the city. BMEF imbibes knowledge and skills to more than 10,000 students every year through various courses of Engineering, Polytechnic, Management, Architecture, Pharmacy, Science, Education and Nursing. We feel ourselves very privileged to be blessed by Jain monks.Bhagwan Mahavir Education Foundation (BMEF), Surat is a leading education trust of South Gujarat, which was established in 2002. The Trust is committed to provide quality education to its students while contributing significantly to industrial and societal growth. BMEF runs 14 reputed institutes, which are built in 20 acres of state-of-the-art campus located in the prime area of the city. BMEF imbibes knowledge and skills to more than 10,000 students every year through various courses of Engineering, Polytechnic, Management, Architecture, Pharmacy, Science, Education and Nursing. We feel ourselves very privileged to be blessed by Jain monks.Bhagwan Mahavir Education Foundation (BMEF), Surat is a leading education trust of South Gujarat, which was established in 2002. The Trust is committed to provide quality education to its students while contributing significantly to industrial and societal growth. BMEF runs 14 reputed institutes, which are built in 20 acres of state-of-the-art campus located in the prime area of the city. BMEF imbibes knowledge and skills to more than 10,000 students every year through various courses of Engineering, Polytechnic, Management, Architecture, Pharmacy, Science, Education and Nursing. We feel ourselves very privileged to be blessed by Jain monks.
                                            </p>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    </div>
                <Footer/>
            </div>
        )
    }
}

export default Home;