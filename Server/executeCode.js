
const fetch = require('node-fetch');

const executeCode = async (language, code) => {
  try {
    // Define the payload for the request
    const payload = {
      language: language,
      source_code: code,
      args: [],
      stdin: '',
      compile_timeout: 10000, // Optional: adjust compile timeout as needed
      run_timeout: 10000, // Optional: adjust run timeout as needed
    };

    // Make a POST request to the Piston API
    const response = await fetch('https://emkc.org/api/v1/piston/execute', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    // Parse the response JSON
    const data = await response.json();

    // Check if the response indicates success
    if (response.ok) {
      // Return the output
      return data.run.stdout;
    } else {
      // Handle error response
      console.error('Piston API error:', data.message);
      return 'An error occurred while executing the code.';
    }
  } catch (error) {
    // Handle fetch error
    console.error('Error executing code:', error);
    return 'An error occurred while executing the code.';
  }
};

module.exports = executeCode;
