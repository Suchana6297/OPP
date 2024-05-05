
const executeCode = async (language, code) => {
    try {
      const response = await fetch('http://localhost:5000/execute-code', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ language, code }),
      });
      const data = await response.json();
      return data.output;
    } catch (error) {
      console.error('Error executing code:', error);
      return 'An error occurred while executing the code.';
    }
};

export default executeCode;
