import React, {useState} from "react";
const Table = () => {
    const [stats] = useState([
      {
        languages: 'JavaScript, C++, Golang, SQL, R, Python, Solidity',
        experience: 5,
        projects: 'React Native: Assisting Entrepreneurs, Python: NFL Python Bot, Solidity: PersonNFT, SCP, Golang: Medical Database Contract [HyperLedger]',
        marketing: 'Yoast, Ahrefs, Google Analytics, Google Search Console, Google Tag Manager, WordPress SEO, Moz, YouTube Marketing, Content Creation',
        other_skills: 'Data-Driven SEO, Prompt Engineering, CMS Management, Power BI, Tableau, Drupal, AWS, Marketing Strategy, Supply Chain Sales, Problem-Solving, Instructional Design, Customer Service, Consulting, Data Analytics',
        certificates: 'R, Google Adwords,  Solidity, Power BI, JavaScript, Python, Hadoop, Big Data',
        Fields: 'E-commerce, NFT, Supply Chain, Wellness, Blockchain, Cybersecurity'
      }
    ]);
  
    return (
      <div className='container'>
        {stats.map(stats => (
          <table className='table' key={stats.id}>
            <thead>
              <tr className='titles'>
                <th className='mobile-hide'>Languages</th> {/* Hide on mobile */}
                <th>Years of Experience</th>
                <th>Projects</th>
                <th className='mobile-hide'>Marketing Skills</th> {/* Hide on mobile */}
                <th className='mobile-hide'>Other Skills</th> {/* Hide on mobile */}
                <th className='mobile-hide'>Certificates</th> {/* Hide on mobile */}
                <th>Fields</th>
              </tr>
            </thead>
            <tbody>
              <tr className='me-row'>
                <td className='mobile-hide'>{stats.languages}</td> {/* Hide on mobile */}
                <td>{stats.experience}</td>
                <td>{stats.projects}</td>
                <td className='mobile-hide'>{stats.marketing}</td> {/* Hide on mobile */}
                <td className='mobile-hide'>{stats.other_skills}</td> {/* Hide on mobile */}
                <td className='mobile-hide'>{stats.certificates}</td> {/* Hide on mobile */}
                <td>{stats.Fields}</td>
              </tr>
            </tbody>
          </table>
        ))}
      </div>
    );
  };
  
  export default Table;