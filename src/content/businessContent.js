<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Insurance, Actuary & Business Administration Portfolio</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
            background: rgba(255, 255, 255, 0.95);
            margin-top: 20px;
            margin-bottom: 20px;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        }

        .header {
            text-align: center;
            margin-bottom: 40px;
            padding: 40px 0;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            color: white;
            border-radius: 10px;
            margin: -20px -20px 40px -20px;
        }

        .header h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            font-weight: 700;
        }

        .header p {
            font-size: 1.2rem;
            opacity: 0.9;
        }

        .section {
            margin-bottom: 50px;
            padding: 30px;
            background: white;
            border-radius: 10px;
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
            border-left: 5px solid #667eea;
        }

        .section h2 {
            color: #1e3c72;
            font-size: 1.8rem;
            margin-bottom: 20px;
            border-bottom: 2px solid #667eea;
            padding-bottom: 10px;
        }

        .section h3 {
            color: #2a5298;
            font-size: 1.4rem;
            margin: 20px 0 10px 0;
        }

        .section p {
            margin-bottom: 15px;
            text-align: justify;
            font-size: 1.1rem;
        }

        .achievements-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 25px;
            margin-top: 20px;
        }

        .achievement-card {
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            color: white;
            padding: 25px;
            border-radius: 10px;
            transform: translateY(0);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .achievement-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .achievement-card h4 {
            font-size: 1.3rem;
            margin-bottom: 10px;
            font-weight: 600;
        }

        .skills-container {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 20px;
        }

        .skill-tag {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 8px 16px;
            border-radius: 25px;
            font-size: 0.9rem;
            font-weight: 500;
            transition: transform 0.2s ease;
        }

        .skill-tag:hover {
            transform: scale(1.05);
        }

        .experience-item {
            background: #f8f9fa;
            padding: 25px;
            margin-bottom: 25px;
            border-radius: 10px;
            border-left: 4px solid #667eea;
        }

        .experience-header {
            margin-bottom: 15px;
        }

        .company-name {
            font-size: 1.4rem;
            color: #1e3c72;
            font-weight: 600;
        }

        .role-title {
            font-size: 1.2rem;
            color: #2a5298;
            margin: 5px 0;
        }

        .duration {
            color: #666;
            font-style: italic;
        }

        .responsibilities {
            list-style: none;
            padding: 0;
        }

        .responsibilities li {
            background: white;
            margin: 10px 0;
            padding: 15px;
            border-radius: 5px;
            border-left: 3px solid #667eea;
            position: relative;
            padding-left: 20px;
        }

        .responsibilities li:before {
            content: "→";
            color: #667eea;
            font-weight: bold;
            margin-right: 10px;
        }

        .education-item {
            background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);
            padding: 20px;
            margin: 15px 0;
            border-radius: 10px;
            border-left: 4px solid #667eea;
        }

        .institution {
            font-size: 1.2rem;
            font-weight: 600;
            color: #1e3c72;
        }

        .credential {
            color: #2a5298;
            font-size: 1.1rem;
            margin: 5px 0;
        }

        .years {
            color: #666;
            font-style: italic;
        }

        .leadership-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 15px;
        }

        .leadership-tag {
            background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
            color: #8b4513;
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 0.9rem;
            font-weight: 500;
        }

        @media (max-width: 768px) {
            .container {
                margin: 10px;
                padding: 15px;
            }
            
            .header h1 {
                font-size: 2rem;
            }
            
            .achievements-grid {
                grid-template-columns: 1fr;
            }
            
            .section {
                padding: 20px;
            }
        }

        .highlight {
            background: linear-gradient(120deg, #ffeaa7 0%, #fab1a0 100%);
            padding: 2px 6px;
            border-radius: 4px;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Insurance, Actuary & Business Administration</h1>
            <p>Professional experiences, Achievements and qualifications in Actuary, Insurance, Healthcare management & Business administration</p>
        </div>

        <div class="section">
            <h2>Executive Profile</h2>
            <p>Commencing the MSc Actuarial Management program at <strong>Bayes Business School, City, St. George's University of London</strong>, starting September 2025.</p>
            <p>Insurance expert with over 10+ years of progressive experience in health insurance and healthcare administration. Served as National Head of Investigation and Fraud Mitigation at Cholamandalam MS General Insurance, where successfully implemented AI-driven fraud detection systems reducing fraudulent claims by 28%.</p>
            <p>My career journey from trainee in Medical <strong>underwriting</strong> to division head at Star Health and Allied Insurance, one of India's premier health insurance providers, has equipped me with a comprehensive understanding of insurance operations across multiple departments. This progressive advancement allowed me to develop expertise in Underwriting, claims processing, provider network management, Pricing of hospitals and operational leadership.</p>
            <p>Having risen through the ranks at Star Health and Allied Insurance from trainee to Division Head, I specialize in optimizing healthcare operations, improving claim settlement processes, and establishing provider networks. My dual expertise in dentistry and business administration provides a unique perspective on healthcare delivery and insurance operations, enabling me to bridge the gap between clinical practice and financial management.</p>
        </div>

        <div class="section">
            <h2>Education & Certifications</h2>
            
            <div class="education-item">
                <div class="institution">BAYES BUSINESS SCHOOL, City St. Georges's University of London</div>
                <div class="credential">MSc Actuarial Management</div>
                <div class="years">(September 2025)</div>
                <p>Specialising study in core practises of Actuary, risk and financial modelling techniques relevant to insurance risk assessment and reserving.</p>
            </div>

            <div class="education-item">
                <div class="institution">Institute and Faculty of Actuaries</div>
                <div class="credential">Actuarial Statistics, Business Finance and Business Economics</div>
                <div class="years">(July 2024 - April 2025)</div>
                <p>Specialized study in core financial mathematics, probability, and advanced statistical modeling techniques relevant to insurance risk assessment and pricing. In-depth focus on micro and macroeconomic principles specifically applied to healthcare systems, insurance markets, and coverage determination strategies.</p>
            </div>

            <div class="education-item">
                <div class="institution">Insurance Institute of India</div>
                <div class="credential">Fellowship, Health and General insurance</div>
                <div class="years">(July 2023 - June 2024)</div>
                <p>Advanced, specialized training in health insurance claims management, complex underwriting principles, and provider network optimization strategies. Rigorous certification covering sophisticated risk assessment methodologies, regulatory compliance frameworks, and ethical considerations within the insurance sector.</p>
            </div>

            <div class="education-item">
                <div class="institution">Birla Institute of Technology and Science, Pilani</div>
                <div class="credential">Master of Business Administration (MBA), Hospital and Health Care Facilities Administration/Management</div>
                <div class="years">(2017 - 2019)</div>
                <p>Specialized MBA curriculum focusing on healthcare operations management, strategic planning for health systems, and insurance administration practices. Capstone thesis project: "Optimizing Hospital-Insurer Collaboration Models for Improved Patient Outcomes and Cost Efficiency"</p>
            </div>

            <div class="education-item">
                <div class="institution">James Lind Institute</div>
                <div class="credential">Advanced Post-graduate Diploma in Clinical Research and Pharmacovigilance</div>
                <div class="years">(2017 - 2018)</div>
                <p>Comprehensive training in clinical trial design methodologies, biostatistics, medical data analysis, and international regulatory compliance standards (GCP). Developed practical expertise in medical necessity assessment protocols, adverse event reporting, and treatment verification procedures for insurance claims.</p>
            </div>

            <div class="education-item">
                <div class="institution">Bachelor of Dental Surgery (BDS)</div>
                <div class="credential">Dental Medicine and Healthcare</div>
                <div class="years">(2012 - 2017)</div>
                <p>Comprehensive undergraduate medical education in dental and oral health sciences, providing foundational knowledge in healthcare delivery, patient care, medical ethics, and clinical practice management. This medical background enhances understanding of healthcare systems and medical necessity assessments in insurance operations.</p>
            </div>
        </div>

        <div class="section">
            <h2>Professional Experience</h2>
            
            <div class="experience-item">
                <div class="experience-header">
                    <div class="company-name">Cholamandalam MS General Insurance Co. Ltd.</div>
                    <div class="role-title">National Head - Investigation and Fraud Mitigation, Health Accident and Travel</div>
                    <div class="duration">March 2023 - August 2025 | Chennai, Tamil Nadu, India</div>
                </div>
                <ul class="responsibilities">
                    <li>Implementation & Utilization of AI-based fraud detection system, reducing fraudulent claims by 28% and saving ₹115 crore ($12.96 million USD/ £9.63 million GBP) in FY 23-24, and ₹145 crore ($16.33 million USD/ £12.15 million GBP) in FY 24-25</li>
                    <li>Led a team of 25 professionals across 4 regional offices, overseeing health, accident, and travel claims verification and investigation processes nationwide</li>
                    <li>Developed corporate-wide fraud prevention strategy incorporating predictive analytics, resulting in 40% faster fraud identification and intervention</li>
                    <li>Collaborate extensively with legal, medical, and underwriting departments to establish robust, cross-functional verification protocols and policies</li>
                    <li>Report directly to C-suite executives on national fraud trends, investigation outcomes, and providing strategic insights for underwriting and policy development</li>
                    <li>Conduct high-level negotiations with external investigation agencies and oversee vendor performance management</li>
                </ul>
            </div>

            <div class="experience-item">
                <div class="experience-header">
                    <div class="company-name">Star Health and Allied Insurance Co. Ltd</div>
                    <div class="duration">3 years 11 months | Head office / Chennai Area, India</div>
                </div>

                <div style="margin-left: 20px;">
                    <h3>Division Head</h3>
                    <div class="duration">June 2022 - February 2023 (9 months)</div>
                    <ul class="responsibilities">
                        <li>Led the provider network team for South India, managing strategic relationships and contract negotiations with 3000+ hospitals and healthcare facilities</li>
                        <li>Spearheaded initiatives to streamline the pre-authorization process using digital tools, reducing average turnaround time by 35% for outpatient procedures</li>
                        <li>Negotiated favorable reimbursement rates and value-based care agreements with key hospital chains across the region, achieving 12% cost savings on major procedures</li>
                        <li>Implemented a comprehensive quality monitoring system for in-network providers, incorporating patient feedback and clinical outcome metrics, improving patient satisfaction scores by 18%</li>
                    </ul>

                    <h3>Deputy Head Of Department</h3>
                    <div class="duration">October 2020 - June 2022 (1 year 9 months)</div>
                    <ul class="responsibilities">
                        <li>Developed and implemented an automated new claims processing workflow at <strong>Star Health and Allied Insurance Co Ltd</strong> in collaboration with <strong>Vitraya technologies</strong>, revolutionizing the approval process by reducing turnaround time from 4 hours to just 190 milliseconds while maintaining an impressive accuracy rate of 99.2%</li>
                        <li>Developed, documented, and implemented standardized claims adjudication guidelines across multiple health insurance product lines</li>
                        <li>Reduced claim dispute rates by 42% through proactive provider communication protocols and clarified policy interpretation workshops</li>
                        <li>Designed and conducted comprehensive training sessions for claims processors and medical reviewers, improving operational efficiency and adjudication consistency by 22%</li>
                    </ul>

                    <h3>Manager</h3>
                    <div class="duration">April 2019 - September 2020 (1 year 6 months)</div>
                    <ul class="responsibilities">
                        <li>Supervised and mentored a team of 12 claim processors, handling an average daily volume of 200+ claims while consistently meeting service level agreements</li>
                        <li>Improved overall claim accuracy rate to 99.2% through the implementation of rigorous multi-stage review processes and targeted quality audits</li>
                        <li>Identified and implemented key process improvements, including workflow automation steps, that reduced average claim processing time by 30%</li>
                    </ul>
                </div>
            </div>

            <div class="experience-item">
                <div class="experience-header">
                    <div class="company-name">Vidal Health Insurance TPA (Third Party Administrator)</div>
                    <div class="role-title">Senior Medical Advisor</div>
                    <div class="duration">September 2017 - August 2018 (1 year)</div>
                </div>
                <ul class="responsibilities">
                    <li>Served as the primary medical liaison between network medical providers and key insurance partners, fostering collaborative relationships</li>
                    <li>Evaluated complex medical necessity claims and appropriateness of treatments for high-value claim authorization</li>
                    <li>Conducted thorough medical audits of network providers to ensure consistent compliance with service level agreements</li>
                    <li>Created standardized clinical treatment protocols for common medical and dental procedures</li>
                </ul>
            </div>
        </div>

        <div class="section">
            <h2>Core Competencies</h2>
            <div class="skills-container">
                <div class="skill-tag">Medical Under writing</div>
                <div class="skill-tag">Hospital Pricing</div>
                <div class="skill-tag">Data Analysis</div>
                <div class="skill-tag">Risk Assessment</div>
                <div class="skill-tag">Claim adjudication</div>
                <div class="skill-tag">Insurance Operations</div>
                <div class="skill-tag">Provider Management</div>
                <div class="skill-tag">Strategic Planning</div>
                <div class="skill-tag">Regulatory Compliance</div>
                <div class="skill-tag">Fraud Detection</div>
                <div class="skill-tag">Cost Savings</div>
                <div class="skill-tag">Dispute Resolution</div>
                <div class="skill-tag">Healthcare Management</div>
                <div class="skill-tag">Process Optimization</div>
                <div class="skill-tag">Team Leadership</div>
            </div>
        </div>

        <div class="section">
            <h2>Key Business Achievements</h2>
            <div class="achievements-grid">
                <div class="achievement-card">
                    <h4>🔒 Fraud Detection Innovation</h4>
                    <p>Instrumental in implementation of an AI-based fraud detection system at Cholamandalam MS that analyzes claim patterns and provider behaviors to identify potential fraud. This initiative reduced fraudulent claims by 28% and saved approximately ₹115 crore ($12.96 million USD/ £9.63 million GBP) in FY 23-24, and ₹145 crore ($16.33 million USD/ £12.15 million GBP) in FY 24-25.</p>
                </div>
                
                <div class="achievement-card">
                    <h4>🏥 Network Expansion</h4>
                    <p>As Division Head of Pricing of hospitals at Star Health, led the strategic expansion of the provider network across India, successfully onboarding 3000+ hospitals through targeted outreach and establishing standardized service agreements. This expansion improved geographical coverage for policyholders and enhanced claim settlement efficiency by 35% and increase in sales by minimum 40%.</p>
                </div>
                
                <div class="achievement-card">
                    <h4>⚡ Process Optimization</h4>
                    <p>Developed new claims processing workflow at Star Health, implementing a tiered review system, standardized documentation requirements, and automated pre-authorization checks. These changes reduced approval turnaround time to 119 mil sec while maintaining an exceptional 99.2% accuracy rate, for specific ailments and procedures.</p>
                </div>
                
                <div class="achievement-card">
                    <h4>💰 Strategic Pricing</h4>
                    <p>Developed and implemented a data-driven healthcare pricing strategy at Star Health Insurance that balanced fair reimbursement for providers with effective cost management in terms of severity for insurer. This initiative optimized reimbursement rates, reduced payment disputes, and improved long-term relationships with network providers.</p>
                </div>
            </div>
        </div>

        <div class="section">
            <h2>Leadership Approach</h2>
            <p>My leadership philosophy centers on empowering team members through clear communication, professional development opportunities, and accountability. I lead cross-functional teams with a collaborative approach that leverages each member's strengths while providing mentorship to develop their capabilities.</p>
            <p>At Cholamandalam MS, I manage a diverse team of 25 professionals across 4 regional offices, implementing standardized investigation protocols while adapting to regional healthcare differences. My leadership has fostered a culture of analytical problem-solving and continuous improvement, resulting in consistently exceeding fraud detection targets by 15-20% quarterly.</p>
            <div class="leadership-tags">
                <div class="leadership-tag">Team Development</div>
                <div class="leadership-tag">Mentorship</div>
                <div class="leadership-tag">Cross-functional Collaboration</div>
                <div class="leadership-tag">Strategic Decision Making</div>
            </div>
        </div>

        <div class="section">
            <h2>Strategic Vision</h2>
            <p>My vision for healthcare administration centers on leveraging technology and data analytics to create more efficient, transparent, and patient-centered insurance systems. I believe in balancing robust fraud prevention with streamlined claim processing to ensure legitimate claims are settled quickly while protecting against improper payments.</p>
            <p>Looking forward, I aim to further integrate advanced AI technologies with human expertise to develop next-generation fraud detection systems that can adapt to evolving fraud schemes. My goal is to establish industry benchmarks for fraud prevention while maintaining exceptional service levels for policyholders and providers.</p>
        </div>
    </div>
</body>
</html>