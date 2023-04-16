// Initialize employee Object
const employee = {
    name: 'John',
    streetAddress: '123 Main St'
  };
  
  // Function to update employee with key-value pair (non-destructive)
  const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    // Create a new Object with the updated key-value pair using spread operator
    return { ...employee, [key]: value };
  };
  
  // Function to update employee with key-value pair (destructive)
  const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    // Update employee Object with the new key-value pair
    employee[key] = value;
    
    // Return the updated employee Object
    return employee;
  };
  
  // Function to delete key-value pair from employee Object (non-destructive)
  const deleteFromEmployeeByKey = (employee, key) => {
    // Create a new Object without the specified key using spread operator
    const updatedEmployee = { ...employee };
    delete updatedEmployee[key];
    
    
    return updatedEmployee;
  };
  
 
  const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    // Delete the specified key from the employee Object
    delete employee[key];
    
    // Return the updated employee Object
    return employee;
  };
  
