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
        originator: 0,
        designer: 0,
        developer: 0,
        manager: 0,
        engineer: 0,
        investigator: 0
    }
    
    if (chosenItems) {

        for (var i = 0; i < chosenItems.length; i++) {
            if (chosenItems[i] === 'phone' || chosenItems[i] === 'map') jobs.originator += 3
            if (chosenItems[i] === 'cds' || chosenItems[i] === 'compass') jobs.designer += 3
            if (chosenItems[i] === 'laptop' || chosenItems[i] === 'books') jobs.developer += 3
            if (chosenItems[i] === 'food' || chosenItems[i] === 'windows') jobs.manager += 3
            if (chosenItems[i] === 'tools' || chosenItems[i] === 'boots') jobs.engineer += 3
            if (chosenItems[i] === 'microscope' || chosenItems[i] === 'flashlight') jobs.investigator += 3
        }
    }

    if (answers) {
        //Scene 8 results
        if (answers['scene8'] === 'A') {
            jobs.originator += 5; 
            qualities.problem_solving += 3

        } else if (answers['scene8'] === 'B') {
            jobs.designer += 5; 
            jobs.manager += 8;
            qualities.interpersonal += 3; 
            qualities.problem_solving += 3;

        } else if (answers['scene8'] === 'C') {
            jobs.investigator += 8; 
            jobs.engineer += 5; 
            qualities.problem_solving += 5;

        }

        //Scene 9 results
        if (answers['scene9'] === 'A') {
            jobs.originator += 3; 
            jobs.engineer += 8; 
            jobs.investigator += 5;
            qualities.problem_solving += 5; 
            qualities.self_management += 5

        } else if (answers['scene9'] === 'B') {
            jobs.designer += 3; 
            qualities.problem_solving += 2; 
            qualities.self_management += 2;

        } else if (answers['scene9'] === 'C') {
            jobs.manager += 5;
            qualities.self_management += 2;

        }

        //Scene 10 results
        if (answers['scene10'] === 'A') {
            jobs.originator += 3; 
            jobs.engineer += 8; 
            jobs.investigator += 5;
            // qualities.interpersonal += 2; 
            qualities.problem_solving += 5; 
            // qualities.creativity += 2; 
            // qualities.analytical += 2;
            qualities.self_management += 5;

        } else if (answers['scene10'] === 'B') {
            jobs.designer += 3; 
            // jobs.engineer += 2; 
            // jobs.investigator += 5;
            qualities.self_management += 2; 
            // qualities.interpersonal += 5; 
            qualities.problem_solving += 2; 
            // qualities.creativity += 5;
            // qualities.analytical += 2;

        } else if (answers['scene10'] === 'C') {
            // jobs.designer += 2; 
            // jobs.engineer += 8; 
            // jobs.investigator += 5;
            jobs.manager += 5;
            qualities.self_management += 2; 
            // qualities.problem_solving += 2; 
            // qualities.analytical += 5;
            
        }

        //Scene 11 results
        if (answers['scene11'] === 'A') {
            // jobs.developer += 3;
            jobs.originator += 3; 
            jobs.engineer += 8; 
            jobs.investigator += 5;
            // qualities.interpersonal += 2; 
            // qualities.collaboration += 2;
            qualities.self_management += 5;
            qualities.problem_solving += 5;

        } else if (answers['scene11'] === 'B') {
            // jobs.engineer += 8;
            jobs.designer += 3;
            qualities.problem_solving += 2;
            qualities.self_management += 2;

        } else if (answers['scene11'] === 'C') {
            // jobs.designer += 8; 
            // jobs.developer += 5; 
            jobs.manager += 5;
            // qualities.interpersonal += 5; 
            // qualities.collaboration += 5;
            // qualities.reflection += 5
            qualities.self_management += 2;
            
        }

        //Scene 12 results
        if (answers['scene12'] === 'A') {
            // jobs.developer += 2; 
            jobs.engineer += 5; 
            // jobs.originator += 5
            qualities.problem_solving += 5;
            qualities.interpersonal += 2;
            qualities.creativity += 2;
            qualities.analytical += 2; 

        } else if (answers['scene12'] === 'B') {
            // jobs.developer += 5; 
            // jobs.engineer += 2;             
            // jobs.originator += 8;
            jobs.designer += 8;
            jobs.investigator += 5;
            qualities.problem_solving += 5; 
            qualities.interpersonal += 2;
            qualities.self_management += 5;
            qualities.creativity += 5;
            qualities.analytical += 2;

        } else if (answers['scene12'] === 'C') {
            // jobs.developer += 8; 
            // jobs.engineer += 5; 
            jobs.manager += 5;
            jobs.originator += 5;
            qualities.problem_solving += 2; 
            qualities.analytical += 5;
            qualities.self_management += 2;
            
        }

        //Scene 13 results
        if (answers['scene13'] === 'A') {
            // jobs.developer += 2; 
            // jobs.manager += 8;
            jobs.engineer += 5; 
            qualities.problem_solving += 5;
            qualities.interpersonal += 2;
            qualities.creativity += 2 
            // qualities.collaboration += 3;
            qualities.analytical += 2;

        } else if (answers['scene13'] === 'B') {
            // jobs.developer += 5; 
            // jobs.manager += 2;
            // jobs.engineer += 8; 
            jobs.designer += 8;
            jobs.investigator += 5;
            qualities.problem_solving += 5;
            qualities.interpersonal  += 5;
            qualities.self_management  += 5;
            qualities.analytical += 2;
            qualities.creativity += 5;
            // qualities.reflection += 2; 

        } else if (answers['scene13'] === 'C') {
            // jobs.developer += 8; 
            jobs.manager += 5;
            // jobs.engineer += 5; 
            jobs.originator += 5
            // qualities.interpersonal += 2; 
            // qualities.reflection += 5;
            qualities.problem_solving += 2;
            qualities.self_management += 2;
            qualities.analytical += 5;
            
        }

        //Scene 14 results
        if (answers['scene14'] === 'A') {
            // jobs.originator += 5; 
            // jobs.developer += 8; 
            // jobs.investigator += 2; 
            jobs.engineer += 5;
            // qualities.self_management += 2; 
            qualities.creativity += 2;
            qualities.analytical += 2;
            qualities.problem_solving += 5;
            qualities.interpersonal += 2;


        } else if (answers['scene14'] === 'B') {
            // jobs.originator += 5; 
            // jobs.developer += 2; 
            jobs.designer += 8;
            jobs.investigator += 5; 
            qualities.self_management += 5; 
            qualities.creativity += 5;
            qualities.analytical += 2;
            qualities.problem_solving += 5;
            qualities.interpersonal += 5;

        } else if (answers['scene14'] === 'C') {
            jobs.originator += 5;
            jobs.manager += 5; 
            // jobs.developer += 3; 
            // jobs.investigator += 3; 
            qualities.self_management += 2;
            qualities.problem_solving += 2;
            qualities.analytical += 5; 
            
        }

        //Scene 15 results
        if (answers['scene15'] === 'A') {
            // jobs.developer += 8; 
            // jobs.engineer += 2; 
            jobs.investigator += 5; 
            qualities.interpersonal += 2; 
            qualities.collaboration += 2;

        } else if (answers['scene15'] === 'B') {
            jobs.engineer += 5; 
            // jobs.investigator += 5; 

        } else if (answers['scene15'] === 'C') {
            // jobs.developer += 5; 
            // jobs.engineer += 2; 
            // jobs.investigator += 8; 
            jobs.originator += 5;
            jobs.designer += 5;
            jobs.manager += 5;
            // qualities.creativity += 5;
            qualities.interpersonal += 5;
            qualities.collaboration += 5;
            qualities.reflection += 5;
            
        }

        //Scene 16 results
        if (answers['scene16'] === 'A') {
            // jobs.originator += 2;  
            // jobs.designer += 2; 
            // jobs.manager += 8;
            jobs.investigator += 5;
            qualities.interpersonal += 2;
            qualities.collaboration += 2;
        

        } else if (answers['scene16'] === 'B') {
            // jobs.originator += 8;  
            // jobs.designer += 5; 
            // jobs.manager += 2;
            jobs.engineer += 5;
            // qualities.self_management += 5; 
            // qualities.analytical += 3;

        } else if (answers['scene16'] === 'C') {
            jobs.originator += 3;  
            jobs.designer += 5; 
            jobs.manager += 5;
            qualities.reflection += 5; 
            // qualities.analytical += 5;
            qualities.interpersonal += 5;
            qualities.collaboration += 5;

            
        }

        //Scene 17 results 12/05/22 added scenes 18-24 today
        if (answers['scene17'] === 'A') {
            // jobs.originator += 5;  
            // jobs.designer += 2; 
            jobs.manager += 5;
            qualities.problem_solving += 5;

        } else if (answers['scene17'] === 'B') {
            jobs.originator += 5;  
            jobs.designer += 5; 
            // jobs.manager += 2;
            // qualities.reflection += 5; 
            // qualities.creativity += 5;
            qualities.problem_solving += 3;
            qualities.analytical += 5;

        } else if (answers['scene17'] === 'C') {
            // jobs.originator += 2;  
            // jobs.designer += 5; 
            // jobs.manager += 8;
            jobs.engineer += 5;
            jobs.investigator += 5
            // qualities.collaboration += 5; 
            // qualities.reflection += 2;
            qualities.problem_solving += 3;
            qualities.analytical += 3; 
            
        }
    }


    
    //returns array of top two keys in qualities object
    var top_qualities = Object.keys(qualities).sort((a, b) => qualities[b] - qualities[a])
    top_qualities = top_qualities.slice(1)

    //returns top key in jobs object
    const top_job = Object.keys(jobs).reduce((a, b) => jobs[a] > jobs[b] ? a : b);


    return res.status(200).json({'attr1': top_qualities[0], 'attr2': top_qualities[1], 'career_rec': top_job})

}
