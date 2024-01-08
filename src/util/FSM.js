export function modThree(inputString) {
    const states = ["S0", "S1", "S2"]; // Finite set of states
    const initialState = states[0];
    const inputAlphabet = "01";   // Finite input alphabet
    const transitionArray = {     // State and input mapping in 2D array
        0: [states[0], states[1]], //S0
        1: [states[2], states[0]], //S1
        2: [states[1], states[2]]  //S2
    };
    let currentState = initialState; // Setting initial state 'S0' as current State

    function returnNewState(state, input) {  // Transition Function: state represents currentState 'S0','S1','S3' and input represents either 0 or 1 
        return transitionArray[states.indexOf(state)][inputAlphabet.indexOf(input)];
    }
    for (let i = 0; i < inputString.length; i++) {  //Iterating over input string
        let currentInput = inputString.charAt(i); // Get single digit which is either 1 or 0
        currentState = returnNewState(currentState, currentInput); //Setting newly returned state as currentState
    }
    return {
        state: currentState, // Final State S0 or S1 or S2 
        value: states.indexOf(currentState) // State's value 0 or 1 or 2
    }; 
}