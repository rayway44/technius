import React from 'react'

export default (req, res) => {
    let chosenItems = req.body.chosenItems
    let answers = req.body.answers

    if (!chosenItems || !answers) return null
    
    let qualities = {
        analytical: 0,
        self_management: 0,
        interpersonal: 0,
        problem_solving: 0,
        collaboration: 0,
        reflection: 0,
        creativity: 0
    }

    let jobs = {
        Hustler: 0,
        // originator: 0,
        Creator: 0,
        // designer: 0,
        Coder: 0,
        // developer: 0,
        Boss: 0,
        // manager: 0,
        Doer: 0,
        // engineer: 0,
        Detective: 0
        // investigator: 0
    }
    
    if (chosenItems) {

        for (var i = 0; i < chosenItems.length; i++) {
            if (chosenItems[i] === 'phone' || chosenItems[i] === 'map') jobs.Hustler += 3
            if (chosenItems[i] === 'cds' || chosenItems[i] === 'compass') jobs.Creator += 3
            if (chosenItems[i] === 'laptop' || chosenItems[i] === 'books') jobs.Coder += 3
            if (chosenItems[i] === 'food' || chosenItems[i] === 'windows') jobs.Boss += 3
            if (chosenItems[i] === 'tools' || chosenItems[i] === 'boots') jobs.Doer += 3
            if (chosenItems[i] === 'microscope' || chosenItems[i] === 'flashlight') jobs.Detective += 3
        }
    }

    if (answers) {
        //Scene 8 results
        if (answers['scene8'] === 'A') {
            jobs.Hustler += 5; 
            qualities.problem_solving += 3

        } else if (answers['scene8'] === 'B') {
            jobs.Creator += 5; 
            jobs.Boss += 8;
            qualities.interpersonal += 3; 
            qualities.problem_solving += 3;

        } else if (answers['scene8'] === 'C') {
            jobs.Detective += 8; 
            jobs.Doer += 5; 
            qualities.problem_solving += 5;

        }

        //Scene 9 results
        if (answers['scene9'] === 'A') {
            jobs.Hustler += 3; 
            jobs.Doer += 8; 
            jobs.Detective += 5;
            qualities.problem_solving += 5; 
            qualities.self_management += 5

        } else if (answers['scene9'] === 'B') {
            jobs.Creator += 3; 
            qualities.problem_solving += 2; 
            qualities.self_management += 2;

        } else if (answers['scene9'] === 'C') {
            jobs.Boss += 5;
            qualities.self_management += 2;

        }

        //Scene 10 results
        if (answers['scene10'] === 'A') {
            jobs.Hustler += 3; 
            jobs.Doer += 8; 
            jobs.Detective += 5;
            // qualities.interpersonal += 2; 
            qualities.problem_solving += 5; 
            // qualities.creativity += 2; 
            // qualities.analytical += 2;
            qualities.self_management += 5;

        } else if (answers['scene10'] === 'B') {
            jobs.Creator += 3; 
            // jobs.Doer += 2; 
            // jobs.Detective += 5;
            qualities.self_management += 2; 
            // qualities.interpersonal += 5; 
            qualities.problem_solving += 2; 
            // qualities.creativity += 5;
            // qualities.analytical += 2;

        } else if (answers['scene10'] === 'C') {
            // jobs.Creator += 2; 
            // jobs.Doer += 8; 
            // jobs.Detective += 5;
            jobs.Boss += 5;
            qualities.self_management += 2; 
            // qualities.problem_solving += 2; 
            // qualities.analytical += 5;
            
        }

        //Scene 11 results
        if (answers['scene11'] === 'A') {
            // jobs.Coder += 3;
            jobs.Hustler += 3; 
            jobs.Doer += 8; 
            jobs.Detective += 5;
            // qualities.interpersonal += 2; 
            // qualities.collaboration += 2;
            qualities.self_management += 5;
            qualities.problem_solving += 5;

        } else if (answers['scene11'] === 'B') {
            // jobs.Doer += 8;
            jobs.Creator += 3;
            qualities.problem_solving += 2;
            qualities.self_management += 2;

        } else if (answers['scene11'] === 'C') {
            // jobs.Creator += 8; 
            // jobs.Coder += 5; 
            jobs.Boss += 5;
            // qualities.interpersonal += 5; 
            // qualities.collaboration += 5;
            // qualities.reflection += 5
            qualities.self_management += 2;
            
        }

        //Scene 12 results
        if (answers['scene12'] === 'A') {
            // jobs.Coder += 2; 
            jobs.Doer += 5; 
            // jobs.Hustler += 5
            qualities.problem_solving += 5;
            qualities.interpersonal += 2;
            qualities.creativity += 2;
            qualities.analytical += 2; 

        } else if (answers['scene12'] === 'B') {
            // jobs.Coder += 5; 
            // jobs.Doer += 2;             
            // jobs.Hustler += 8;
            jobs.Creator += 8;
            jobs.Detective += 5;
            qualities.problem_solving += 5; 
            qualities.interpersonal += 2;
            qualities.self_management += 5;
            qualities.creativity += 5;
            qualities.analytical += 2;

        } else if (answers['scene12'] === 'C') {
            // jobs.Coder += 8; 
            // jobs.Doer += 5; 
            jobs.Boss += 5;
            jobs.Hustler += 5;
            qualities.problem_solving += 2; 
            qualities.analytical += 5;
            qualities.self_management += 2;
            
        }

        //Scene 13 results
        if (answers['scene13'] === 'A') {
            // jobs.Coder += 2; 
            // jobs.Boss += 8;
            jobs.Doer += 5; 
            qualities.problem_solving += 5;
            qualities.interpersonal += 2;
            qualities.creativity += 2 
            // qualities.collaboration += 3;
            qualities.analytical += 2;

        } else if (answers['scene13'] === 'B') {
            // jobs.Coder += 5; 
            // jobs.Boss += 2;
            // jobs.Doer += 8; 
            jobs.Creator += 8;
            jobs.Detective += 5;
            qualities.problem_solving += 5;
            qualities.interpersonal  += 5;
            qualities.self_management  += 5;
            qualities.analytical += 2;
            qualities.creativity += 5;
            // qualities.reflection += 2; 

        } else if (answers['scene13'] === 'C') {
            // jobs.Coder += 8; 
            jobs.Boss += 5;
            // jobs.Doer += 5; 
            jobs.Hustler += 5
            // qualities.interpersonal += 2; 
            // qualities.reflection += 5;
            qualities.problem_solving += 2;
            qualities.self_management += 2;
            qualities.analytical += 5;
            
        }

        //Scene 14 results
        if (answers['scene14'] === 'A') {
            // jobs.Hustler += 5; 
            // jobs.Coder += 8; 
            // jobs.Detective += 2; 
            jobs.Doer += 5;
            // qualities.self_management += 2; 
            qualities.creativity += 2;
            qualities.analytical += 2;
            qualities.problem_solving += 5;
            qualities.interpersonal += 2;


        } else if (answers['scene14'] === 'B') {
            // jobs.Hustler += 5; 
            // jobs.Coder += 2; 
            jobs.Creator += 8;
            jobs.Detective += 5; 
            qualities.self_management += 5; 
            qualities.creativity += 5;
            qualities.analytical += 2;
            qualities.problem_solving += 5;
            qualities.interpersonal += 5;

        } else if (answers['scene14'] === 'C') {
            jobs.Hustler += 5;
            jobs.Boss += 5; 
            // jobs.Coder += 3; 
            // jobs.Detective += 3; 
            qualities.self_management += 2;
            qualities.problem_solving += 2;
            qualities.analytical += 5; 
            
        }

        //Scene 15 results
        if (answers['scene15'] === 'A') {
            // jobs.Coder += 8; 
            // jobs.Doer += 2; 
            jobs.Detective += 5; 
            qualities.interpersonal += 2; 
            qualities.collaboration += 2;

        } else if (answers['scene15'] === 'B') {
            jobs.Doer += 5; 
            // jobs.Detective += 5; 

        } else if (answers['scene15'] === 'C') {
            // jobs.Coder += 5; 
            // jobs.Doer += 2; 
            // jobs.Detective += 8; 
            jobs.Hustler += 5;
            jobs.Creator += 5;
            jobs.Boss += 5;
            // qualities.creativity += 5;
            qualities.interpersonal += 5;
            qualities.collaboration += 5;
            qualities.reflection += 5;
            
        }

        //Scene 16 results
        if (answers['scene16'] === 'A') {
            // jobs.Hustler += 2;  
            // jobs.Creator += 2; 
            // jobs.Boss += 8;
            jobs.Detective += 5;
            qualities.interpersonal += 2;
            qualities.collaboration += 2;
        

        } else if (answers['scene16'] === 'B') {
            // jobs.Hustler += 8;  
            // jobs.Creator += 5; 
            // jobs.Boss += 2;
            jobs.Doer += 5;
            // qualities.self_management += 5; 
            // qualities.analytical += 3;

        } else if (answers['scene16'] === 'C') {
            jobs.Hustler += 3;  
            jobs.Creator += 5; 
            jobs.Boss += 5;
            qualities.reflection += 5; 
            // qualities.analytical += 5;
            qualities.interpersonal += 5;
            qualities.collaboration += 5;

            
        }

        //Scene 17 results 12/05/22 added scenes 18-24 today
        if (answers['scene17'] === 'A') {
            // jobs.Hustler += 5;  
            // jobs.Creator += 2; 
            jobs.Boss += 5;
            qualities.problem_solving += 5;

        } else if (answers['scene17'] === 'B') {
            jobs.Hustler += 5;  
            jobs.Creator += 5; 
            // jobs.Boss += 2;
            // qualities.reflection += 5; 
            // qualities.creativity += 5;
            qualities.problem_solving += 3;
            qualities.analytical += 5;

        } else if (answers['scene17'] === 'C') {
            // jobs.Hustler += 2;  
            // jobs.Creator += 5; 
            // jobs.Boss += 8;
            jobs.Doer += 5;
            jobs.Detective += 5
            // qualities.collaboration += 5; 
            // qualities.reflection += 2;
            qualities.problem_solving += 3;
            qualities.analytical += 3; 
            
        }
    }

    if (answers['scene18'] === 'A') { 
        jobs.Boss += 8;
        qualities.interpersonal += 5;
        qualities.collaboration += 3;


    } else if (answers['scene18'] === 'B') {
        jobs.Doer += 5;  
        jobs.administrator += 5; 
        jobs.Detective += 5;
        qualities.reflection += 2; 

    } else if (answers['scene18'] === 'C') {
        jobs.Creator += 5; 
        jobs.Hustler += 5; 
        qualities.reflection += 5; 
        qualities.interpersonal += 2;
    }

    //Scene 19 results
    if (answers['scene19'] === 'A') { 
        jobs.Creator += 5;
        qualities.self_management += 2;
        qualities.creativity += 5;
        qualities.analytical += 3;


    } else if (answers['scene19'] === 'B') {
        jobs.Doer += 5;  
        jobs.Detective += 5;
        qualities.self_management += 2; 
        qualities.creativity += 2; 
        qualities.analytical += 5; 

    } else if (answers['scene19'] === 'C') {
        jobs.Boss += 3; 
        jobs.Hustler += 8; 
        qualities.self_management += 5; 
    }

    //Scene 20 results
    if (answers['scene20'] === 'A') { 
        jobs.Creator += 5;
        qualities.self_management += 2;
        qualities.creativity += 5;
        qualities.analytical += 2;


    } else if (answers['scene20'] === 'B') {
        jobs.Doer += 5;  
        jobs.Detective += 5;
        qualities.self_management += 2; 
        qualities.creativity += 2; 
        qualities.analytical += 5; 

    } else if (answers['scene20'] === 'C') {
        jobs.Boss += 3; 
        jobs.Hustler += 8; 
        qualities.self_management += 5; 
    }

    //Scene 21 results
    if (answers['scene21'] === 'A') { 
        jobs.Creator += 5;
        qualities.self_management += 2;
        qualities.creativity += 5;
        qualities.analytical += 2;


    } else if (answers['scene21'] === 'B') {
        jobs.Doer += 5;  
        jobs.Detective += 5;
        qualities.self_management += 2; 
        qualities.creativity += 2; 
        qualities.analytical += 5; 

    } else if (answers['scene21'] === 'C') {
        jobs.Hustler += 8; 
        jobs.Boss += 3; 
        qualities.self_management += 5; 
    }

    //Scene 22 results
    if (answers['scene22'] === 'A') { 
        jobs.Hustler += 5;
        jobs.Boss += 5;
        qualities.interpersonal += 5;
        qualities.collaboration += 5;


    } else if (answers['scene22'] === 'B') {
        jobs.Doer += 5;  
        jobs.Detective += 5;


    } else if (answers['scene22'] === 'C') {
        jobs.Creator += 8; 
        qualities.creativity += 5; 
    }

    //Scene 23 results
    if (answers['scene23'] === 'A') {
        jobs.Boss += 5;


    } else if (answers['scene23'] === 'B') {
        jobs.Creator += 5;
        qualities.self_management += 5;  
        qualities.analytical += 3;


    } else if (answers['scene23'] === 'C') {
        jobs.Doer += 5; 
        jobs.Detective += 5; 
        qualities.analytical += 5; 
        qualities.reflection += 5; 
    }

    //Scene 24 results
    if (answers['scene24'] === 'A') {
        jobs.Doer += 3;
        jobs.Detective += 3;


    } else if (answers['scene24'] === 'B') {
        jobs.Creator += 5;
        qualities.creativity += 5;  
        qualities.reflection += 5;


    } else if (answers['scene24'] === 'C') {
        jobs.Hustler += 5; 
        jobs.Boss += 5; 
        qualities.collaboration += 5; 
        qualities.reflection += 2; 
    }
    
    
    //returns array of top two keys in qualities object
    var top_qualities = Object.keys(qualities).sort((a, b) => qualities[b] - qualities[a])
    top_qualities = top_qualities.slice(1)

    //returns top key in jobs object
    const top_job = Object.keys(jobs).reduce((a, b) => jobs[a] > jobs[b] ? a : b);

    return res.status(200).json({'attr1': top_qualities[0], 'attr2': top_qualities[1], 'career_rec': top_job})

}
