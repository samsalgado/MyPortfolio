import React, {useState} from 'react'
import './App.css';
const Table = () => {
    const [stats] = useState([
        {
            languages: 'JavaScript, C++, Golang, SQL, R, Python, Solidity',
            experience: 4,
            projects: 'React Native: Assisting Entrepreneurs, Python: NFL Python Bot, Solidity: PersonNFT, SCP, Golang: Medical Database Contract [HyperLedger]',
            marketing: 'Yoast, Ahrefs, Google Analytics, Google Search Console, Google Tag Manager, WordPress SEO, Moz',
            other_skills: 'SEO, Prompt Engineering, CMS Management, Power BI, Tableau, Drupal, AWS, Marketing Strategy, Supply Chain Sales, Problem-Solving, Instructional Design, Customer Service, Consulting',
            certificates: 'R, Google Adwords,  Solidity, Power BI, JavaScript, Python, Hadoop, Big Data',
            Fields: 'E-commerce, NFT, Supply Chain, Wellness, Blockchain, Cybersecurity'
        }
    ]);
  return (
    <div>
        {stats.map(stats => (
            <table className='container' key={stats.id}>
                <thead>
                    <tr className='titles'>
                        <th>Languages</th>
                        <th>Years of Experience</th>
                        <th>Projects</th>
                        <th>Marketing Skills</th>
                        <th>Other Skills</th>
                        <th>Certificates</th>
                        <th>Fields</th>
                    </tr>
                </thead>
                <tbody className='me-row'>
                    <td>{stats.languages}</td>
                    <td>{stats.experience}</td>
                    <td>{stats.projects}</td>
                    <td>{stats.marketing}</td>
                    <td>{stats.other_skills}</td>
                    <td>{stats.certificates}</td>
                    <td>{stats.Fields}</td>
                </tbody>
                
            </table>
        ))}
    </div>
  )
}

export default Table