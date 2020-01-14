
export function fetchEmployeeService() {
    console.log("Hello Fetch : ")
    return new Promise((resolve, reject) => {
      fetch(`https://api.dailycaller.com/feed/full/?key=90ac1808fa3e0d0679464da550202a0a&json=yes`)
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
  