import { ref } from 'vue'

const flyers = [{
    text: 'Download Brochure',
    url: 'poster.jpg'
}]

const faculties = [{
    name: 'Faculty of Economics (FE)',
    url: 'http://feb.um.ac.id/',
}, {
    name: 'Faculty of Letters (FS)',
    url: 'http://sastra.um.ac.id/en/',
}, {
    name: 'Faculty of Mathematics and Natural Sciences (FMIPA)',
    url: 'http://fmipa.um.ac.id/',
}, {
    name: 'Faculty of Engineering (FT)',
    url: 'http://ft.um.ac.id/en/',
}, {
    name: 'Faculty of Sports Science (FIK)',
    url: 'http://fik.um.ac.id/en/',
}, {
    name: 'Faculty of Social Sciences (FIS)',
    url: 'http://fis.um.ac.id/',
}, {
    name: 'Faculty of Education (FIP)',
    url: 'http://fip.um.ac.id/',
}, {
    name: 'Faculty of Psychology (FPSi)',
    url: 'http://fpsi.um.ac.id/',
}, {
    name: 'Interdisciplinary Postgraduate Program',
    url: 'http://pasca.um.ac.id/en/s3-pendidikan-dasar/',
}]

const programs = [{
    name: 'Bachelor',
    duration: 4,
    faculties: [{
        faculty_id: 0,
        opened: ref(true),
        programs: [
            'Development Economics',
            'Development Economics Education',
            'Accounting',
            'Accounting Education',
            'Management',
            'Office Administration Education',
            'Economics Education',
            'Distributive and Marketing Education',
            'Education Administration',
        ]
    }, {
        faculty_id: 1,
        opened: ref(true),
        programs: [
            'Indonesian Language and Literature',
            'Indonesian and Local Language and Literature',
            'English Language Education',
            'English Language and Literature',
            'German Language Education',
            'Mandarin Language Education',
            'Arabic Language Education',
            'Visual Communication Design',
            'Fine Arts Education',
            'Librarianship',
            'Dancing and Music Education',
        ]
    }, {
        faculty_id: 2,
        opened: ref(true),
        programs: [
            'Biology',
            'Physics',
            'Chemistry Education',
            'Chemistry',
            'Mathematics Education',
            'Mathematics',
            'Biology Education',
            'Physics Education',
            'Science Education',
            'Biotechnology',
        ]
    }, {
        faculty_id: 3,
        opened: ref(true),
        programs: [
            'Mechanical Engineering Vocational',
            'Mechanical Engineering',
            'Automotive Engineering Education',
            'Civil Engineering Education',
            'Civil Engineering',
            'Informatics Education',
            'Informatics',
            'Industrial Engineering',
            'Electrical Engineering Education',
            'Electrical Engineering',
            'Cookery Education',
            'Apparel Design Education',
        ]
    }, {
        faculty_id: 4,
        opened: ref(true),
        programs: [
            'Physical Education, Health, and Recreation',
            'Coaching and Exercise Education',
            'Sport Science',
            'Public Health',
        ]
    }, {
        faculty_id: 5,
        opened: ref(true),
        programs: [
            'Pancasila and Civics Education',
            'Geography Education',
            'Geography',
            'History Education',
            'History',
            'Sociology Education',
            'Social Science Education',
        ]
    }, {
        faculty_id: 6,
        opened: ref(true),
        programs: [
            'Guidance and Counselling',
            'Non-formal Education',
            'Elementary Teacher Education',
            'Early Childhood Education',
            'Educational Technology',
            'Special Education',
            'Education Administration',
        ]
    }, {
        faculty_id: 7,
        opened: ref(true),
        programs: [
            'Psychology',
        ]
    }],
}, {
    name: 'Master',
    duration: 2,
    faculties: [{
        faculty_id: 0,
        opened: ref(true),
        programs: [
            'Economics Education',
            'Economics',
            'Business and Management Education',
            'Management',
            'Accounting',
        ]
    }, {
        faculty_id: 1,
        opened: ref(true),
        programs: [
            'Indonesian Language Education',
            'English Language Education',
            'Arabic Language Education',
            'Art Education',
            'Language Teaching',
        ]
    }, {
        faculty_id: 2,
        opened: ref(true),
        programs: [
            'Mathematics',
            'Mathematics Education',
            'Physics',
            'Physics Education',
            'Chemistry',
            'Chemistry Education',
            'Biology',
            'Biology Education',
        ]
    }, {
        faculty_id: 3,
        opened: ref(true),
        programs: [
            'Vocational Education',
            'Mechanical Engineering',
            'Civil Engineering',
            'Electrical and Informatics Engineering',
        ]
    }, {
        faculty_id: 4,
        opened: ref(true),
        programs: [
            'Physical Education',
        ]
    }, {
        faculty_id: 5,
        opened: ref(true),
        programs: [
            'Pancasila and Civics Education',
            'Geography Education',
            'History Education',
        ]
    }, {
        faculty_id: 6,
        opened: ref(true),
        programs: [
            'Guidance and Counseling',
            'Educational Technology',
            'Education Management',
            'Non-Formal Education',
            'Elementary Education',
            'Early Chilhood Education',
            'Special Education',
        ]
    }],
}, {
    name: 'Doctoral',
    duration: 3,
    faculties: [{
        faculty_id: 6,
        opened: ref(true),
        programs: [
            'Learning Technology',
            'Guidance and Counseling',
            'Educational Management',
            'Non-Formal Education',
        ]
    }, {
        faculty_id: 5,
        opened: ref(true),
        programs: [
            'Geography Education',
        ]
    }, {
        faculty_id: 3,
        opened: ref(true),
        programs: [
            'Vocational Education',
        ]
    }, {
        faculty_id: 1,
        opened: ref(true),
        programs: [
            'Indonesian Language Education',
            'English Language Education',
        ]
    }, {
        faculty_id: 0,
        opened: ref(true),
        programs: [
            'Management',
            'Economics Education',
        ]
    }, {
        faculty_id: 7,
        opened: ref(true),
        programs: [
            'Educational Psychology',
        ]
    }, {
        faculty_id: 2,
        opened: ref(true),
        programs: [
            'Mathematics Education',
            'Physics Education',
            'Chemistry Education',
            'Biology Education',
        ]
    }, {
        faculty_id: 8,
        opened: ref(true),
        programs: [
            'Elementary Education',
        ]
    }],
}].map(program => {
    program.faculties = program.faculties.map(faculty => {
        faculty.faculty = faculties[faculty.faculty_id]

        return faculty
    })

    return program
})

const coverages = [
    'Tuition',
    'BIPA Course',
    'Dormitory',
    'Immigration',
    'Health Insurance',
    'A round-trip flight ticket',
    'Quarantine and covid test free',
    'Research Allowance',
    'Living cost',
]

const requirements = [
    'Previous degree certificate(s)',
    'Academic transcript',
    'Scan of passport',
    'Health certificate',
    'Financial guarantee statement',
    'Passport-size photo',
    'Letter of statement',
    'Letter of recommendation (2)',
    'English proficiency certificate',
    'Publication',
    'Recommendation from promotor'
]

const schemes = [{
    name: 'Scheme 1',
    coverages: [true, true, true, false, false, false, false, false, false],
    programs: [0, 1, 2],
    opened: ref(0),
    provisions: [{
        eligibilities: [
            'Maximum age: 30 years old.',
            'Applicants must be non-Indonesian citizens.',
            'Be in good health.',
            'Have a good command of English and/or Indonesian.',
            'Have graduated from high school.',
            'Possess excellent co-curricular records showing strong leadership potential and/or qualities.',
        ],
        requirements: [
            'A scan copy of previous degree certificate(s) and transcript(s) (High School). If not in English, please provide the certified English translation (PDF);',
            'A scan copy of a passport-Size photo (JPG/PNG);',
            'A scan copy of passport (PDF);',
            'A scan copy of an English proficiency test result (TOEFL or IELTS) (PDF);',
            'Health affidavit (PDF) <a href="https://drive.google.com/file/d/15HNgWYBH4gkERauvakS_DqkS2zR2W0dc/view?usp=sharing" target="_blank">Download Here</a>;',
            'A letter of declaration <a href="https://drive.google.com/file/d/1pMwkp5U_TJNzKz_tI5xgGE0ew0XSQFjt/view?usp=sharing" target="_blank">Download Here</a>;',
            'A letter of financial guarantee statement <a href="https://drive.google.com/file/d/11rY34WsaYxXhj_KbSTfzCNWMT-miXWXP/view?usp=sharing" target="_blank">Download Here</a>;',
            'Two letters of recommendation from school teachers (PDF - two letters in one PDF);',
            'Note: The language proficiency certificate must be obtained within the last 2 years.',
        ],
    }, {
        eligibilities: [
            'Maximum age: 35 years old.',
            'Applicants must be Non-Indonesian Citizens.',
            'Be in good health.',
            'Have a good command of English and or Indonesian.',
            'Hold a bachelor\'s degree with a minimum grade point average (GPA) of 3.25 out of 4.00.',
            'Possess excellent co-curricular records showing strong leadership potential and/or qualities.',
        ],
        requirements: [
            'A scan copy of previous degree certificate(s) and transcript(s) (S1). If not in English, please provide the certified English translation (PDF);',
            'A scan copy of a passport-Size photo (JPG/PNG);',
            'A scan copy of passport (PDF);',
            'A scan copy of an English proficiency test result (TOEFL or IELTS) (PDF);',
            'Health affidavit (PDF) <a href="https://drive.google.com/file/d/15HNgWYBH4gkERauvakS_DqkS2zR2W0dc/view?usp=sharing" target="_blank">Download Here</a>;',
            'A letter of declaration <a href="https://drive.google.com/file/d/1pMwkp5U_TJNzKz_tI5xgGE0ew0XSQFjt/view?usp=sharing" target="_blank">Download Here</a>;',
            'A letter of financial guarantee statement <a href="https://drive.google.com/file/d/11rY34WsaYxXhj_KbSTfzCNWMT-miXWXP/view?usp=sharing" target="_blank">Download Here</a>;',
            'Two letters of recommendation from school teachers (PDF - two letters in one PDF);',
            'Note: The language proficiency certificate must be obtained within the last 2 years.',
        ],
    }, {
        eligibilities: [
            'Maximum age: 37 years old.',
            'Applicants must be Non-Indonesian Citizens.',
            'Be in good health.',
            'Have a good command of English and or Indonesian.',
            'Hold a master\'s degree with a minimum grade point average (GPA) of 3.25 out of 4.00.',
            'Possess excellent co-curricular records showing strong leadership potential and/or qualities.',
        ],
        requirements: [
            'A scan copy of previous degree certificate(s) and transcript(s) (Bachelor & Master). If not in English, please provide the certified English translation (PDF);',
            'A scan copy of a passport-Size photo (JPG/PNG);',
            'A scan copy of passport (PDF);',
            'A scan copy of an English proficiency test result (TOEFL or IELTS) (PDF);',
            'Health affidavit (PDF) <a href="https://drive.google.com/file/d/15HNgWYBH4gkERauvakS_DqkS2zR2W0dc/view?usp=sharing" target="_blank">Download Here</a>;',
            'A letter of declaration <a href="https://drive.google.com/file/d/1pMwkp5U_TJNzKz_tI5xgGE0ew0XSQFjt/view?usp=sharing" target="_blank">Download Here</a>;',
            'A letter of financial guarantee statement <a href="https://drive.google.com/file/d/11rY34WsaYxXhj_KbSTfzCNWMT-miXWXP/view?usp=sharing" target="_blank">Download Here</a>;',
            'Two letters of recommendation from school teachers (PDF - two letters in one PDF);',
            'Note: The language proficiency certificate must be obtained within the last 2 years.',
        ],
    }],
    requirements: [
        [true, true, true], // cert
        [true, true, true], // trans
        [true, true, true], // pass
        [true, true, true], // health
        [true, true, true], // finance
        [true, true, true], // photo
        [true, true, true], // LoS
        [true, true, true], // LoR
        [true, true, true], // English
        [false, false, false], // publication
        [false, false, false], // promotor
    ]
}, {
    name: 'Scheme 2',
    coverages: [true, true, true, true, true, true, false, false, false],
    programs: [1, 2],
    opened: ref(0),
    provisions: [{
        eligibilities: [
            'Maximum age: 35 years old.',
            'Applicants must be non-Indonesian citizens.',
            'Be in good health.',
            'Have a good command of English and/or Indonesian.',
            'old a bachelor\'s degree with minimum grade point average (GPA) of 3.25 out of 4.00.',
            'Possess excellent co-curricular records showing strong leadership potential and/or qualities.',
        ],
        requirements: [
            'A scan copy of previous degree certificate(s) and transcript(s) (S1). If not in English, please provide the certified English translation (PDF);',
            'A scan copy of a passport-size photo (JPG/ PNG);',
            'A scan copy of passport (PDF);',
            'A scan copy of an English proficiency test result (TOEFL or IELTS) (PDF);',
            'Health affidavit (PDF) <a href="https://drive.google.com/file/d/15HNgWYBH4gkERauvakS_DqkS2zR2W0dc/view?usp=sharing" target="_blank">Download Here</a>;',
            'A letter of declaration <a href="https://drive.google.com/file/d/1pMwkp5U_TJNzKz_tI5xgGE0ew0XSQFjt/view?usp=sharing" target="_blank">Download Here</a>;',
            'A letter of financial guarantee statement <a href="https://drive.google.com/file/d/11rY34WsaYxXhj_KbSTfzCNWMT-miXWXP/view?usp=sharing" target="_blank">Download Here</a>;',
            'Two letters of Recommendation from lecturers (PDF - two letters in one PDF);',
            'Note: The language proficiency certificate must be obtained within the last 2 years.',
        ],
    }, {
        eligibilities: [
            'Maximum age: 37 years old.',
            'Applicants must be Non-Indonesian Citizens.',
            'Be in good health.',
            'Have a good command of English and or Indonesian.',
            'Hold a master\'s degree with minimum grade point average (GPA) of 3.25 out of 4.00.',
            'Possess excellent co-curricular records showing strong leadership potential and/or qualities.',
        ],
        requirements: [
            'A scan copy of previous degree certificate(s) and transcript(s) (Bachelor & Master). If not in English, please provide the certified English translation (PDF);',
            'A scan copy of a passport-size photo (JPG/ PNG);',
            'A scan copy of passport (PDF);',
            'A scan copy of English Proficiency test result (TOEFL or IELTS) (PDF);',
            'A scan copy of an English Proficiency test result (TOEFL or IELTS) (PDF);',
            'Health affidavit (PDF) <a href="https://drive.google.com/file/d/15HNgWYBH4gkERauvakS_DqkS2zR2W0dc/view?usp=sharing" target="_blank">Download Here</a>;',
            'A letter of declaration <a href="https://drive.google.com/file/d/1pMwkp5U_TJNzKz_tI5xgGE0ew0XSQFjt/view?usp=sharing" target="_blank">Download Here</a>;',
            'A letter of financial guarantee statement <a href="https://drive.google.com/file/d/11rY34WsaYxXhj_KbSTfzCNWMT-miXWXP/view?usp=sharing" target="_blank">Download Here</a>;',
            'Two Letters of Recommendation from lecturers (PDF - two letters in one PDF);',
            'Note: The language proficiency certificate must be obtained within the last 2 years.',
        ],
    }],
    requirements: [
        [true, true], // cert
        [true, true], // trans
        [true, true], // pass
        [true, true], // health
        [true, true], // finance
        [true, true], // photo
        [true, true], // LoS
        [true, true], // LoR
        [true, true], // English
        ['Optional', true], // publication
        [false, true], // promotor
    ]
}, {
    name: 'Asean Research',
    coverages: [true, true, true, true, true, true, true, true, true],
    programs: [1, 2],
    opened: ref(0),
    provisions: [{
        eligibilities: [
            'Maximum age: 35 years old.',
            'Applicants must be citizens of ASEAN countries and Timor Leste (except Indonesia).',
            'Be in good health.',
            'Have a good command of English and/or Indonesian.',
            'Hold a bachelor\'s degree with minimum grade point average (GPA) of 3.25 out of 4.00.',
            'Possess excellent co-curricular records showing strong leadership potential and/or qualities.',
        ],
        requirements: [
            'A scan copy of previous degree certificate(s) and transcript(s) (S1). If not in English, please provide the certified English translation (PDF);',
            'A scan copy of a passport-size photo (JPG/ PNG);',
            'A scan copy of passport (PDF);',
            'A scan copy of an English proficiency test result (TOEFL or IELTS) (PDF);',
            'Health affidavit (PDF) <a href="https://drive.google.com/file/d/15HNgWYBH4gkERauvakS_DqkS2zR2W0dc/view?usp=sharing" target="_blank">Download Here</a>;',
            'A letter of declaration <a href="https://drive.google.com/file/d/1pMwkp5U_TJNzKz_tI5xgGE0ew0XSQFjt/view?usp=sharing" target="_blank">Download Here</a>;',
            'A letter of financial guarantee statement <a href="https://drive.google.com/file/d/11rY34WsaYxXhj_KbSTfzCNWMT-miXWXP/view?usp=sharing" target="_blank">Download Here</a>;',
            'Two letters of Recommendation from lecturers (PDF - two letters in one PDF);',
            'Note: The language proficiency certificate must be obtained within the last 2 years.',
        ],
    }, {
        eligibilities: [
            'Maximum age: 37 years old.',
            'Applicants must be citizens of ASEAN countries and Timor Leste (except Indonesia).',
            'Be in good health.',
            'Have a good command of English and or Indonesian.',
            'Hold a master\'s degree with minimum grade point average (GPA) of 3.25 out of 4.00.',
            'Possess excellent co-curricular records showing strong leadership potential and/or qualities.',
        ],
        requirements: [
            'A scan copy of previous degree certificate(s) and transcript(s) (Bachelor & Master). If not in English, please provide the certified English translation (PDF);',
            'A scan copy of a passport-size photo (JPG/ PNG);',
            'A scan copy of passport (PDF);',
            'A scan copy of English Proficiency test result (TOEFL or IELTS) (PDF);',
            'A scan copy of an English Proficiency test result (TOEFL or IELTS) (PDF);',
            'Health affidavit (PDF) <a href="https://drive.google.com/file/d/15HNgWYBH4gkERauvakS_DqkS2zR2W0dc/view?usp=sharing" target="_blank">Download Here</a>;',
            'A letter of declaration <a href="https://drive.google.com/file/d/1pMwkp5U_TJNzKz_tI5xgGE0ew0XSQFjt/view?usp=sharing" target="_blank">Download Here</a>;',
            'A letter of financial guarantee statement <a href="https://drive.google.com/file/d/11rY34WsaYxXhj_KbSTfzCNWMT-miXWXP/view?usp=sharing" target="_blank">Download Here</a>;',
            'Two Letters of Recommendation from lecturers (PDF – two letters in one PDF);',
            'Note: The language proficiency certificate must be obtained within the last 2 years.',
        ],
    }],
    requirements: [
        [true, true], // cert
        [true, true], // trans
        [true, true], // pass
        [true, true], // health
        [true, true], // finance
        [true, true], // photo
        [true, true], // LoS
        [true, true], // LoR
        [true, true], // English
        ['Optional', true], // publication
        [true, true], // promotor
    ]
}].map(scheme => {
    scheme.programmes = scheme.programs.map(program => {
        return programs[program]
    })
    return scheme
})

const howTos = [
    'Visit the UM ISS website <a href="https://seleksi.um.ac.id/intl/" target="_blank">here</a>;',
    'Create an account and fill in the required data, including name, email, and passwords;',
    'Check your email to activate your account by clicking the confirmation link;',
    'Log in to your account by filling in your email, and password;',
    'In the \'Registration Status\' page, make sure to choose “degree” in the registration type;',
    'After that, choose the scheme and the degree that you are applying for, and click the \'Submit\' button if you have done;',
    'Fill in all the required data in \'My Application\' section;',
    'Add your personal details by clicking the \'Add\' button, fill in all the required information, and click \'submit\';',
    'Complete the required information about education background by clicking the \'Add\' button and click \'submit\';',
    'Upload all the required documents by doing the same step. To get the example of the documents, click the \'Download\' button. Check it carefully, select your files by clicking the \'Add\' button and choose them according to the category of the documents. The scan copy of a Passport-Size photo is uploaded in JPG/PNG format, and the other required documents are uploaded in PDF format. The maximum size for each document is 5 MB;',
    'In the last section, please complete the additional required information evidently;',
    'Before submission, check all the information and documents carefully and make sure there is no mistakes on the information and documents provided;',
    'Submit your application by clicking the \'Submit\' button on the menu on the left side;',
    'Choose your faculty and study program. Make sure to click the UM ISS option for the registration category, and click submit if you have done;',
    'Your application has been submitted and has entered the selection process, please check your email regularly for further information on the selection process;',
    'NOTE : For further information <a href="https://drive.google.com/file/d/1Fq6LkBFYssPAen-StgEVrHyJplxf4Ayv/view?usp=sharing" target="_blank">click here</a>.',
]

const timelines = [{
    name: 'Open Application (Online)',
    date: '1 April 2023',
}, {
    name: 'Application Deadline',
    date: '30 April 2023',
}, {
    name: 'Administrative Selection',
    date: '1 - 10 May 2023',
}, {
    name: 'Announcement',
    date: '13 May 2023',
}]

const testimonials = [
    'testimonials/1.jpg',
    'testimonials/2.jpg',
    // 'testimonials/3.png',
]

const galleries = [
    'galleries/1.jpg',
    'galleries/2.jpg',
    'galleries/3.jpg',
    'galleries/4.jpg',
    'galleries/5.jpg',
    'galleries/6.jpg',
    'galleries/7.jpg',
    'galleries/8.jpg',
    'galleries/9.jpg',
    'galleries/10.jpg',
    'galleries/11.jpg',
    'galleries/12.jpg',
    'galleries/13.jpg',
    'galleries/14.jpg',
    'galleries/15.jpg',
    'galleries/16.jpg',
    'galleries/17.jpg',
    'galleries/18.jpg',
    'galleries/19.jpg',
    'galleries/20.jpg',
    'galleries/21.jpg',
    'galleries/22.jpg',
    'galleries/23.jpg',
    'galleries/24.jpg',
    'galleries/25.jpg',
    'galleries/26.jpg',
    'galleries/27.jpg',
    'galleries/28.jpg',
    'galleries/29.jpg',
    'galleries/30.jpg',
    'galleries/31.jpg',
    'galleries/32.jpg',
    'galleries/33.jpg',
    'galleries/34.jpg',
    'galleries/35.jpg',
    'galleries/36.jpg',
    'galleries/37.jpg',
    'galleries/38.jpg',
    'galleries/39.jpg',
    'galleries/40.jpg',
]

const dorms = [
    'dorms/1.jpg',
    'dorms/2.jpg',
    'dorms/3.jpg',
    'dorms/4.jpg',
    'dorms/5.jpg',
    'dorms/6.jpg',
    'dorms/7.jpg',
    'dorms/8.jpg',
]

export { flyers, faculties, programs, howTos, testimonials, galleries, schemes, coverages, requirements, timelines, dorms }