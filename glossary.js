// HSC Health and Movement Science glossary.
// Feeds Matching, Flashcards and the Definition Quiz. Distractors in the Definition
// Quiz are drawn from the same sub, so terms inside one sub are written to be
// genuinely tellable apart from their definitions alone.
// 56 of these are NESA's own glossary entries for this syllabus, used verbatim.
const GLOSSARY = [
 {
  "id": "health-status",
  "term": "Health status",
  "def": "The overall level of wellbeing of an individual or population, measured against an identifiable standard using indicators such as death and illness rates.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "morbidity",
  "term": "Morbidity",
  "def": "The ill health of an individual and levels of ill health in a population or group.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "mortality",
  "term": "Mortality",
  "def": "Number or rate of deaths in a population during a given time period.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "infant-mortality",
  "term": "Infant mortality",
  "def": "The number of deaths among children aged under one in a given period, per 1,000 live births in the same period.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "incidence",
  "term": "Incidence",
  "def": "The number of new cases of an illness or injury first arising during a set period, showing how quickly a condition is developing.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "prevalence",
  "term": "Prevalence",
  "def": "The number or proportion of existing cases in a population at a given time, counting everyone living with the condition rather than only new diagnoses.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "life-expectancy",
  "term": "Life expectancy",
  "def": "Measures how long, on average, a person is expected to live based on current age and sex-specific death rates, usually quoted from birth.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "health-adjusted-life-expectancy",
  "term": "Health-adjusted life expectancy (HALE)",
  "def": "The average number of years a person can expect to live in full wellbeing, after subtracting years lived with illness or disability.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "burden-of-disease",
  "term": "Burden of disease",
  "def": "A measure of the combined impact of illness and premature death on a population, allowing different conditions to be compared using a common unit.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "disability-adjusted-life-year",
  "term": "Disability-adjusted life year (DALY)",
  "def": "One unit of healthy time lost, equal to twelve months lost through either premature death or twelve months lived with illness or impairment.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "epidemiology",
  "term": "Epidemiology",
  "def": "The study of the distribution and determinants of health-related states or events in populations, and the application of this study to control health problems.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "determinants-of-health",
  "term": "Determinants of health",
  "def": "The range of behaviours, personal biomedical factors, environmental factors and socioeconomic factors that together shape the wellbeing of individuals and whole populations.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "health-behaviours",
  "term": "Health behaviours",
  "def": "A person's beliefs and actions regarding their own wellbeing, such as tobacco use, alcohol consumption, physical activity and dietary choices.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "environmental-factors",
  "term": "Environmental factors",
  "def": "Determinants found in the built and natural surroundings that affect health, such as geographical location, remoteness, housing quality and access to green space.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "sociological-causes",
  "term": "Sociological causes",
  "def": "Societal influences or reasons behind behaviour, including social relationships, peer interaction, family expectations and the culture of everyday life.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "health-inequity",
  "term": "Health inequity",
  "def": "An avoidable and unfair difference in outcomes between groups that arises from unjust social conditions rather than from biology or personal choice.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "health-inequality",
  "term": "Health inequality",
  "def": "Any measurable variation in rates, access or life expectancy between populations, described without judgement about whether the gap is fair or preventable.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "equity",
  "term": "Equity",
  "def": "Resources are allocated in accordance with the needs of individuals and populations, with the desired goal of equality of health outcomes.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "protective-factors",
  "term": "Protective factors",
  "def": "Characteristics, behaviours or circumstances that reduce the likelihood of developing a condition, such as regular exercise, strong social support and childhood immunisation.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "risk-factors",
  "term": "Risk factors",
  "def": "Characteristics, behaviours or exposures that increase the likelihood of developing a condition, such as smoking, high blood pressure, obesity and physical inactivity.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "biomedical-model-of-health",
  "term": "Biomedical model of health",
  "def": "An approach focusing on the physical and biological aspects of disease, practised by doctors and centred on diagnosis, cure and treatment of illness.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "sociocultural-model-of-health",
  "term": "Sociocultural model of health",
  "def": "An approach addressing broader social, cultural, environmental and economic influences rather than disease and injury, focusing on policies, education and promotion campaigns.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "ecological-model-of-health",
  "term": "Ecological model of health",
  "def": "An approach based on evidence that no single factor explains differing risk, focusing on both individual behaviours and the social conditions shaping them.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "salutogenic-model-of-health",
  "term": "Salutogenic model of health",
  "def": "An approach examining what creates and maintains physical and mental wellbeing rather than what causes disease, emphasising the coping mechanisms that preserve people under stress.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "wellbeing",
  "term": "Wellbeing",
  "def": "A sustainable state characterised by predominantly positive feelings, attitudes and relationships, involving resilience, self-efficacy and a high level of satisfaction with self.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "aboriginal-and-torres-strait-islander-approaches-to-health",
  "term": "Aboriginal and Torres Strait Islander approaches to health",
  "def": "A holistic understanding of physical, social, emotional, mental, cultural and spiritual wellbeing, incorporating Country/Place, Cultural Knowledge, Customary healing Practices and whole-of-Community involvement across the life-course.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "closing-the-gap",
  "term": "Closing the Gap",
  "def": "A national agreement between Australian governments and First Nations organisations setting measurable targets to end disparity in life outcomes, including life expectancy and child mortality.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "culturally-and-linguistically-diverse-populations",
  "term": "Culturally and linguistically diverse (CALD) populations",
  "def": "Groups of Australians who were born overseas, have a parent born overseas, or speak a language other than English at home.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "socioeconomic-disadvantage",
  "term": "Socioeconomic disadvantage",
  "def": "A relative lack of income, education and employment opportunity that limits access to nutritious food, secure housing and services, producing poorer health outcomes.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "remoteness",
  "term": "Remoteness",
  "def": "A measure of how far a person lives from services and population centres, classified from major cities through regional areas to the most isolated parts of Australia.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "people-with-disability",
  "term": "People with disability",
  "def": "Australians living with a long-term physical, sensory, intellectual or psychosocial impairment that, combined with barriers in society, restricts their full participation in everyday life.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "older-people",
  "term": "Older people",
  "def": "In Australia, this group includes anyone aged 65 years and over, a threshold widely used in health reporting and aged care policy.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "healthy-ageing",
  "term": "Healthy ageing",
  "def": "The process of developing and maintaining the functional ability that enables wellbeing later in life, including mobility, independence, relationships and the capacity to contribute.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "chronic-condition",
  "term": "Chronic condition",
  "def": "A long-lasting illness with persistent effects, generally present for six months or more, that can usually be managed but often cannot be cured.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "cardiovascular-disease",
  "term": "Cardiovascular disease",
  "def": "All conditions of the heart and blood vessels, including coronary heart problems, stroke and heart failure, and Australia's leading cause of death.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "cancer",
  "term": "Cancer",
  "def": "A group of diseases in which abnormal cells divide uncontrollably, invade surrounding tissue and may spread to other parts of the body.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "cancer-screening",
  "term": "Cancer screening",
  "def": "Population testing of people without symptoms to detect disease or its precursors early, as in the national bowel, breast and cervical programs.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "five-year-relative-survival",
  "term": "Five-year relative survival",
  "def": "The proportion of people diagnosed with a disease who are still alive after that period, compared with similar people in the general population.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "oecd",
  "term": "Organisation for Economic Co-operation and Development (OECD)",
  "def": "An international body of mostly high-income member countries that shapes policy on social, financial and environmental challenges and publishes comparable health statistics.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "world-health-organization",
  "term": "World Health Organization (WHO)",
  "def": "The specialised United Nations agency coordinating international efforts against disease, aiming for universal coverage, protection from emergencies and better wellbeing for all people.",
  "topic": "Health",
  "sub": "Health status of Australians"
 },
 {
  "id": "medicare",
  "term": "Medicare",
  "def": "A national, government-funded scheme that subsidises the cost of personal medical services for all Australians and aims to help them afford medical care.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "medicare-benefits-schedule",
  "term": "Medicare Benefits Schedule (MBS)",
  "def": "The Commonwealth list of subsidised medical services and the fee government will pay towards each one, which determines what a patient can claim back.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "pharmaceutical-benefits-scheme",
  "term": "Pharmaceutical Benefits Scheme (PBS)",
  "def": "The Commonwealth program that subsidises prescription medicines so patients pay only a capped co-payment, with government meeting the remainder of the cost.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "bulk-billing",
  "term": "Bulk billing",
  "def": "When a doctor charges the government directly at the scheduled fee, so the patient pays nothing out of pocket for that consultation.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "out-of-pocket-costs",
  "term": "Out-of-pocket costs",
  "def": "The gap a patient pays personally when a provider charges more than the government rebate, plus expenses no subsidy or insurance covers.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "medicare-levy",
  "term": "Medicare levy",
  "def": "A percentage of taxable income paid by most Australians to help fund the national scheme, with an extra surcharge for high earners lacking private cover.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "private-health-insurance",
  "term": "Private health insurance",
  "def": "Optional cover purchased from a fund that pays towards treatment as a hospital patient of choice, and extras such as dental, optical and physiotherapy.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "national-disability-insurance-scheme",
  "term": "National Disability Insurance Scheme (NDIS)",
  "def": "A Commonwealth-funded program providing individualised funding packages for supports and services to Australians under 65 who have a permanent, significant impairment.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "my-aged-care",
  "term": "My Aged Care",
  "def": "The national entry point where older Australians are assessed for, and connected to, home support, funded packages and residential nursing facilities.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "primary-care",
  "term": "Primary care",
  "def": "The first level of contact with the health system, delivered by general practitioners, pharmacists, dentists and community nurses, usually without a referral.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "secondary-care",
  "term": "Secondary care",
  "def": "Specialist services accessed after referral from a general practitioner, such as a cardiologist, obstetrician, or an elective procedure in a local hospital.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "tertiary-care",
  "term": "Tertiary care",
  "def": "Highly specialised treatment delivered in major referral hospitals, such as neurosurgery, organ transplants, severe burns units and complex cancer therapy.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "primary-health-networks",
  "term": "Primary Health Networks (PHNs)",
  "def": "Independent regional organisations funded by the Commonwealth to coordinate local services, commission programs and address gaps in each community's medical needs.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "person-centred-care",
  "term": "Person-centred care",
  "def": "An approach where services are organised around the individual's own needs, values and preferences, with the patient involved as a partner in decisions.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "health-expenditure",
  "term": "Health expenditure",
  "def": "The total amount spent by governments, insurers and individuals on medical services, medicines, hospitals, research and prevention in a given year.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "prevention",
  "term": "Prevention",
  "def": "Action taken to stop illness or injury occurring, or to detect it early, rather than treating a condition once it is established.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "equity-of-access",
  "term": "Equity of access",
  "def": "The extent to which all people can obtain the services they need regardless of income, location, culture, language or disability.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "public-hospital",
  "term": "Public hospital",
  "def": "A facility funded by state and Commonwealth governments where Medicare patients are treated free of charge, though often after waiting for elective procedures.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "private-hospital",
  "term": "Private hospital",
  "def": "A facility owned by a company or not-for-profit group where patients pay through insurance or their own funds and usually choose their own doctor.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "privatisation",
  "term": "Privatisation",
  "def": "The transfer of publicly owned or operated services to for-profit companies, raising questions about cost, equity and quality within the health system.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "complementary-healthcare",
  "term": "Complementary healthcare",
  "def": "Products and services such as naturopathy, acupuncture or wellness apps used alongside conventional medical treatment, as prevention, or to manage a condition.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "naturopathy",
  "term": "Naturopathy",
  "def": "A complementary practice using diet, herbal remedies and lifestyle change, based on the belief that the body can heal itself when properly supported.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "critical-health-consumer",
  "term": "Critical health consumer",
  "def": "Someone who evaluates the accuracy, credibility and source of information, products and services before making decisions about their own care.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "health-literacy",
  "term": "Health literacy",
  "def": "The ability to selectively access and critically analyse information, navigate community services and resources, and take action to promote personal and others' wellbeing.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "therapeutic-goods-administration",
  "term": "Therapeutic Goods Administration (TGA)",
  "def": "The Australian regulator that assesses and approves medicines, vaccines, medical devices and supplements before they may be legally supplied or advertised.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "ahpra",
  "term": "Australian Health Practitioner Regulation Agency (AHPRA)",
  "def": "The national body that registers doctors, nurses and other clinicians, ensures they meet professional standards, and manages complaints about their conduct.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "non-government-organisation",
  "term": "Non-government organisation",
  "def": "A group operating outside the public sector, such as a charity or private provider, delivering services, research or advocacy in the health field.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "not-for-profit-organisation",
  "term": "Not-for-profit organisation",
  "def": "A body such as the Heart Foundation or Cancer Council that reinvests every surplus into its mission rather than distributing it to owners or shareholders.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "aboriginal-community-controlled-health-service",
  "term": "Aboriginal Community Controlled Health Service (ACCHS)",
  "def": "A primary care provider initiated and governed by the local First Nations population it exists for, delivering culturally safe and holistic treatment.",
  "topic": "Health",
  "sub": "The healthcare system"
 },
 {
  "id": "digital-health",
  "term": "Digital health",
  "def": "The electronic management of medical information, including using technology to collect and share a person's records, results and activity data between providers.",
  "topic": "Health",
  "sub": "Technology and data"
 },
 {
  "id": "my-health-record",
  "term": "My Health Record",
  "def": "A secure online summary of a person's key medical information, such as medicines, allergies, immunisations and test results, viewable by treating clinicians nationally.",
  "topic": "Health",
  "sub": "Technology and data"
 },
 {
  "id": "telehealth",
  "term": "Telehealth",
  "def": "The delivery of consultations and care at a distance by video or telephone, particularly valuable for rural, remote, housebound and mobility-restricted patients.",
  "topic": "Health",
  "sub": "Technology and data"
 },
 {
  "id": "electronic-prescriptions",
  "term": "Electronic prescriptions",
  "def": "A digital token sent to a patient's phone or email that a pharmacy scans to dispense medicine, removing the need for a paper script.",
  "topic": "Health",
  "sub": "Technology and data"
 },
 {
  "id": "interoperability",
  "term": "Interoperability",
  "def": "The capacity of different software systems and providers to exchange information and use it meaningfully, so records follow the patient between services.",
  "topic": "Health",
  "sub": "Technology and data"
 },
 {
  "id": "big-data",
  "term": "Big data",
  "def": "Extremely large collections of records that may be analysed computationally to reveal patterns, trends and associations informing decisions about population needs and treatment.",
  "topic": "Health",
  "sub": "Technology and data"
 },
 {
  "id": "data-linkage",
  "term": "Data linkage",
  "def": "Bringing together records about the same person from separate collections, such as hospital, registry and death records, to study outcomes over time.",
  "topic": "Health",
  "sub": "Technology and data"
 },
 {
  "id": "de-identification",
  "term": "De-identification",
  "def": "Removing or replacing names, addresses and other identifiers from records so information can be analysed or shared without revealing who it describes.",
  "topic": "Health",
  "sub": "Technology and data"
 },
 {
  "id": "privacy",
  "term": "Privacy",
  "def": "The right to be left alone, be free from interference or intrusion, and to control your personal information and how it is accessed and shared.",
  "topic": "Health",
  "sub": "Technology and data"
 },
 {
  "id": "confidentiality",
  "term": "Confidentiality",
  "def": "The professional duty of a clinician or organisation not to disclose information a patient has provided, except with consent or where law requires it.",
  "topic": "Health",
  "sub": "Technology and data"
 },
 {
  "id": "digital-divide",
  "term": "Digital divide",
  "def": "The gap between people who can access and use online services and those who cannot because of cost, location, age, language or skill.",
  "topic": "Health",
  "sub": "Technology and data"
 },
 {
  "id": "artificial-intelligence-in-health",
  "term": "Artificial intelligence in health",
  "def": "Computer systems that learn from large datasets to perform tasks such as reading scans, predicting deterioration and triaging patients faster than clinicians alone.",
  "topic": "Health",
  "sub": "Technology and data"
 },
 {
  "id": "assistive-technology",
  "term": "Assistive technology",
  "def": "Equipment, software or devices that help a person with impairment perform daily tasks, such as hearing aids, prosthetics, wheelchairs and screen readers.",
  "topic": "Health",
  "sub": "Technology and data"
 },
 {
  "id": "wearable-technology",
  "term": "Wearable technology",
  "def": "Sensors carried on the body that continuously record measures such as steps, heart rhythm, glucose and sleep, feeding results back to users and clinicians.",
  "topic": "Health",
  "sub": "Technology and data"
 },
 {
  "id": "health-app",
  "term": "Health app",
  "def": "A smartphone program used to track behaviour, deliver information, book appointments or manage a condition, with quality and evidence varying widely between products.",
  "topic": "Health",
  "sub": "Technology and data"
 },
 {
  "id": "precision-surgery",
  "term": "Precision surgery",
  "def": "Operations guided by imaging, robotics and navigation systems that allow smaller incisions, greater accuracy, less tissue damage and faster patient recovery.",
  "topic": "Health",
  "sub": "Technology and data"
 },
 {
  "id": "australian-digital-health-agency",
  "term": "Australian Digital Health Agency",
  "def": "The Commonwealth body responsible for national electronic infrastructure, including the personal record system, electronic prescribing and secure messaging between providers.",
  "topic": "Health",
  "sub": "Technology and data"
 },
 {
  "id": "sustainable-development-goals",
  "term": "Sustainable Development Goals (SDGs)",
  "def": "A set of 17 global targets adopted by United Nations members, to be achieved by 2030, addressing poverty, inequality, health, education and climate change.",
  "topic": "Health",
  "sub": "SDGs and community action"
 },
 {
  "id": "sdg-3",
  "term": "SDG 3: Good Health and Wellbeing",
  "def": "The third global goal, aiming to ensure people of all ages live long and thrive, by reducing maternal and child deaths, disease and uneven coverage.",
  "topic": "Health",
  "sub": "SDGs and community action"
 },
 {
  "id": "sdg-4",
  "term": "SDG 4: Quality Education",
  "def": "The fourth global goal, aiming to ensure inclusive and equitable schooling and lifelong learning for all, which strongly influences later employment and health outcomes.",
  "topic": "Health",
  "sub": "SDGs and community action"
 },
 {
  "id": "sdg-10",
  "term": "SDG 10: Reduced Inequalities",
  "def": "The tenth global goal, aiming to close disparities within and between countries by empowering marginalised groups and improving their income, inclusion and opportunity.",
  "topic": "Health",
  "sub": "SDGs and community action"
 },
 {
  "id": "sdg-11",
  "term": "SDG 11: Sustainable Cities and Communities",
  "def": "The eleventh global goal, aiming to make urban areas inclusive, safe and resilient through better housing, transport, green space and cleaner air.",
  "topic": "Health",
  "sub": "SDGs and community action"
 },
 {
  "id": "health-lens",
  "term": "Health lens",
  "def": "Applying the global goals in a way that targets community outcomes, improving physical and social environments so people can reach their full potential.",
  "topic": "Health",
  "sub": "SDGs and community action"
 },
 {
  "id": "advocate",
  "term": "Advocate",
  "def": "To argue in support of a cause or position, or act on behalf of yourself or others, so that best interests are taken into account.",
  "topic": "Health",
  "sub": "SDGs and community action"
 },
 {
  "id": "community",
  "term": "Community",
  "def": "A group of people linked by a common social structure and sense of belonging, based on location, education, gender, interests, culture, beliefs or shared online spaces.",
  "topic": "Health",
  "sub": "SDGs and community action"
 },
 {
  "id": "health-promotion",
  "term": "Health promotion",
  "def": "The process of enabling people to increase control over, and to improve, their own wellbeing through education, supportive environments and structural change.",
  "topic": "Health",
  "sub": "SDGs and community action"
 },
 {
  "id": "united-nations",
  "term": "United Nations",
  "def": "The international organisation of member states that sets the global development agenda and coordinates agencies working on health, refugees, children and education.",
  "topic": "Health",
  "sub": "SDGs and community action"
 },
 {
  "id": "healthy-cities-illawarra",
  "term": "Healthy Cities Illawarra",
  "def": "A long-running local initiative in the Wollongong region that partners with councils, schools and business to run programs improving regional wellbeing.",
  "topic": "Health",
  "sub": "SDGs and community action"
 },
 {
  "id": "pre-exercise-screening",
  "term": "Pre-exercise screening",
  "def": "The process of identifying people who may be at risk during physical activity, so that risk can be managed or medical clearance obtained first.",
  "topic": "Training",
  "sub": "Exercise assessment"
 },
 {
  "id": "pre-exercise-questionnaire",
  "term": "Pre-exercise questionnaire",
  "def": "A standardised written tool completed before starting a program, asking about symptoms, medical history, medication and known conditions to flag possible risk.",
  "topic": "Training",
  "sub": "Exercise assessment"
 },
 {
  "id": "contraindication",
  "term": "Contraindication",
  "def": "A sign, symptom or medical condition that makes a particular activity or treatment inadvisable or unsafe for that individual.",
  "topic": "Training",
  "sub": "Exercise assessment"
 },
 {
  "id": "absolute-contraindication",
  "term": "Absolute contraindication",
  "def": "A condition, such as unstable angina or uncontrolled heart failure, under which activity must not proceed at all until it is medically resolved.",
  "topic": "Training",
  "sub": "Exercise assessment"
 },
 {
  "id": "relative-contraindication",
  "term": "Relative contraindication",
  "def": "A condition under which activity may still proceed with medical clearance, close supervision or modified intensity, because the risk is manageable rather than prohibitive.",
  "topic": "Training",
  "sub": "Exercise assessment"
 },
 {
  "id": "fitness-testing",
  "term": "Fitness testing",
  "def": "The use of standardised protocols to measure current physical capacities, providing a baseline for prescription and a benchmark for later comparison.",
  "topic": "Training",
  "sub": "Exercise assessment"
 },
 {
  "id": "validity",
  "term": "Validity",
  "def": "The extent to which a test actually measures the specific capacity it claims to measure, rather than something related but different.",
  "topic": "Training",
  "sub": "Exercise assessment"
 },
 {
  "id": "reliability",
  "term": "Reliability",
  "def": "The extent to which a test gives consistent, repeatable results when administered again under the same conditions by the same or another tester.",
  "topic": "Training",
  "sub": "Exercise assessment"
 },
 {
  "id": "vo2-max",
  "term": "VO2 max",
  "def": "The greatest volume of oxygen the body can take in and use each minute during maximal effort, the key indicator of aerobic capacity.",
  "topic": "Training",
  "sub": "Exercise assessment"
 },
 {
  "id": "lactate-threshold",
  "term": "Lactate threshold",
  "def": "The exercise intensity at which acidic by-products accumulate in the blood faster than they can be cleared, causing fatigue and forcing a slowdown.",
  "topic": "Training",
  "sub": "Exercise assessment"
 },
 {
  "id": "one-repetition-maximum",
  "term": "One-repetition maximum (1RM)",
  "def": "The heaviest load a person can lift correctly just once through a full range of movement, used to set resistance training loads.",
  "topic": "Training",
  "sub": "Exercise assessment"
 },
 {
  "id": "yo-yo-intermittent-recovery-test",
  "term": "Yo-Yo Intermittent Recovery Test",
  "def": "A field assessment of repeated shuttle running with short rests, measuring the ability to keep repeating high-speed efforts in stop-start team sports.",
  "topic": "Training",
  "sub": "Exercise assessment"
 },
 {
  "id": "wingate-test",
  "term": "Wingate test",
  "def": "A 30-second all-out cycle ergometer effort against heavy resistance, measuring peak and average anaerobic power output and the rate of fatigue.",
  "topic": "Training",
  "sub": "Exercise assessment"
 },
 {
  "id": "exercise-prescription",
  "term": "Exercise prescription",
  "def": "The individualised design of a program's frequency, intensity, type and duration based on a person's assessment results, goals, health status and preferences.",
  "topic": "Training",
  "sub": "Exercise assessment"
 },
 {
  "id": "fitness",
  "term": "Fitness",
  "def": "A measure of the body's ability to function efficiently, effectively and without injury in everyday activities, recreational pursuits and emergency situations.",
  "topic": "Training",
  "sub": "Exercise assessment"
 },
 {
  "id": "physical-fitness",
  "term": "Physical fitness",
  "def": "A set of health-related and skill-related attributes that together enable an individual to take part in movement and activity.",
  "topic": "Training",
  "sub": "Exercise assessment"
 },
 {
  "id": "health-related-fitness-components",
  "term": "Health-related fitness components",
  "def": "The capacities linked to disease prevention and daily function: aerobic capacity, muscular strength, muscular endurance, flexibility and body composition.",
  "topic": "Training",
  "sub": "Exercise assessment"
 },
 {
  "id": "skill-related-fitness-components",
  "term": "Skill-related fitness components",
  "def": "The capacities linked most directly to sporting performance: power, speed, agility, coordination, balance and reaction time.",
  "topic": "Training",
  "sub": "Exercise assessment"
 },
 {
  "id": "aerobic",
  "term": "Aerobic",
  "def": "Physical activity typically performed at a moderate level of intensity for extended periods, requiring oxygen to generate the energy needed.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "anaerobic",
  "term": "Anaerobic",
  "def": "Physical activity performed at a high intensity for a short duration, using a limited supply of stored glycogen and not requiring oxygen.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "continuous-training",
  "term": "Continuous training",
  "def": "A method involving sustained submaximal activity without rest for at least 20 minutes, such as a steady 10-kilometre run, developing endurance.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "fartlek",
  "term": "Fartlek",
  "def": "Swedish for 'speed play', this method intermixes periods of fast running with periods of slower running, varying intensity without stopping.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "aerobic-interval-training",
  "term": "Aerobic interval training",
  "def": "Repeated efforts of moderate to hard effort lasting minutes, separated by rest periods with roughly a 2:1 work-to-rest ratio, building endurance.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "circuit-training",
  "term": "Circuit training",
  "def": "A series of stations completed in sequence, each targeting a different muscle group or fitness component, with minimal rest between them.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "anaerobic-interval-training",
  "term": "Anaerobic interval training",
  "def": "Repeated short, near-maximal efforts lasting seconds, separated by much longer recoveries at roughly a 1:3 work-to-rest ratio, developing speed and fatigue tolerance.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "hiit",
  "term": "High Intensity Interval Training (HIIT)",
  "def": "Repeated bouts of hard exercise followed by varying periods of complete rest or active recovery at a lower effort level.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "sit",
  "term": "Sprint Interval Training (SIT)",
  "def": "Repeated, very brief bursts of supramaximal effort, typically 30 seconds or less, separated by relatively long periods of active or passive recovery.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "plyometrics",
  "term": "Plyometrics",
  "def": "Exercises in which muscles exert maximum force in very short intervals, such as jumps, hops, bounds and skips, to increase power.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "resistance-training",
  "term": "Resistance training",
  "def": "Working muscles against an opposing load such as weights, bands, machines or body mass to increase strength, power and muscular endurance.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "free-weights",
  "term": "Free weights",
  "def": "Unattached equipment such as dumbbells and barbells that requires the lifter to control the movement path, recruiting stabilising muscles as well.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "fixed-weights",
  "term": "Fixed weights",
  "def": "Machine-based equipment that guides the load along a set path, isolating a target muscle and reducing the skill and stabilisation required.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "body-weight-exercises",
  "term": "Body weight exercises",
  "def": "Movements such as push-ups, chin-ups, squats and lunges that use a person's own mass as the load and need no equipment.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "static-stretching",
  "term": "Static stretching",
  "def": "Slowly moving a joint to the end of its range and holding that position for around 30 seconds without bouncing or momentum.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "dynamic-stretching",
  "term": "Dynamic stretching",
  "def": "Controlled, sport-specific movements that take a joint repeatedly through its full range at gradually increasing speed, commonly used within a warm-up.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "ballistic",
  "term": "Ballistic",
  "def": "A high-velocity musculoskeletal movement, such as a tennis serve or boxing punch, requiring reciprocal coordination of agonistic and antagonistic muscles.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "pnf",
  "term": "Proprioceptive Neuromuscular Facilitation (PNF)",
  "def": "A flexibility method alternating a push against resistance with relaxation, then gently extending the limb beyond its normal range, usually with a partner.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "drills",
  "term": "Drills",
  "def": "Repeated, structured practice activities that isolate a technique or set play so it can be refined before being used in competition.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "modified-games",
  "term": "Modified games",
  "def": "Simplified versions of a sport with altered rules, equipment, playing area or player numbers, so participants get more touches and appropriate challenge.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "progressive-overload",
  "term": "Progressive overload",
  "def": "Gradually increasing the demand placed on the body beyond what it is accustomed to, so adaptation continues rather than reaching a plateau.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "training-threshold",
  "term": "Training threshold",
  "def": "The minimum intensity that must be reached before the body is stimulated to adapt, with a ceiling above which the effort becomes counterproductive.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "reversibility",
  "term": "Reversibility",
  "def": "Adaptations are lost once overload stops, with endurance gains declining faster than strength, so an extended break costs more than it saves.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "specificity",
  "term": "Specificity",
  "def": "Gains reflect the exact muscles, movements, energy demands and intensities that were used, so a program must match the demands of the sport.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "variety",
  "term": "Variety",
  "def": "Changing methods, drills and settings within a program to sustain motivation and reduce boredom and overuse strain, while still meeting the same goal.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "warm-up",
  "term": "Warm-up",
  "def": "A graduated period of light activity, mobility and sport-specific movement that raises muscle temperature and prepares the body before the main session.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "cool-down",
  "term": "Cool-down",
  "def": "Light activity and stretching after a session that gradually lowers pulse rate, aids removal of waste products and reduces stiffness the next day.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "fitt-principle",
  "term": "FITT principle",
  "def": "A framework for developing programs that emphasises the variables frequency, intensity, type of exercise, and time or duration of exercise.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "physiological-adaptation",
  "term": "Physiological adaptation",
  "def": "A long-term structural or functional change in the body's systems that results from repeated training and produces improved performance.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "heart-rate",
  "term": "Heart rate",
  "def": "The number of times the ventricles contract each minute, which falls at rest and during submaximal work as endurance improves.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "resting-heart-rate",
  "term": "Resting heart rate",
  "def": "The number of beats per minute when completely inactive, which decreases with endurance training because each contraction ejects more blood.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "stroke-volume",
  "term": "Stroke volume",
  "def": "The amount of blood ejected by the left ventricle with each contraction, which increases as the chamber enlarges and strengthens through endurance training.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "cardiac-output",
  "term": "Cardiac output",
  "def": "The total volume of blood pumped each minute, calculated by multiplying beats per minute by the amount ejected with every beat.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "oxygen-uptake",
  "term": "Oxygen uptake",
  "def": "The volume of gas the body extracts from inhaled air and delivers to working muscles, rising with endurance training at maximal and submaximal loads.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "lung-capacity",
  "term": "Lung capacity",
  "def": "The total volume of air the chest can hold and move; training improves how efficiently that air is ventilated rather than the organ size.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "haemoglobin",
  "term": "Haemoglobin",
  "def": "The iron-containing protein in red blood cells that binds oxygen for transport, increasing in concentration and total mass with endurance training.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "muscle-hypertrophy",
  "term": "Muscle hypertrophy",
  "def": "An increase in the size of individual fibres caused by resistance training, as more contractile proteins are laid down within each cell.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "fast-twitch-muscle-fibres",
  "term": "Fast twitch muscle fibres",
  "def": "Cells that contract quickly and forcefully but tire rapidly, dominating sprinting, jumping and throwing, and enlarging most in response to heavy resistance work.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "slow-twitch-muscle-fibres",
  "term": "Slow twitch muscle fibres",
  "def": "Cells that contract less forcefully but resist tiring, rich in mitochondria and capillaries, dominating endurance events and improving with prolonged aerobic work.",
  "topic": "Training",
  "sub": "Training and adaptations"
 },
 {
  "id": "individual-sport",
  "term": "Individual sport",
  "def": "A pursuit where one competitor's preparation and result stand alone, so training can be tailored precisely to that person's schedule, strengths and goals.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "group-sport",
  "term": "Group sport",
  "def": "A pursuit in which several players combine for a shared result, requiring sessions that balance differing positional demands, fitness levels and team cohesion.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "conditioning",
  "term": "Conditioning",
  "def": "The part of a session that develops the physical capacities a sport demands, usually placed after skill work so fatigue does not spoil technique.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "periodisation",
  "term": "Periodisation",
  "def": "Dividing a year into planned phases with different goals and loads, so that peak condition arrives when the most important competitions occur.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "macrocycle",
  "term": "Macrocycle",
  "def": "The largest planning block, usually a full year or a season leading to a major event, within which all smaller divisions sit.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "mesocycle",
  "term": "Mesocycle",
  "def": "A medium block of several weeks to a few months with one dominant goal, such as building an endurance base or maximal strength.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "microcycle",
  "term": "Microcycle",
  "def": "The shortest planning block, typically one week, setting out each session's load, intensity and recovery day by day.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "pre-season",
  "term": "Pre-season",
  "def": "The preparation phase before competition begins, emphasising general conditioning, strength and skill development, with high volume and comparatively low specificity.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "in-season",
  "term": "In-season",
  "def": "The competition phase, where volume drops and the focus shifts to maintaining condition, refining tactics and recovering fully between matches.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "off-season",
  "term": "Off-season",
  "def": "The transition phase after competition ends, using active rest, cross-training and rehabilitation so the athlete recovers physically and mentally.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "sub-phase",
  "term": "Sub-phase",
  "def": "A shorter division within a larger block of the yearly plan, such as early and late preparation, each with its own emphasis.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "peaking",
  "term": "Peaking",
  "def": "Manipulating training so an athlete reaches maximum physical and psychological readiness at the exact time of the most important competition.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "tapering",
  "term": "Tapering",
  "def": "A planned reduction in volume, usually over one to three weeks before a major event, letting fatigue dissipate while fitness is retained.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "arousal",
  "term": "Arousal",
  "def": "The level of physiological and psychological activation a performer experiences, ranging from deep sleep through to intense excitement before competing.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "optimum-arousal",
  "term": "Optimum arousal",
  "def": "The individual activation level at which a performer produces their best work, higher for simple power tasks and lower for fine, precise skills.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "inverted-u-hypothesis",
  "term": "Inverted U hypothesis",
  "def": "The idea that performance improves as activation rises to a personal ideal point, then declines as further excitement causes tension and errors.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "anxiety",
  "term": "Anxiety",
  "def": "A negative emotional state involving worry, apprehension and physical tension, which can arise before or during competition and disrupt performance.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "stress-management",
  "term": "Stress management",
  "def": "Techniques such as breathing control, progressive muscle relaxation, routines and time planning used to keep pressure at a workable level.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "mental-rehearsal",
  "term": "Mental rehearsal",
  "def": "Vividly imagining a movement or event in the mind without physical execution, to refine technique, build confidence and prepare for pressure.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "goal-setting",
  "term": "Goal setting",
  "def": "Establishing specific, measurable and time-framed targets that direct attention, sustain effort and give a clear marker of progress towards an outcome.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "self-efficacy",
  "term": "Self-efficacy",
  "def": "Belief in one's own ability to manage behaviour, emotions and motivations, and to succeed at a specific task under pressure.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "strategies",
  "term": "Strategies",
  "def": "A plan of action developed before beginning a task or activity in order to successfully achieve a goal or outcome.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "tactics",
  "term": "Tactics",
  "def": "In-the-moment decisions and adjustments made during competition in response to the opponent, the score, the conditions or accumulating fatigue.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "sport",
  "term": "Sport",
  "def": "A broad term covering physical activity as well as organised and high-performance competition, reflecting the many ways Australians stay active across life.",
  "topic": "Training",
  "sub": "Individual and group sports"
 },
 {
  "id": "carbohydrate-loading",
  "term": "Carbohydrate loading",
  "def": "Increasing starch intake while tapering training in the days before an endurance event, so muscles store extra fuel and exhaustion is delayed.",
  "topic": "Training",
  "sub": "Sleep, nutrition and supplements"
 },
 {
  "id": "glycaemic-index",
  "term": "Glycaemic index",
  "def": "A ranking of foods by how quickly they raise blood sugar, guiding athletes to choose slow-release options beforehand and rapid ones afterwards.",
  "topic": "Training",
  "sub": "Sleep, nutrition and supplements"
 },
 {
  "id": "pre-competition-meal",
  "term": "Pre-competition meal",
  "def": "Food eaten roughly three hours before an event, high in starch and low in fat and fibre, topping up fuel without causing stomach upset.",
  "topic": "Training",
  "sub": "Sleep, nutrition and supplements"
 },
 {
  "id": "muscle-glycogen",
  "term": "Muscle glycogen",
  "def": "The stored form of carbohydrate held inside working fibres and the liver, depleted during prolonged effort and restored by eating soon afterwards.",
  "topic": "Training",
  "sub": "Sleep, nutrition and supplements"
 },
 {
  "id": "hydration",
  "term": "Hydration",
  "def": "Maintaining adequate body fluid before, during and after activity so blood volume, sweating and temperature regulation are not compromised.",
  "topic": "Training",
  "sub": "Sleep, nutrition and supplements"
 },
 {
  "id": "dehydration",
  "term": "Dehydration",
  "def": "A fluid deficit of more than two per cent of body mass, raising pulse and core temperature and reducing endurance and concentration.",
  "topic": "Training",
  "sub": "Sleep, nutrition and supplements"
 },
 {
  "id": "electrolytes",
  "term": "Electrolytes",
  "def": "Dissolved minerals such as sodium, potassium and chloride lost in sweat, which must be replaced to maintain fluid balance and nerve and muscle function.",
  "topic": "Training",
  "sub": "Sleep, nutrition and supplements"
 },
 {
  "id": "micronutrients",
  "term": "Micronutrients",
  "def": "Vitamins and minerals needed in small amounts for energy production, immune function, blood clotting, growth, bone health and fluid balance.",
  "topic": "Training",
  "sub": "Sleep, nutrition and supplements"
 },
 {
  "id": "protein",
  "term": "Protein",
  "def": "A nutrient made of amino acids required to repair and build muscle tissue after training, with athletes needing more per kilogram than sedentary people.",
  "topic": "Training",
  "sub": "Sleep, nutrition and supplements"
 },
 {
  "id": "creatine",
  "term": "Creatine",
  "def": "A legal supplement that increases the muscles' stored capacity for short, repeated maximal efforts, and typically raises body mass through water retention.",
  "topic": "Training",
  "sub": "Sleep, nutrition and supplements"
 },
 {
  "id": "caffeine",
  "term": "Caffeine",
  "def": "A stimulant found in coffee, tea and energy drinks that reduces perceived effort and improves endurance, but can disturb sleep and cause jitteriness.",
  "topic": "Training",
  "sub": "Sleep, nutrition and supplements"
 },
 {
  "id": "supplements",
  "term": "Supplements",
  "def": "Manufactured products taken in addition to ordinary food, such as powders, bars, gels and tablets, whose benefit and purity vary and may risk contamination.",
  "topic": "Training",
  "sub": "Sleep, nutrition and supplements"
 },
 {
  "id": "sleep-hygiene",
  "term": "Sleep hygiene",
  "def": "Habits that support consistent, high-quality rest, such as a regular bedtime, a dark cool room, limiting screens and avoiding late stimulants.",
  "topic": "Training",
  "sub": "Sleep, nutrition and supplements"
 },
 {
  "id": "sleep-debt",
  "term": "Sleep debt",
  "def": "The cumulative shortfall between rest obtained and rest required, which builds across a week and impairs reaction time, mood, immunity and recovery.",
  "topic": "Training",
  "sub": "Sleep, nutrition and supplements"
 },
 {
  "id": "circadian-rhythm",
  "term": "Circadian rhythm",
  "def": "The roughly 24-hour internal body clock that regulates alertness, core temperature and hormone release, and is disrupted by travel across time zones.",
  "topic": "Training",
  "sub": "Sleep, nutrition and supplements"
 },
 {
  "id": "fatigue",
  "term": "Fatigue",
  "def": "A decline in the capacity to produce force or sustain effort, caused by depleted fuel, fluid loss, insufficient rest or accumulated training load.",
  "topic": "Training",
  "sub": "Sleep, nutrition and supplements"
 },
 {
  "id": "biomechanics",
  "term": "Biomechanics",
  "def": "The study of how and why the body moves, applying physics to describe, measure and improve human movement and reduce injury risk.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "biomechanical-principles",
  "term": "Biomechanical principles",
  "def": "Scientific rules of mechanical physics describing movement and the forces causing it, applied to lower injury risk, shorten rehabilitation and improve technique.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "centre-of-gravity",
  "term": "Centre of gravity",
  "def": "The single point at which a body's mass is evenly distributed in all directions, shifting as limbs move and lowering to improve balance.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "base-of-support",
  "term": "Base of support",
  "def": "The area beneath a performer bounded by the outermost points of contact with the ground, which is widened to increase steadiness.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "stability",
  "term": "Stability",
  "def": "The ability of an object or performer to resist being moved or unbalanced, whether at rest or while in motion.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "force",
  "term": "Force",
  "def": "A push or pull between objects, which may change one or both objects' speed, direction of motion, or shape.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "force-summation",
  "term": "Force summation",
  "def": "Producing maximum velocity by using body parts in the correct order and timing, from largest and slowest through to smallest and fastest.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "levers",
  "term": "Levers",
  "def": "Rigid bar systems formed by bones rotating about joints, with muscles applying effort to move a resistance, giving either speed or strength advantage.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "projectile-motion",
  "term": "Projectile motion",
  "def": "The flight path of an airborne body or object, determined by the speed, angle and height at release plus gravity and air resistance.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "momentum",
  "term": "Momentum",
  "def": "The product of an object's mass and velocity, conserved in collisions, explaining why heavier and faster players are harder to stop.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "drag",
  "term": "Drag",
  "def": "The resistive force acting opposite to motion as a body moves through air or water, reduced by streamlining, posture and smoother surfaces.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "fluid-mechanics",
  "term": "Fluid mechanics",
  "def": "The study of forces and flow within liquids and gases, explaining lift, resistance and swirl acting on swimmers, cyclists and spinning balls.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "hydrotherapy",
  "term": "Hydrotherapy",
  "def": "Recovery in water, using immersion, contrast baths or pool-based exercise, where buoyancy reduces load while pressure assists circulation and reduces swelling.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "relaxation-techniques",
  "term": "Relaxation techniques",
  "def": "Psychological recovery methods such as controlled breathing, progressive muscle release, meditation and massage that lower arousal and hasten mental restoration.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "direct-injury",
  "term": "Direct injury",
  "def": "Damage caused by an external force applied to the body from outside, such as a tackle, a collision or being struck by equipment.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "indirect-injury",
  "term": "Indirect injury",
  "def": "Damage arising from within the body or from a force applied elsewhere, such as a hamstring tear while sprinting or from poor technique.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "soft-tissue-injury",
  "term": "Soft tissue injury",
  "def": "Damage to muscles, tendons, ligaments, skin or organs, producing swelling, pain, loss of function and often bruising.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "hard-tissue-injury",
  "term": "Hard tissue injury",
  "def": "Damage to bones, teeth or cartilage, including breaks, joint displacements and stress-related bone damage, usually needing medical imaging to confirm.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "overuse-injury",
  "term": "Overuse injury",
  "def": "Damage developing gradually from repeated microtrauma when load rises faster than tissue can adapt, such as shin splints or tendinopathy.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "totaps",
  "term": "TOTAPS",
  "def": "A sideline assessment sequence — Talk, Observe, Touch, Active movement, Passive movement and Skills test — used before deciding whether a player continues.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "ricer",
  "term": "RICER",
  "def": "Immediate soft tissue management for the first 48 to 72 hours: rest, ice, compression, elevation and referral, limiting bleeding and swelling.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "first-aid",
  "term": "First aid",
  "def": "The initial care of the ill or injured, usually given by whoever is on the scene when the person becomes unwell or hurt.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "rehabilitation",
  "term": "Rehabilitation",
  "def": "The structured process of restoring full function after injury, progressing through range of movement, strength, sport-specific drills and confidence before competition resumes.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "progressive-mobilisation",
  "term": "Progressive mobilisation",
  "def": "The first stage of rehabilitation, gently restoring range of movement at the injured joint through pain-free active and passive movement before loading begins.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "graduated-exercise",
  "term": "Graduated exercise",
  "def": "The rehabilitation stage that rebuilds strength and endurance by steadily increasing load, starting with isometric work and progressing to sport-specific movement.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "cryotherapy",
  "term": "Cryotherapy",
  "def": "Applying cold through ice packs, immersion or sprays to reduce blood flow, swelling and pain in the early stage after an injury.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "thermotherapy",
  "term": "Thermotherapy",
  "def": "Applying warmth through packs, baths or spa to increase blood flow and tissue elasticity, used in later rehabilitation rather than immediately after injury.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "return-to-play",
  "term": "Return-to-play policy",
  "def": "The decision process, guided by medical clearance, functional testing and set procedures, determining when an athlete may safely resume full competition.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "wada",
  "term": "World Anti-Doping Agency (WADA)",
  "def": "The international body that publishes the prohibited substances list, sets testing standards and harmonises sanctions across sports and countries.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "sport-integrity-australia",
  "term": "Sport Integrity Australia",
  "def": "The national agency conducting athlete testing and education, investigating match-fixing and doping, and protecting participants from abuse at all levels of competition.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "therapeutic-use-exemption",
  "term": "Therapeutic use exemption (TUE)",
  "def": "Formal approval allowing an athlete to take an otherwise banned medicine for a genuine, documented medical condition, granted under strict criteria.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "anabolic-steroids",
  "term": "Anabolic steroids",
  "def": "Synthetic derivatives of testosterone taken to increase muscle mass, strength and recovery, causing liver damage, aggression, infertility and cardiovascular harm.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "erythropoietin",
  "term": "Erythropoietin (EPO)",
  "def": "A banned hormone that stimulates red cell production, raising oxygen-carrying capacity but thickening the blood and increasing the risk of clots and stroke.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "blood-doping",
  "term": "Blood doping",
  "def": "Reinfusing stored red cells, either the athlete's own or a donor's, to raise oxygen delivery, risking infection, circulatory overload and clotting.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "athlete-biological-passport",
  "term": "Athlete Biological Passport",
  "def": "An electronic record tracking an individual's own physiological markers over time, so abnormal variation reveals doping without the substance itself being detected.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 },
 {
  "id": "ethical",
  "term": "Ethical",
  "def": "Relating to moral principles and to what is considered right and wrong in conduct, such as fairness and honesty in competition.",
  "topic": "Training",
  "sub": "Sustained performance and injury"
 }
];
