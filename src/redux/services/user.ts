
export function fetchImageService(page?: number, limit?: number) {
  console.log("Hello Fetch : "+page+" : "+limit)
  return new Promise((resolve, reject) => {
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`)
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
