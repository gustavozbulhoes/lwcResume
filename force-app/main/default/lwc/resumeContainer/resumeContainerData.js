import RESUMEICONS from '@salesforce/resourceUrl/RESUMEICONS'
import gustavo from '@salesforce/resourceUrl/gustavo'

export const PROFILE_IMAGE = gustavo

export const USER_DETAILS={
    NAME:'Gustavo Zanatta Bulhões',
    ROLE:'SALESFORCE ENGINEER',
}

export const EXPERIENCE_DATA={
    TITLE: "Work Experience",
    ICON: "standard:work_contract",
    EXPERIENCES: [
        {
            ROLE: "Salesforce Engineer",
            COMPANY_NAME: "B LAB",
            KEY:"BLAB",
            DURATION: "01/2022 - Currently",
        },
        {
            ROLE: "Salesforce Developer",
            COMPANY_NAME: "Sysmap Solutions",
            KEY:"Sysmap",
            DURATION: "09/2021 - 12/2021",
            DESCRIPTION_POINTS: [
                'Salesforce Developer at "Operadora Claro" project',
            ]
        },
        {
            ROLE: "Salesforce Consultant",
            COMPANY_NAME: "Harpia Cloud",
            KEY:"Harpia",
            DURATION: "03/2019 - 09/2021",
            DESCRIPTION_POINTS: [
                'Salesforce Consultant at "Engie Brasil" project (06 months)',
                'Salesforce Consultant at "XP Investimentos" project (02 years)'
            ]
        },
        {
            ROLE: "Intern",
            COMPANY_NAME: "Amcor",
            KEY:"Amcor",
            DURATION: "05/2018 - 03/2019",
            DESCRIPTION_POINTS: [
                "Break analysis using 8Ds methodology and PDCA cycle",
                "Corrective, Preventive and Planned maintenance planning",
                "Factory structural maintenance planning",
                "Continuous Improvement"
            ]
        }
    ]
}

export const CONTACT_ME={
    TITLE:"Contact me",
    ITEMS:[
        {
            TEXT:"gustavozbulhoes@gmail.com",
            LINK:"mailto:gustavozbulhoes@gmail.com",
            LINK_TARGET:'_self',
            ICON:"utility:email",
            ICON_ALTERNATIVE_TEXT:"email!",
            ICON_TITLE: "email",
            KEY:"PersonEmail"
        },
        {
            TEXT:"+55 19 99316-5155",
            LINK:"tel:5519993165155",
            LINK_TARGET:'_self',
            ICON:"utility:dialing",
            ICON_ALTERNATIVE_TEXT:"dialing!",
            ICON_TITLE: "phone",
            KEY:"PersonPhone"
        },
        {
            TEXT:"linkedin.com/gustavozbulhoes",
            LINK:"https://www.linkedin.com/in/gustavo-zanatta-bulh%C3%B5es-0142b0105/",
            LINK_TARGET:'_blank',
            ICON:"utility:link",
            ICON_ALTERNATIVE_TEXT:"linkedin!",
            ICON_TITLE: "linkedin",
            KEY:"Personlinkedin"
        },
        {
            TEXT:"Brazil, São Paulo - SP",
            ICON:"utility:checkin",
            ICON_ALTERNATIVE_TEXT:"Country!",
            ICON_TITLE: "Country",
            KEY:"Country"
        }
    ]

}

export const EDUCATION = {
    TITLE:"Education",
    ICON:"standard:education",
    ITEMS: [
        {
            LINK:"https://www.international.unesp.br/",
            LINK_TARGET:"_blank",
            University:"Universidade Estadual Paulista (UNESP)",
            Degree:"Bachelor of Electrical Engineering",
            key:"ElectricalEng"
        }
    ]
}

export const SALESFORCE_CERTIFICATIONS = {
    TITLE:"Salesforce Certifications",
    IMG:RESUMEICONS + '/RESUMEICONS/certification.svg',
    ITEMS: [
        "Javascript Developer 1",
        "Marketing Cloud Email Specialist",
        "Platform App Builder", 
        "Platform Developer I",
        "Service Cloud Consultant", 
        "Administrator",
        "Associate"
    ]
}

export const OTHER_CERTIFICATIONS = {
    TITLE:"Other Certifications & Courses",
    IMG:RESUMEICONS + '/RESUMEICONS/course.svg',
    ITEMS: [
        "Udemy Course: Salesforce Integration With External Systems",
        "Udemy Course: Zero to Hero in Lightning Web Components",
        "Udemy Course: Salesforce Lightning Practical Coding Examples",
        "Udemy Course: Salesforce Lightning Component",
        "Udemy Course: Salesforce Certified Administrator Training",
        "Professor Assistant (AIESEC Project)",
        "DINCON Participation",
        "Math and Physics High School Level Teacher (UNESP University Extention Project for 4 years)"
    ]
}

export const TECH_SKILLS = {
    TITLE:"Technical Skills",
    ICON:"standard:connected_apps",
    SKILLS:[
       {
           SUBTITLE: "SALESFORCE",
           KEY:"Salesforce",
           SKILLS:[
            {
                LABEL:"Apex",
                KEY:"Apex"
            },
            {
                LABEL:"Lightning Web Component",
                KEY:"LWC"
            },
            {
                LABEL:"Lightning Component AURA",
                KEY:"AURA"
            },
            {
                LABEL:"Visualforce",
                KEY:"Visualforce"
            },
            {
                LABEL:"WebService",
                KEY:"WebService"
            },
            {
                LABEL:"Process Builder",
                KEY:"PB"
            },
            {
                LABEL:"Flow",
                KEY:"Flow"
            },
            {
                LABEL:"Workflow",
                KEY:"Workflow"
            },
            {
                LABEL:"Assigment Rules",
                KEY:"AssigmentRules"
            },
            {
                LABEL:"Roles and Profiles",
                KEY:"RolesAndProfiles"
            },
            {
                LABEL:"Permission Sets",
                KEY:"PermSet"
            },
            {
                LABEL:"Approval Process",
                KEY:"ApprovalProcess"
            },
            {
                LABEL:"Custom Objects and Fields",
                KEY:"ObjAndFields"
            },
            {
                LABEL:"Lightning App",
                KEY:"LightningApp"
            },
            {
                LABEL:"Lightning Page",
                KEY:"LightningPage"
            },
            {
                LABEL:"Page Layout",
                KEY:"PageLayout"
            },
            {
                LABEL:"Record Types",
                KEY:"RecordTypes"
            },
            {
                LABEL:"Reports",
                KEY:"Reports"
            },
            {
                LABEL:"Dashboards",
                KEY:"Dashboards"
            },
            {
                LABEL:"Chatter",
                KEY:"Chatter"
            },
            {
                LABEL:"Omnichannel",
                KEY:"Omnichannel"
            },
            {
                LABEL:"AppExchange",
                KEY:"AppExchange"
            },
            {
                LABEL:"Live Agent",
                KEY:"LiveAgent"
            },
            {
                LABEL:"Data Migration",
                KEY:"DataMigration"
            },
            {
                LABEL:"Validation Rules",
                KEY:"ValidationRules"
            },
            {
                LABEL:"Vlocity Integration Procedure",
                KEY:"VIP"
            },
            {
                LABEL:"Vlocity Data Raptor",
                KEY:"VDR"
            },
            {
                LABEL:"Vlocity Cards",
                KEY:"VC"
            },
            {
                LABEL:"Messaging",
                KEY:"Messaging"
            },
            {
                LABEL:"Einstein Bot",
                KEY:"EinsteinBot"
            },
            {
                LABEL:"Email-to-Case",
                KEY:"emailtocase"
            },
            {
                LABEL:"Web-to-Case",
                KEY:"webtocase"
            },
            {
                LABEL:"Change Settings",
                KEY:"changeset"
            },
            {
                LABEL:"ANT Migration Tool",
                KEY:"ANT"
            },
            {
                LABEL:"Salesforce CLI",
                KEY:"SFDXCLI"
            },
            {
                LABEL:"Others ...",
                KEY:"Etc"
            },    
           ]
       },
       {
        SUBTITLE: "MARKETING CLOUD",
        KEY:"MarketingCloud",
        SKILLS:[
         {
             LABEL:"Journey Builder",
             KEY:"JB"
         },
         {
             LABEL:"SQL Query",
             KEY:"SQL"
         },
         {
             LABEL:"Data Extention",
             KEY:"DataExtention"
         },
         {
             LABEL:"Automation",
             KEY:"Automation"
         },
         {
             LABEL:"Triggered Send",
             KEY:"TS"
         },
         {
             LABEL:"Transactional Messaging API",
             KEY:"TransactionalAPI"
         },
         {
             LABEL:"Others ...",
             KEY:"Etc"
         }
 
        ]
        },
        {
            SUBTITLE: "OTHERS",
            KEY:"Others",
            SKILLS:[
             {
                 LABEL:"Postman",
                 KEY:"Postman"
             },
             {
                 LABEL:"Visual Studio Code",
                 KEY:"VSCode"
             },
             {
                 LABEL:"Jira",
                 KEY:"Jira"
             },
             {
                 LABEL:"Confluence",
                 KEY:"Confluence"
             },
             {
                 LABEL:"Git",
                 KEY:"Git"
             },
             {
                LABEL:"GitHub",
                KEY:"GitHub"
            },
            {
                LABEL:"GitHub Action",
                KEY:"GitHubAction"
            },
            {
                LABEL:"CI/CD",
                KEY:"CICD"
            },
             {
                LABEL:"Others ...",
                KEY:"Etc"
            }     
            ]
            }
    ]
}