
export function fetchEmployeeService() {
    console.log("Hello Fetch : ")
    return new Promise((resolve, reject) => {
      fetch(`http://dummy.restapiexample.com/api/v1/employees`)
        .then(res => {
          return res.json();
        })
        .then(response => {
          
          resolve(response);
        })
        .catch(error => {
          reject(error);
        });
    });
  }
  