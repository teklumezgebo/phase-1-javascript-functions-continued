// code your solution here

function saturdayFun(acitivity = 'roller-skate') {
    return 'This Saturday, I want to ' + acitivity + '!'
}

function mondayWork(work = 'go to the office') {
    return 'This Monday, I will ' + work + '.'
}

function wrapAdjective(special = '*'){
    return function(statement){
        return 'You are ' + special + statement + special + '!'
    }
}