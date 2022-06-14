export const initialState={
    surveyResults: {
        id:0,
        jobtype: 0,
        jobid: 0,
        score: 0,
        completed: false,
        result: false,
        threshold: 0
    },
    
    questions:[{
        id:0,
        text: "What company are you applying to?",
        type: 0,
        placeholder: "Company",
        responses: [{name: "Google", id: 0},{ name:"Meta", id: 1},{ name:"Netflix", id: 2},{ name:"Tesla", id: 3},{ name:"Amazon", id: 4},{ name:"Microsoft", id: 5},{ name:
        "Apple", id: 6},{ name:"SalesForce", id: 7},{ name:"Uber", id: 8},{ name:"Twitter", id: 9},{ name:"Airbnb", id: 10},{ name:
        "Other (Large Company)", id: 13},{ name:"Other(Mid-sized Company)", id: 14},{ name:
        "Other(Startup)", id: 11},{ name:"Unpaid Internship",id:12}],
        response: "",
        answered: false
    },

    {
        id:1,
        text: "What level of position are you applying for?",
        type: 0,
        placeholder: "Position",
        responses:[{name: "Internship", id: 0},{ name:"Junior Dev", id: 1},{ name:"Senior Dev", id: 2},{ name:"Techlead", id: 3},
      ],
        response: "",
        answered: false
    },{
        id:2,
        text: "What school do you attend/have you attended?",
        type:1,
        positive: "MIT, Carnegie Mellon, Stanford, UC Berkely, or Cornell",
        negative: "Other",
        good: false,
        answered: false
    },
    {
        id:8,
        text: "Years of Experience?",
        type: 0,
        placeholder: "None",
        responses:[{name: "0", id: 0},{ name:"1-2", id: 1},{ name:"2-5", id: 2},{ name:"5+", id: 3},
      ],
        response: "",
        answered: false
    },
    {
        id:3,
        text: "Is your Father/Mother the C.E.O.",
        type: 1,
        positive: "Yes",
        negative: "No",
        good: false,
        answered: false
    },
    {
        id:4,
        text: "Do You have a good relationship with Father/Mother?",
        type: 1,
        positive: "Yes",
        negative: "No",
        good: false,
        answered: false
    },
    {
        id:5,
        text: "Did you get a refferal?",
        type: 1,
        positive: "Yes",
        negative: "No",
        good: false,
        answered: false
    },
    {
        id:6,
        text: "How many hackathons have you won?",
        type: 0,
        placeholder: "None",
        responses:[{ name:"None", id:0},{ name:"A few", id: 1},{ name:"Several", id: 2},{ name:"Too many to count", id: 3},
      ],
        response: "",
        answered: false
    },
    {
        id:7,
        text: "Have you completed all of Algoexpert?",
        type: 1,
        positive: "Yes",
        negative: "No",
        good: false,
        answered: false
    },
    
    
]
}